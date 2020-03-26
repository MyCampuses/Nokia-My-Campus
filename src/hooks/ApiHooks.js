import React from "react";


const loginUrl = "https://mycampus-server.karage.fi/auth/login"

const fetchPostUrl = async (url,data) => {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log("POST RESPONSE")
    console.log(response)
    return await response.json()
};


const API = () => {

    const loginAsync = (loginData) =>{
        fetchPostUrl(loginUrl,loginData).then((json)=>{
            console.log(json)
        })
    };

    return {
        loginAsync
    }

};

export default API;
