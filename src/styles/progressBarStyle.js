import {createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

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
                colorPrimary:{
                    backgroundColor: blue[400]
                },
                barColorPrimary:{
                    backgroundColor: blue[900]
                }
            },
            MuiTypography:{
                body1:{
                    color:"white",
                    minWidth:"200%"
                }
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
        },
    });

    return{
        P5P10ProgressBar:P5P10ProgressBar,

    }
};


export default ProgressBarStyle
