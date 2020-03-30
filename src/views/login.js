/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {
    Button,
    FormControlLabel,
    Container,
    ThemeProvider,
    Typography,
    TextField, Checkbox, Grid, Link, withStyles, createMuiTheme
} from '@material-ui/core'

import '../styles/loginForm.css';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import LocalStorageOperations from "../hooks/LocalStorageOperations";
import {blue} from "@material-ui/core/colors";

const Login = (props) => {
    const {loginAsync} = API();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const remember = true
    const {create, read, clear, del} = LocalStorageOperations();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loginData = {
            email: email,
            password: password
        };
        const json = loginAsync(loginData);
        console.log("JSON");
        json.then((result) => {
            console.log(result);
            if (!result.errors) { // Check if the result contains errors
                alert("Signed In!");
                if (remember) { // If Remember me is checked -> save users info to LocalStorage
                    let json = {username: result.username, token: result.token};
                    create(JSON.stringify(json), "user")
                    //TODO Navigate to home
                } else {
                    //TODO Navigate to Home
                }
            } else {
                alert("Failed to Sign In")
            }
        })
    };

    const StyledBody = styled.div`
    background: url('loginBackground.png');
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;`;

    const FormTheme = createMuiTheme({
        palette: {
            primary: {
                main: blue[300]
            },
            secondary: {
                main: blue[50]
            },
        },
        typography: {
            fontSize: 12,
            button: {
                fontSize: 16,
                color: "#FFFFFF"
            }
        },
        overrides: {
            MuiOutlinedInput: {
                root: {
                    position: "relative",
                    "& $notchedOutline": {
                        borderColor: blue[50]
                    },
                    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                        borderColor: blue[50],
                        // Reset on touch devices, it doesn't add specificity
                        "@media (hover: none)": {
                            borderColor: blue[50]
                        }
                    },
                    "&$focused $notchedOutline": {
                        borderColor: blue[50],
                        borderWidth: 1
                    }
                }
            },
            MuiFormLabel: {
                root: {
                    // "&$focused": {
                    color: blue[50]
                    // }
                }
            },
            MuiButton:{
                containedPrimary:{
                    color:blue[50],
                    marginTop: "1em"
                },
            }
        }
    });

    return (
        <ThemeProvider theme={FormTheme}>
            <StyledBody>
                <Container component="main" maxWidth="xs">
                    <div className="login">
                        <img src={require('../assets/logo_mycampus.png')} style={{width: "100%", height: "auto"}}
                             alt={strings.logoAlt}/>
                        <Typography component="h5" color="secondary" className="typo">
                            {strings.welcome}
                        </Typography>
                        <Typography component="h1" variant="h5" color={"secondary"} className="typo">
                            {strings.signIn}
                        </Typography>
                        <form className="form" noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                color={"secondary"}
                                id="email"
                                label={strings.emailAddress}
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={event => setEmail(event.target.value)}/>
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
                                autoComplete="current-password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}/>
                            <Button type="submit" fullWidth variant="contained" color="primary" className="submitBtn">
                                {strings.signIn}
                            </Button>
                            <Grid style={{padding: "1em"}}>
                                <Grid item xs style={{padding: "1em"}}>
                                    <Link href="#" color="primary">
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
            </StyledBody>
        </ThemeProvider>
    )
};

export default Login;
