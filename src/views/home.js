/* eslint-disable no-unused-vars */

import API from '../hooks/ApiHooks';
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  createMuiTheme,
  LinearProgress,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const apiUrl = 'https://mycampus-server.karage.fi/api/';
const restaurantUrl = apiUrl + 'common/restaurant/Midpoint?select=fill_percent';
const parkingP5Url = apiUrl + 'common/parking/status/P5';
const parkingP10Url = apiUrl + 'common/parking/status/P10';
const parkingP10TopUrl = apiUrl + 'common/parking/status/P10TOP';
const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

const Home = (props) => {
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const {getUsageData} = API();
  const onItemClick = (e, url) => {
    e.preventDefault();
    window.location.href = url
  };

  useEffect(() => {
    getUsageData(parkingP5Url, props)
        .then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl, props)
        .then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props)
        .then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl, props)
        .then(result => setParkingP10TopData(result.percent));

  },[]);// eslint-disable-line


  const homeTheme = createMuiTheme({
    flexGrow: 1,
    overrides: {
      MuiLinearProgress: {
        root: {
          height: '100px',
          borderRadius: '10px',
          marginLeft: '20px',
          marginRight: '20px',
        },
      },
    },
  });
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
    headLine: {
      marginTop: '10px',
      marginBottom: '10px',
      color: 'blue'
    },
    progressHeadLine: {
      position: 'absolute',
      width: '100%',
      height: '20px',
      marginLeft: '30px',
      textAlign: 'left',
      display: 'flex',
      zIndex: 1,
      '& span': {
        width: '100%',
      }
    },
    progressLabel: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
      maxHeight: '100px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      '& span': {
        width: '100%',
      },
    },
  }));
  const progressBarTheme = useStyles();

  return (
      <ThemeProvider theme={homeTheme}>
        <Grid container spacing={1} component='home' maxWidth='xs'
              justify="space-between">
          <Grid item xs={12} spacing={0}>
            <div className={progressBarTheme.headLine}>Welcome to MyCampus</div>
          </Grid>
          <Grid item xs={12} spacing={0}>
            <div className={progressBarTheme.headLine}>Current campus statistics are:
            </div>
          </Grid>
          <Grid item xs={12} spacing={0}  onClick={e => onItemClick(e, 'restaurant')}>
            <div className={progressBarTheme.progressHeadLine}>
              <span>Restaurant</span>
            </div>
            <div className={progressBarTheme.progressLabel}>
              <span>Midpoint Fill rate: {restaurantData}%</span>
            </div>

            <LinearProgress variant="determinate"
                            value={restaurantData}>restaurantData</LinearProgress>
          </Grid>

          <Grid item xs={12} spacing={0} onClick={e => onItemClick(e, 'p5')}>
            <div className={progressBarTheme.progressHeadLine}>
              <span>P5</span>
            </div>
            <div className={progressBarTheme.progressLabel}>
              <span>Live Utilization: {parkingP5Data}%</span>
            </div>
            <LinearProgress variant="determinate"
                            value={parkingP5Data}>P5</LinearProgress>
          </Grid>
          <Grid item xs={12} spacing={0}  onClick={e => onItemClick(e, 'p10')}>
            <div className={progressBarTheme.progressHeadLine}>
              <span>P10</span>
            </div>
            <div className={progressBarTheme.progressLabel}>
              <span>Inside levels: {parkingP10Data}%</span>
            </div>
            <LinearProgress variant="determinate"
                            value={parkingP10Data}>P10</LinearProgress>
          </Grid>
          <Grid item xs={12} spacing={0}  onClick={e => onItemClick(e, 'p10')}>
            <div className={progressBarTheme.progressHeadLine}>
              <span>P10</span>
            </div>
            <div className={progressBarTheme.progressLabel}>
              <span>Rooftop level: {parkingP10TopData}%</span>
            </div>
            <LinearProgress variant="determinate"
                            value={parkingP10TopData}>ParkingP10Top</LinearProgress>
          </Grid>
          <Grid item xs={12} spacing={0}>
            <div className={progressBarTheme.headLine}>Tap blocks to display additional information</div>
          </Grid>

        </Grid>
      </ThemeProvider>


  );

};

export default Home;
