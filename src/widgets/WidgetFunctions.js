/*
Made by Xyphnos
This is a function to call the correct function based on data from props to render the selected widget
*/
import DonutFragment from "../fragments/DonutFragment";
import NewsBrowseWidget from './NewsWidget';
import RestaurantWidget from './RestaurantWidget';
import ParkingWidget from './ParkingWidget';
import ProgressBarWidgets from './ProgressBarWidget';

//this function determines which function to run using the data given in props in widgetFragment
const CombinedFunctions = (object) => {

    const {Donut} = DonutFragment();

        const type = object.dataType;

        //this switch case checks the datatype of the object, and so decides which type of function to run for it
        switch (type) {
            case 'progressBar':
                return ProgressBarWidgets(object);
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