import React, {useEffect, useState} from "react";
import p10Styles from "../styles/p10Styles";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
import Typography from "@material-ui/core/Typography";
import strings from "../localization";
import ChartFragment from "./ChartFragments";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Container} from "@material-ui/core";
import ProgressBarFragments from "./ProgressBarFragments";

//'bar' are the values that are inserted into <ProgeBar>
//ProgeBar is only temporary while fragment is being worked on
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
    );
}

const UtilLinearProgress = withStyles({
    root: {
        height: 50,
        width: '90%',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '1em',
        backgroundColor: 'white',
    },
    bar: {
        backgroundColor: '#DAEDFB',
    },
})(LinearProgress);

const TabFragments = (props) => {
    const {P5Chart, P10Chart} = ChartFragment();
    const {P5ProgressBar} = ProgressBarFragments();

    function TabFragmentLive(props) {
        const {children, value, index, ...other} = props;
        const {parkingP10Url, parkingP10TopUrl} = ApiUrls();
        const {getUsageData} = API();
        const [parkingP10Data, setParking10Data] = useState(undefined);
        const [parkingP10TopData, setParkingP10TopData] = useState(undefined);

        //Set p10 fetched data
        useEffect(() => {
            getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
            getUsageData(parkingP10TopUrl, props).then(result => setParkingP10TopData(result.percent));
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
                    {strings.insideLevels}
                </Typography>
                <ProgeBar variant="determinate" value={parkingP10Data}>
                </ProgeBar>
                <Typography>
                    {strings.roofTopLevels}
                </Typography>
                <ProgeBar variant="determinate" value={parkingP10TopData}>
                </ProgeBar>
                <Typography>
                    {strings.roofTopElectricPlaces}
                </Typography>
                <ProgeBar variant="determinate" value={4}>
                </ProgeBar>
            </div>
        );
    }

    function TabFragmentHistory(props) {
        const {children, value, index, ...other} = props;
        const [selectedDate, setSelectedDate] = useState(new Date(props.date));

        const handleDateChange = date => {
            setSelectedDate(date);
            props.onDateChange(date);
        };
        /*eslint-disable */
        return (
            <div
                role="tabfragment"
                hidden={value !== index}
                id={`tabfragment-${index}`}
                aria-labelledby={`tab-${index}`}
                inputstyle={{textAlign: 'center'}}
                {...other}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="dialog date picker"
                        label="Date picker"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        disableFuture={true}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <P10Chart date={selectedDate}/>
            </div>
        );
    }

    function TabFragmentLiveP5(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                hidden={value !== index}>
                <Container>
                    <h1>{strings.insideLevelsP5}</h1>
                    <Grid>{P5ProgressBar()}</Grid>
                </Container>
                <Grid>
                    <P5Chart date={new Date()}/>
                </Grid>
            </div>
        );
    }

    function TabFragmentHistoryP5(props) {
        const {children, value, index, ...other} = props;
        const [selectedDate, setSelectedDate] = useState(new Date(props.date));

        const handleDateChange = date => {
            setSelectedDate(date);
            props.onDateChange(date);
        };

        return (
            <div
                role="tabfragment"
                hidden={value !== index}
                id={`tabfragment-${index}`}
                aria-labelledby={`tab-${index}`}
                inputstyle={{textAlign: 'center'}}
                {...other}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="dialog date picker"
                        label="Date picker"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        disableFuture={true}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <P5Chart date={selectedDate}/>
            </div>
        );
    }

    return {
        TabFragmentHistory: TabFragmentHistory,
        TabFragmentLive: TabFragmentLive,
        TabFragmentLiveP5: TabFragmentLiveP5,
        TabFragmentHistoryP5: TabFragmentHistoryP5,
    };

};

export default TabFragments;

