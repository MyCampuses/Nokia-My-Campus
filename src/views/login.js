/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {
    Button,
    FormControlLabel,
    Container,
    ThemeProvider,
    Typography,
    TextField, Checkbox, Grid, Link, createMuiTheme,
} from '@material-ui/core';

import '../styles/loginForm.css';
import strings from '../localization';
import API from '../hooks/ApiHooks';
import LocalStorageOperations from '../hooks/LocalStorageOperations';
import {blue} from '@material-ui/core/colors';

const Login = (props) => {
    const {loginAsync} = API();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const {create, read, clear, del} = LocalStorageOperations();


    const setBackground = () => {
        let root = document.getElementById('root-html');
        root.style.backgroundImage = "url(loginBackground.png)";
       // root.style.backgroundColor="#0d47a1"
        root.style.backgroundSize = "cover";
        root.style.backgroundRepeat = "no-repeat";
        root.style.backgroundPosition = "fixed";
    };


    useEffect(() => {
       setBackground();
    });

    const handleKeyboard = () =>{
        window.scrollTo(0,0);
        document.body.scrollTop = 0;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loginData = {
            email: email,
            password: password,
        };
        const json = loginAsync(loginData);
        console.log('JSON');
        json.then((result) => {
            console.log(result);
            if (!result.errors) { // Check if the result contains errors
                //alert('Signed In!');
                if (remember) { // If Remember me is checked -> save users info to LocalStorage
                    let json = {username: result.username, token: result.token};
                    create(JSON.stringify(json), 'user');
                    window.location.href = '/home';
                } else {
                    window.location.href = '/home';
                }
            } else {
                alert('Failed to Sign In');
            }
        });
    };
    const FormTheme = createMuiTheme({
        palette: {
            primary: {
                main: blue[500],
            },
            secondary: {
                main: blue[50],
            },
        },
        typography: {
            fontSize: 12,
            button: {
                fontSize: 16,
            },
        },
        overrides: {
            MuiOutlinedInput: {
                root: {
                    position: 'relative',
                    '& $notchedOutline': {
                        borderColor: blue[50],
                    },
                    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                        borderColor: blue[50],
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            borderColor: blue[50],
                        },
                    },
                    '&$focused $notchedOutline': {
                        borderColor: blue[50],
                        borderWidth: 1,
                    },
                },
            },
            MuiInputBase:{
                input:{
                    color:blue[50]
                }
            },
            MuiFormLabel: {
                root: {
                    // "&$focused": {
                    color: blue[50],
                    // }
                },
            },
            MuiButton: {
                containedPrimary: {
                    color: blue[50],
                    marginTop: '0.5em',
                },
            },
            MuiCheckbox:{
                colorPrimary:{
                    color:blue[50]
                },
            },
            MuiTypography:{
                body1:{
                    color:blue[50]
                }
            }
        },
    });

    return (
        <ThemeProvider theme={FormTheme}>
            <Container component='main' maxWidth="xs">
                <div className="login">
                    <img src={require('../assets/logo_mycampus.png')}
                         style={{
                             width: '100%',
                             height: 'auto',
                             paddingTop: '20px',
                         }}
                         alt={strings.logoAlt}/>
                    <Typography component="h5" color="secondary" className="typo">
                        {strings.welcome}
                    </Typography>
                    <Typography component="h1" variant="h5" color={'secondary'}
                                className="typo">
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
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            autoFocus
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
                            autoComplete="current-password"
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                        />
                        <FormControlLabel
                            control={<Checkbox value={remember} color="primary" onChange={event => setRemember(event.target.checked)}/>}
                            label={strings.rememberMe}/>
                        <Button type="submit" fullWidth variant="contained" color="primary">
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
        </ThemeProvider>
    )
};

export default Login;
