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
import NaviBar from '../fragments/TopNavigationBarFragment';
import AuthLoading from '../views/authLoading';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Home = () => {
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
    getUsageData(parkingP5Url).
        then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl).
        then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url).
        then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl).
        then(result => setParkingP10TopData(result.percent));
  }, []);
  /*eslint-enable */

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
      position: 'absolute',
      zIndex: 1,

    },
  }));
  const progressBarTheme = useStyles();

  const HomePage = (props) => {
    const {children, value, index} = props;
    return (

        <ThemeProvider theme={homeTheme}>
          {TopNavigationBar()}
          <Container>
            <Grid container
                  justify="space-between" spacing={1}>
              <Grid item xs={12}>
                <div className={progressBarTheme.headLine}>Current campus
                  statistics
                  are:
                </div>
              </Grid>
              <Grid item xs={12}
                    onClick={() => onItemClickNavigate('restaurant')}>

                <div className={progressBarTheme.progressLabel}>
                  <span>Restaurant Fill rate: {restaurantData}%</span>
                </div>
                <LinearProgress variant="determinate"
                                value={restaurantData}>restaurantData
                </LinearProgress>
              </Grid>
              <Grid item xs={12}
                    onClick={() => onItemClickNavigate('p5')}>

                <div className={progressBarTheme.progressLabel}>
                  <span>P5 Live Utilization: {parkingP5Data}%</span>
                </div>
                <LinearProgress variant="determinate"
                                value={parkingP5Data}>P5</LinearProgress>
              </Grid>
              <Grid item xs={12}
                    onClick={() => onItemClickNavigate('p10')}>

                <div className={progressBarTheme.progressLabel}>
                  <span>P10 Inside levels: {parkingP10Data}%</span>
                </div>
                <LinearProgress variant="determinate"
                                value={parkingP10Data}>P10</LinearProgress>
              </Grid>
              <Grid item xs={12}
                    onClick={() => onItemClickNavigate('p10')}>
                <div className={progressBarTheme.progressLabel}>
                  <span>P10 Rooftop level: {parkingP10TopData}%</span>
                </div>
                <LinearProgress variant="determinate"
                                value={parkingP10TopData}>ParkingP10Top</LinearProgress>
              </Grid>
              <Grid item xs={12}>
                <div className={progressBarTheme.headLine}>Tap blocks to display
                  additional information
                </div>
              </Grid>
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
