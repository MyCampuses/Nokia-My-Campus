/*
This function is only a switch case. Where it selects the selected widget on Homepage and calls
the widget function.
*/
import DonutFragment from "../fragments/DonutFragment";
import NewsBrowseWidget from './NewsWidget';
import RestaurantWidget from './RestaurantWidget';
import ParkingWidget from './ParkingWidget';
import ProgressBarWidgets from './ProgressBarWidget';

const CombinedFunctions = (object) => {

    const {Donut} = DonutFragment();
    const {RestaurantFeed} = RestaurantWidget();

        const type = object.dataType;

        switch (type) {
            case 'progressBar':
                return ProgressBarWidgets(object);
            case 'donutChart':
                return Donut(object);
            case 'menuData':
                return RestaurantFeed(object);
            case 'news':
                return NewsBrowseWidget();
            case 'parking':
                return ParkingWidget(object);
            default:
                return undefined;
        }
   
};

export default CombinedFunctions