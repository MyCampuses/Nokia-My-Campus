/* eslint-disable no-unused-vars */
import MuiThemes from '../styles/muiThemes'
import React, {useState, useEffect, useRef} from 'react';
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

const ResetPassword = (props) => {
    console.log(props);
    const [passwordError, setPasswordError] =useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg]=useState("");
    const {FormTheme,setBackgroundBlue} = MuiThemes();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetToken, setResetToken] = useState('');
    const {resetPasswordAsync} = API();
    const [btnDisable,setBtnDisable] = useState(true);

    useEffect(()=>{
        setBackgroundBlue()
    });

    useEffect(()=>{
        enableSubmit()
    });

    const handleSubmit = () =>{
            const submitData = {email: email, password: password, passwordConfirm: confirmPassword, resetToken:resetToken};
            resetPasswordAsync(submitData).then((response)=>{
                if (response.status === 200){
                    // Was successful. Inform user and navigate to login
                    window.location.href = '/login';
                    alert(strings.passwordWasReset);
                } else {
                    alert(strings.requestError)
                }
            })
    };

    const validatePassword = () => {
        if (password === confirmPassword && password.length !==0 && confirmPassword.length!==0){
            setPasswordError(false);
            setPasswordErrorMsg("");
            enableSubmit()
        } else {
            setPasswordError(true);
            setPasswordErrorMsg(strings.passwordError);
            enableSubmit()
        }
    };

    const enableSubmit = () => {
        if (!passwordError && email.length>0 && resetToken.length>0){
            setBtnDisable(false)
        }  else {
            setBtnDisable(true)
        }
    };

    return(
        <ThemeProvider theme={FormTheme}>
            <Container component="main" maxWidth="xs">
                <div className="form">
                    <img src={require('../assets/logo_mycampus.webp')}
                         alt={strings.logoAlt} className="logoImg"/>
                    <Typography component="h5" color="secondary" className="typo" style={{paddingTop:"1rem"}}>
                        {strings.resetPasswordText}
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            color={"secondary"}
                            id="password"
                            label={strings.password}
                            error={passwordError}
                            helperText={passwordErrorMsg}
                            name="password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            onBlur={validatePassword}
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
                            error={passwordError}
                            helperText={passwordErrorMsg}
                            name="confirmPassword"
                            onBlur={validatePassword}
                            onChange={event => setConfirmPassword(event.target.value)}
                            value={confirmPassword}
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
                            onChange={event => setResetToken(event.target.value)}
                            value={resetToken}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" disabled={btnDisable}>
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
export default ResetPassword;
