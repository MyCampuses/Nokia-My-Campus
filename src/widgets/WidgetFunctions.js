import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "../fragments/DonutFragment";
import NewsWidget from './NewsWidget';

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();

    const type = object.dataType;
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(object)],
        ['news', NewsWidget()],
    ]);

    return cases.get(type);
};

export default CombinedFunctions