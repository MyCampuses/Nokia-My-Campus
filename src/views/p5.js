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
        <Container component="mainp5" maxWidth="xs">
            <div className="p5 main">

            </div>
        </Container>
    )
};
export default P5;