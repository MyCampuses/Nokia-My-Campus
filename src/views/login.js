/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../styles/App.css';
import {
    Button,
    FormControlLabel,
    Container,
    Typography,
    TextField, Checkbox,Grid,Link
} from '@material-ui/core'

import '../styles/loginForm.css';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import LocalStorageOperations from "../hooks/LocalStorageOperations";

const Login = (props) =>{
    const { loginAsync } = API();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const {create,read,clear,del} = LocalStorageOperations();

    const validateForm = () =>{

    };

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const loginData = {
            email: email,
            password:password
        };
        const json = loginAsync(loginData);
        console.log("JSON");
        json.then((result)=>{
            console.log(result);
            if (!result.errors){
                alert("Signed In!");
                let json ={username: result.username, token: result.token};
                create(JSON.stringify(json),"user")
                //TODO Navigate to Home
            } else {
                alert("Failed to Sign In")
            }
        })
    };


    return(
     <Container component="main" maxWidth="xs">
            <div className="login">
                <img src={require('../assets/logo_mycampus.png')} style={{width: "100%", height: "auto"}} alt="testasadsadas"/>
                <Typography component="h1" variant="h5">
                    {strings.signIn}
                </Typography>
                <form className="form" noValidate onSubmit={handleSubmit}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={strings.emailAddress}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label={strings.password}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember Me"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                        {strings.signIn}
                    </Button>
                    <Grid style={{padding: "1em"}}>
                        <Grid item xs style={{padding:"1em"}}>
                            <Link href="#">
                                {strings.forgotPass}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#">
                                {strings.noAccount}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
     </Container>
    )
};

export default Login;

