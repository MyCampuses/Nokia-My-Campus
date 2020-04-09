const ApiUrls = () => {

  const loginUrl = 'https://mycampus-server.karage.fi/auth/login';
  const regUrl = 'https://mycampus-server.karage.fi/auth/signup';
  const apiUrl = 'https://mycampus-server.karage.fi/api/common/';
  const restaurantUrl = apiUrl +
      'restaurant/Midpoint?select=fill_percent';
  const restaurantQueueUrl = apiUrl + 'restaurant/Midpoint/queue/';
  const dailyParkingUrl = apiUrl + 'parking/data/';
  const dailyRestaurantUrl = apiUrl + 'restaurant/Midpoint/daily?=date=';
  const parkingP5Url = apiUrl + 'parking/status/P5';
  const parkingP10Url = apiUrl + 'parking/status/P10';
  const parkingP10TopUrl = apiUrl + 'parking/status/P10TOP';
  const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
  const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

  const selectDate = (locUrl, loc, date) => {
    return locUrl + loc + '/' + date;
  };

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
    restaurantQueueUrl,
    selectDate,
    dailyParkingUrl,
    dailyRestaurantUrl
  };
};
export default ApiUrls;
