import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UpdateAlert from './hooks/UpdateAlert';
import {CssBaseline} from "@material-ui/core";
import * as serviceWorker from './serviceWorker';
const { SW_INIT, SW_UPDATE, configureStore } = UpdateAlert()



ReactDOM.render(
  <React.StrictMode>
      <CssBaseline/>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => configureStore.dispatch({ type: SW_INIT }),
  onUpdate: registration =>
      configureStore.dispatch({ type: SW_UPDATE, payload: registration }),
});
