/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import MuiThemes from '../styles/muiThemes'

import {
    Button,
    FormControlLabel,
    Container,
    ThemeProvider,
    Typography,
    TextField, Checkbox, Grid, Link,
} from '@material-ui/core';
import strings from "../localization";



const Register = (props) =>{
    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState('');

    useEffect(()=>{
        setBackgroundBlue()
    });

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.png')}
                         className="logoImg"
                         alt={strings.logoAlt}/>
                </div>
            </Container>
        </ThemeProvider>

    )
};
export default Register
