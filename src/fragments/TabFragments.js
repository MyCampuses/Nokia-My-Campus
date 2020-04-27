import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import ChartFragment from "./ChartFragments";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import {Box, Container, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import strings from "../localization";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
import MenuItem from "@material-ui/core/MenuItem";
import Data from "../hooks/Data";
import Typography from "@material-ui/core/Typography";
import blue from '@material-ui/core/colors/blue';

// Class comment, all the functinality:
// Write all that is in here, so no one has to search
// example: Styles for the page are here, navi bar, all the elements for the navi bar and what they are.

const {parkingP5Url} = ApiUrls();

const TabFragments = (props) => {
    const {Chart, RestaurantChart} = ChartFragment();
    const p5Loc = 'P5/';
    const {ProgressBar} = ProgressBarFragments();

    const colorB = blue[500];
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

    function TabFragmentLive(props) {
        const {children, value, index, ...other} = props;
        const {parkingP10Url, parkingP10TopUrl} = ApiUrls();
        const {getUsageData} = API();
        const [parkingP10Data, setParking10Data] = useState(undefined);
        const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
        const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
        const multiplier = 2;

        useEffect(() => {
            getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
            getUsageData(parkingP10TopUrl, props).then((result) => {
                setParkingP10TopData(result.percent);
                setParkingP10ElectricData(result.percent * multiplier)
            });
        }, []);  //eslint-disable-line


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

    function TabFragmentHistory(props) {
        const {children, value, index, ...other} = props;
        const [selectedDate, setSelectedDate] = useState(new Date(props.date));
        const insideLevels = 'P10/';
        const rooftopLevels = 'P10TOP/';
        const electric = "electric";
        const [selectedLevel, setSelectedLevel] = useState(insideLevels);

        const handleDateChange = date => {
            setSelectedDate(date);
            props.onDateChange(date);
        };
        /*eslint-disable */

        const handleChange = (value) => {
            setSelectedLevel(value)
        };

        // Selector for selecting the desired level in P10
        const LevelSelector = () => {
            return (
                <div>
                    <FormControl style={{width: "250px"}}>
                        <InputLabel id="level">{strings.level}</InputLabel>
                        <Select labelId="level" id="level" value={selectedLevel}
                                onChange={(event) => {
                                    {
                                        handleChange(event.target.value)
                                    }
                                }}>
                            <MenuItem value={insideLevels}>{strings.p10inside}</MenuItem>
                            <MenuItem value={rooftopLevels}>{strings.p10rooftop}</MenuItem>
                            <MenuItem value={electric}>{strings.p10electric}</MenuItem>
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
                <Chart date={selectedDate} location={selectedLevel}/>
            </div>
        );
    }

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
                <Chart date={selectedDate} location={p5Loc}/>
            </div>
        );
    }

    function TabRestaurantLines(props) {
        const {children, value, index, ...other} = props;
        const [queueTimes, setQueueTimes] = useState(new Map());
        const {getUsageDataNoProps} = API();
        const {restaurantQueueUrl} = ApiUrls();
        const {lines, times, colours} = Data();

        const getQueueTimes = async () => {
            for (let i = 1; i < 9; i++) {
                getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueueTimes(new Map(queueTimes.set(i, result))))
            }
        };

        useEffect(() => {
            getQueueTimes().then()
        }, []);// eslint-disable-line

        return (
            <div role="tabfragment"
                 hidden={value !== index}
                 id={`tabfragment-${index}`}
                 aria-labelledby={`tab-${index}`}
                 inputstyle={{textAlign: 'center'}}
                 {...other}>
                <h3 className={barTheme.headLine}>{strings.restaurantPageTitle}</h3>
                <Box>
                    {[...lines.keys()].map(mapKey => (
                        <div key={mapKey}>
                            {queueTimes.get(mapKey) != null &&
                            <Box className="lineDiv"
                                 border={1}
                                 p={1}
                                 m={1}
                                 bgcolor={colours.get(parseInt(queueTimes.get(mapKey).queue_time))}
                                 borderColor="#E9E9E9">
                                <Grid container direction="row"
                                      justify="space-between"
                                      alignItems="center">
                                    <Grid>
                                        <Typography>
                                            {lines.get(mapKey)}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        {queueTimes.get(mapKey) != null &&
                                        <Typography>
                                            {times.get(parseInt(queueTimes.get(mapKey).queue_time))}
                                        </Typography>
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                            }
                        </div>
                    ))}
                </Box>
            </div>
        )
    }

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
                <RestaurantChart date={selectedDate}/>
            </div>
        );
    }


    return {
        TabFragmentHistory: TabFragmentHistory,
        TabFragmentLive: TabFragmentLive,
        TabFragmentLiveP5: TabFragmentLiveP5,
        TabFragmentHistoryP5: TabFragmentHistoryP5,
        TabRestaurantLines: TabRestaurantLines,
        TabRestaurantChart: TabRestaurantChart,
    };

};

export default TabFragments;

