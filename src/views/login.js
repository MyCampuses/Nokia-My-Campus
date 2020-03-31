/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../styles/loginForm.css';
import strings from '../localization';
import API from '../hooks/ApiHooks';
import LocalStorageOperations from '../hooks/LocalStorageOperations';
import {Checkbox,Form,Button,Select,Input,Container} from 'semantic-ui-react'


import 'bootstrap/dist/css/bootstrap.min.css';
const Login = (props) => {
    const {loginAsync} = API();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const remember = true;
    const {create, read, clear, del} = LocalStorageOperations();



    const setBackground = () => {
        let root = document.getElementById('root-html');
        root.style.backgroundImage = "url(loginBackground.png)";
        root.style.backgroundSize = "cover";
        root.style.backgroundRepeat = "no-repeat";
        root.style.backgroundPosition = "center";
    };

    useEffect(() => {
       setBackground();
    });

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
                window.location.href = '/home';
                alert('Signed In!');
                if (remember) { // If Remember me is checked -> save users info to LocalStorage
                    let json = {username: result.username, token: result.token};
                    create(JSON.stringify(json), 'user');
                } else {
                    //TODO Navigate to Home
                }
            } else {
                alert('Failed to Sign In');
            }
        });
    };

    const validateEmail=()=>{
       let includes = email.includes("@nokia.com")
    };
    return (
        <div className="login">
            <Container>
            <img src={require('../assets/logo_mycampus.png')} alt={strings.logoAlt} className="logoImg"/>
            <p className="loginP">
                {strings.welcome}
            </p>
            <Form>
                <Form.Input
                    className="formInput"
                    control={Input}
                    label={strings.emailAddress}
                    placeholder={strings.emailAddress}
                    transparent
                    onChange={event => setEmail(event.target.value)}
                />
                <Form.Input
                    className="formInput"
                    control={Input}
                    label={strings.password}
                    placeholder={strings.password}
                    transparent
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                />
                <Form.Field className="formBtn">
                    <Button content={strings.signIn} primary onClick={handleSubmit}/>
                </Form.Field>

            </Form>

            </Container>
        </div>
    )
};

export default Login;
