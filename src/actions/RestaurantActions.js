//Actions used by redux states, does what? used where? whats the point of each of these?

export const wmenu = (value) => {
    return {
        type: 'WMENU',
        value
    };
};

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