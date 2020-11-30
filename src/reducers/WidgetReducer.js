//REDUCERS
//Widget cases, either add or remove widget
const WidgetReducer = (state = [], action) => {

    switch(action.type){
        case 'INCREMENT':
            if(action.value !== [] && !state.includes(action.value)){
                return state.concat(action.value);
            } else {
                return state;
            }
        
        case 'DECREMENT':
            return state.splice(state.length-1, 1);

        case 'CLEANSTATE':
            return state = [];
            
        default:
            return state;
    }
};

export default WidgetReducer;