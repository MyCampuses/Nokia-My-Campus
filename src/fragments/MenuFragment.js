
import React, {Fragment, useEffect, useState} from 'react';
import {Box, Container} from '@material-ui/core';
import API from '../hooks/ApiHooks';
import Data from "../hooks/Data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ApiUrls from "../hooks/ApiUrls";
import useStyle from "../styles/restaurantStyles";

const MenuFragment = () =>{

    const {menuByDate} = API();
    const {lines, times, colours} = Data();

    const classes = useStyle();
    let date = new Date();

    const renderLines = (queueTimes) => (
        <Box className={classes.MenuContainer}>

            {[...queueTimes.keys()].map(mapKey => (
                <div key={mapKey} >

                    <p className={classes.TopP}>
                        {queueTimes.get(mapKey)[1].category}
                    </p>

                    {queueTimes.get(mapKey) != null &&
                    <Grid container direction="row" className={classes.overStyle}>

                        <Grid item container direction="column" className={classes.menuStyle}>

                            <Grid item>

                                <Grid item className={classes.Card}>
                                    <Grid container direction="row">
                                        <Grid item className={classes.mItem}>
                                            <p>
                                                {queueTimes.get(mapKey)[1].title_fi}
                                            </p>
                                        </Grid>
                                        <Grid item className={classes.mInfo}>
                                            <p>
                                                <p className={classes.properties}>
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
                            <Box className="lineDiv"
                                 borderRadius="5px 5px 5px 5px"
                                 p={1}
                                 m={1}
                                 bgcolor={colours.get(parseInt(queueTimes.get(mapKey)[0].queue_time))}
                                 borderColor="#E9E9E9">
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
                        </Grid>
                    </Grid>
                    }
                </div>
            ))}
        </Box>
    );

    const Menu = (props) => {

        const [queueTimes, setQueueTimes] = useState(new Map());
        const {getUsageDataNoProps} = API();
        const {restaurantQueueUrl} = ApiUrls();

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

        const [usedLines, setUsedLines] = useState(new Map([[1, 'FAVORITES 1']]));

        //get the menu for today and set it into dataForRender
        useEffect(() => {
            menuByDate(date)
                .then(json => setDataForRender(json));
        }, [props]);

        //stuff for lines

        //get queue times and place them into the QueueTimes variable
        const getQueueTimes = async () => {
            for (let i = 1; i < 9; i++) {
                getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueueTimes(new Map(queueTimes.set(i, result))))
            }
        };

        //run the get queue times
        useEffect(() => {
            getQueueTimes()
        }, []);

        useEffect(() => {
            let check = dataForRender.courses;

            //length of dataForRender
            let lengthy = Object.keys(dataForRender.courses).length + 1;

            //size of queueTimes map
            let queueLength = queueTimes.size;
            //temporary map for data
            let temp = new Map();

            // Check that dataForRender has been set, that this useEffect didn't run already, and that queueTimes has all entries
            if(check[2] !== undefined && queueLength === 8){

                //run for each entry from sodexo
                for (let i = 1; i < lengthy; i++) {

                    // run for each entry in Data.js
                    for (let l = 1; l < 9; l++) {

                        //check for matching values
                        if (check[i].category === lines.get(l)){

                            //set the values into the temporary Map
                            temp.set(
                                l, [ queueTimes.get(l), check[i] ]
                            );
                        }
                    }
                }
                setUsedLines(temp);
            }
        }, [queueTimes]);

        return (
            <Fragment>
                <Container className={classes.MenuContainer}>
                    <h3> Menu for the day</h3>
                    <Grid container direction="row">
                        <Grid item className={classes.leftInfo}>
                            <Typography>Line</Typography>
                        </Grid>
                        <Grid item className={classes.rightInfo}>
                            <Typography>Wait Time</Typography>
                        </Grid>
                    </Grid>
                    {renderLines(usedLines)}
                </Container>
            </Fragment>
        );
    };
    return {
        Menu: Menu,
    };
};

export default MenuFragment;