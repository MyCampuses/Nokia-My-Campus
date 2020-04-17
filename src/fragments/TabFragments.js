import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import ChartFragment from "./ChartFragments";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import {ThemeProvider, Container} from "@material-ui/core";
import strings from "../localization";
import ProgressBarStyle from "../styles/progressBarStyle";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
const {parkingP5Url} = ApiUrls();


const TabFragments = (props) => {
    const {P5Chart, P10Chart} = ChartFragment();
    const {ProgressBar} = ProgressBarFragments();
    const {P5P10ProgressBar} = ProgressBarStyle()

    function TabFragmentLive(props) {
        const {children, value, index, ...other} = props;
        const {parkingP10Url, parkingP10TopUrl} = ApiUrls();
        const {getUsageData} = API();
        const [parkingP10Data, setParking10Data] = useState(undefined);
        const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
        const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
        const multiplier = 2;

        useEffect(()=>{
            getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
            getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
        },[]);  //eslint-disable-line

        //Set p10 fetched data
        const p10insideData = {navigationUrl: undefined, barLabel: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data};
        const p10roofData = {navigationUrl: undefined, barLabel: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData};
        const p10electicData = {navigationUrl: undefined, barLabel: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData};

        return (
            <ThemeProvider theme={P5P10ProgressBar}>
                <Container>
                    <div
                        component="div"
                        role="tabfragmentlive" //eslint-disable-line
                        hidden={value !== index}
                        id={`tabfragmentlive-${index}`}
                        aria-labelledby={`tab-${index}`}
                        {...other}>
                        <Grid container spacing={1}
                              justify="space-between">
                            {ProgressBar(p10insideData)}
                            {ProgressBar(p10roofData)}
                            {ProgressBar(p10electicData)}
                        </Grid>

                    </div>
                </Container>
            </ThemeProvider>
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
        const {getUsageData} = API();

        const [parkingP5Data, setParkingP5Data] = useState(undefined);

        useEffect(()=>{
            getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
        },[parkingP5Data]);

        const barData = {
            navigationUrl: undefined,
            barLabel: '',
            utilization: strings.liveUtilization,
            data: parkingP5Data
        };
        return (
            <div
                hidden={value !== index}>
                <Container>
                    <h1>{strings.insideLevelsP5}</h1>
                    <Grid>{ProgressBar(barData)}</Grid>
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

