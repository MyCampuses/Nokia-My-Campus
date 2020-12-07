//Actions used by redux states, does what? used where? whats the point of each of these?

// Expectation: Weekly Menu, it gets some value
export const wmenu = (value) => {
    return {
        type: 'WMENU',
        value
    };
};

//que? -> food menu?
export const menu = (value) => {
    return {
        type: 'MENU',
        value
    };
};

//Does what? what time?
export const time = (value) => {
    return {
        type: 'TIME',
        value
    };
};