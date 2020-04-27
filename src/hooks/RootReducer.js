import Data from './Data';
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from './DataActions';
const {SW_INIT, SW_UPDATE} = Data();

// Switch cases for redux store state change
function rootReducer(state: {} = {}, action) {
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
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        usageData: action.payload.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload.error,
        usageData: [],
      };
    default:
      return state;
  }
}

export default rootReducer;




