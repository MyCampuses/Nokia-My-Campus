import React, {Fragment, useEffect, useState} from "react";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
import {Box, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Data from "../hooks/Data";


const LineFragment = () => {

    const {lines, times, colours} = Data();

    const renderLines = (queueTimes) => (
        <Box>
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
    );

    const Lines = () => {

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
                <Container>
                    {renderLines(queueTimes)}
                </Container>
            </Fragment>
        );

    };
    return {
        Lines: Lines
    }
};
export default LineFragment;