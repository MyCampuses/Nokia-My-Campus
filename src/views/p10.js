/* eslint-disable no-unused-vars */

import React from 'react';
import '../styles/App.css';
import '../styles/p10Style.css';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import BottomBarTabFragment from "../fragments/BottomBarFragment";
import {ThemeProvider} from "@material-ui/core";
import ProgressBarStyle from "../styles/progressBarStyle";

/*eslint-enable */

const P10 = () => {
    const {isLoggedIn} = Authentication();
    const {TopNavigationBar} = NaviBar();
    const {P10BottomTab} = BottomBarTabFragment();
    const {P5P10ProgressBar} = ProgressBarStyle()

    const P10Page = () => {
        return (
            <ThemeProvider theme={P5P10ProgressBar}>
                {TopNavigationBar()}
                {P10BottomTab()}
            </ThemeProvider>
        );
    };
    const AuthP10 = () => { //eslint-disable-line
        if (isLoggedIn()) {
            return <P10Page/>;
        } else {
            return <AuthLoading/>;
        }
    };

    return (
        <AuthP10/>
    );
};

export default P10;
