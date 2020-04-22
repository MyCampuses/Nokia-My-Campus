import React from 'react';
import {useRoutes} from 'hookrouter';
import Update from './Update'
import './styles/App.css';
import routes from './hooks/Routes';
import notificationStyles from './styles/notificationStyle';
const {updateAlert} = notificationStyles()

const App = () => {
  const routeResult = useRoutes(routes);

  return (
      <div className="App">
        {routeResult}
        <div className={updateAlert}>
          <Update/>
        </div>
      </div>
  );
};
export default App;
