/*
    This file contains everything related to fetching data from the API
    and handling those fetch results in an async manor.
    Also contains the functions of handling the historical data and their charting.
*/

import LocalStorageOperations from './LocalStorageOperations';
import ApiUrls from './ApiUrls'
import GlobalFunctions from './GlobalFunctions';

const { loginUrl,regUrl,forgotPassUrl,resetPassUrl,confirmUrl,resendVerificationUrl, sodexoDailyUrl } = ApiUrls();
const {convertTime, formattedDate, sodexoDate } = GlobalFunctions();

// Basic Fetch template for post messages
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
// Used if the server doesn't return a json response
const fetchPostUrlNoJson = async (url,data) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
// Basic Fetch template for get requests
const fetchGetUrl = async (url, userKey) => {
    const {read} = LocalStorageOperations();
    const userToken = read(userKey);
    if (userToken) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                authorization: userToken.token,
            },
        });
        if (response) {
            return await response.json()
        } else {
            throw Error("No token, fetchGetUrl")
        }
    } else {
        throw Error("No user, No usertoken. fetchGetUrl")
    }
};

const API = () => {

    // Handles Login.
    const loginAsync = async (loginData,props) =>{
        return fetchPostUrl(loginUrl, loginData)
    };
    // Handles Password reset
    const resetPasswordAsync = async (data)=>{
        return fetchPostUrlNoJson(resetPassUrl,data)
    };
    // Handles account confirmation
    const confirmAccountAsync = async (data)=>{
        return fetchPostUrlNoJson(confirmUrl,data)
    };
    // Handles email resending
    const resendEmailAsync = async (data)=>{
        return fetchPostUrlNoJson(resendVerificationUrl,data)
    };
    // Handles Forgot pass
    const forgotPassAsync = async (data)=>{
        return fetchPostUrlNoJson(forgotPassUrl,data)
    };
    // Handles registering
    const registerAsync = async (registerData)=>{
        return fetchPostUrlNoJson(regUrl,registerData)
    };
    // Handles fetching of usage data from the API
    const getUsageData = (url, props) => {
        return fetchGetUrl(url ,'user').then((json)=>{
            if (json) {
                return json
            } else {
                throw Error("No Token, getUsageData")
            }
        })
    };

    const getUsageDataNoProps = (url) => {
        return fetchGetUrl(url, 'user').then((json) => {
            if (json) {
                return json
            } else {
                throw Error("No Token, getUsageData")
            }
        })
    };

    const getChartData = (url, location, date) => {
        return getUsageData(url + location + date).then((json) => {
            if (json) {
                return json
            } else {
                throw Error("No Token, getUsageData")
            }
        })
    };

    const dataToChart = (json) => {
        if (json !== undefined) {
            const chart = [];
            for (let key in json) {
                const timeStamp = convertTime(json[key].date);
                const fromUnixTime = formattedDate(timeStamp);
                let yc = json[key].percent;
                let tempJson = {x: fromUnixTime, y: yc, pv: 100};
                chart.push(tempJson);
                // Set the data to a chart json and return it
            }
            return chart;
        }
    };

    const dataToChartRestaurant = (json) => {
        if (json !== undefined) {
            const chart = [];
            for (let key in json) {
                const timeStamp = convertTime(json[key].timestamp);
                const fromUnixTime = formattedDate(timeStamp);
                let yc = json[key].fill_percent;
                let tempJson = {x: fromUnixTime, y: yc, pv: 100};
                chart.push(tempJson);
                // Set the data to a chart json and return it
            }
            return chart;
        }
    };

    // If Selected is Electric Places charts the data with the given multiplier to calculate the estimated utilization
    const chartEstData = (json) =>{
        const multiplier = 2.1;
        if (json !== undefined) {
            const chart = [];
            for (let key in json) {
                const timeStamp = convertTime(json[key].date);
                const fromUnixTime = formattedDate(timeStamp);
                let yc = json[key].percent;
                let tempJson = {x: fromUnixTime, y: (yc*multiplier), pv: 100};
                chart.push(tempJson);
                // Set the data to a chart json and return it
            }
            return chart;
        }
    };

    //
    const menuByDate = (date) =>{
         const menu = fetch(sodexoDailyUrl(sodexoDate(date)))
             .then(res => res.json());
         return menu;
    };


    return {
        loginAsync,
        registerAsync,
        getUsageData,
        getUsageDataNoProps,
        getChartData,
        dataToChart,
        forgotPassAsync,
        resetPasswordAsync,
        chartEstData,
        dataToChartRestaurant,
        confirmAccountAsync,
        resendEmailAsync,
        menuByDate,
    }

};

export default API;
