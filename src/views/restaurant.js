/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import API from "../hooks/ApiHooks";
import ApiUrls from '../hooks/ApiUrls';
import Data from '../hooks/Data'
import Authentication from '../hooks/Authentication';
import Navibar from "../fragments/topNavigationbar";


function ListContainer() {
    const [queuetimes, setQueuetimes] = useState(new Map());
    const {getUsageDataNoProps} = API();
    const {restaurantQueueUrl} = ApiUrls();
    const {lines, times, colours} = Data();

    const getQueueTimes = async () => {
        const lineMap = new Map();
        for (let i = 1; i < 9; i++) {
            getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueuetimes(new Map(queuetimes.set(i, result))))
        }
    };

    useEffect(() => {
        getQueueTimes().then()
    }, []);// eslint-disable-line


    return (
        <Box>
            {[...lines.keys()].map(mapkey => (
                <div>
                    {queuetimes.get(mapkey) != null && <Box className="lineDiv"
                          border={1}
                          p={1}
                          m={1}
                          key={mapkey}
                          bgcolor={colours.get(parseInt(queuetimes.get(mapkey).queue_time))}
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
                    }
                </div>
            ))}
        </Box>

    )
}

const Restaurant = (props) => {
    const {redirectToLogin} = Authentication();
    useEffect(() => {
        redirectToLogin()
    }, []); // eslint-disable-line
    const {TopNavigationBar} = Navibar();

    return (
        <div>
            <div>
                {TopNavigationBar()}
                <p>Queue Times</p>
            </div>
            <ListContainer/>
        </div>
    )

};

export default Restaurant;
