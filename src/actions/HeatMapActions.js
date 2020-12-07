import ApiUrls from '../hooks/ApiUrls';
import Data from '../hooks/Data';
import LocalStorageOperations from '../hooks/LocalStorageOperations';

export function fetchHeatMap() {
    const {FETCH_HEATMAP_BEGIN, FETCH_HEATMAP_SUCCESS, FETCH_HEATMAP_FAILURE} = Data();
    const {read} = LocalStorageOperations();

    const fetchHeatMapBegin = () => ({
        type: FETCH_HEATMAP_BEGIN,
    });

    const fetchHeatMapSuccess = heatmap => (
    {
        type: FETCH_HEATMAP_SUCCESS,
        payload: {heatmap},
    });

    const fetchHeatMapFailure = error => ({
        type: FETCH_HEATMAP_FAILURE,
        payload: {error},
    });

    const {heatMapUrl} = ApiUrls();

    return async dispatch => {
        const userToken = read('user');

        dispatch(fetchHeatMapBegin());

        try {
            const json = await fetch(heatMapUrl, {
                method: 'GET',
                headers: {
                    authorization: userToken.token
                }
            });
            handleErrors(json);
            const res_1 = await json.blob();
            const mapURL = URL.createObjectURL(res_1);
            dispatch(fetchHeatMapSuccess(mapURL));
            return mapURL;
        } catch (error) {
            return dispatch(fetchHeatMapFailure(error));
        }
    };

    function handleErrors(res) {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    }
}