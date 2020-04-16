import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import ChartFragment from "./ChartFragments";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import {createMuiTheme, ThemeProvider, Container} from "@material-ui/core";


const TabFragments = (props) => {
    const homeTheme = createMuiTheme({
        flexGrow: 1,
        overrides: {
            MuiLinearProgress: {
                root: {
                    height: '15vh',
                    maxHeight: '100px',
                    borderRadius: '10px',
                    width: '100%',
                },
            },
            MuiGrid: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                'spacing-xs-1': {
                    padding: '0px',
                    margin: '0px',
                    width: '100%',
                },
            },
            MuiContainer: {
                root: {
                    paddingLeft: '4px',
                    paddingRight: '4px',
                },
            },
        },
    });
    const {P5Chart, P10Chart} = ChartFragment();
    const {P5ProgressBar, P10InsideProgressBar, P10RooftopProgressBar} = ProgressBarFragments();

    function TabFragmentLive(props) {
        const {children, value, index, ...other} = props;

        //Set p10 fetched data

        return (
            <ThemeProvider theme={homeTheme}>
                <Container>
                    <div
                        component="div"
                        role="tabfragmentlive" //eslint-disable-line
                        hidden={value !== index}
                        id={`tabfragmentlive-${index}`}
                        aria-labelledby={`tab-${index}`}
                        {...other}
                    >
                        <Grid container spacing={1}
                              justify="space-between">
                            {P10InsideProgressBar()}
                            {P10RooftopProgressBar()}
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

