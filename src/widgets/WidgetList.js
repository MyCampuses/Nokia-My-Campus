import ProgressBarFragments from '../fragments/ProgressBarFragments';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import React, {  useState, useEffect } from 'react';
import strings from '../localization';

const WidgetList = (props) =>  {
    const {ProgressBar} = ProgressBarFragments();
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
        ProgressBar({navigationUrl: '/restaurant', barLabel: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData}),
        ProgressBar({navigationUrl: '/P5', barLabel: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data}),
        ProgressBar({navigationUrl: '/P10', barLabel: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data}),
        ProgressBar({navigationUrl: '/P10TOP', barLabel: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData}),
        ProgressBar({navigationUrl: '/P10EV', barLabel: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData}),
    ];

    return widgetList
};

export default WidgetList;