import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "../fragments/DonutFragment";
import NewsWidget from './NewsWidget';
import ParkingWidget from './ParkingWidget';

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();

    const type = object.dataType;
	console.log("aaaa");
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(object)],
        ['news', NewsWidget()],
        ['parking', ParkingWidget(object)]
    ]);

    return cases.get(type);
};

export default CombinedFunctions