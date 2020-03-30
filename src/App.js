import React from 'react';

import './styles/App.css';
import API from "./hooks/ApiHooks";
import Login from './views/login'
import P10 from "./views/p10";

/* eslint-disable no-unused-vars */





const App=()=> {
  const { loginAsync } = API();

  return (

    <div className="App">
      <P10/>
    </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
