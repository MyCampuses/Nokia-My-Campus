const MenuReducer = (state = [], action) => {

    switch(action.type){

        case 'MENU':
            if(action.value !== [] && !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state
            }

        default:
            return state;
    }
};

export default MenuReducer;