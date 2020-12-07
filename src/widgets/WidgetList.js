/*
 This function should never have any actual functionallity, it is supposed to only have a list of existing widgets
 the saved data should be in in the widgets own file, where it can 'live' update the data with useEffect
*/

import API from '../hooks/ApiHooks';
import {  useState, useEffect } from 'react';
import strings from '../localization';

const WidgetList = (props) =>  {
    const { menuByDate} = API();
    const date = new Date();

  // States
  const [menuData, setMenuData] = useState(undefined);
 

  /*eslint-enable */
  useEffect(()=> {
    menuByDate(date).then(result => setMenuData(result));
  },[]); //eslint-disable-line

    const widgetList = [
      { label: strings.p5inside, dataType: 'progressBar', barType: 'p5'},
      { label: strings.p10inside, dataType: 'progressBar', barType: 'p10I'},
      { label: strings.p10rooftop, dataType: 'progressBar', barType: 'p10R' },
      { label: strings.p10electric, dataType: 'progressBar', barType: 'p10E' },
      { label: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: menuData, size: "15", dataType: 'menuData', InR: 35, OuR: 50},
      { label: strings.newspage, dataType: 'news' },
      //{label: strings.p5inside, dataType: 'parking', zone: 'P5', data: parkingP5Data},
      //{label: strings.p10inside, dataType: 'parking', zone: 'P10', data: parkingP10Data},
	    //{label: strings.p10rooftop, dataType: 'parking', zone: 'P10TOP', data: parkingP10TopData},
      //{label: strings.p10electric, dataType: 'parking', zone: 'P10EV', data: parkingP10ElectricData},
    ];

    return widgetList
};

export default WidgetList;