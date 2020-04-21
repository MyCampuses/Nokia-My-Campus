import React from 'react';
import {useSelector} from 'react-redux';
import Data from './hooks/Data';
import notificationStyle from './styles/notificationStyle';
import {
  ThemeProvider,
} from '@material-ui/core';

const {SW_INIT, SW_UPDATE} = Data();

const Update = () => {
  const {updateAlertTheme} = notificationStyle;
  // State selectors for redux
  const isServiceWorkerInitialized = useSelector(
      state => state.serviceWorkerInitialized);
  const isServiceWorkerUpdated = useSelector(
      state => state.serviceWorkerUpdated);
  const serviceWorkerRegistration = useSelector(
      state => state.serviceWorkerRegistration);
  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({type: 'SKIP_WAITING'});
      registrationWaiting.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };
  return (
      <ThemeProvider theme={updateAlertTheme}>
        <div className={updateAlertTheme.alertWindow}>
          {isServiceWorkerInitialized &&
          (<Update
                  text = ""
                  type={SW_INIT}/>
          )}
          {isServiceWorkerUpdated && (
              <Update
                  text="The App has been updated, a new version is available"
                  buttonText="Update App"
                  type={SW_UPDATE}
                  onClick={() => {updateServiceWorker()}}
              />
          )}
        </div>
      </ThemeProvider>
  );
};
export default Update;
