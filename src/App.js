/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import './styles/App.css';
import {useRoutes, useRedirect} from 'hookrouter';
import routes from "./hooks/Routes";
import Authentication from "./hooks/Authentication";

const App = (props) => {
    console.log("app start");
    const routeResult = useRoutes(routes);
    const {getUser} = Authentication();

    return (
        routeResult
    );
};

/* eslint-enable no-unused-vars */
export default App;
