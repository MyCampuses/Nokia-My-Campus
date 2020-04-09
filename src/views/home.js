/* eslint-disable no-unused-vars */
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  createMuiTheme,
  LinearProgress,
    Container,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import NaviBar from "../fragments/TopNavigationBarFragment";
import AuthLoading from "../views/authLoading";

const Home = (props) => {
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const {getUsageData} = API();
  const {onItemClickNavigate} = GlobalFunctions();
  const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();
  const {isLoggedIn} = Authentication();
  const {TopNavigationBar} = NaviBar();

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

  const homeTheme = createMuiTheme({
    flexGrow: 1,
    overrides: {
      MuiLinearProgress: {
        root: {
          height: '100px',
          borderRadius: '10px',
          width:"100%"
        },
      },
      MuiGrid:{
        root:{
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        },
        "spacing-xs-1":{
          padding:"0px",
          margin: "0px",
          width:"100%"
        }
      },
      MuiContainer:{
        root:{
          paddingLeft: "4px",
          paddingRight:"4px",
        }
      }
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
      color: 'blue',
    },
    progressHeadLine: {
      position: 'absolute',
      width: '100px',
      height: '20px',
      marginLeft: '30px',
      textAlign: 'left',
      display: 'flex',
      zIndex: 1,

    },
    progressLabel: {
      position:"absolute",
      zIndex:1,

    },
  }));
  const progressBarTheme = useStyles();

  const HomePage = () =>{
    return (
        <ThemeProvider theme={homeTheme}>
          {TopNavigationBar()}
          <Container>
          <Grid container spacing={1} component='home' maxWidth='xs'
                justify="space-between">
            <Grid item xs={12} spacing={0}>
              <div className={progressBarTheme.headLine}>Current campus statistics
                are:
              </div>
            </Grid>

            <Grid item xs={12} spacing={0}
                  onClick={() => onItemClickNavigate('restaurant')}>

              <div className={progressBarTheme.progressLabel}>
                <span>Restaurant Fill rate: {restaurantData}%</span>
              </div>
              <LinearProgress variant="determinate"
                              value={restaurantData}>restaurantData
              </LinearProgress>
            </Grid>
            <Grid item xs={12} spacing={0}
                  onClick={() => onItemClickNavigate('p5')}>

              <div className={progressBarTheme.progressLabel}>
                <span>P5 Live Utilization: {parkingP5Data}%</span>
              </div>
              <LinearProgress variant="determinate"
                              value={parkingP5Data}>P5</LinearProgress>
            </Grid>
            <Grid item xs={12} spacing={0}
                  onClick={() => onItemClickNavigate('p10')}>

              <div className={progressBarTheme.progressLabel}>
                <span>P10 Inside levels: {parkingP10Data}%</span>
              </div>
              <LinearProgress variant="determinate"
                              value={parkingP10Data}>P10</LinearProgress>
            </Grid>
            <Grid item xs={12} spacing={0}
                  onClick={() => onItemClickNavigate('p10')}>
              <div className={progressBarTheme.progressLabel}>
                <span>P10 Rooftop level: {parkingP10TopData}%</span>
              </div>
              <LinearProgress variant="determinate"
                              value={parkingP10TopData}>ParkingP10Top</LinearProgress>
            </Grid>
            <Grid item xs={12} spacing={0}>
              <div className={progressBarTheme.headLine}>Tap blocks to display
                additional information
              </div>
            </Grid>
          </Grid>
          </Container>
        </ThemeProvider>
    );
  };

  const AuthHome = () =>{
    if (isLoggedIn()){
      return <HomePage/>
    } else{
      return <AuthLoading/>
    }
  };

  return (
      <AuthHome/>
  )
};

export default Home;
