/*
This is an idea, if you have a better way of 'enabling' a editmode for the editbutton on the frontpage
Please do it, I have no idea what I was getting myself into when I started making this, the point
of edit would be: moving, removing or replacing widgets on the front page.
*/
const EditModeReducer = (state = false, action) => {

    switch(action.type){
        case 'EDITMODE':
            return state = !state
        default:
            return state
    }
};

export default EditModeReducer;