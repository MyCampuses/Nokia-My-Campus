/*
Made by Atholos
 This function should never have any actual functionallity, it is supposed to only have a list of existing widgets
 the saved data should be in in the widgets own file, where it can 'live' update the data with useEffect
*/
import strings from '../localization';

const WidgetList = (props) =>  {

    const widgetList = [
      { label: strings.topBarMenuItemRestaurant, size: "15", dataType: 'menuData', InR: 35, OuR: 50 },
      { label: strings.newspage, dataType: 'news' },
      { label: strings.parking, dataType: 'parking', zones: ['P5', 'P10', 'P10TOP', 'P10EV'], gridLayout: true },
    ];
    return widgetList
};

export default WidgetList;