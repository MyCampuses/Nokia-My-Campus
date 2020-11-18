//REDUCERS
//Widget cases, either add or remove widget
const WidgetReducer = (state = [], action) => {

    switch(action.type){
        case 'INCREMENT':
            if(action.value !== []){
                return state.concat(action.value)
            } else {
                break
            };
        
        case 'DECREMENT':
            return state.splice(state.length-1, 1);
        default:
            return state
    };
};


export default WidgetReducer;