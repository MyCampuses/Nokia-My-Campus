import LocalStorageOperations from './LocalStorageOperations';

const apiUrl = 'https://mycampus-server.karage.fi/api/';
const loginUrl = "https://mycampus-server.karage.fi/auth/login";
const restaurantUrl = apiUrl + 'common/restaurant';
const parkingP5Url = apiUrl + 'common/parkings/status/P5';
const parkingP10Url = apiUrl + 'api/common/parkings/status/P10';
const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

const fetchPostUrl = async (url,data) => {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
};
const fetchGetUrl = async (url, userKey) => {

    const response = await fetch(url, {
        headers: {
            'x-access-token': userToken,
        },
    });
    const json = await response.json();
    return json;
};
const getUserToken = (key) => {
    return LocalStorageOperations.read(key)
};

const API = () => {

    const loginAsync = async (loginData,props) =>{
        return await fetchPostUrl(loginUrl, loginData)
    };
    const getUsageData = async (url, key, props) => {
        const userToken = getUserToken(key)
        return await fetchGetUrl(url, userToken)
    };

    return {
        loginAsync,
        getUsageData
    }

};

export default API;
