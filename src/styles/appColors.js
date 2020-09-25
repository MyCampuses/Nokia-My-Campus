/*
    This file can be used to change the colors of different colors in the
    App. Right now these are used in progress bars and bottom tabs
*/

import {blue} from "@material-ui/core/colors";

const Colors = () => {

    const NokiaBlue = '#124191';
    const LightBlue = blue[300];


    return {
        NokiaBlue:NokiaBlue,
        LightBlue: LightBlue
    }
};


export default Colors
