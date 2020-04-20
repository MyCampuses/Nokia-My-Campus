import LocalStorageOperations from './LocalStorageOperations';
import ApiUrls from './ApiUrls'
import GlobalFunctions from './GlobalFunctions';
const { loginUrl,regUrl,forgotPassUrl,resetPassUrl } = ApiUrls();
const {convertTime, formattedDate } = GlobalFunctions();

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
    return await response.json()
};

const API = () => {

    const loginAsync = async (loginData,props) =>{
        console.log(loginUrl);
        return fetchPostUrl(loginUrl, loginData)
    };

    const resetPasswordAsync = async (data,props)=>{
        return fetchPostUrl(resetPassUrl,data).then((json)=>{
            return json
        })
    };

    const forgotPassAsync = async (data,props)=>{
        return fetchPostUrl(forgotPassUrl,data).then((json)=>{
            return json
        })
    };

    const registerAsync = async (registerData,props)=>{
        return fetchPostUrl(regUrl,registerData)
    };

    const getUsageData = (url, props) => {
        return fetchGetUrl(url ,'user').then((json)=>{
            return json
        })
    };

    const getUsageDataNoProps = (url) => {
        return fetchGetUrl(url, 'user').then((json) => {
            return json
        })
    };
    const getChartData = (url, location, date) => {
        return getUsageData(url + location + date).then((json) => {
            return json
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
    // If Selected is Electric Places charts the data with the given multiplier to calculate the estimated utilization
    const chartEstData = (json) =>{
        const multiplier = 2;
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

    return {
        loginAsync,
        registerAsync,
        getUsageData,
        getUsageDataNoProps,
        getChartData,
        dataToChart,
        forgotPassAsync,
        resetPasswordAsync,
        chartEstData
    }

};

export default API;
