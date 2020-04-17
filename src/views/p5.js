/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/App.css';
import {ThemeProvider} from '@material-ui/core';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import BottomBarTabFragment from "../fragments/BottomBarFragment";
import MuiThemes from "../styles/muiThemes";

const P5 = (props) => {
    const {TopNavigationBar} = NaviBar();
    const {isLoggedIn} = Authentication();
    const {P5BottomTab} = BottomBarTabFragment();
    const {PageTheme} = MuiThemes();

    const P5Page = () => {
        return (
            <ThemeProvider theme={PageTheme}>
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
