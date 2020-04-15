/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  Container,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import NaviBar from '../fragments/TopNavigationBarFragment';
import AuthLoading from '../views/authLoading';
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import App from '../hooks/UpdateAlert'


const Home = (props) => {
  const {isLoggedIn} = Authentication();
  const {TopNavigationBar} = NaviBar();
  const {RestaurantProgressBar, P5ProgressBar, P10InsideProgressBar, P10RooftopProgressBar} = ProgressBarFragments();

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

  const HomePage = () => {
    App()
    return (
        <ThemeProvider theme={homeTheme}>
          {TopNavigationBar()}
          <Container>
            <Grid container spacing={1}
                  justify="space-between">
              <Grid item xs={12} spacing={0}>
                <div className={progressBarTheme.headLine}>Current campus
                  statistics
                  are testest:
                </div>
              </Grid>
              {RestaurantProgressBar()}
              {P5ProgressBar()}
              {P10InsideProgressBar()}
              {P10RooftopProgressBar()}
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
