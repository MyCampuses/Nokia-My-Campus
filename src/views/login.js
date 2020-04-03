/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  FormControlLabel,
  Container,
  ThemeProvider,
  Typography,
  TextField, Checkbox, Grid, Link,
} from '@material-ui/core';
import MuiThemes from '../styles/muiThemes';
import '../styles/form.css';
import strings from '../localization';
import API from '../hooks/ApiHooks';
import LocalStorageOperations from '../hooks/LocalStorageOperations';
import Authentication from '../hooks/Authentication';

const Login = (props) => {
  const {loginAsync, checkUserLogged} = API();
  const {FormTheme, setBackgroundBlue} = MuiThemes();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const {create, read, clear, del} = LocalStorageOperations();


  useEffect(() => {
      setBackgroundBlue();
  });
  // Check if user is logged in to redirect to Home


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

  return (
      <ThemeProvider theme={FormTheme}>
        <Container component='main' maxWidth="xs">
          <div className="form">
            <img src={require('../assets/logo_mycampus.png')}

                 alt={strings.logoAlt} className="logoImg"/>
            <Typography component="h5" color="secondary" className="typo">
              {strings.welcome}
            </Typography>
            <Typography component="h1" variant="h5" color={'secondary'}
                        className="typo">
              {strings.signIn}
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
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
              <FormControlLabel
                  control={<Checkbox value={remember} color="primary"
                                     onChange={event => setRemember(
                                         event.target.checked)}/>}
                  label={strings.rememberMe}/>
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
