//used to add widgets, used in WidgetReducer
export const increment = (value) =>  {
    return{
        type: 'INCREMENT',
        value
    }
};

//Still not used for anything
export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value
    };
};


//updates widget
export const updateWidget = (widget) => {
    return {
        type:'UPDATE',
        widget
    };
};

// Removes all widgets, used in WidgetReducer
export const cleanState = () => {
    return {
        type: 'CLEANSTATE'
    };
};