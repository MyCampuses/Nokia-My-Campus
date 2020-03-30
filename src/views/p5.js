/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../styles/App.css';
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,

} from '@material-ui/core'

import '../styles/p5.css';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import LocalStorageOperations from "../hooks/LocalStorageOperations";


const P5 = (props) =>{

    const {navigation} = props

    return(
        <Container component="main_p5" maxWidth="xs">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className="MenuButton" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="p5_main">
                <h1>Inside levels P5</h1>
                <h3>Live Utilization</h3>
            </div>
        </Container>
    )
};

export default P5;