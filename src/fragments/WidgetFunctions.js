import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "./DonutFragment";
import RestaurantWidget from "../widgets/RestaurantWidget"

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

            default:
                return undefined;
        }
    /*
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(object)],
        ['menuData', RestaurantFeed(object)],
    ]);

    return cases.get(type)
     */
};

export default CombinedFunctions