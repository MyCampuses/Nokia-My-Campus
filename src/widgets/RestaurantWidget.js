import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import useStyle from "../styles/restaurantStyles";

const RWidget = (props) =>{

    const classes = useStyle();

    const RestaurantFeed = (items) =>{

        const item = items.data.courses;

        return (
            <Fragment>
                <Box className={classes.Widget}>

                    {(Object.keys(item) || []).map(mapKey => (
                        <div key={mapKey} >

                            <p className={classes.TopP}>
                                {item[mapKey].category}
                            </p>

                            <Grid container direction="row" className={classes.overStyle}>

                                <Grid item container direction="column" className={classes.menuStyle}>

                                    <Grid item>

                                        <Grid item className={classes.Card}>
                                            <Grid container direction="row">
                                                <Grid item className={classes.mItem}>
                                                    <p>
                                                        {item[mapKey].title_en}
                                                    </p>
                                                </Grid>
                                                <Grid item className={classes.mInfo}>
                                                    <p>
                                                        <p className={classes.properties}>
                                                            {item[mapKey].properties}
                                                        </p>
                                                        <p>
                                                            {item[mapKey].price}
                                                        </p>
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        ))}
                </Box>
            </Fragment>
        );
    };

    return {
        RestaurantFeed: RestaurantFeed
    }
};

export default RWidget