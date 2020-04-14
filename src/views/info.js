/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/App.css';
import {
  makeStyles,
} from '@material-ui/core';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import strings from '../localization';

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
          <p>{strings.infoPageHeading}</p>
          <p>{strings.infoPageP1}</p>
          <p>{strings.infoPageP2}</p>
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
