import {LinearProgress, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {Fragment} from 'react';
import GlobalFunctions from "../hooks/GlobalFunctions";
import Typography from "@material-ui/core/Typography";
import '../styles/progressBar.css';
const ProgressBarFragments = (props) => {

    //Progressbar with props
    function HomeProgressBar(props) {
        return (
            <LinearProgress variant="determinate" value={props.value}/>
        );
    }

    const {onItemClickNavigate} = GlobalFunctions();

    /*eslint-enable */


    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        headLine: {
            marginTop: '10px',
            marginBottom: '10px',
            color: 'blue',
        },
        progressLabel: {
            position: 'absolute',
            zIndex: 1,
            maxHeight: '100px',
            height: '15vh',
            maxWidth: '1152px',
            width: '90%',
        },
        labelLocation: {
            maxHeight: '100px',
            height: '15vh',
            justifyContent: 'flex-start',
        },
    }));
    const progressBarTheme = useStyles();
    //const {progressBarTheme} = ProgressBarStyle()
    //Restaurant progress bar

    const ProgressBar = (barData) =>{
        return (
            <Fragment>
                <Grid item xs={12} spacing={0}
                      onClick={() => {onItemClickNavigate(barData.navigationUrl)}}>
                    <Grid item container className={progressBarTheme.progressLabel}
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          xs={12}>
                        <Grid item alignItems="flex-start"
                              className={progressBarTheme.labelLocation} xs={4}>
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
