/*
    This function holds all the widgets for the app
    like Homepage 
*/

import React, { Fragment, useState, useEffect } from 'react';
import { Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardContent  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';
import PropTypes from 'prop-types';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/WidgetActions';
import WidgetFunctions from '../widgets/WidgetFunctions'

const Widgets = (props) => {
    const classes = WidgetStyle().widgetStyle();
    const {getUsageData} = API();
    const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();

    // States
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2.1;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result));
    getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props).then(result => setParking10Data(result));
    getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result); setParkingP10ElectricData({count: Math.min(98, Math.floor(result.count * multiplier)), capacity: 98})});
  }, []); //eslint-disable-line

  /*
  widgets is the list which will be presented for SelectViewDialog and HomepageWidget.
  This list is supposed to contain all widgets that are shown on the list when clicking the '+' symbol
  */
  const widgets = [
    {navigationUrl: '/restaurant', label: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData, dataType: 'progressBar'},
    {label: strings.p5inside, dataType: 'parking', zone: 'P5', data: parkingP5Data},
    {label: strings.p10inside, dataType: 'parking', zone: 'P10', data: parkingP10Data},
	{label: strings.p10rooftop, dataType: 'parking', zone: 'P10TOP', data: parkingP10TopData},
    {label: strings.p10electric, dataType: 'parking', zone: 'P10EV', data: parkingP10ElectricData},
    {label: strings.newspage, dataType: 'news'}
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
                    {widgets.map((widget) => (
                        <ListItem button onClick={() => handleListItemClick(widget)} key={widget}>
                            <ListItemText secondary={widget.label} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        );
    };

    //Handling selecViewDialogs' closing, opening and saves the selected value
    SelectViewDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired
      };

    /*
        The HomepageWidget gets a default value of selectedValue, which is a state,
        the default value of the state will be first on the widgets list which is at the start of the code
        the default value should be plus_sign.png from src/assets folder so the first time users know
        they can add something to the front page
    */
    const HomepageWidget = () => {
        const [selectedValue, setSelectedValue] = useState(defaultWidgetPicture);
        const [open, setOpen] = useState(false);

        const selectedWidgets = useSelector(state => state.WidgetReducer);
        
        const dispatch = useDispatch();

        const handleClickOpen = () => {
            setOpen(true);
          };
        
          //Closes the dialog window and saves the value in selectedwidgets array
        const handleClose = (value) => {       
            setOpen(false);
            if(widgets.includes(value)){
                setSelectedValue(value);
                dispatch(increment(value));
            };
          };

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
       }  else if (selectedWidgets.length < 3 && selectedWidgets.length > 0) {
        return (
            <Fragment>
                {selectedWidgets.map((selectedWidget) => (
                    <Card className={classes.card} onClick={handleClickOpen}>
                        <CardContent>
                            {WidgetFunctions(selectedWidget)}
                        </CardContent>
                    </Card>
                ))}

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
                            {WidgetFunctions(selectedWidget)}
                        </CardContent>
                    </Card>
                ))}
            </Fragment>
            )}
    };

    return {
        HomepageWidget
        };
};

export default Widgets;