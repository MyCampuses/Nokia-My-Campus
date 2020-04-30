/*
    This file contains the service worker for the app
 */
import Data from './Data';

const {SW_INIT, SW_UPDATE} = Data();

// Switch cases for redux store state change
export default function updateReducer(
    state = { serviceWorkerInitialized: false, serviceWorkerUpdated: false, serviceWorkerRegistration: null}, action) {
  switch (action.type) {
      // Serviceworker initialization
    case SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized: !state.serviceWorkerInitialized,
      };
      // Serviceworker update
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




