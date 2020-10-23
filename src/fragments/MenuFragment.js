
import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import DonutFragment from "./DonutFragment";
import format from "date-fns/format";
import {scaleTime} from "d3-scale";
import {utcHour} from "d3-time";

const useStyle = makeStyles((theme) => ({
    p5Box: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',

    },
    p10Box: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',

    },
    RestaurantBox: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',

    },
    DonutContainer:{
        textAlign: 'center',
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',
    },
}));

const MenuFragment = () =>{

    const {menuByDate} = API();

    const classes = useStyle();
    let date = new Date();
    let menuItems = menuByDate(date);

    const renderMenu = (item) => (
        <p>
        </p>
    );

    const Menu = (props) => {

        const [menuData, setMenuData] = useState(undefined);
        const [dataForRender, setDataForRender] = useState(undefined);

        useEffect(() => {
                menuByDate(date).then(json => setMenuData(json));
        }, [props]);

        useEffect(() => {
            if (menuData !== undefined) {
                setDataForRender(menuItems);
            }
        }, [menuData]);

        return (
            <Fragment>
                <Container className={classes.menuContainer}>
                    <p>asd</p>
                    {renderMenu(menuData)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;