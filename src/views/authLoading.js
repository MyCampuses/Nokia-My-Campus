/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {CircularProgress,Container} from '@material-ui/core';
import Authentication from '../hooks/Authentication';
import LocalStorageOperations from '../hooks/LocalStorageOperations';

const AuthLoading = (props) =>{
    const {checkIfLogged} = Authentication();

    // Checks if the user is logged in when navigating to root url of the app
    // Redirects to either home or login accordingly
    useEffect(()=>{
       checkIfLogged()
    },[]); // eslint-disable-line

    // Centers the loading progress
    const centered = {
        textAlign:"center",
        margin:"auto 0",
        height:"100%",
        position:"absolute",
        right:0,
        top:0,
        left:0,
        bottom:0,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };

  return(
      <div style={centered}>
        <CircularProgress style={{}}/>
      </div>
  )
};

export default AuthLoading;
