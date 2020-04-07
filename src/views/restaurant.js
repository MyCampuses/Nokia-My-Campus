/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import Navibar from "../fragments/topNavigationbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import API from "../hooks/ApiHooks";
import ApiUrls from '../hooks/ApiUrls';

const lines = new Map([[1, "Favourites 1"], [2, "Favourites 2"],
    [3, "Pizza"], [4, "Round Table"], [5, "Bowl"],
    [6, "Vege"], [7, "Cafe Pickup Line"], [8, "Salad/Nokia Coffee"]]);

const times = new Map([[1, "wait time < 30s"], [2, "wait time < 1m"],
    [3, "wait time < 1m 30s"], [4, "wait time < 2m”"], [5, "wait time > 2m"]]);

function ListContainer() {
    const [queuetimes, setQueuetimes] = useState(new Map());
    const {getUsageDataNoProps} = API();
    const {restaurantQueueUrl} = ApiUrls();

    const getQueueTimes = async () => {
        const lineMap = new Map();
        for (let i = 1; i < 9; i++) {
            getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueuetimes(new Map(queuetimes.set(i, result))))
        }
    };

    useEffect(() => {
        getQueueTimes().then()
    }, []);// eslint-disable-line

    return (<Box>
            {[...lines.keys()].map(mapkey => (
                <Box className="lineDiv"
                     border={1}
                     p={1}
                     m={1}
                     key={mapkey}
                     bgcolor="#D8FFD8"
                     borderColor="#E9E9E9"
                >
                    <Grid container direction="row"
                          justify="space-between"
                          alignItems="center">
                        <Grid>
                            <Typography>
                                {lines.get(mapkey)}
                            </Typography>
                        </Grid>
                        <Grid>
                            {queuetimes.get(mapkey) != null &&
                            <Typography>
                                {times.get(parseInt(queuetimes.get(mapkey).queue_time))}
                            </Typography>
                            }
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    )
}

const Restaurant = (props) => {
    const {TopNavigationbar} = Navibar();

    return (
        <div>
            <div>
                {TopNavigationbar()}
                <p>Queue Times</p>
            </div>
            <ListContainer/>
        </div>
    )

};

export default Restaurant;
