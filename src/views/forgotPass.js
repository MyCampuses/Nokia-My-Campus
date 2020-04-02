/* eslint-disable no-unused-vars */
import MuiThemes from '../styles/muiThemes'
import React, {useState, useEffect, useRef} from 'react';
import {
    Button,
    FormControlLabel,
    Container,
    ThemeProvider,
    Typography,
    TextField, Checkbox, Grid, Link,
} from '@material-ui/core';
import strings from "../localization";


const ForgotPassword = (props) => {
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
                         style={{
                             width: '100%',
                             height: 'auto',
                             paddingTop: '20px',
                         }}
                         alt={strings.logoAlt}/>


                </div>
            </Container>
        </ThemeProvider>

    )
};

export default ForgotPassword;
