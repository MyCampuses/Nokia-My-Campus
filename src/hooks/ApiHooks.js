import LocalStorageOperations from './LocalStorageOperations';
import ApiUrls from './ApiUrls'
const { loginUrl,regUrl } = ApiUrls();

const fetchPostUrl = async (url,data) => {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json()
};


const fetchGetUrl = async (url, userKey) => {
    const {read} = LocalStorageOperations();
    const userToken = read(userKey);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            authorization: userToken.token,
        },
    });
    return response.json()
};

const API = () => {

    const loginAsync = async (loginData,props) =>{
        console.log(loginUrl);
        return fetchPostUrl(loginUrl, loginData)
    };

    const registerAsync = async (registerData,props)=>{
        return fetchPostUrl(regUrl,registerData)
    };

    const getUsageData = (url, props) => {
        return fetchGetUrl(url ,'user').then((json)=>{
            return json
        })
    };

    return {
        loginAsync,
        registerAsync,
        getUsageData,
    }

};

export default API;
