const MenuReducer = (state = [], action) => {

    switch(action.type){
        case 'INCREMENT':
            if(action.value !== [] & !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state;
            };

        case 'DECREMENT':
            return state.splice(state.length-1, 1);

        default:
            return state;
    };
};

export default MenuReducer;