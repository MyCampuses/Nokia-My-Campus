import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./hooks/ApiHooks";

/* eslint-disable no-unused-vars */





function App() {
  const { loginAsync } = API();

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          Testing Dev
        </h1>
        <h1>
          Another Test
        </h1>
        <h1>
          Pipe Test
        </h1>
        <h1>
          PWA App Tes
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
/* eslint-enable no-unused-vars */
export default App;
