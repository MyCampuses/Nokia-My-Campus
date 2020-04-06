/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {useRoutes, useRedirect,navigate} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import Authentication from './hooks/Authentication';
import Login from "./views/login";
import Home from './views/home';


const App = () => {
  const {isLoggedIn} = Authentication();
  const routeResult = useRoutes(routes);
  //useRedirect('/login','/home', );


  return (
      <div className="App">
          {routeResult}
      </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
