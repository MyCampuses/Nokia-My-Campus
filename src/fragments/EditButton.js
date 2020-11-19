import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { cleanState } from '../hooks/Actions';
import style from "../styles/TopNavigationBarStyle";

/*
This function returns a EditIcon button which will enable editing once the state is updated
when a person has 1 or more widgets enabled on homepage
*/
const EditButton = () =>  {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const classes = style().topBar();

    //Redux state
    const selectedWidgets = useSelector(state => state.WidgetReducer);

    const dispatch = useDispatch();

    const toggleButton = () => {
        if(selectedWidgets.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        };
    };

    const RemoveAll = () => {
        dispatch(cleanState());
    };

    useEffect(() => {
        toggleButton();
    });

    const EditIconButton = () => {
        return (
            <IconButton disabled={buttonDisabled} onClick={RemoveAll} className={classes.menu}>
                <EditIcon/>
            </IconButton>
        );
    }
    
return {
    EditIconButton,
    };
};

export default EditButton;