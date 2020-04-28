/*
    This file contains everything needed for the forgot password page.
    basic state for the inputted email and passing url parameters for the reset password page.
    Also submit handling for getting the forgot password token from the server and the page
    layout
*/
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
import {navigate} from 'hookrouter';

const ForgotPassword = (props) => {
    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState('');
    const {forgotPassAsync} = API();
    // Sets background
    useEffect(()=>{
        setBackgroundBlue()
    },[]); //eslint-disable-line

    const handleSubmit = () =>{
        const submitData = {email: email};
        forgotPassAsync(submitData).then((response)=>{
            if (response.status === 200){ // If response is OK user can be notified and moved to the next screen
                alert(strings.sentVerification); // Alerts the user that the verification token was send
                navigate('/reset_password',false, submitData) // Submit data is given as url parameters
            } else {
                alert(strings.requestError) // Generic error since the API doesn't return a json with errors
            }
        });
    };

    return (
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.webp')}
                         alt={strings.logoAlt} className="logoImg"/>
                    <Typography component="h5" color="secondary" className="typo" style={{paddingTop:"1rem"}}>
                        {strings.enterEmail}
                    </Typography>
                    <form noValidate onSubmit={handleSubmit} className="forgotPassform">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color={"secondary"}
                            id="email"
                            label={strings.emailAddress}
                            name="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            autoComplete={"email"}
                        />
                        <Button onClick={()=>{handleSubmit()}} fullWidth variant="contained" color="primary">
                            {strings.send}
                        </Button>
                        <Grid style={{padding: '1em'}}>
                            <Grid item xs style={{padding: '1em'}}>
                                <Link
                                    onClick={() => {window.location.href = '/login';}}>
                                    {strings.backToLogin}
                                </Link>
                            </Grid>
                            <Grid item xs >
                                <Link
                                    onClick={() => {window.location.href = '/verify_account';}}>
                                    {strings.toPasswordReset}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )
};

export default ForgotPassword;
