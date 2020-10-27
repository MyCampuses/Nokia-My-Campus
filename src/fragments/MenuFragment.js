
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

    const {menuByDate} = API();

    const classes = useStyle();
    let date = new Date();

    const renderMenu = (item) => (
        <div style={{minWidth:"100%"}}>
            {(Object.keys(item) || []).map(key =>
                (
                <div key={key}
                     style={{backgroundColor:"#124191", color:"white", height:"52px", fontSize:"3vw"}}>
                    <p>
                        {item[key].title_fi + " "}
                    </p>
                        <p>
                            { item[key].category + " "}
                            ({item[key].properties})
                            { " " + item[key].price + " "}
                    </p>
                </div>
                )
            )}
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

        console.log(dataForRender);

        return (
            <Fragment>
                <Container className={classes.menuContainer}>
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