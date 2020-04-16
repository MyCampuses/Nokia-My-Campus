/* eslint-disable no-unused-vars */

import React from 'react';
import p10Styles from '../styles/p10Styles';
import '../styles/App.css';
import '../styles/p10Style.css';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import strings from '../localization';
import AuthLoading from './authLoading';
import BottomBarTabFragment from "../fragments/BottomBarFragment";

/*eslint-enable */

const P10 = () => {
    const p10classes = p10Styles();
    const {isLoggedIn} = Authentication();
    const {TopNavigationBar} = NaviBar();
    const {P10BottomTab} = BottomBarTabFragment();

    const P10Page = () => {
        return (
            <div component="main" maxwidth="lg" id="mainContainer">
                {TopNavigationBar()}
                <div className="p10">
                    <Typography className={p10classes.p10title} component="h1"
                                variant="h5">{strings.p10PageTitle}
                    </Typography>
                </div>
                {P10BottomTab()}
            </div>
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
