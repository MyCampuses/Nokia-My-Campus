import ApiUrls from '../hooks/ApiUrls';
import Data from './Data';
import LocalStorageOperations from './LocalStorageOperations';

export function fetchHeatMap() {
  const {FETCH_HEATMAP_BEGIN, FETCH_HEATMAP_SUCCESS, FETCH_HEATMAP_FAILURE} = Data();
  const {read} = LocalStorageOperations()

  const fetchHeatMapBegin = () => ({
    type: FETCH_HEATMAP_BEGIN,
  });
  const fetchHeatMapSuccess = heatmap => ({
    type: FETCH_HEATMAP_SUCCESS,
    payload: {heatmap},
  });
  const fetchHeatMapFailure = error => ({
    type: FETCH_HEATMAP_FAILURE,
    payload: {error},
  });
  const {heatMapUrl} = ApiUrls();
  return dispatch => {
    const userToken = read('user');
    dispatch(fetchHeatMapBegin());
    return fetch(heatMapUrl, {
      method: 'GET',
      headers: {
        authorization: userToken.token,
      },
    }).then(handleErrors).then(json => {
      dispatch(fetchHeatMapSuccess(json.heatmap));
      return json.heatmap
    }).catch(error => dispatch(fetchHeatMapFailure(error)));
  };

  function handleErrors(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }
}