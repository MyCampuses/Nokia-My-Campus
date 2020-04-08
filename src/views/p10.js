/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from "react";
import p10Styles from '../styles/p10Styles'
import commonStyles from "../styles/commonStyles";
import '../styles/App.css';
import '../styles/p10Style.css'
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from '@material-ui/core/Box';
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import NaviBar from "../fragments/topNavigationbar";
import Authentication from '../hooks/Authentication';
import strings from '../localization';
import ApiUrls from "../hooks/ApiUrls";
import API from "../hooks/ApiHooks";
import AuthLoading from "./authLoading";

function TabFragmentHistory(props) {
    const {children, value, index, ...other} = props;
    const [selectedDate, setSelectedDate] = useState(new Date(2020, 4, 2));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    /*eslint-disable */
    return (
        <div
            role="tabfragment"
            hidden={value !== index}
            id={`tabfragment-${index}`}
            aria-labelledby={`tab-${index}`}
            inputStyle={{textAlign: 'center'}}
            {...other}>
            <Typography>
                {value === index && <Box p={5}>{children}</Box>}
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="dialog date picker"
                    label="Date picker"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}

function TabFragmentLive(props) {
    const {children, value, index, ...other} = props;
    const {parkingP10Url, parkingP10TopUrl} = ApiUrls();
    const {getUsageData} = API();
    const [parkingP10Data, setParking10Data] = useState(undefined);
    const [parkingP10TopData, setParkingP10TopData] = useState(undefined);

    //Set p10 fetched data
    useEffect(() => {
        getUsageData(parkingP10Url, props)
            .then(result => setParking10Data(result.percent));
        getUsageData(parkingP10TopUrl, props)
            .then(result => setParkingP10TopData(result.percent));
    }, []);// eslint-disable-line


    return (
        <div
            component="div"
            role="tabfragmentlive"
            hidden={value !== index}
            id={`tabfragmentlive-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            <Typography>
                {value === index && <Box p={5}>{children}</Box>}
            </Typography>
            <Typography variant="h7">
                Inside Levels
            </Typography>
            <ProgeBar variant="determinate" value={parkingP10Data}>
            </ProgeBar>
            <Typography variant="h7">
                Rooftop Levels
            </Typography>
            <ProgeBar variant="determinate" value={parkingP10TopData}>
            </ProgeBar>
            <Typography variant="h7">
                Rooftop electric places (est.)
            </Typography>
            <ProgeBar variant="determinate" value={4}>
            </ProgeBar>
        </div>
    );
}

/*eslint-enable */
//'bar' is the values that are given in the <ProgeBar>
function ProgeBar(bar) {
    const classes = p10Styles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0} justify="space-between">
                <Grid item xs={12} spacing={0}>
                    <div className={classes.progressLabel}>
                        <span>{bar.value}%</span>
                    </div>
                    <UtilLinearProgress variant="determinate" value={bar.value}/>
                </Grid>
            </Grid>
        </div>
    )
}

const UtilLinearProgress = withStyles({
    root: {
        height: 50,
        width: "90%",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "1em",
        backgroundColor: "white",
    },
    bar: {
        backgroundColor: "#DAEDFB"
    }
})(LinearProgress);

const P10 = () => {
    const p10classes = p10Styles();
    const commonClasses = commonStyles();
    const [value, setValue] = React.useState(0);
    const { isLoggedIn} = Authentication();


    const {TopNavigationBar} = NaviBar();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const P10Page = () =>{
        return (
            <div component="main" maxWidth="lg" id="mainContainer">
                <div>
                    {TopNavigationBar()}
                </div>
                <div className="p10">
                    <Typography className={p10classes.p10title} component="h1"
                                variant="h5">{strings.p10PageTitle
                    }</Typography>
                </div>
                <TabFragmentLive value={value} index={0}>
                </TabFragmentLive>
                <TabFragmentHistory value={value} index={1}>
                </TabFragmentHistory>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    className={commonClasses.bottomTabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                >
                    <Tab id="live" label={strings.live}/>
                    <Tab id="history" label={strings.history}/>
                </Tabs>
            </div>
        );
    };
    const AuthP10 = () =>{
        if (isLoggedIn()){
            return <P10Page/>
        } else {
            return <AuthLoading/>
        }
    }

    return(
        <AuthP10/>
    )

};

export default P10
