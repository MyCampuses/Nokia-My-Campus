/*
    This function holds all the widgets for the app
    like Homepage 
*/
import React, { Fragment, useState, useEffect } from 'react';
import { Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardContent  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';
import PropTypes from 'prop-types';
import ProgressBarFragments from '../fragments/ProgressBarFragments';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import LocalStorageOperations from '../hooks/LocalStorageOperations';

const Widgets = (props) => {
    const classes = WidgetStyle().widgetStyle();
    const {ProgressBar} = ProgressBarFragments();
    const {getUsageData} = API();
    const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();
    const {create, read} = LocalStorageOperations();


    // States
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
  },[]); //eslint-disable-line

  
  /*
  barWidgets is the list which will be presented for SelectViewDialog and HomepageWidget.
  This list is supposed to contain all widgets that are shown on the list when clicking the '+' symbol
  */
  const barWidgets = [
    {navigationUrl: '/restaurant', barLabel: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData},
    {navigationUrl: '/p5', barLabel: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data},
    {navigationUrl: '/p10', barLabel: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data},
    {navigationUrl: '/p10', barLabel: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData},
    {navigationUrl: '/p10', barLabel: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData},
  ];

  // This list contains only one picture, the symbol '+'
  const defaultWidgetPicture = [
      require('../assets/plus_sign.png')
    ];
  
    // Creates a item of every widget for the Dialog on front page
    const SelectViewDialog = (props) => {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
       };
   
       const handleListItemClick = (value) => {
           onClose(value);
       };

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">{strings.dialogTitle}</DialogTitle>
                <List>
                    {barWidgets.map((barWidget) => (
                        <ListItem button onClick={() => handleListItemClick(barWidget)} key={barWidget}>

                            <ListItemText secondary={barWidget.barLabel} />

                        </ListItem>
                    ))};
                </List>
            </Dialog>
        );
    };

    //Handling selecViewDialogs' closing, opening and saves the selected value
    SelectViewDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired,
      };

    /*
        The HomepageWidget gets a default value of selectedValue, which is a state,
        the default value of the state will be first on the barWidgets list which is at the start of the code
        the default value should be plus_sign.png from src/assets folder so the first time users know
        they can add something to the front page
    */
    const HomepageWidget = () => {
        const [selectedWidgets, addSelectedWidgets] = useState([]);
        const [selectedValue, setSelectedValue] = useState(defaultWidgetPicture);
        const [open, setOpen] = useState(false);
        const key = 'widgets';

            
        
        const handleClickOpen = () => {
            setOpen(true);
          };
        
          //Closes the dialog window and saves the value in selectedwidgets array
        const handleClose = (value) => {       
            setOpen(false);
            if(barWidgets.includes(value)){
                setSelectedValue(value);
                addSelectedWidgets(selectedWidgets.concat(value));
            };
          };

        useEffect(() => {   
            const localData = read(key);       
            if(localData) {
                addSelectedWidgets(localData);
            } else {
                addSelectedWidgets([]);
            }
        }, []);

        useEffect(() => {
            create(JSON.stringify(selectedWidgets), key)
        }, [selectedWidgets]);
        
        
        /*
        The returned fragment is here, it get the values from above function SelectViewDialog
        the returned value depends on the length of selectedWidgets array and what state selectedValue has
        with .map one can forEach every array element, which is why the fragment returns as many widgets
        as are saved onto selectedWidgets state
        */
       if(selectedWidgets.length === 0) {
        return (
            <Fragment>
                <Card className={classes.card} onClick={handleClickOpen}>
                    <CardContent>
                        <img className={classes.plus} src={defaultWidgetPicture} alt='placeholder'/>
                    </CardContent>
                </Card>
                <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Fragment>
        )
       }  else if (selectedWidgets.length < 3 & selectedWidgets.length > 0) {
        return (
            <Fragment>
                {selectedWidgets.map((selectedWidget) => (
                    <Card className={classes.card} onClick={handleClickOpen}>
                        <CardContent>
                            {ProgressBar(selectedWidget)}
                        </CardContent>
                    </Card>
                ))};

                <Card className={classes.card} onClick={handleClickOpen}>
                    <CardContent>
                        <img className={classes.plus} src={defaultWidgetPicture} alt='placeholder'/>
                    </CardContent>
                </Card>
                <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Fragment>
        )} else {
            return (
            <Fragment>
                {selectedWidgets.map((selectedWidget) => (
                    <Card className={classes.card} onClick={handleClickOpen}>
                        <CardContent>
                            {ProgressBar(selectedWidget)}
                        </CardContent>
                    </Card>
                ))};
            </Fragment>
            )};
    };

    return {
        HomepageWidget: HomepageWidget
        };
};

export default Widgets;
