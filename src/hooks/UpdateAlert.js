import React, {useEffect} from 'react'
import { createStore } from 'redux';
import { useDispatch } from 'react-redux'

const UpdateAlert = () => {
  const SW_INIT = 'SW_INIT'
  const SW_UPDATE = 'SW_UPDATE'

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
  }
  const Alert = ({ text, buttonText, type, onClick }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (!onClick) {
        const timer = setTimeout(() => {
          dispatch({ type })}, 6000);
        return () => { clearTimeout(timer)
        }
      }
    },[]);// eslint-disable-line
    return (
        <div className="updateAlert">
          {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
        </div>
    );
  }
  return {
    SW_INIT,
    SW_UPDATE,
    configureStore,
    Alert
  };
};

export default UpdateAlert;