import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Update from './Update';
import {CssBaseline} from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Data from './hooks/Data'
import configureStore from './hooks/Store';
const {SW_INIT, SW_UPDATE} = Data();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>,
    document.getElementById('root'),
);
ReactDOM.render(
    <Provider store={store}>
      <Update/>
    </Provider>,
    document.getElementById('update')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => store.dispatch({type: SW_INIT}),
  onUpdate: registration => store.dispatch(
      {type: SW_UPDATE, payload: registration}),
});
