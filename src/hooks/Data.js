import strings from "../localization";

// Holds arrays, constants etc. to be used elsewhere in the app
const Data = () => {

    //Mathces received line id number to string
    const lines = new Map([
        [1, 'FAVORITES 1'], [2, 'FAVORITES 2'],
        [3, 'PIZZA'], [4, 'Round Table'], [5, 'BOWL'],
        [6, 'VEGE'], [7, 'CAFE PICKUP LINE'], [8, 'Green corner']]);

    //Wait time map, matching received wait time value to string
    const times = new Map([[1, strings.waitTime1], [2, strings.waitTime2],
        [3, strings.waitTime3], [4, strings.waitTime4], [5, strings.waitTime5]]);

    //Colours to match the restaurant line wait times
    const colours = new Map([
        [1, '#98ff12'], [2, '#e4ff78'],
        [3, '#ffed4f'], [4, '#ffb236'], [5, '#ff3030']]);

    // Serviceworker state types, check Update.js for more information
    const SW_INIT = 'SW_INIT';
    const SW_UPDATE = 'SW_UPDATE';
    const SW_CONFIRM = 'SW_CONFIRM';
    const FETCH_HEATMAP_BEGIN = 'FETCH_HEATMAP_BEGIN';
    const FETCH_HEATMAP_SUCCESS = 'FETCH_HEATMAP_SUCCESS';
    const FETCH_HEATMAP_FAILURE = 'FETCH_HEATMAP_FAILURE';

    return {
        lines,
        times,
        colours,
        SW_INIT,
        SW_UPDATE,
        SW_CONFIRM,
        FETCH_HEATMAP_SUCCESS,
        FETCH_HEATMAP_BEGIN,
        FETCH_HEATMAP_FAILURE

    };
};
export default Data;