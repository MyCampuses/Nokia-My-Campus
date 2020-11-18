import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
//import EditStyle from '../styles/editButtonStyle';
import LocalStorageOperations from '../hooks/LocalStorageOperations';


/*
This function returns a EditIcon button which will enable editing once the state is updated
when a person has 1 or more widgets enabled on homepage
*/
const EditButton = () =>  {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const {del, read} = LocalStorageOperations();
    const key = 'widgets';
    const localData = read(key);  
    //const iconStyle = EditStyle();

    const WidgetData = ({selectedWidgets, addSelectedWidgets}) =>  {
        if(selectedWidgets.length > 0){
            EnabledButton();
        } else {
            DisableButton();
        };
    };

    /*
    Changes the state to false. The button is works with material UI 'disabled'
    and a state that either sets disabled true or false. EnableButton changes the
    state to false so the button can be clicked.
    */
    const EnabledButton = () => {
        setButtonDisabled(false);
    }

    /*
    Changes the state to true. The button is works with material UI 'disabled'
    and a state that either sets disabled true or false. Disable changes the
    state to true so the button can not be clicked.
    */
    const DisableButton = () => {
        setButtonDisabled(true);
    };

    const editOnClick = () => {
        del(key);
    };

    useEffect(() => {
        //EnabledButton();
    }, [buttonDisabled]);

    const EditIconButton = () => {
        return (
            <IconButton disabled={buttonDisabled} onClick={editOnClick}>
                <EditIcon/>
            </IconButton>
        );
    }
    
return {
    EditIconButton: EditIconButton,
    EnabledButton: EnabledButton,
    DisableButton: DisableButton,
    WidgetData : WidgetData,
    };
};

export default EditButton;