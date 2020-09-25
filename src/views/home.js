/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  Container, makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import NaviBar from '../fragments/TopNavigationBarFragment';
import AuthLoading from '../views/authLoading';
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import MuiThemes from "../styles/muiThemes";
import ApiUrls from "../hooks/ApiUrls";
import API from "../hooks/ApiHooks";
import strings from "../localization";
import blue from '@material-ui/core/colors/blue';
import HeatMap from '../fragments/HeatMap';

const Home = (props) => {
  const {getUsageData} = API();
  const {isLoggedIn} = Authentication();
  const {TopNavigationBar} = NaviBar();
  const {ProgressBar} = ProgressBarFragments();
  const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();
  const {PageTheme} = MuiThemes();
  // States
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
  },[]); //eslint-disable-line


  const HomePage = () => {

    //Styles for the ProgressBars
    //makeStyles, createStyles can not be in another folder and imported
    //the styles have to be in the same file where they are used.
    const colorB = blue[500]
    const useStyles = makeStyles({
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
        height: '14vh',
        maxWidth: '1152px',
        width: '90%',
      },
      labelLocation: {
        maxHeight: '100px',
        height: '15vh',
        justifyContent: 'flex-start',
      },

    });
    const barTheme = useStyles();

    const restaurantBarData = {navigationUrl: '/restaurant', barLabel: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData,barTheme};
    const p5BarData = {navigationUrl: '/p5', barLabel: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data,barTheme};
    const p10insideData = {navigationUrl: '/p10', barLabel: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data,barTheme};
    const p10roofData = {navigationUrl: '/p10', barLabel: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData,barTheme};
    const p10electricData = {navigationUrl: '/p10', barLabel: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData,barTheme};

    return (
        <ThemeProvider theme={PageTheme}>
          {TopNavigationBar()}
          <Container>
            <Grid container spacing={1}
                  justify="space-between">
              <Grid item xs={12}>
               <h3 className={barTheme.headLine}>
                 {strings.currentStatsAre}
               </h3>
              </Grid>
              {ProgressBar(restaurantBarData)}
              {ProgressBar(p5BarData)}
              {ProgressBar(p10insideData)}
              {ProgressBar(p10roofData)}
              {ProgressBar(p10electricData)}
            </Grid>

          </Container>
        </ThemeProvider>
    );
  };

  const AuthHome = () => {
    if (isLoggedIn()) {
      return <HomePage/>;
    } else {
      return <AuthLoading/>;
    }
  };

  return (
      <AuthHome/>
  );
};

export default Home;
