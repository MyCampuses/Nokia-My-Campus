import {createMuiTheme} from "@material-ui/core";

const ProgressBarStyle = () => {

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
                    minWidth:"200%"
                }
            },
        },
    });

    return{
        P5P10ProgressBar:P5P10ProgressBar
    }
}


export default ProgressBarStyle
