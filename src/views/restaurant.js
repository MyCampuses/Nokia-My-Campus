/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import API from "../hooks/ApiHooks";
import ApiUrls from '../hooks/ApiUrls';
import Data from '../hooks/Data'
import Authentication from '../hooks/Authentication';
import NaviBar from "../fragments/TopNavigationBarFragment";
import strings from '../localization';
import AuthLoading from "./authLoading";

function ListContainer() {
    const [queueTimes, setQueueTimes] = useState(new Map());
    const {getUsageDataNoProps} = API();
    const {restaurantQueueUrl} = ApiUrls();
    const {lines, times, colours} = Data();

    const getQueueTimes = async () => {
        const lineMap = new Map();
        for (let i = 1; i < 9; i++) {
            getUsageDataNoProps(restaurantQueueUrl + i).then(result => setQueueTimes(new Map(queueTimes.set(i, result))))
        }
    };

    useEffect(() => {
        getQueueTimes().then()
    }, []);// eslint-disable-line


    return (
        <Box>
            {[...lines.keys()].map(mapKey => (
                <div key={mapKey}>
                    {queueTimes.get(mapKey) != null && <Box className="lineDiv"
                          border={1}
                          p={1}
                          m={1}
                          bgcolor={colours.get(parseInt(queueTimes.get(mapKey).queue_time))}
                          borderColor="#E9E9E9"
                    >
                        <Grid container direction="row"
                              justify="space-between"
                              alignItems="center">
                            <Grid>
                                <Typography>
                                    {lines.get(mapKey)}
                                </Typography>
                            </Grid>
                            <Grid>
                                {queueTimes.get(mapKey) != null &&
                                <Typography>
                                    {times.get(parseInt(queueTimes.get(mapKey).queue_time))}
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
    const {isLoggedIn} = Authentication();
    const {TopNavigationBar} = NaviBar();
    const RestaurantPage = () =>{
        return (
            <div>
                <div>
                    {TopNavigationBar()}
                    <p>{strings.restaurantPageTitle}</p>
                </div>
                <ListContainer/>
            </div>
        )
    };
    const AuthRestaurant = () =>{
        if(isLoggedIn()){
            return <RestaurantPage/>
        } else {
            return <AuthLoading/>
        }
    };

    return(
        <AuthRestaurant/>
    )

};

export default Restaurant;
