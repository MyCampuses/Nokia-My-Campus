/*
Made by Atholos
 This function should never have any actual functionallity, it is supposed to only have a list of existing widgets
 the saved data should be in in the widgets own file, where it can 'live' update the data with useEffect
*/
import strings from '../localization';

const WidgetList = (props) =>  {

    const widgetList = [
      { label: 'Parking Inside', dataType: 'progressBar', barType: 'parkingInside' },
      { label: 'Parking Roof', dataType: 'progressBar', barType: 'parkingRoof' },
      //{ label: strings.p10inside, dataType: 'progressBar', barType: 'p10I' },
      //{ label: strings.p10rooftop, dataType: 'progressBar', barType: 'p10R' },
      //{ label: strings.p10electric, dataType: 'progressBar', barType: 'p10E' },
      { label: strings.topBarMenuItemRestaurant, size: "15", dataType: 'menuData', InR: 35, OuR: 50 },
      { label: strings.newspage, dataType: 'news' },
      { label: strings.p5inside, dataType: 'parking', zones: ['P5'], showAllButton: true },
      { label: strings.p10inside, dataType: 'parking', zones: ['P10'], showAllButton: true },
	    { label: strings.p10rooftop, dataType: 'parking', zones: ['P10TOP'], showAllButton: true },
      { label: strings.p10electric, dataType: 'parking', zones: ['P10EV'], showAllButton: true },
      { label: strings.parking, dataType: 'parking', zones: ['P5', 'P10', 'P10TOP', 'P10EV'] }
    ];

    return widgetList
};

export default WidgetList;