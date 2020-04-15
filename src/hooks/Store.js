import {createStore} from 'redux';
import rootReducer from './RootReducer';

// Redux store creation with initial values
function configureStore() {
  return createStore(rootReducer, {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
  });
}
export default configureStore;