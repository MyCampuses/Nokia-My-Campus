import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "./DonutFragment";

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();

    const type = object.dataType;
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(object)],
    ]);

    return cases.get(type);
};

export default CombinedFunctions