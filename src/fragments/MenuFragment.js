
import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import DonutFragment from "./DonutFragment";
import format from "date-fns/format";
import {scaleTime} from "d3-scale";
import {utcHour} from "d3-time";
import {ResponsiveContainer} from "recharts";

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
    let menuItems ="";

    const {menuByDate} = API();

    const classes = useStyle();
    let date = new Date();

    const renderMenu = (item) => (
        <div>
            {item}
        </div>
    );

    const Menu = (props) => {

        const [tempData, setTempData] = useState(undefined);
        const [dataForRender, setDataForRender] = useState(undefined);

        useEffect(() => {
                menuByDate(date)
                    .then(json => setTempData(json));
        }, [props]);

        useEffect(() => {
            if (tempData !== undefined) {
                setDataForRender(tempData);
            }
        }, [tempData]);

        let tempBG;

        if(dataForRender !== undefined){
            tempBG = dataForRender;
        }
        else{
            tempBG = {
                courses:
                    {
                        1: { title_fi: "hold on"},
                        2: { title_fi: "hold on"},
                        3: { title_fi: "hold on"},
                    }
            }
        }

         return (
            <Fragment>
                <Container className={classes.menuContainer}>
                    <p> Menu for the day</p>
                    {renderMenu(tempBG.courses[1].title_fi)}
                    -----------------
                    {renderMenu(tempBG.courses[2].title_fi)}
                    -----------------
                    {renderMenu(tempBG.courses[3].title_fi)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;