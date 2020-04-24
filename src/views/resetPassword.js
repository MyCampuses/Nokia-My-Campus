/* eslint-disable no-unused-vars */
import MuiThemes from '../styles/muiThemes'
import React, {useState, useEffect} from 'react';
import {
    Button,
    Container,
    ThemeProvider,
    Typography,
    TextField, Grid, Link,
} from '@material-ui/core';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import {useQueryParams} from 'hookrouter';

const ResetPassword = (props) => {

    const {FormTheme, setBackgroundBlue} = MuiThemes();
    const {resetPasswordAsync} = API();
    const [btnDisable, setBtnDisable] = useState(true);
    const [queryParams] = useQueryParams();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        resetToken: ""
    });

    const [formErrors, setFormErrors] = useState({
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        resetTokenError: false
    });

    const [formErrorMessages, setFormErrorMessages] = useState({
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        resetTokenError: "",
    });
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
        enableSubmit() // Called here because form errors are updated with this method
    };
    // Updates data based on the onChange event
    const updateField = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        setBackgroundBlue()
    });

    useEffect(() => { //eslint-disable-line
        const {
            // Use object destructuring and a default value
            // if the param is not yet present in the URL.
            email = ""
        } = queryParams;
        setFormData({
            ...formData,
            email: queryParams.email
        })
    }, [formData.email, queryParams.email]); // eslint-disable-line

    const handleSubmit = () => {
        const submitData = {
            email: formData.email,
            password: formData.password,
            passwordConfirm: formData.confirmPassword,
            resetToken: formData.resetToken
        };
        resetPasswordAsync(submitData).then((response) => {
            if (response.status === 200) {
                // Was successful. Inform user and navigate to login
                window.location.href = '/login';
                alert(strings.passwordWasReset); // Display message that password recet was successful
            } else {
                alert(strings.requestError) // Generic error since there is no error from the server
            }
        })
    };
    // Enables submit button if the fields are note empty and there is no errors in the form
    const enableSubmit = () => {
        if (formData.email.length>0 && formData.password.length>0 && formData.confirmPassword.length>0 &&formData.resetToken.length>0){
            if (!formErrors.emailError && !formErrors.resetTokenError && !formErrors.passwordError && !formErrors.confirmPasswordError) {
                setBtnDisable(false)
            } else {
                setBtnDisable(true)
            }
        } else {
            setBtnDisable(true)
        }
    };
    // Validates email input
    const validateEmailField = () => {
        const emailReqEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
        const emailError = "emailError"
        if (emailReqEx.test(formData.email)) {
            updateError(emailError, false);
            updateErrorMsg(emailError, "");
        } else {
            updateError(emailError, true);
            updateErrorMsg(strings.pleaseEnterEmail)
        }
    };
    // Checks the password to be at least 5 characters
    const validatePassword = () => {
        const pwdError = "passwordError";
        if (formData.password.length < 5) {
            updateError(pwdError, true);
            updateErrorMsg(pwdError, strings.passwordLengthError)
        } else {
            updateError(pwdError, false);
            updateErrorMsg(pwdError, "")
        }
    };
    // Checks that the passwords match
    const validateConfirmPassword = () => {
        const confPwdError = "confirmPasswordError";
        if (formData.password === formData.confirmPassword && formData.password.length >= 5) {
            updateError(confPwdError, false);
            updateErrorMsg(confPwdError, "");
        } else {
            updateError(confPwdError, true);
            updateErrorMsg(confPwdError, strings.passwordError);
        }
    };
    // Just checks that the token field is not left empty
    const validateTokenField = () => {
        const tokenError = "resetTokenError";
        if (formData.resetToken.length < 0) {
            updateError(tokenError, true);
            updateErrorMsg(tokenError, strings.cannotBeEmpty)
        } else {
            updateError(tokenError, false)
            updateErrorMsg(tokenError, "")
        }
    };

    return (
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.webp')}
                         alt={strings.logoAlt} className="logoImg"/>
                    <Typography component="h5" color="secondary" className="typo" style={{paddingTop: "1rem"}}>
                        {strings.resetPasswordText}
                    </Typography>
                    <form noValidate className="forgotPassform">
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color={"secondary"}
                            id="resetToken"
                            label={strings.resetToken}
                            name="resetToken"
                            onChange={updateField}
                            onBlur={validateTokenField}
                            error={formErrors.resetTokenError}
                            helperText={formErrorMessages.resetTokenError}
                            value={formData.resetToken}
                        />
                        <Button fullWidth variant="contained" color="primary" disabled={btnDisable} onClick={() => {
                            handleSubmit()
                        }}>
                            {strings.send}
                        </Button>
                        <Grid style={{padding: '1em'}}>
                            <Grid item xs style={{padding: '1em'}}>
                                <Link
                                    onClick={() => {
                                        window.location.href = '/login';
                                    }}>
                                    {strings.backToLogin}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )

};
export default ResetPassword;
