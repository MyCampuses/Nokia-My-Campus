/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import './styles/App.css';
import routes from './hooks/Routes';
import {useRoutes, navigate} from 'hookrouter';
import Authentication from './hooks/Authentication';
import LocalStorageOperations from './hooks/LocalStorageOperations';

const App = (props) => {
  const routeResult = useRoutes(routes);
  const [user, setUser] = useState(null);

  return (
      <div className="App">
        {routeResult}
      </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
