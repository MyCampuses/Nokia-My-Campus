import Data from './Data';

const { FETCH_HEATMAP_BEGIN, FETCH_HEATMAP_SUCCESS, FETCH_HEATMAP_FAILURE } = Data();

export default function HeatMapReducer(state = {
  heatmap: null,
  loading: false,
  error: null
}, action) {
  switch (action.type) {
    case FETCH_HEATMAP_BEGIN:
      return {
        // Mark the state as "loading"
        // Reset errors
        ...state,
        loading: true,
        error: null
      };
// Serviceworker update
    case FETCH_HEATMAP_SUCCESS:

      return {
        // Done, set loading to false
        // Replace heatmap from the api
        ...state,
        error: null,
        loading: false,
        heatmap: action.payload.heatmap,
      };
    case FETCH_HEATMAP_FAILURE:
      return {
        // Fetch request failed, save error. Heatmap is set to null since
        // it does not exist
        ...state,
        loading: false,
        error: action.payload.error,
        heatmap: null,
      };
    default:
      return state;
  }
}
