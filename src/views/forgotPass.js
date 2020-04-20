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
import API from "../hooks/ApiHooks";

import {navigate} from 'hookrouter';
import ResetPassword from "./resetPassword";

const ForgotPassword = (props) => {
    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState('');
    const {forgotPassAsync} = API();
    // Sets background
    useEffect(()=>{
        setBackgroundBlue()
    },[]); //eslint-disable-line



    const handleSubmit = () =>{
        //TODO FORGOT PASSWORD LOGIC
        const submitData = {userEmail: email};
        forgotPassAsync(submitData).then((json)=>{
            if (json.statusCode === 200){
                /*Server responds with a success
                  so the user has received the email with their reset token.
                  Can navigate to the reset password screen*/
                navigate('/reset_password',false, submitData)
            } else { // Request wasn't successful. Communicate to user
                alert(strings.requestError)
            }
        });


    };

    return(
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
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )
};

export default ForgotPassword;
