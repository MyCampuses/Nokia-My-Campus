import LocalStorageOperations from './LocalStorageOperations';

const loginUrl = "https://mycampus-server.karage.fi/auth/login";


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
    const {read} = LocalStorageOperations();
    const userToken = read(userKey);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            authorization: userToken,
        },
    });
    return await response.json();

};

const API = () => {

    const loginAsync = async (loginData,props) =>{
        return await fetchPostUrl(loginUrl, loginData)
    };
    const getUsageData = async (url, props) => {
        return await fetchGetUrl(url ,'user')
    };

    return {
        loginAsync,
        getUsageData
    }

};

export default API;
