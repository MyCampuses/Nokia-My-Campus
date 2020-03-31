import React from 'react';

import './styles/App.css';
import API from "./hooks/ApiHooks";
import routes from './hooks/Routes';
import { useRoutes } from 'hookrouter';
/* eslint-disable no-unused-vars */





const App=()=> {
  const { loginAsync } = API();
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {routeResult}
    </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
