/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/App.css';
import {
    Button,
    FormControlLabel,
    Container,
    Typography,
    CssBaseline,
    Avatar,
    TextField, Checkbox,Grid,Link
} from '@material-ui/core'
import {LockOutlined} from '@material-ui/icons'
import '../styles/loginForm.css';
import strings from "../localization";

const Login = (props) =>{

    const validateForm = () =>{
    };

    const handleSubmit=()=>{

    };

    return(
     <Container component="main" maxWidth="xs">
            <div className="login">
                <img src={require('../assets/logo_mycampus.png')} style={{width: "100%", height: "auto"}}/>
                <Typography component="h1" variant="h5">
                    {strings.signIn}
                </Typography>
                <form className="form" noValidate>
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
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember Me"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" action={handleSubmit}>
                        {strings.signIn}
                    </Button>
                    <Grid container>
                        <Grid item xs>
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

