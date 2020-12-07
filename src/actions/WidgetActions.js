//used to add widgets, used in WidgetReducer
export const increment = (value) =>  {
    return{
        type: 'INCREMENT',
        value
    }
};

// Removes all widgets, used in WidgetReducer
export const cleanState = () => {
    return {
        type: 'CLEANSTATE'
    };
};