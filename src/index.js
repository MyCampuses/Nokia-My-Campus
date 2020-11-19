/*
    This file handles that the app is placed inside the index.html
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CssBaseline} from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Data from './hooks/Data'
import {applyMiddleware, createStore} from 'redux';
import RootReducer from './hooks/RootReducer';
import thunk from 'redux-thunk';
const {SW_INIT, SW_UPDATE} = Data();
const store = createStore(RootReducer,
    applyMiddleware(thunk));

ReactDOM.render(
    // Provider makes redux store available to any nested component
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => store.dispatch({type: SW_INIT}),
  onUpdate: registration => store.dispatch(
      {type: SW_UPDATE, payload: registration}),
});