/* eslint-disable no-unused-vars */
import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import Authentication from './hooks/Authentication';


const App = () => {
    const {isLoggedIn} = Authentication();
    const routeResult = useRoutes(routes);

    return (
        <div className="App">
            {routeResult}
        </div>
    );
};
/* eslint-enable no-unused-vars */
export default App;
