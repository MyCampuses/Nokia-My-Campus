import {createStore} from 'redux';
import rootReducer from './RootReducer';

function configureStore() {
  return createStore(rootReducer, {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
  });
}
export default configureStore;