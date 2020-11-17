
import React, {Fragment, useEffect, useState} from 'react';
import { Box, makeStyles, Container, Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardContent  } from '@material-ui/core';
import API from '../hooks/ApiHooks';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import log from "d3-scale/src/log";

const useStyle = makeStyles((theme) => ({
    MenuContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
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

        const {onClose, open, data} = props;

        const handleClose = () => {
            onClose();
        };

        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open} onClick={handleClose}>
                <Box className={classes.menuContainer}>

                    {data.map(course => (
                        <div key={course} >

                            <h3>
                                {course.date}
                            </h3>

                            {(Object.keys(course.courses) || []).map(key => (

                            <div key={key} >

                            <p className={classes.TopP}>
                                {course.courses[key].category}
                            </p>
                                <Grid container direction="row" className={classes.overStyle}>

                                    <Grid item container direction="column" className={classes.menuStyle}>

                                        <Grid item>

                                            <Grid item className={classes.Card}>
                                                <Grid container direction="row">
                                                    <Grid item className={classes.mItem}>
                                                        <p>
                                                            {course.courses[key].title_fi}
                                                        </p>
                                                    </Grid>
                                                    <Grid item className={classes.mInfo}>
                                                        <p>
                                                            <p className={classes.properties}>
                                                                {course.courses[key].properties}
                                                            </p>
                                                            <p>
                                                                {course.courses[key].price}
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

        const [selectedValue, setSelectedValue] = useState();
        const [open, setOpen] = useState(false);
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

        const handleClickOpen = () => {
            setOpen(true);
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
                            <div key={key} onClick={handleClickOpen}>

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

                                <DialogF selectedValue={selectedValue} open={open}
                                         onClose={handleClickClose} data={dataForRender.mealdates}/>
                            </div>
                        ))}
                    </Box>
                </Container>
            </Fragment>
        );
    };
    return {
        Week: Week,
    };
};

export default WeeklyFragment;