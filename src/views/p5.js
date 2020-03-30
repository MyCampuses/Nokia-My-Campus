/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../styles/App.css';
import {
    Container
} from '@material-ui/core'

import '../styles/p5.css';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import LocalStorageOperations from "../hooks/LocalStorageOperations";


const P5 = (props) =>{

    return(
        <Container component="main_p5" maxWidth="xs">
            <div className="p5_main">
                <h1>Inside levels P5</h1>
                <h3>Live Utilization</h3>
            </div>
        </Container>
    )
};
export default P5;