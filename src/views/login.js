/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../styles/loginForm.css';
import strings from '../localization';
import API from '../hooks/ApiHooks';
import LocalStorageOperations from '../hooks/LocalStorageOperations';
import {Checkbox,Form,Button,Select,Input,Container} from 'semantic-ui-react'

const Login = (props) => {
    const {loginAsync} = API();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
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
                alert('Signed In!');
                if (remember) { // If Remember me is checked -> save users info to LocalStorage
                    let json = {username: result.username, token: result.token};
                    create(JSON.stringify(json), 'user');
                    //TODO Navigate to home
                } else {
                    //TODO Navigate to Home
                }
            } else {
                alert('Failed to Sign In');
            }
        });
    };

    const validateEmail=()=>{

    };
    return (
        <div className="login">
            <Container>
            <img src={require('../assets/logo_mycampus.png')} alt={strings.logoAlt} className="logoImg"/>
            <p className="loginP">
                {strings.welcome}
            </p>
            <Form>
                <Form.Field
                    className="formInput"
                    control={Input}
                    label={strings.emailAddress}
                    placeholder={strings.emailAddress}

                />
                <Form.Field
                    className="formInput"
                    control={Input}
                    label={strings.password}
                    placeholder={strings.password}
                    type="password"
                />
                <Form.Field>
                    <Checkbox label={strings.rememberMe} onChange={(event, data) => setRemember(data.checked)}/>
                </Form.Field>
                <Form.Field>
                    <Button content={strings.signIn} primary onClick={handleSubmit}/>
                </Form.Field>
            </Form>
            </Container>
        </div>
    )
};

export default Login;
