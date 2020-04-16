/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  Container, createMuiTheme, ThemeProvider
} from '@material-ui/core';
import NaviBar from '../fragments/TopNavigationBarFragment';
import ChartFragment from '../fragments/ChartFragments';
import Grid from '@material-ui/core/Grid';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import strings from '../localization';
import ProgressBarFragments from '../fragments/ProgressBarFragments'
import TabFragments from "../fragments/TabFragments";
import BottomBarTabFragment from "../fragments/BottomBarFragment";

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

const P5 = (props) => {
  const {TopNavigationBar} = NaviBar();
  const {isLoggedIn} = Authentication();
  const {P5BottomTab} = BottomBarTabFragment();

  const P5Page = () => {
    return (
        <ThemeProvider theme={homeTheme}>
          {TopNavigationBar()}
          {P5BottomTab()}
        </ThemeProvider>
    );

  };

  const AuthP5 = () => {
    if (isLoggedIn()) {
      return <P5Page/>;
    } else {
      return <AuthLoading/>;
    }
  };

  return (
          <AuthP5/>
      )
};

export default P5;
