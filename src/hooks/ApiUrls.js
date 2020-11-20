/*
    This file contains all the Urls used by the API
*/

const ApiUrls = () => {
  const loginUrl = 'https://mycampus-server.karage.fi/auth/login';
  const regUrl = 'https://mycampus-server.karage.fi/auth/signup';
  const apiUrl = 'https://mycampus-server.karage.fi/api/common/';
  const forgotPassUrl = 'https://mycampus-server.karage.fi/auth/forgot_password';
  const resendVerificationUrl = 'https://mycampus-server.karage.fi/auth/resend';
  const resetPassUrl = 'https://mycampus-server.karage.fi/auth/reset_password';
  const confirmUrl = 'https://mycampus-server.karage.fi/auth/confirmation';
  const sodexoUrl = 'https://www.sodexo.fi/en/ruokalistat/output/';

  const restaurantUrl = apiUrl +
      'restaurant/Midpoint?select=fill_percent';
  const restaurantQueueUrl = apiUrl + 'restaurant/Midpoint/queue/';
  const dailyParkingUrl = apiUrl + 'parking/data/';
  const dailyRestaurantUrl = apiUrl + 'restaurant/Midpoint/daily?=date=';
  const parkingStatusUrl = apiUrl + 'parking/status/';
  const parkingP5Url = apiUrl + 'parking/status/P5';
  const parkingP10Url = apiUrl + 'parking/status/P10';
  const parkingP10TopUrl = apiUrl + 'parking/status/P10TOP';
  const heatMapUrl = apiUrl + 'restaurant/Midpoint/heatmapImage';

  const sodexoDailyUrl = (date) => {
    return sodexoUrl + 'daily_json/80/' + date;
  };

  const sodexoWeeklyUrl = () =>{
    return sodexoUrl + 'weekly_json/80';
  };

  // Const used with Api fetch, define location and date
  const selectDate = (locUrl, loc, date) => {
    return locUrl + loc + '/' + date;
  };

  return {
    loginUrl,
    regUrl,
    apiUrl,
    restaurantUrl,
	parkingStatusUrl,
    parkingP10Url,
    parkingP5Url,
    parkingP10TopUrl,
    restaurantQueueUrl,
    selectDate,
    dailyParkingUrl,
    dailyRestaurantUrl,
    forgotPassUrl,
    resendVerificationUrl,
    resetPassUrl,
    confirmUrl,
    heatMapUrl,
    sodexoDailyUrl,
    sodexoWeeklyUrl,
  };
};
export default ApiUrls;
