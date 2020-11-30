//used to add widgets, used in WidgetReducer
export const increment = (value) =>  {
    return{
        type: 'INCREMENT',
        value
    }
};

//Still not used for anything, used in WidgetReducer
export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value
    };
};

// Removes all widgets, used in WidgetReducer
export const cleanState = () => {
    return {
        type: 'CLEANSTATE'
    };
};