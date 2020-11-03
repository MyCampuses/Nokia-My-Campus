/*
    This function holds all the widgets for the app
    like Homepage 
*/
import React, { Fragment, useState } from 'react';
import { Card, Dialog, DialogTitle, List, ListItem, ListItemText  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';
import PropTypes from 'prop-types';

const Widgets = (props) => {
    const widgetElements = ['restaurant', 'tuuttuut', 'testing3']
    const classes = WidgetStyle().widgetStyle();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
         onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    

    const SelectViewDialog = () => {
        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">localization.dialogTitel</DialogTitle>
                <List>
                    {widgetElements.map((widgetElements) => (
                        <ListItem button onClick={() => handleListItemClick(widgetElements)} key={widgetElements}>
                            <ListItemText primary={widgetElements}/>
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
        const [open, setOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState(widgetElements[1]);

        const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = (value) => {
            setOpen(false);
          //  setSelectedValue(value);
          };

        return (
            <Fragment>
                <Card className={classes.card} onClick={handleClickOpen}>
                    <img src={require('../assets/plus_sign.png')}
                        alt={strings.logoAlt} className={classes.logo}
                    />
                    <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                </Card>
            </Fragment>
        )
    };

    return {
        HomepageWidget: HomepageWidget
        };
};

export default Widgets;
