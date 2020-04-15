import React, {useEffect} from 'react';
import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

const SW_INIT = 'SW_INIT';
const SW_UPDATE = 'SW_UPDATE';

const UpdateAlert = () => {
  function rootReducer(state = {}, action) {
    switch (action.type) {
      case SW_INIT:
        return {
          ...state,
          serviceWorkerInitialized: !state.serviceWorkerInitialized,
        };
      case SW_UPDATE:
        return {
          ...state,
          serviceWorkerUpdated: !state.serviceWorkerUpdated,
          serviceWorkerRegistration: action.payload,
        };
      default:
        return state;
    }
  }

  const configureStore = () => {
    createStore(rootReducer, {
      serviceWorkerInitialized: false,
      serviceWorkerUpdated: false,
      serviceWorkerRegistration: null,
    });
  };
  const Alert = ({text, buttonText, type, onClick}) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (!onClick) {
        const timer = setTimeout(() => {
          dispatch({type});
        }, 6000);
        return () => {
          clearTimeout(timer);
        };
      }
    }, []);// eslint-disable-line
    return (
        <div className="updateAlert">
          {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
        </div>
    );
  };

  function App() {
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
    return <div className="App-alert">
      {isServiceWorkerUpdated && (
          <Alert text="New version of the app available" buttonText="Update"
                 type={SW_UPDATE} onClick={updateServiceWorker()}/>
      )}
    </div>
  }

  return {
    SW_INIT,
    SW_UPDATE,
    configureStore,
    App
  };
};

export default UpdateAlert;