const TimeReducer = (state = [], action) => {

    switch(action.type){
        case 'TIME':
            if(action.value !== [] && !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default TimeReducer;