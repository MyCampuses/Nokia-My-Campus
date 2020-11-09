
import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import API from '../hooks/ApiHooks';


const useStyle = makeStyles((theme) => ({
    MenuContainer:{
        width: '100%',
        height: '100%',
        display: 'block',
    },
    menuDiv: {
        width: '100%',
        height: '100%',
    },
    menuStyle: {
        backgroundColor:"#124191",
        color:"white",
        height:"30%",
        width:"100%",
        fontSize:"4vw"
    },

}));

const MenuFragment = () =>{

    const {menuByDate} = API();

    const classes = useStyle();
    let date = new Date();

    const renderMenu = (item) => (
        <div className={classes.MenuContainer}>
            {(Object.keys(item) || []).map(key => (
                <div key={key}
                     className={classes.menuStyle}>
                    <p>
                        { item[key].category + " "}
                    </p>
                    <p>
                        {item[key].title_fi + " "}
                    </p>
                        <p>
                            ({item[key].properties})
                            { " " + item[key].price}
                    </p>
                </div>
                ))}
        </div>
    );

    const Menu = (props) => {

        const [temp, setTemp] = useState({
            courses: {
                1:{
                title_fi: "",
                title_en: "",
                category: "",
                price: "",
                properties: "",
                },
    }

        });

        const [dataForRender, setDataForRender] = useState({
            courses: {
                1:{
                    title_fi: "",
                    title_en: "",
                    category: "",
                    price: "",
                    properties: "",
                },
            }

        });

        useEffect(() => {
            menuByDate(date)
                .then(json => setTemp(json));
        }, [props]);

        useEffect(() => {
            //eslint-disable-line
            setDataForRender(temp);
        }, [temp]);


        return (
            <Fragment>
                <Container className={classes.MenuContainer}>
                    <h3> Menu for the day</h3>
                    {renderMenu(dataForRender.courses)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;