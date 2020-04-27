import API from '../hooks/ApiHooks';
import ApiUrls from './ApiUrls';

const {getUsageData} = API();
const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataBegin());
    return getUsageData(parkingP5Url).then(result => {
      dispatch(fetchDataSuccess(result.percent));
      return result.percent;
    })
    .catch(error => dispatch(fetchDataFailure(error)))
  };
}

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {data},
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: {error},
});