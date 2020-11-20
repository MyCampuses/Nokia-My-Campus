const WMenuReducer = (state=[], action) => {

    if(state === []){
        return state.concat(action.value)
    }
    else{
        return state
    }
};

export default WMenuReducer