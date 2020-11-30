//Actions used by redux states

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