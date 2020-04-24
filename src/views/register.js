/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import MuiThemes from '../styles/muiThemes'
import {
    Button,
    Container,
    ThemeProvider,
    Typography,
    TextField, Grid, Link,
} from '@material-ui/core';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import {navigate} from 'hookrouter';

const Register = (props) =>{
    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [btnDisable,setBtnDisable] = useState(true);
    const {registerAsync} = API();

    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [formErrors, setFormErrors] = useState({
        usernameError: false,
        emailError: false,
        passwordError: false,
        confirmPasswordError: false
    });

    const [formErrorMessages, setFormErrorMessages] = useState({
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    // Enables the submit button when all the values have been input and are not empty
    const enableSubmit = () => {
        if (formData.email.length>0 && formData.password.length>0 && formData.confirmPassword.length>0 &&formData.username.length>0){
            if (!formErrors.emailError && !formErrors.resetTokenError && !formErrors.passwordError && !formErrors.confirmPasswordError) {
                setBtnDisable(false)
            } else {
                setBtnDisable(true)
            }
        } else {
            setBtnDisable(true)
        }
    };
    // Updates given error with a new message. "" message means no error
    const updateErrorMsg = (error, message) => {
        setFormErrorMessages({
            ...formErrorMessages,
            [error]: message
        })
    };
    // Updates given error with the given boolean
    const updateError = (error, bool) => {
        setFormErrors({
            ...formErrors,
            [error]: bool
        });
        enableSubmit()
    };

    // Updates the fields json according to the inputted information
    const updateField =e=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Sets background
    useEffect(()=>{
        setBackgroundBlue()
    });

    useEffect(()=>{
        enableSubmit()
    });

    // Handles the registering submit
    const handleSubmit = () =>{
        const submitData = {
            email: formData.email,
            name: formData.username,
            password: formData.password
        };
        registerAsync(submitData).then((result)=>{
            if (result.status === 200){  // OK response means that registering went through with the API so the
                // user can be notified that it was successful and user can be navigated to the next screen
                alert(strings.registeringSuccess);
                navigate('/verify_account',false,{email:submitData.email})
            } else {
                result.json().then((json)=>{ // Server returns one error so that is read and displayed to the user
                    const errors = json.errors;
                    let errorStr = errors[0].msg;
                    alert(errorStr)
                });
            }
        })
    };

    // Validates username input. Has to be between 2-20 characters
    // Also sets the errors accordingly
    const validateUsername = () =>{
        const uNameError ="usernameError";
        if (formData.username.length >= 2 && formData.username.length <= 20) {
            updateError(uNameError,false);
            updateErrorMsg(uNameError,"");
        }
        else {
            updateError(uNameError,true);
            updateErrorMsg(uNameError,strings.usernameError);
        }
    };

    // Validates Email input to match a "real" email. Also sets errors accordingly
    const validateEmailField = () => {
        const emailReqEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
        const emailError = "emailError"
        if (emailReqEx.test(formData.email)) {
            updateError(emailError, false);
            updateErrorMsg(emailError, "");
        } else {
            updateError(emailError, true);
            updateErrorMsg(emailError,strings.pleaseEnterEmail)
        }
    };
    // Validates password to be at least 5 characters long
    const validatePassword = () => {
        const pwdError = "passwordError";
        if (formData.password.length < 5) {
            updateError(pwdError, true);
            updateErrorMsg(pwdError, strings.passwordLengthError);
        } else {
            updateError(pwdError, false);
            updateErrorMsg(pwdError, "")
        }
    };
    // Checks so that password and confirm password match
    const validateConfirmPassword = () => {
        const confPwdError = "confirmPasswordError";
        if (formData.password === formData.confirmPassword && formData.password.length >=5) {
            updateError(confPwdError, false);
            updateErrorMsg(confPwdError, "");
        } else {
            updateError(confPwdError, true);
            updateErrorMsg(confPwdError, strings.passwordError);
        }
    };

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.webp')}
                         className="logoImg"
                         alt={strings.logoAlt}/>
                    <Typography component="h5" color="secondary" className="typo" style={{paddingTop:"1rem"}}>
                        {strings.joinPlatform}
                    </Typography>
                    <form className="registerForm">
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
                            error={formErrors.usernameError}
                            helperText={formErrorMessages.usernameError}
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
                            onBlur={validateEmailField}
                            error={formErrors.emailError}
                            helperText={formErrorMessages.emailError}
                            value={formData.email}
                            autoComplete={"email"}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            color={"secondary"}
                            id="password"
                            label={strings.password}
                            name="password"
                            onChange={updateField}
                            onBlur={validatePassword}
                            error={formErrors.passwordError}
                            helperText={formErrorMessages.passwordError}
                            value={formData.password}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            color={"secondary"}
                            id="confirmPassword"
                            label={strings.confirmPassword}
                            name="confirmPassword"
                            onChange={updateField}
                            onBlur={validateConfirmPassword}
                            error={formErrors.confirmPasswordError}
                            helperText={formErrorMessages.confirmPasswordError}
                            value={formData.confirmPassword}
                        />
                        <Button fullWidth variant="contained" color="primary" disabled={btnDisable} onClick={()=>{handleSubmit()}}>
                            {strings.signUp}
                        </Button>
                        <Grid style={{padding: '1em'}}>
                            <Grid item xs style={{padding: '1em'}}>
                                <Link
                                    onClick={() => {window.location.href = '/login';}}>
                                    {strings.backToLogin}
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link
                                    onClick={() => {window.location.href = '/reset_password';}}>
                                    {strings.toConfirmation}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )
};
export default Register
