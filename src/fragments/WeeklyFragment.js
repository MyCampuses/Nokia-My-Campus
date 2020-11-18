
import React, {Fragment, useEffect, useState} from 'react';
import { Box, makeStyles, Container, Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardContent  } from '@material-ui/core';
import API from '../hooks/ApiHooks';
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
    MenuContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
    },
    DialogContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingBottom: "3%",
    },
    WeeklyContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
        paddingTop: "5%",
    },
    overStyle: {
        height:"100%",
        width:"100%",
        fontSize:"3vw",
    },
    menuStyle: {
        color: "black",
        height:"100%",
        width:"100%",
        fontSize:"3vw",
    },
    waitStyle: {
        width:"25%",
        height: "100%",
        fontSize:"3vw",
    },
    TopP: {
        color: "#124191",
        textAlign: "left",
    },
    Card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "5px",
    },
    mItem:{
        width: "50%",
        paddingLeft: "3%",
        position: "relative",
        display: "inline-block",
    },
    mInfo: {
        width: "50%",
        position: "relative",
        display: "inline-block",
    },
    mProperties:{
        textAlign: "right",
        paddingRight: "5%"
    },
    properties: {
        color: "red",
    },
    stripe: {
        width: "5%",
    },
    rightInfo: {
        color: "#969696",
        width: "50%",
        textAlign: "right",
    },
    leftInfo: {
        color: "#969696",
        width: "50%",
        textAlign: "left",
    },
}));

const WeeklyFragment = () => {
    const {menuByWeek} = API();
    const classes = useStyle();


    const DialogF = (props) => {

        const {selectedValue, onClose, open} = props;

        const handleClose = () => {
            onClose();
        };

        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open} onClick={handleClose}>
                <Box className={classes.DialogContainer}>

                    <h3>
                        {selectedValue.date}
                    </h3>

                    {(Object.keys(selectedValue.courses) || []).map(key => (

                        <div key={key} >
                            <p className={classes.TopP}>
                                {selectedValue.courses[key].category}
                            </p>
                                <Grid container direction="row" className={classes.overStyle}>

                                    <Grid item container direction="column" className={classes.menuStyle}>

                                        <Grid item>

                                            <Grid item className={classes.Card}>
                                                <Grid container direction="row">
                                                    <Grid item className={classes.mItem}>
                                                        <p>
                                                            {selectedValue.courses[key].title_fi}
                                                        </p>
                                                    </Grid>
                                                    <Grid item className={classes.mInfo}>
                                                        <p className={classes.mProperties}>
                                                            <p className={classes.properties}>
                                                                {selectedValue.courses[key].properties}
                                                            </p>
                                                            <p>
                                                                {selectedValue.courses[key].price}
                                                            </p>
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                                ))}
                </Box>
            </Dialog>
        );
    };


        DialogF.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired,
    };

    const Week = (props) => {

        const [open, setOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState({
            date: "Funday",
            courses: {
                1:{
                    title_fi: "",
                    title_en: "",
                    category: "",
                    price: "",
                    properties: "",
                },
            },
        },);
        const [temp, setTemp] = useState({
            timeperiod: "11.11. - 22.22.",
            mealdates: [
                {
                date: "Funday",
                courses: {
                    1:{
                        title_fi: "",
                        title_en: "",
                        category: "",
                        price: "",
                        properties: "",
                    },
                },
            },
                {
                    date: "Funday",
                    courses: {
                        1:{
                            title_fi: "",
                            title_en: "",
                            category: "",
                            price: "",
                            properties: "",
                        },
                    },
                },
            ]
        });

        const [dataForRender, setDataForRender] = useState({
            timeperiod: "11.11. - 22.22.",
            mealdates: [
                {
                date: "Funday",
                courses: {
                    1:{
                        title_fi: "",
                        title_en: "",
                        category: "",
                        price: "",
                        properties: "",
                    },
                },
            },
                {
                    date: "Funday",
                    courses: {
                        1:{
                            title_fi: "",
                            title_en: "",
                            category: "",
                            price: "",
                            properties: "",
                        },
                    },
                },
            ]
        });

        const handleClickOpen = (value) => {
            setOpen(true);
            setSelectedValue(value)
        };

        const handleClickClose = () => {
            setOpen(false);
        };

        useEffect(() => {
            menuByWeek()
                .then(json => setTemp(json));
        }, [props]);

        useEffect(() => {
            //eslint-disable-line
            setDataForRender(temp);
        }, [temp]);

        useEffect(() => {

        }, []);

        return (
            <Fragment>
                <h3>
                    Weekly menu
                </h3>
                <Container className={classes.MenuContainer}>
                    <Box className={classes.menuContainer}>

                        {dataForRender.mealdates.map(key => (
                            <div key={key} onClick={() => handleClickOpen(key)}>

                                <Grid item container direction="column" className={classes.WeeklyContainer}>

                                    <Grid item>

                                        <Grid item className={classes.Card}>

                                            <Grid container direction="row">

                                                <Grid item className={classes.mItem}>

                                                    <p className={classes.TopP}>
                                                        {key.date}
                                                    </p>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </Box>
                </Container>
                <DialogF selectedValue={selectedValue} open={open}
                         onClose={handleClickClose}/>
            </Fragment>
        );
    };
    return {
        Week: Week,
    };
};

export default WeeklyFragment;