const EditModeReducer = (state = false, action) => {

    switch(action.type){
        case 'EDITMODE':
            return state = !state
        default:
            return state
    }
};

export default EditModeReducer;