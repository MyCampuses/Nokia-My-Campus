import {LinearProgress} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {Fragment} from 'react';
import GlobalFunctions from "../hooks/GlobalFunctions";
import Typography from "@material-ui/core/Typography";
import '../styles/progressBar.css';
// Class Comment, all the functinality:
// The progress bar and all the text that are inserted in it.

const ProgressBarFragments = (props) => {
    //Progressbar with props
    function HomeProgressBar(props) {
        return (
            <LinearProgress variant="determinate" value={props.value}/>
        );
    }
    const {onItemClickNavigate} = GlobalFunctions();
    /*eslint-enable */
    //All progress bars
    const ProgressBar = (barData) =>{
        return (

            <Fragment>
                <Grid item xs={12}
                      onClick={() => {onItemClickNavigate(barData.navigationUrl)}}>
                    <Grid item container className={barData.barTheme.progressLabel}
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          xs={12}>
                        <Grid item container alignItems="flex-start"
                              className={barData.barTheme.labelLocation} xs={4}>
                            <Typography className="alignLeft">
                                {barData.barLabel}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                {barData.utilization}: {barData.data}%
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                    <HomeProgressBar value={barData.data}>
                    </HomeProgressBar>
                </Grid>
            </Fragment>
        )
    };

    return {
        ProgressBar:ProgressBar
    };
}

export default ProgressBarFragments;
