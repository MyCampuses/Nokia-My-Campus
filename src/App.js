import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';

const App = () => {
  const routeResult = useRoutes(routes);

  return (
      <div className="App">
        {routeResult}
      </div>


)
  ;
};
export default App;
