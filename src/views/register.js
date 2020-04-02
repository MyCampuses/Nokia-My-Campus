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
    const [btnDisable,setBtnDisable] = useState(true);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError, setPasswordError] =useState(false);



    const [errorMsg,setErrorsMsg]= useState({
        usernameErrorMsg: "",
        emailErrorMsg:"",
        passwordErrorMsg:""
    });


    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password:"",
        confirmPassword:""
    });

    const enableSubmit = () => {
        if (!usernameError && !emailError && !passwordError){
            setBtnDisable(false)
        }  else {
            setBtnDisable(true)
        }
    };

    const updateField =e=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(()=>{
        setBackgroundBlue()

    });
    useEffect(()=>{
        enableSubmit()
    });

    const handleSubmit = () =>{
        console.log("submit")
    };
    const validateUsername = () =>{
        if (formData.username.length >= 2 && formData.username.length <= 20) {
            setUsernameError(false);
            enableSubmit()
        }
        else {
            setUsernameError(true);
            enableSubmit()
        }
    };

    const validateEmail = () =>{
        const emailReqEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (emailReqEx.test(formData.email)){
            setEmailError(false);
            enableSubmit()
        } else {
            setEmailError(true);
            enableSubmit()
        }
    };

    const validatePasswords = () => {
        if (formData.password === formData.confirmPassword && formData.password.length>0 && formData.confirmPassword.length>0){
            setPasswordError(false);
            enableSubmit()
        } else {
            setPasswordError(true);
            enableSubmit()
        }
    };

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.png')}
                         className="logoImg"
                         alt={strings.logoAlt}/>
                    <Typography component="h5" color="secondary" className="typo">
                        {strings.joinPlatform}
                    </Typography>
                    <form onSubmit={handleSubmit} className="registerForm">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color={"secondary"}
                            id="username"
                            label={strings.username}
                            name="username"
                            onChange={updateField}
                            onBlur={validateUsername}
                            error={usernameError}
                            helperText={errorMsg.usernameErrorMsg}
                            value={formData.username}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color={"secondary"}
                            id="email"
                            label={strings.emailAddress}
                            name="email"
                            onChange={updateField}
                            onBlur={validateEmail}
                            value={formData.email}
                            autoComplete={"email"}
                            error={emailError}
                            helperText={errorMsg.emailErrorMsg}
                        />
                        <TextField
                            color={"secondary"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={strings.password}
                            type="password"
                            id="password"
                            onChange={updateField}
                            onBlur={validatePasswords}
                            error={passwordError}
                            helperText={errorMsg.passwordErrorMsg}
                            value={formData.password}
                        />
                        <TextField
                            color={"secondary"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label={strings.confirmPassword}
                            type="password"
                            id="confirmPassword"
                            onChange={updateField}
                            value={formData.confirmPassword}
                            error={passwordError}
                            onBlur={validatePasswords}
                            helperText={errorMsg.passwordErrorMsg}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" disabled={btnDisable}>
                            {strings.signUp}
                        </Button>
                    </form>
                </div>
            </Container>
        </ThemeProvider>

    )
};
export default Register
