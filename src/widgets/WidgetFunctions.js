import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "../fragments/DonutFragment";
import NewsBrowseWidget from './NewsWidget';
import RestaurantWidget from './RestaurantWidget';

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();
    const {RestaurantFeed} = RestaurantWidget();

        const type = object.dataType;

        switch (type) {
            case 'progressBar':
                return ProgressBar(object);
            case 'donutChart':
                return Donut(object);
            case 'menuData':
                return RestaurantFeed(object);
            case 'news':
                return NewsBrowseWidget();
            default:
                return undefined;
        }
   
};

export default CombinedFunctions