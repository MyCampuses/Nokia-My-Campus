import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import API from "./hooks/ApiHooks";
import Login from './views/login'

/* eslint-disable no-unused-vars */





const App=()=> {
  const { loginAsync } = API();

  return (

    <div className="App">
      <Login/>
    </div>
  );
}
/* eslint-enable no-unused-vars */
export default App;
