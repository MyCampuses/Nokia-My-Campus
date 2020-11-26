/*
    This file contains the bottom tab fragments that can be found in P10,P5 and Restaurant pages.
    Each components have a bit more explanation what they are.
*/

import React, { useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import ChartFragment from "./ChartFragments";
import DonutFragment from "./DonutFragment";
import MenuFragment from "./MenuFragment";
import WeeklyFragment from "./WeeklyFragment";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import {Container, createMuiTheme, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import strings from "../localization";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
import MenuItem from "@material-ui/core/MenuItem";
import blue from '@material-ui/core/colors/blue';
import {ThemeProvider} from '@material-ui/core';

const {parkingP5Url} = ApiUrls();

const TabFragments = (props) => {
    const {Chart} = ChartFragment();
    const {Donut} = DonutFragment();
    const {Menu} = MenuFragment();
    const {Week} = WeeklyFragment();
    const p5Loc = 'P5/';
    const {ProgressBar} = ProgressBarFragments();

    const DatePickerTheme = createMuiTheme({
        MuiTypography: {
            body1: {
                color: "black"
            }
        },
    });

    const colorB = blue[500];
    // this style is used to make small tweaks to the progress bars and their labels
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        headLine: {
            marginTop: '10px',
            marginBottom: '10px',
            color: colorB,
        },
        progressLabel: {
            position: 'absolute',
            zIndex: 1,
            maxHeight: '100px',
            height: '8h',
            maxWidth: '1152px',
            width: '90%',
        },
        labelLocation: {
            maxHeight: '100px',
            height: '7vh',
            justifyContent: 'flex-start',
            paddingLeft: "5px"
        },
    }));
    const barTheme = useStyles();

    // Renders the P10 Live page with rooftop(electric), rooftop and inside progress bars
    function TabFragmentLive(props) {
        const {children, value, index, ...other} = props;
        const {parkingP10Url, parkingP10TopUrl} = ApiUrls();
        const {getUsageData} = API();
        const [parkingP10Data, setParking10Data] = useState(undefined);
        const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
        const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
        const multiplier = 2.1; // This is used in the estimation because about half of the rooftop is electric places.
        // Fetches data for the progress bars and sets the,
        useEffect(() => {
            getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
            getUsageData(parkingP10TopUrl, props).then((result) => {
                setParkingP10TopData(result.percent);
                setParkingP10ElectricData(result.percent * multiplier)
            });
        }, []);  //eslint-disable-line

        // ProgressBars take a json as a parameter that contains navigation url(undefined means no navigation from the click)
        // Label is the top left label (Left empty because there is no used to it in this page
        // Utilization is the string in the middle of the bar
        // Data is the actual data the bar takes and lastly it takes a theme as its parameter
        const p10insideData = {
            navigationUrl: undefined,
            barLabel: "",
            utilization: strings.p10insideutil,
            data: parkingP10Data,
            barTheme
        };
        const p10roofData = {
            navigationUrl: undefined,
            barLabel: "",
            utilization: strings.p10rooftoputil,
            data: parkingP10TopData,
            barTheme
        };
        const p10electicData = {
            navigationUrl: undefined,
            barLabel: "",
            utilization: strings.p10electricutil,
            data: parkingP10ElectricData,
            barTheme
        };


        return (
            <Container>
                <div
                    component="div"
                    role="tabfragmentlive" //eslint-disable-line
                    hidden={value !== index}
                    id={`tabfragmentlive-${index}`}
                    aria-labelledby={`tab-${index}`}
                    {...other}>
                    <h3 className={barTheme.headLine}>{strings.topBarMenuItemP10}</h3>
                    <Grid container spacing={1}
                          justify="space-between">
                        {ProgressBar(p10electicData)}
                        {ProgressBar(p10roofData)}
                        {ProgressBar(p10insideData)}
                    </Grid>

                </div>
            </Container>
        );
    }

    // Renders the P10 History component with date level selector, date picker and chart
    function TabFragmentHistory(props) {
        const {children, value, index, ...other} = props;
        const [selectedDate, setSelectedDate] = useState(new Date(props.date));
        const insideLevels = 'P10/';
        const rooftopLevels = 'P10TOP/';
        const electric = "electric";
        const [selectedLevel, setSelectedLevel] = useState(electric);

        const handleDateChange = date => {
            setSelectedDate(date);
            props.onDateChange(date);
        };
        /*eslint-disable */

        const handleChange = (value) => {
            setSelectedLevel(value)
        };

        // Selector for selecting the desired level in P10
        // Select value is the default value that is shown first
        const LevelSelector = () => {
            return (
                <div>
                    <FormControl style={{width: "250px", textAlign:"left"}}>
                        <InputLabel id="level">{strings.level}</InputLabel>
                        <Select labelId="level" id="level" value={selectedLevel}
                                onChange={(event) => {
                                    {
                                        handleChange(event.target.value)
                                    }
                                }}>
                            <MenuItem value={electric}>{strings.p10electric}</MenuItem>
                            <MenuItem value={rooftopLevels}>{strings.p10rooftop}</MenuItem>
                            <MenuItem value={insideLevels}>{strings.p10inside}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            )
        };


        return (
            <div
                role="tabfragment"
                hidden={value !== index}
                id={`tabfragment-${index}`}
                aria-labelledby={`tab-${index}`}
                inputstyle={{textAlign: 'center'}}
                {...other} style={{marginTop: "16px"}}>
                <LevelSelector/>
                <ThemeProvider theme={DatePickerTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{color: "black"}}
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
                </ThemeProvider>
                <Chart date={selectedDate} location={selectedLevel}/>
            </div>
        );
    }

    // Renders the P5 live data page with progress bar and
    // Live util graph
    function TabFragmentLiveP5(props) {
        const {children, value, index, ...other} = props;
        const {getUsageData} = API();

        const [parkingP5Data, setParkingP5Data] = useState(undefined);

        useEffect(() => {
            getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
        }, [parkingP5Data]);

        const barData = {
            navigationUrl: undefined,
            barLabel: '',
            utilization: strings.p10insideutil,
            data: parkingP5Data,
            barTheme
        };
        return (
            <div
                hidden={value !== index}>
                <Container>
                    <h3 className={barTheme.headLine}>{strings.insideLevelsP5}</h3>
                    <Grid>{ProgressBar(barData)}</Grid>
                </Container>
                <Grid>
                    <Chart date={new Date()} location={p5Loc}/>
                </Grid>
            </div>
        );
    }

    // Renders the P5 history page with graph and date picker
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
                <ThemeProvider theme={DatePickerTheme}>
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
                </ThemeProvider>
                <Chart date={selectedDate} location={p5Loc}/>
            </div>
        );
    }


    // Renders the restaurant chart page with a date picker and chart
    function TabRestaurantChart(props) {
        const {children, value, index, ...other} = props;
        const [selectedDate, setSelectedDate] = useState(new Date(props.date));

        const handleDateChange = date => {
            setSelectedDate(date);
            props.onDateChange(date);
        };

        return (
            <div role="tabfragment"
                 hidden={value !== index}
                 id={`tabfragment-${index}`}
                 aria-labelledby={`tab-${index}`}
                 inputstyle={{textAlign: 'center'}}
                 {...other}>
                <ThemeProvider theme={DatePickerTheme}>
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
                </ThemeProvider>
                <Chart date={selectedDate} location={"restaurant"}/>
            </div>
        );
    }

    // Renders the restaurant donut chart page
    function TabRestaurantDonut(props) {
        const {children, value, index, ...other} = props;
        const selectedDate = new Date(props.date);

        return (
            <div role="tabfragment"
                 hidden={value !== index}
                 id={`tabfragment-${index}`}
                 aria-labelledby={`tab-${index}`}
                 inputstyle={{textAlign: 'center'}}
                 {...other}>
                <Donut date={selectedDate}/>
            </div>
        );
    }

    // Renders the restaurant Menu
    function TabRestaurantMenu(props) {
        const {children, value, index, ...other} = props;
        return (
            <div role="tabfragment"
                 hidden={value !== index}
                 id={`tabfragment-${index}`}
                 aria-labelledby={`tab-${index}`}
                 inputstyle={{textAlign: 'center'}}
                 {...other}>
                <Menu location={"restaurant"}/>
            </div>
        );
    }

    function TabRestaurantWeek(props) {
        const {children, value, index, ...other} = props;
        return (
            <div role="tabfragment"
                 hidden={value !== index}
                 id={`tabfragment-${index}`}
                 aria-labelledby={`tab-${index}`}
                 inputstyle={{textAlign: 'center'}}
                 {...other}>
                <Week location={"restaurant"}/>
            </div>
        );
    }

    return {
        TabFragmentHistory: TabFragmentHistory,
        TabFragmentLive: TabFragmentLive,
        TabFragmentLiveP5: TabFragmentLiveP5,
        TabFragmentHistoryP5: TabFragmentHistoryP5,
        TabRestaurantChart: TabRestaurantChart,
        TabRestaurantDonut: TabRestaurantDonut,
        TabRestaurantMenu: TabRestaurantMenu,
        TabRestaurantWeek: TabRestaurantWeek,
    };

};

export default TabFragments;

