/*
    This file contains the view for the home page.
    Importing some elements from other files
 */
/* eslint-disable no-unused-vars */
import MuiThemes from '../styles/muiThemes'
import React, {useState, useEffect} from 'react';
import {
    Button,
    Container,
    ThemeProvider,
    Typography,
    TextField,  Grid, Link,
} from '@material-ui/core';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import {useQueryParams} from 'hookrouter';
import LocalStorageOperations from "../hooks/LocalStorageOperations";

const AccountVerification = (props) =>{

    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const {confirmAccountAsync,resendEmailAsync} = API();
    const {create} = LocalStorageOperations();
    const [queryParams] = useQueryParams();



    // Sets background
    useEffect(()=>{
        setBackgroundBlue()
    },[]); //eslint-disable-line

    useEffect(()=>{//eslint-disable-line
        const {
            // Use object destructuring and a default value
            // if the param is not yet present in the URL.
            email = ''
        } = queryParams;

        setEmail(queryParams.email)
    },[queryParams.email]); // eslint-disable-line

    const handleSubmit = () =>{
        const submitData = {
            email: email,
            token:token
        };
        
        confirmAccountAsync(submitData).then((result)=>{
            if (result.status===200){
                alert("Account confirmation was successful!");
                result.json().then((data)=>{
                    const user = {username: data.username,token:data.token};
                    create(JSON.stringify(user), 'user'); // Saves the users information as a json string inside LocalStorage
                    window.location.href = '/home';
                });
            } else {
                alert("Confirmation Failed")
            }
        });
    };

    const resendEmail = () => {
        resendEmailAsync({email:email}).then((result)=>{
            if(result.status===200){
                alert("Verification token was sent to your email")
            } else {
                alert("Email wasn't sent. Make sure your email is correct in the Email field.")
            }
        })
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
                                <Link onClick={()=>{resendEmail()}}>
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
