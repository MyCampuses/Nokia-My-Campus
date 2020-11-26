const WMenuReducer = (state = [], action) => {

    switch(action.type){
        case 'WMENU':
            if(action.value !== [] && !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state;
            }

        case 'DECREMENT':
            return state.splice(state.length = 0);

        default:
            return state;
    };
};

export default WMenuReducer;