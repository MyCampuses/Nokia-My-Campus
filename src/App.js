import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import ServiceWorkerWrapper from './hooks/ServiceWorkerWrapper';

const App = () => {
    const routeResult = useRoutes(routes);
    return (
        <div className="App">
            {routeResult}
            {ServiceWorkerWrapper()}
        </div>
    );
};
export default App;
