/*
    This file contains the style for progress bars for P5 & P10
 */
import {createMuiTheme} from "@material-ui/core";
import Colors from "./appColors";

const ProgressBarStyle = () => {

    const {NokiaBlue, LightBlue} = Colors();

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
                    backgroundColor: NokiaBlue
                },
                barColorPrimary:{
                    backgroundColor: LightBlue
                }
            },
            MuiTypography:{
                body1:{
                    minWidth:"200%",
                    color: "white"
                }
            },
            MuiGrid: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                'spacing-xs-1-115': {
                    padding: '0',
                    paddingTop: "4px",
                    paddingBottom: "4px",
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
