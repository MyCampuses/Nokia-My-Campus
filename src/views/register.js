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
    const [userErrorMsg,setUserErrorMsg]= useState("")
    const [emailErrorMsg,setEmailErrorMsg]=useState("")
    const [passwordErrorMsg, setPasswordErrorMsg]=useState("")

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
            setUserErrorMsg("")
            enableSubmit()
        }
        else {
            setUsernameError(true);
            setUserErrorMsg(strings.usernameError)
            enableSubmit()
        }
    };

    const validateEmail = () =>{
        const emailReqEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
        if (emailReqEx.test(formData.email)){
            setEmailError(false);
            setEmailErrorMsg("")
            enableSubmit()
        } else {
            setEmailError(true);
            setEmailErrorMsg(strings.pleaseEnterEmail)
            enableSubmit()
        }
    };

    const validatePasswords = () => {
        if (formData.password === formData.confirmPassword && formData.password.length !==0 && formData.confirmPassword.length!==0){
            setPasswordError(false);
            setPasswordErrorMsg("")
            enableSubmit()
        } else {
            setPasswordError(true);
            setPasswordErrorMsg(strings.passwordError)
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
                            helperText={userErrorMsg}
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
                            helperText={emailErrorMsg}
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
                            helperText={passwordErrorMsg}
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
                            helperText={passwordErrorMsg}
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
