
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
        height: '100%,'
    },
    overStyle: {
        height:"100%",
        width:"100%",
        fontSize:"3vw",
    },
    menuStyle: {
        color: "black",
        height:"100%",
        width:"75%",
        fontSize:"3vw",
    },
    waitStyle: {
        width:"25%",
        height: "100%",
        fontSize:"3vw",
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
    const {lines, times, colours} = Data();

    const classes = useStyle();
    let date = new Date();

    const renderLines = (queueTimes) => (
        <Box className={classes.menuContainer}>
            {[...queueTimes.keys()].map(mapKey => (
                <div key={mapKey} >

                    <Grid container direction="row" className={classes.overStyle}>

                        <Grid container direction="row" className={classes.menuStyle}>

                            <Grid item>
                        <p className={classes.TopP}>
                            {queueTimes.get(mapKey)[1].category}
                        </p>
                        <Grid item className={classes.Card}>
                        <Grid container direction="row">
                            <Grid item>
                                <p className={classes.mItem}>
                                    {queueTimes.get(mapKey)[1].title_fi}
                                </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.mInfo}>
                                    <p>
                                        {queueTimes.get(mapKey)[1].properties}
                                    </p>
                                    <p>
                                        {queueTimes.get(mapKey)[1].price}
                                    </p>
                                </p>
                            </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>

                        <Grid item className={classes.waitStyle}>
                    {queueTimes.get(mapKey) != null &&
                    <Box className="lineDiv"
                         border={1}
                         p={1}
                         m={1}
                         bgcolor={colours.get(parseInt(queueTimes.get(mapKey)[0].queue_time))}
                         borderColor="#E9E9E9" >
                        <Grid container direction="row"
                              justify="space-between"
                              alignItems="center">
                            <Grid>
                                <Typography>
                                    {times.get(parseInt(queueTimes.get(mapKey)[0].queue_time))}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    }
                        </Grid>


                    </Grid>
                </div>
            ))}
        </Box>
    );

    const Menu = (props) => {

        const [queueTimes, setQueueTimes] = useState(new Map());
        const {getUsageDataNoProps} = API();
        const {restaurantQueueUrl} = ApiUrls();

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

        const [stopper, setStopper] = useState(undefined);
        const [usedLines, setUsedLines] = useState(new Map([[1, 'FAVORITES 1']]));
        const [testLines, setTestLines] = useState(new Map([[1, ['a', 'b']]]));

        useEffect(() => {
            menuByDate(date)
                .then(json => setTemp(json));
        }, [props]);

        useEffect(() => {
            //eslint-disable-line
            setDataForRender(temp);
        }, [temp]);

        //stuff for lines

        const getQueueTimes = async () => {
            for (let i = 1; i < 9; i++) {
                getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueueTimes(new Map(queueTimes.set(i, result))))
            }
        };

        useEffect(() => {
            getQueueTimes().then()
        }, []);

        useEffect(() => {
            let check = dataForRender.courses;

            //length of dataForRender
            let lengthy = Object.keys(dataForRender.courses).length + 1;

            //size of queueTimes map
            let queueLength = queueTimes.size;
            let tempy = new Map;
            let tempp = new Map;

            // Check that dataForRender has been set, that this useEffect didn't run already, and that queueTimes has all entries
            if(check[2] !== undefined && stopper === undefined && queueLength === 8){

                //run for each entry from sodexo
                for (let i = 1; i < lengthy; i++) {

                    // run for each entry in Data.js
                    for (let l = 1; l < 9; l++) {

                        //check for matching values
                        if (check[i].category === lines.get(l)){

                            //set the values into the temporary Map
                            tempy.set(l, queueTimes.get(l));
                            tempp.set(
                                l, [ queueTimes.get(l), check[i] ]
                            );
                        }
                    }
                }
                setUsedLines(tempy);
                setTestLines(tempp);
                //this is to stop this loop from rerunning
                setStopper(1);
            }
        }, [queueTimes]);

        console.log(testLines);
        console.log(usedLines);

        return (
            <Fragment>
                <Container className={classes.MenuContainer}>
                    <h3> Menu for the day</h3>
                    {renderLines(testLines)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;