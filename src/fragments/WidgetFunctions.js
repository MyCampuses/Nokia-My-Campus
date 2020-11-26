import ProgressBarFragments from '../fragments/ProgressBarFragments';

const CombinedFunctions = (object) => {

    const {ProgressBar} = ProgressBarFragments();

    const type = object.dataType;
    const cases = new Map([
        ['progressBar', ProgressBar(object)],
        ['donutChart', 'ExampleFunction1(object)'],
        ['menu', 'ExampleFunction2(object)'],
    ]);

    return cases.get(type);
};

export default CombinedFunctions