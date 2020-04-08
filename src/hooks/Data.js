import strings from "../localization";

const Data = () => {

    const lines = new Map([
        [1, 'Favourites 1'], [2, 'Favourites 2'],
        [3, 'Pizza'], [4, 'Round Table'], [5, 'Bowl'],
        [6, 'Vege'], [7, 'Cafe Pickup Line'], [8, 'Salad/Nokia Coffee']]);

    const times = new Map([[1, strings.waitTime1], [2, strings.waitTime2],
        [3, strings.waitTime3], [4, strings.waitTime4], [5, strings.waitTime5]]);

    const colours = new Map([
        [1, '#CFFFA7'], [2, '#ECFFAC'],
        [3, '#FFF7A7'], [4, '#FFEAA5'], [5, '#FFD9A7']]);

    return {
        lines,
        times,
        colours,

    };
};
export default Data;