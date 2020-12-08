/*
This function is only a switch case. Where it selects the selected widget on Homepage and calls
the widget function.
*/
import DonutFragment from "../fragments/DonutFragment";
import NewsBrowseWidget from './NewsWidget';
import RestaurantWidget from './RestaurantWidget';
import ParkingWidget from './ParkingWidget';
//import ProgressBarWidgets from './ProgressBarWidget';
import ProgBarParkingWidget from './ProgBarParkingWidget';

//this function determines which function to run using the data given in props in widgetFragment
const CombinedFunctions = (object) => {

    const {Donut} = DonutFragment();

        const type = object.dataType;

        //this switch case checks the datatype of the object, and so decides which type of function to run for it
        switch (type) {
            case 'progressBar':
                return ProgBarParkingWidget(object);
            case 'donutChart':
                return Donut(object);
            case 'menuData':
                return RestaurantWidget();
            case 'news':
                return NewsBrowseWidget();
            case 'parking':
                return ParkingWidget(object);
            default:
                return undefined;
        }
   
};

export default CombinedFunctions