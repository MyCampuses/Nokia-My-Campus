/* eslint-disable no-unused-vars */
import MuiThemes from '../styles/muiThemes'
import React, {useState, useEffect} from 'react';
import {
    Button,
    Container,
    ThemeProvider,
    Typography,
    TextField, Checkbox, Grid, Link,
} from '@material-ui/core';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import {navigate} from 'hookrouter';


const AccountVerification = (props) =>{

    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    // Sets background
    useEffect(()=>{
        setBackgroundBlue()
    },[]); //eslint-disable-line

    const handleSubmit = () =>{

    };

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.webp')}
                         alt={strings.logoAlt} className="logoImg"/>
                    <Typography component="h5" color="secondary" className="typo" style={{paddingTop:"1rem"}}>
                        {strings.userVerification}
                    </Typography>
                    <form noValidate onSubmit={handleSubmit}>
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color={"secondary"}
                            id="token"
                            label={strings.verificationToken}
                            name="token"
                            onChange={event => setToken(event.target.value)}
                            value={token}
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
                            <Grid>
                                <Link onClick={()=>{}}>
                                    {strings.resend}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    )
};
export default AccountVerification
