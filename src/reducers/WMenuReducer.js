const WMenuReducer = (state = [], action) => {

    switch(action.type){
        case 'WMENU':
            if(action.value !== [] && !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state;
            }

        default:
            return state;
    };
};

export default WMenuReducer;