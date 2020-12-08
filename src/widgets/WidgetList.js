/*
 This function should never have any actual functionallity, it is supposed to only have a list of existing widgets
 the saved data should be in in the widgets own file, where it can 'live' update the data with useEffect
*/

import API from '../hooks/ApiHooks';

import {  useState, useEffect } from 'react';
import strings from '../localization';

const WidgetList = (props) =>  {

    const {menuByDate} = API();
    //const {parkingP5Url, parkingP10Url, parkingP10TopUrl} = ApiUrls();
    const date = new Date();

    // States
  //const [restaurantData, setRestaurantData] = useState(undefined);
  //const [parkingP5Data, setParkingP5Data] = useState(undefined);
  //const [parkingP10Data, setParking10Data] = useState(undefined);
  //const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  //const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const [menuData, setMenuData] = useState(undefined);
  //const multiplier = 2.1;

  /*eslint-enable */
  useEffect(()=> {
    //getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result));
    //getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    //getUsageData(parkingP10Url, props).then(result => setParking10Data(result));
    //getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result); setParkingP10ElectricData({count: Math.min(98, Math.floor(result.count * multiplier)), capacity: 98})});
    menuByDate(date).then(result => setMenuData(result));
  },[]); //eslint-disable-line

    const widgetList = [
      //{navigationUrl: '/P5', label: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data, dataType: 'progressBar'},
      //{navigationUrl: '/P10', label: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data, dataType: 'progressBar'},
      //{navigationUrl: '/P10TOP', label: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData, dataType: 'progressBar'},
      //{navigationUrl: '/P10EV', label: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData, dataType: 'progressBar'},
      {navigationUrl: '/restaurant', label: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: menuData, size: "15", dataType: 'menuData', InR: 35, OuR: 50},
      {label: strings.newspage, dataType: 'news'},
      {label: strings.p5inside, dataType: 'parking', zones: ['P5'], showAllButton: true},
      {label: strings.p10inside, dataType: 'parking', zones: ['P10'], showAllButton: true},
	  {label: strings.p10rooftop, dataType: 'parking', zones: ['P10TOP'], showAllButton: true},
      {label: strings.p10electric, dataType: 'parking', zones: ['P10EV'], showAllButton: true},
      {label: strings.parking, dataType: 'parking', zones: ['P5', 'P10', 'P10TOP', 'P10EV'], gridLayout: true},
    ];

    return widgetList
};

export default WidgetList;