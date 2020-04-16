/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/App.css';
import {
  Container,
  ThemeProvider,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import NaviBar from '../fragments/TopNavigationBarFragment';
import AuthLoading from '../views/authLoading';
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import MuiThemes from "../styles/muiThemes";
import ProgressBarStyle from "../styles/progressBarStyle";

const Home = (props) => {
  const {isLoggedIn} = Authentication();
  const {TopNavigationBar} = NaviBar();
  const {RestaurantProgressBar, P5ProgressBar, P10InsideProgressBar, P10RooftopProgressBar} = ProgressBarFragments();
  const {PageTheme} = MuiThemes();
  const {progressBarTheme} = ProgressBarStyle();
  /*eslint-enable */

  const HomePage = () => {
    return (
        <ThemeProvider theme={PageTheme}>
          {TopNavigationBar()}
          <Container>
            <Grid container spacing={1}
                  justify="space-between">
              <Grid item xs={12} spacing={0}>
                <div className={progressBarTheme.headLine}>Current campus
                  statistics
                  are test:
                </div>
              </Grid>
              {RestaurantProgressBar('/restaurant')}
              {P5ProgressBar('/p5')}
              {P10InsideProgressBar('/p10')}
              {P10RooftopProgressBar('/p10')}
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