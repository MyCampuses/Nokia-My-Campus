import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import {useSelector} from 'react-redux';
import Data from './hooks/Data'
import Alert from './hooks/UpdateAlert'
const { SW_INIT, SW_UPDATE } = Data()

const App = () => {
  const routeResult = useRoutes(routes);
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
      <div className="App">
          {isServiceWorkerInitialized &&
          (<Alert text="Service worker is initialized" type={SW_INIT}/>
          )}
          {isServiceWorkerUpdated && (
              <Alert text="New version of the app available" buttonText="Update"
                     type={SW_UPDATE} onClick={() => {updateServiceWorker()}}
              />
          )}
        {routeResult}
      </div>
  );
};
export default App;
