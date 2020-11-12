import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import EditStyle from '../styles/editButtonStyle';


/*
This function returns a EditIcon button which will enable editing once the state is updated
when a person has 1 or more widgets enabled on homepage
*/
const EditButton = () =>  {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const iconStyle = EditStyle();

    const EnabledButton = () => {
        setButtonDisabled(buttonDisabled => !buttonDisabled);
    };

    const DisableButton = () => {
        setButtonDisabled(buttonDisabled => !buttonDisabled);
    };

    const EditIconButton = () => {
        return (
            <IconButton disabled={buttonDisabled}>
                <EditIcon/>
            </IconButton>
        );
    }
    
return {
    EditIconButton: EditIconButton,
    EnabledButton: EnabledButton,
    DisableButton: DisableButton,
    };
};

export default EditButton;