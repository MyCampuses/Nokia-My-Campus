
import React, {Fragment, useEffect, useState} from 'react';
import {Box, Container} from '@material-ui/core';
import API from '../hooks/ApiHooks';
import Data from "../hooks/Data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ApiUrls from "../hooks/ApiUrls";
import useStyle from "../styles/restaurantStyles";
import {menu, time} from "../hooks/Actions";
import {useDispatch, useSelector} from "react-redux";

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

        const {getUsageDataNoProps} = API();
        const {restaurantQueueUrl} = ApiUrls();
        const menuState = useSelector(state => state.MenuReducer);
        const dispatch = useDispatch();

        const [stopper, setStopper] = useState(0);

        const [usedLines, setUsedLines] = useState(new Map([[1, 'FAVORITES']]));

        //get the menu for today and set it into dataForRender

        const getQueueTimes = async () => {
            let queue = new Map();
            for (let i = 1; i < 9; i++) {
                getUsageDataNoProps(restaurantQueueUrl + i)
                    .then(result => dispatch(time(queue.set(i, result))))
            }
        };

        if(menuState.length === 0) {
            getQueueTimes().then();
        }
        if(menuState.length === 1) {
            menuByDate(date)
                .then(json => dispatch(menu(json.courses)));
        }


        if(menuState.length === 2) {
            let check = menuState[1];

            //length of dataForRender
            let lengthy = Object.keys(check).length + 1;

            //size of queueTimes map
            let queueLength = menuState[0].size;

            //temporary map for data
            let temp = new Map();

            // Check that dataForRender has been set, that this useEffect didn't run already, and that queueTimes has all entries
            if(check[2] !== undefined && queueLength === 8 && stopper === 0){

                //run for each entry from sodexo
                for (let i = 1; i < lengthy; i++) {

                    // run for each entry in Data.js
                    for (let l = 1; l < 9; l++) {

                        //check for matching values
                        if (check[i].category === lines.get(l)){

                            //set the values into the temporary Map
                            temp.set(
                                l, [ menuState[0].get(l), check[i] ]
                            );
                        }
                    }
                }
                setUsedLines(temp);
                setStopper(1);
            }
        }

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