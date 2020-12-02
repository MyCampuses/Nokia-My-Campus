import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "../fragments/DonutFragment";
import NewsBrowseWidget from './NewsWidget';

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();

    const type = object.dataType;
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(object)],
        ['news', NewsBrowseWidget()],
    ]);

    return cases.get(type);
};

export default CombinedFunctions