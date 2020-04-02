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

    const handleSubmit = () =>{
        //TODO FORGOT PASSWORD LOGIC
    };

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.png')}
                         alt={strings.logoAlt} className="logoImg"/>
                    <Typography component="h5" color="secondary" className="typo">
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

                        <Button type="submit" fullWidth variant="contained" color="primary">
                            {strings.send}
                        </Button>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )
};

export default ForgotPassword;
