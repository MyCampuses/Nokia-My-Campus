

const loginUrl = "https://mycampus-server.karage.fi/auth/login"

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


const API = () => {

    const loginAsync = async (loginData,props) =>{
        return await fetchPostUrl(loginUrl, loginData)
    };

    return {
        loginAsync
    }

};

export default API;
