/*
        This class contains the the progress bar fragment which renders the progress bar and all the texts in it
        for p5, P10 and restaurant
 */
import {LinearProgress} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {Fragment} from 'react';
import GlobalFunctions from "../hooks/GlobalFunctions";
import Typography from "@material-ui/core/Typography";
import '../styles/progressBar.css';
import WidgetStyle from '../styles/widgetStyle';

const ProgressBarFragments = (props) => {

    const barTheme = WidgetStyle().barTheme();
    //Progressbar with props
    const HomeProgressBar = (props) => {
        return (
            <LinearProgress variant="determinate" value={props.value}/>
        );
    };
    const {onItemClickNavigate} = GlobalFunctions();
    /*eslint-enable */

    // Global progressbar that takes a json as a parameter.
    /*  This is a sample of what data the bar needs
        const progressbarData = {
            navigationUrl: undefined,              -> Url that is used for the navigation if clicked. Undefined = no navigation
            barLabel: "",                          -> Top Left label of the bar. Mainly only used in Home page. "" = no label
            utilization: strings.p10insideutil,    -> The string displayed in the middle of the bar
            data: parkingP10Data,                  -> Actual data the bar will use
            barTheme                               -> The theme for the bar. Theme must contain stuff like labelLocation & progressLabel
        };

        if you want the name of the progressbar label in the left uppercorner of progressbar
        
        replace  :
        <Grid item container alignItems="flex-start"
            className={barTheme.labelLocation} xs={4}>
        </Grid>

        with: 

        <Grid item container alignItems="flex-start"
            className={barTheme.labelLocation} xs={4}>
                <Typography className="alignLeft">
                    {barData.label}
                </Typography>
        </Grid>
        
    */
    const ProgressBar = (barData) =>{
        return (
            <Fragment>
                <Grid item xs={12}
                      onClick={() => {onItemClickNavigate(barData.navigationUrl)}}>
                    <Grid item container className={barTheme.progressLabel}
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          xs={12}>
                        <Grid item container alignItems="flex-start"
                              className={barTheme.labelLocation} xs={4}>
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
};

export default ProgressBarFragments;
