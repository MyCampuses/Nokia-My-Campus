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

    const checkUserLogged = (userKey) => {
        const {read} = LocalStorageOperations();
        const logged = read("user")
        return !!logged;
    };

    const loginAsync = async (loginData,props) =>{
        return fetchPostUrl(loginUrl, loginData)
    };
    const getUsageData = (url, props) => {
        return fetchGetUrl(url ,'user').then((json)=>{
            return json
        })
    };

    return {
        loginAsync,
        getUsageData,
        checkUserLogged
    }

};

export default API;
