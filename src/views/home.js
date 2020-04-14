/* eslint-disable no-unused-vars */
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  Container,
  createMuiTheme,
  LinearProgress,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import NaviBar from '../fragments/TopNavigationBarFragment';
import AuthLoading from '../views/authLoading';
import Typography from '@material-ui/core/Typography';
import p10Styles from '../styles/p10Styles';

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
      maxHeight: '100px',
      height: '15vh',
      maxWidth: '1152px',
      width: '90%',
    },
    labelLocation: {
      maxHeight: '100px',
      height: '15vh',
      justifyContent: 'flex-start',
    },
  }));

  const progressBarTheme = useStyles();
  //Progressbar with props
  function HomeProgressBar(props) {
    return (
        <LinearProgress variant="determinate" value={props.value}/>
    );
  }

  const HomePage = () => {
    return (
        <ThemeProvider theme={homeTheme}>
          {TopNavigationBar()}
          <Container>
            <Grid container spacing={1}
                  justify="space-between">
              <Grid item xs={12} spacing={0}>
                <div className={progressBarTheme.headLine}>Current campus
                  statistics
                  are:
                </div>
              </Grid>
              <Grid container item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('restaurant')}>
                <Grid item container className={progressBarTheme.progressLabel}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      xs={12}>
                  <Grid item alignItems="flex-start"
                        className={progressBarTheme.labelLocation} xs={4}>
                    <Typography>
                      Restaurant
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      Fill rate: {restaurantData}%
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
                <HomeProgressBar value={restaurantData}>restaurantData
              </HomeProgressBar>
              </Grid>
              <Grid item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('p5')}>
                <Grid item container className={progressBarTheme.progressLabel}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      xs={12}>
                  <Grid item alignItems="flex-start"
                        className={progressBarTheme.labelLocation} xs={4}>
                    <Typography>
                      P5
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      Live Utilization: {parkingP5Data}%
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
                <HomeProgressBar value={parkingP5Data}>
                </HomeProgressBar>
              </Grid>
              <Grid item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('p10')}>
                <Grid item container className={progressBarTheme.progressLabel}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      xs={12}>
                  <Grid item alignItems="flex-start"
                        className={progressBarTheme.labelLocation} xs={4}>
                    <Typography>
                      P10 Inside
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      Live Utilization: {parkingP10Data}%
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
                <HomeProgressBar value={parkingP10Data}>
                </HomeProgressBar>
              </Grid>
              <Grid item xs={12} spacing={0}
                    onClick={() => onItemClickNavigate('p10')}>
                <Grid item container className={progressBarTheme.progressLabel}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      xs={12}>
                  <Grid item alignItems="flex-start"
                        className={progressBarTheme.labelLocation} xs={4}>
                    <Typography>
                      P10 Rooftop
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      Live Utilization: {parkingP10TopData}%
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
                <HomeProgressBar value={parkingP10TopData}>
                </HomeProgressBar>
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