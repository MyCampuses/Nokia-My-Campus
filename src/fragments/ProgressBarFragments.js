import {LinearProgress, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {Fragment, useEffect, useState} from 'react';
import API from "../hooks/ApiHooks";
import GlobalFunctions from "../hooks/GlobalFunctions";
import ApiUrls from "../hooks/ApiUrls";
import Authentication from "../hooks/Authentication";
import NaviBar from "./TopNavigationBarFragment";




const ProgressBarFragments = (props) => {

    const [restaurantData, setRestaurantData] = useState(undefined);
    const [parkingP5Data, setParkingP5Data] = useState(undefined);
    const [parkingP10Data, setParking10Data] = useState(undefined);
    const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
    const {getUsageData} = API();
    const {onItemClickNavigate} = GlobalFunctions();
    const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();

    /*eslint-disable */
    useEffect(() => {
        getUsageData(parkingP5Url, props).
        then(result => setParkingP5Data(result.percent));
        getUsageData(restaurantUrl, props).
        then(result => setRestaurantData(result.fill_percent));
        getUsageData(parkingP10Url, props).
        then(result => setParking10Data(result.percent));
        getUsageData(parkingP10TopUrl, props).
        then(result => setParkingP10TopData(result.percent));
    }, []);
    /*eslint-enable */

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },

        headLine: {
            marginTop: '10px',
            marginBottom: '10px',
            color: 'blue',
        },
        progressLabel: {
            position:"absolute",
            zIndex:1,

        },
    }));
    const progressBarTheme = useStyles();

    //Progress bar for restaurant, including all data
    const restaurantProgressBar = () => {
        return(
            <Fragment>
                <Grid item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('restaurant')}>

                    <div className={progressBarTheme.progressLabel}>
                        <span>Restaurant Fill rate: {restaurantData}%</span>
                    </div>
                    <LinearProgress variant="determinate"
                                value={restaurantData}>restaurantData
                    </LinearProgress>
                </Grid>
            </Fragment>
        )
    }

    //Progress bar for P5, including all data
    const p5ProgressBar = () => {
        return (
            <Fragment>
                <Grid item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('p5')}>

                    <div className={progressBarTheme.progressLabel}>
                        <span>P5 Live Utilization: {parkingP5Data}%</span>
                    </div>
                    <LinearProgress variant="determinate"
                                value={parkingP5Data}>P5</LinearProgress>
                </Grid>
            </Fragment>
        )
    }

    //Progress bar for P10, including all data
    const p10ProgressBar = () => {
        return (
            <Fragment>
                <Grid item xs={12} spacing={0}
                      onClick={() => onItemClickNavigate('p5')}>

                    <div className={progressBarTheme.progressLabel}>
                        <span>P5 Live Utilization: {parkingP5Data}%</span>
                    </div>
                    <LinearProgress variant="determinate"
                                    value={parkingP5Data}>P5</LinearProgress>
                </Grid>
            </Fragment>
        )
    }

    return {
        p5ProgressBar: p5ProgressBar,
        restaurantProgressBar: restaurantProgressBar,
        p10ProgressBar: p10ProgressBar
    };
}