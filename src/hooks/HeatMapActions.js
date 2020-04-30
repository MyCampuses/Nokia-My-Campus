import ApiUrls from '../hooks/ApiUrls';
import API from './ApiHooks';
import Data from './Data';

export function fetchHeatMap() {
  const {FETCH_HEATMAP_BEGIN, FETCH_HEATMAP_SUCCESS, FETCH_HEATMAP_FAILURE} = Data();

  const fetchHeatMapBegin = () => ({
    type: FETCH_HEATMAP_BEGIN,
  });
  const fetchHeatMapSuccess = (heatmap) => ({
    type: FETCH_HEATMAP_SUCCESS,
    payload: {heatmap},
  });
  const fetchHeatMapFailure = (error) => ({
    type: FETCH_HEATMAP_FAILURE,
    payload: {error},
  });
  const {heatMapUrl} = ApiUrls();
  const {fetchGetUrl} = API();
  return dispatch => {
    dispatch(fetchHeatMapBegin());
    return fetchGetUrl(heatMapUrl).
        then(handleErrors).
        then(res => {
          dispatch(fetchHeatMapSuccess(res.heatmap));
          return res.heatmap;
        }).
        catch(error => dispatch(fetchHeatMapFailure(error)));
  };

  function handleErrors(res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }
}