
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import {  useState, useEffect } from 'react';
import strings from '../localization';

const WidgetList = (props) =>  {
    const {getUsageData} = API();
    const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();

    // States
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
  },[]); //eslint-disable-line

    const widgetList = [
      {navigationUrl: '/restaurant', label: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData, dataType: 'progressBar'},
      {navigationUrl: '/P5', label: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data, dataType: 'progressBar'},
      {navigationUrl: '/P10', label: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data, dataType: 'progressBar'},
      {navigationUrl: '/P10TOP', label: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData, dataType: 'progressBar'},
      {navigationUrl: '/P10EV', label: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData, dataType: 'progressBar'},
      {label: strings.newspage, dataType: 'news'}
    ];

    return widgetList
};

export default WidgetList;