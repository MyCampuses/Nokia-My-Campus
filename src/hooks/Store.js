import {applyMiddleware, createStore} from 'redux';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';

// Redux store creation with initial values
function configureStore() {
  return createStore(rootReducer, {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
    usageData: [],
    loading: false,
    error: null,
  }, applyMiddleware(thunk));
}

export default configureStore;