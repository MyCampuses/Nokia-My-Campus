//REDUCERS
//Widget cases, either add or remove all widget
const WidgetReducer = (state = [] , action) => {

    switch(action.type){
        case 'INCREMENT':
            
            if(!state.includes(action.value)){
                return state.concat(action.value); 
            } else {
                return state;
            }

        case 'CLEANSTATE':
            return state = [];
            
        default:
            return state;
    }
};

export default WidgetReducer;