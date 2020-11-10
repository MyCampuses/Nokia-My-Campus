
import React, {Fragment, useEffect, useState} from 'react';
import {Box, Container, makeStyles} from '@material-ui/core';
import API from '../hooks/ApiHooks';
import Data from "../hooks/Data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ApiUrls from "../hooks/ApiUrls";


const useStyle = makeStyles((theme) => ({
    MenuContainer:{
        width: '100%',
        height: '100%',
    },
    menuStyle: {
        color: "black",
        height:"100%",
        width:"75%",
        fontSize:"3vw",
        display: 'inline-block',
    },
    waitStyle: {
        width:"25%",
        height: "100%",
        fontSize:"3vw",
        display: 'inline-block',
    },
    TopP: {
        color: "#124191",
    },
    Card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "5px",
    },
    mItem:{
        width: "50%",
        position: "relative",
        display: "inline-block",
    },
    mInfo: {
        width: "50%",
        position: "relative",
        display: "inline-block",
    },

}));

const MenuFragment = () =>{

    const {menuByDate} = API();

    const classes = useStyle();
    let date = new Date();

    const renderMenu = (item) => (
        <div className={classes.menuStyle}>
            {(Object.keys(item) || []).map(key => (
                <div key={key}>
                    <p className={classes.TopP}>
                        {item[key].category}
                    </p>
                    <Box className={classes.Card}>
                    <Grid container direction="row"
                          justify="space-between"
                          alignItems="center">
                        <Grid>
                            <p className={classes.mItem}>
                                {item[key].title_fi + " "}
                            </p>
                        </Grid>
                        <Grid>
                            <p className={classes.mInfo}>
                                <p>
                                    {item[key].properties}
                                </p>
                                <p>
                                    {item[key].price}
                                </p>
                            </p>
                        </Grid>
                    </Grid>
                    </Box>
                </div>
                ))}
        </div>
    );

    const {lines, times, colours} = Data();

    const renderLines = (queueTimes) => (
        <Box className={classes.waitStyle}>
            {[...lines.keys()].map(mapKey => (
                <div key={mapKey}>
                    {queueTimes.get(mapKey) != null &&
                    <Box className="lineDiv"
                         border={1}
                         p={1}
                         m={1}
                         bgcolor={colours.get(parseInt(queueTimes.get(mapKey).queue_time))}
                         borderColor="#E9E9E9">
                        <Grid container direction="row"
                              justify="space-between"
                              alignItems="center">
                            <Grid>
                                <Typography>
                                    {times.get(parseInt(queueTimes.get(mapKey).queue_time))}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    }
                </div>
            ))}
        </Box>
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

        //stuff for lines

        const [queueTimes, setQueueTimes] = useState(new Map());
        const {getUsageDataNoProps} = API();
        const {restaurantQueueUrl} = ApiUrls();

        const getQueueTimes = async () => {
            for (let i = 1; i < 9; i++) {
                getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueueTimes(new Map(queueTimes.set(i, result))))
            }
        };

        useEffect(() => {
            getQueueTimes().then()
        }, []);

        return (
            <Fragment>
                <Container className={classes.MenuContainer}>
                    <h3> Menu for the day</h3>
                    {renderMenu(dataForRender.courses)}
                    {renderLines(queueTimes)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;