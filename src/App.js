import React from 'react';

import './styles/App.css';
import API from "./hooks/ApiHooks";
import Login from './views/login'
import P5 from './views/p5';

/* eslint-disable no-unused-vars */





const App=()=> {
  const { loginAsync } = API();

  return (

    <div className="App">
      <P5/>
    </div>
  );
}
/* eslint-enable no-unused-vars */
export default App;
