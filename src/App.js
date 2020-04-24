import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import Update from './Update';

const App = () => {
  const routeResult = useRoutes(routes);
  // Update component is used with App-div to enable serviceworker automatic updates
  // routeResult handles the navigation using hookrouter, check Routes.js for editing
  return (
      <div className="App">
        <Update/>
        {routeResult}
      </div>
  )
  ;
};
export default App;
