import Data from './Data'
const { SW_INIT, SW_UPDATE } = Data()

// Switch cases for redux store state change
function rootReducer(state:{} = {}, action) {
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
export default rootReducer;