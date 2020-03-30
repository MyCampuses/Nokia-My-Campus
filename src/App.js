import React from 'react';

import './styles/App.css';
import API from "./hooks/ApiHooks";
import Login from './views/login'
//import Home from './views/home'

/* eslint-disable no-unused-vars */





const App=()=> {
  const { loginAsync } = API();

  return (

    <div className="App">
      <Login/>
    </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
