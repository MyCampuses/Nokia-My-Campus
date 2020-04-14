/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Button,
  Container,
  ThemeProvider,
  Typography,
  TextField, Grid, Link,
} from '@material-ui/core';
import MuiThemes from '../styles/muiThemes';
import '../styles/form.css';
import strings from '../localization';
import API from '../hooks/ApiHooks';
import LocalStorageOperations from '../hooks/LocalStorageOperations';
import Authentication from '../hooks/Authentication';

const Login = (props) => {
  const {loginAsync} = API();
  const {FormTheme, setBackgroundBlue} = MuiThemes();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const {create, read, clear, del} = LocalStorageOperations();
  const {redirectFromLogin} = Authentication();

  // Sets the pages background
  useEffect(() => {
      setBackgroundBlue();
  });
  // Redirects to home if the user has already signed in
  useEffect(()=>{
      redirectFromLogin()
  });

  useEffect(()=>{
    let seconds = 1586269154004;
    let date = new Date(seconds)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    console.log(hours +":"+ minutes)
  });

  // Handles login submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginData = { // Gets data from the states
      email: email,
      password: password,
    };
    const json = loginAsync(loginData);
    console.log('JSON');
    json.then((result) => {
      console.log(result);
      if (!result.errors) { // Check if the result contains errors
        //alert('Signed In!');
        if (remember) { // If Remember me is checked -> save users info to LocalStorage. Remember me atm is defaulted to true
          let json = {username: result.username, token: result.token};
          create(JSON.stringify(json), 'user'); // Saves the users information as a json string inside LocalStorage
          window.location.href = '/home';
        } else {
          window.location.href = '/home';
        }
      } else {
        alert('Failed to Sign In'); // Alerts the user that the sign in failed
        //TODO Add error response from server to alert
      }
    });
  };

  return (
      <ThemeProvider theme={FormTheme}>
        <Container component='main' maxWidth="xs">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <img src={require('../assets/logo_mycampus.png')}
                   alt={strings.logoAlt} className="logoImg"/>
              <Typography component="h5" color="secondary" className="typo" style={{paddingTop:"1rem"}}>
                {strings.welcome}
              </Typography>
              <Typography component="h1" variant="h5" color={'secondary'}
                          className="typo" style={{paddingTop:"1rem"}}>
                {strings.signIn}
              </Typography>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  color={'secondary'}
                  id="email"
                  label={strings.emailAddress}
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                  autoComplete={'email'}
                  autoFocus
              />
              <TextField
                  color={'secondary'}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={strings.password}
                  type="password"
                  id="password"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
              />
              <Button type="submit" fullWidth variant="contained"
                      color="primary">
                {strings.signIn}
              </Button>
              <Grid style={{padding: '1em'}}>
                <Grid item xs style={{padding: '1em'}}>
                  <Link
                      onClick={() => {window.location.href = '/forgot_password';}}>
                    {strings.forgotPass}
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => {window.location.href = '/register';}}>
                    {strings.noAccount}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </ThemeProvider>
  );
};

export default Login;
