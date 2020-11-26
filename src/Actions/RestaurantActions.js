//Actions used by redux states



// Does what?
export const menu = (value) => {
    return {
        type: 'MENU',
        value
    };
};

//Does what?
export const time = (value) => {
    return {
        type: 'TIME',
        value
    };
};

//Does what?
export const selectValue = (value) => {
    return {
        type: 'SELECTVALUE',
        value
    };
};

//Does what
export const wmenu = (value) => {
    return {
        type: 'WMENU',
        value
    }
};

