import ProgressBarFragments from '../fragments/ProgressBarFragments';
import DonutFragment from "./DonutFragment";

const CombinedFunctions = (object) => {

    const currentDate = new Date();
    const {ProgressBar} = ProgressBarFragments();
    const {Donut} = DonutFragment();

    const type = object.dataType;
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', Donut(currentDate)],
        ['menu', 'ExampleFunction2(object)'],
    ]);

    return cases.get(type);
};

export default CombinedFunctions