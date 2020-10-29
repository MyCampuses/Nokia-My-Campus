/*
    This function holds all the widgets for the app
    like Homepage 
*/
import React, { Fragment } from 'react';
import { Card, Dialog  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';

const Widgets = (props) => {
    const classes = WidgetStyle().widgetStyle();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
         onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    

    const selectViewDialog = () => {
        

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

            </Dialog>
        );
    };

    //Default homepage widget view
    const HomepageWidget = () => {

        return (
            <Fragment>
                <Card className={classes.card}>
                    <img src={require('../assets/plus_sign.png')}
                        alt={strings.logoAlt} className={classes.logo}
                    />
                </Card>
            </Fragment>
        )
    };

    return {
        HomepageWidget: HomepageWidget
        };
};

export default Widgets;
