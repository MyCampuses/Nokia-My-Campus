/*
    This function holds all the widgets for the app
    like Homepage 
*/
import React, { Fragment, useState } from 'react';
import { Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardHeader  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';
import PropTypes from 'prop-types';

const Widgets = () => {
    const widgetElements = ['Restaurant', 'Tuuttuut', 'Testing3']
    const classes = WidgetStyle().widgetStyle();

    // Creates a item of every widget for the Dialog on front page
    const SelectViewDialog = (props) => {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
       };
   
       const handleListItemClick = (value) => {
           onClose(value);
       };
       console.log(widgetElements)
        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">{strings.dialogTitel}</DialogTitle>
                <List>
                    {widgetElements.map((widgetElement) => (
                        <ListItem button onClick={() => handleListItemClick(widgetElement)} key={widgetElement}>

                            <ListItemText secondary={widgetElement} />

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

    //Default homepage widget view
    const HomepageWidget = () => {
        const [selectedValue, setSelectedValue] = useState(widgetElements[1]);
        const [open, setOpen] = useState(false); 

        const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = (value) => {
            setOpen(false);
            setSelectedValue(value);
          };

        return (
            <Fragment>
                <Card className={classes.card} onClick={handleClickOpen}>
                    <CardHeader
                        titel={selectedValue}
                    />
                    <img src={require('../assets/plus_sign.png')}
                        alt={strings.logoAlt} className={classes.logo}
                    />
                </Card>
                <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Fragment>
        )
    };

    return {
        HomepageWidget: HomepageWidget
        };
};

export default Widgets;
