const ApiUrls = () => {

  const loginUrl = 'https://mycampus-server.karage.fi/auth/login';
  const regUrl = 'https://mycampus-server.karage.fi/auth/signup';
  const apiUrl = 'https://mycampus-server.karage.fi/api/';
  const restaurantUrl = apiUrl +
      'common/restaurant/Midpoint?select=fill_percent';
  const restaurantQueueUrl = apiUrl + 'common/restaurant/Midpoint/queue/';
  const parkingP5Url = apiUrl + 'common/parking/status/P5';
  const parkingP10Url = apiUrl + 'common/parking/status/P10';
  const parkingP10TopUrl = apiUrl + 'common/parking/status/P10TOP';
  const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
  const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

  return {
    loginUrl,
    regUrl,
    apiUrl,
    restaurantUrl,
    parkingP10Url,
    parkingP5Url,
    parkingP10TopUrl,
    campusMapP5Url,
    campusMapP10Url,
    restaurantQueueUrl
  };
};
export default ApiUrls;
