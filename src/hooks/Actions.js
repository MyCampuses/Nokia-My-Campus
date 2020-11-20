//Actions used by redux states

export const increment = (value) =>  {
    return{
        type: 'INCREMENT',
        value
    }
};

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value
    };
};

export const selectValue = (value) => {
    return {
        type: 'SELECTVALUE',
        value
    };
};

export const cleanState = () => {
    return {
        type: 'CLEANSTATE'
    };
};