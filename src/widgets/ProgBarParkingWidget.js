/*
Made by Atholos
This function is only progressbar widgets, where it fetches all the needed information
for the progressbars.
*/
import React from 'react';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import {  useState, useEffect } from 'react';
import strings from '../localization';
import  ProgressBars  from '../fragments/ProgressBarFragments';
import { Grid } from '@material-ui/core';

const ProgBarParkingWidget = (obj) =>  {
    const {ProgressBar} = ProgressBars();
    const {getUsageData } = API();
    const {parkingP5Url, parkingP10Url, parkingP10TopUrl} = ApiUrls();

  // States
  //const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url).then(result => setParkingP5Data(result.percent));
    //getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url).then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
  },[]); //eslint-disable-line

    const objName = obj.barType;

    //The switch case gets its' value from WidgetList where there's an object with barType engraved.
    switch (objName) {
        case 'parkingInside':

            return (
                <div>
                    
                    <Grid item xs spacing={2}>
                        {ProgressBar({navigationUrl: '/P5', label: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data})}
                    </Grid> 
                    <Grid spacing={2}>
                        {ProgressBar({navigationUrl: '/P10', label: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data})}
                    </Grid>
                    
                </div>
            )
            
        case 'parkingRoof':
            return (
                <div >
                    
                    <Grid item xs spacing={2}>
                        {ProgressBar({navigationUrl: '/P10TOP', label: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData})}
                    </Grid>

                    <Grid spacing={2}>
                        {ProgressBar({navigationUrl: '/P10EV', label: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData})}
                    </Grid>
                    
                </div>
            )            

        default:
            return undefined;
    };
};

export default ProgBarParkingWidget;