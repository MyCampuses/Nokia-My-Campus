import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import UpdateApp from './Update';
import routes from './hooks/Routes';

const App = () => {
  const routeResult = useRoutes(routes);

  return (
      <div className="App">
        {routeResult}
        <UpdateApp/>
      </div>
  )
  ;
};
export default App;
