import {createMuiTheme, makeStyles} from "@material-ui/core";

const ProgressBarStyle = () => {

    const progressBarTheme = makeStyles(theme => ({
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
            maxHeight: '50px',
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

    const P5P10ProgressBar = createMuiTheme({
        flexGrow: 1,
        overrides: {
            MuiLinearProgress: {
                root: {
                    height: '15vh',
                    maxHeight: '50px',
                    borderRadius: '10px',
                    width: '100%',
                },
            },
            MuiGrid: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                'spacing-xs-1': {
                    padding: '0px',
                    margin: '0px',
                    width: '100%',
                },
            },
            MuiContainer: {
                root: {
                    paddingLeft: '4px',
                    paddingRight: '4px',
                },
            },
            MuiTypography:{
                body1:{
                    minWidth:"120px"
                }
            },
        },
    });


    return{
        progressBarTheme: progressBarTheme,
        P5P10ProgressBar:P5P10ProgressBar
    }
}


export default ProgressBarStyle
