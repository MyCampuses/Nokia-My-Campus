import React from 'react';
import {useSelector} from 'react-redux';
import Data from './hooks/Data';
import UpdateApp from './hooks/UpdateServiceWorker'

const {SW_UPDATE} = Data();

const Update = () => {
  // State selectors for redux
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
      <div>
        {isServiceWorkerUpdated && (
            <UpdateApp
                type={SW_UPDATE}
                onUpdate={updateServiceWorker()}
            />
        )}
      </div>

  );
};
export default Update;
