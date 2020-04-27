/*
    This file provides a component that is basically just a blank page with a loading spinner on it.
    This is used on every navigation in the app itself. Checks if the user is logged in or not.
    Redirects to login in case the user is not logged in
*/
import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';
import Authentication from '../hooks/Authentication';
import AuthLoadingStyles from "../styles/authLoadingStyle";

const AuthLoading = (props) =>{
    const {checkIfLogged} = Authentication();
    const {centered} = AuthLoadingStyles()

    // Checks if the user is logged in when navigating to root url of the app
    // Redirects to either home or login accordingly
    useEffect(()=>{
       checkIfLogged()
    },[]); // eslint-disable-line

    return (
        <div style={centered}>
            <CircularProgress style={{}}/>
        </div>
    )
};

export default AuthLoading;
