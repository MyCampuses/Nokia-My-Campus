/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/App.css';
import {
  makeStyles,
} from '@material-ui/core';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
    border: 1,
  },

}));

const Info = (props) => {
  const classes = useStyle();
  const {TopNavigationBar} = NaviBar();
  const {isLoggedIn} = Authentication();


  const InfoPage = () => {
    return (
        <div className={classes.root}>
          {TopNavigationBar()}
          <h2>MyCampus</h2>
          <p>MyCampus Apps is a portal providing access to applications created by Nokia’s employees,
            Quja start ups and other ecosystem partners. The key enabler is the underlying Nokia Innovation Platform (NIP).
            For new ideas and questions, please contact: mikael.lindblad@nokia.com</p>
          <p>Thermal camera sensors cover Midpoint restaurant and the app shows current utilization rate and provides historical data.</p>
          <p>Car count provided by time-of-flight sensors and thermal cameras at bottom levels in parking P5.</p>
          <p>Car count provided by time-of-flight sensors and thermal cameras at different floor Levels in parking P10.</p>
        </div>
    );

  };

  const AuthInfo = () => {
    if (isLoggedIn()) {
      return <InfoPage/>;
    } else {
      return <AuthLoading/>;
    }
  };

  return (
      <AuthInfo/>
  )
};

export default Info;
