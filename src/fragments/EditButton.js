import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { cleanState } from '../actions/WidgetActions';
//import {editmode} from '../actions/EditModeActions';


/*
This function returns a EditIcon button which will enable editing once the state is updated
when a person has 1 or more widgets selected on the homepage.
*/
const EditButton = () =>  {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    
    //Redux states
    const selectedWidgets = useSelector(state => state.WidgetReducer);
    //const editMode = useSelector(state => state.EditModeReducer)

    const dispatch = useDispatch();

    // Toggles the buttons disabled state, depending on how many widgets are in selectedWidgets state
    const toggleButton = () => {
        if(selectedWidgets.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        };
    };

    // Removes all states from selectedWidgets
    const RemoveAll = () => {
        dispatch(cleanState());
    };

    // //Toggling between edit mode, true or false under construction
    // const toggleEditMode = () => {
    //     dispatch(editmode(!editMode))
    // };

    // // Will remove selected state under construction
    // const removeSelectedItem = (item) => {
    //     dispatch(decrement(item))
    // };

    // // move the selected widget under construction
    // const moveSelectedItem = (item) => {

    // };

    useEffect(() => {
        toggleButton();
    });

    const EditIconButton = () => {
        return (
            <IconButton disabled={buttonDisabled} onClick={RemoveAll}>
                <EditIcon/>
            </IconButton>
        );
    }
    
return {
    EditIconButton,
    };
};

export default EditButton;