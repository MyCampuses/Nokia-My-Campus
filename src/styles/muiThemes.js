import {createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
/*
    Contains the Theme used in all the forms in the application and the function
    to set the background for login,register and forgot password
 */

const MuiThemes = () => {

    // Controls the Login, Register and Forgot Password page backgrounds.
    // Can be used to set either background color or image for example.
    // Background image behaviour is buggy atm so using a solid color instead for now
    const setBackgroundBlue = () => {
        let root = document.getElementById('root-body');
        //root.style.backgroundImage = "url(loginBackground.png)";
        root.style.backgroundColor="#0d47a1"
        root.style.backgroundSize = "cover";
        root.style.backgroundRepeat = "no-repeat";
    };

    const FormTheme = createMuiTheme({
        palette: {
            primary: {
                main: blue[200],
            },
            secondary: {
                main: blue[50],
            },
        },
        typography: {
            fontSize: 12,
            button: {
                fontSize: 16,
            },
        },
        overrides: {
            MuiOutlinedInput: {
                root: {
                    position: 'relative',
                    '& $notchedOutline': {
                        borderColor: blue[50],
                    },
                    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                        borderColor: blue[50],
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            borderColor: blue[50],
                        },
                    },
                    '&$focused $notchedOutline': {
                        borderColor: blue[50],
                        borderWidth: 1,
                    },
                },
                input:{
                    '&:-webkit-autofill':{
                        WebkitBoxShadow: '0 0 0 100px #0d47a1  inset',
                        WebkitTextFillColor: blue[50]
                    },
                }
            },
            MuiInputBase:{
                input:{
                    color:blue[50],
                }
            },
            MuiFormLabel: {
                root: {
                    // "&$focused": {
                    color: blue[50],
                    // }
                },
            },
            MuiButton: {
                containedPrimary: {
                    color: blue[800],
                    marginTop: '0.5em',
                },
                fullWidth:{
                    backgroundColor:blue[50]
                }
            },
            MuiCheckbox:{
                colorPrimary:{
                    color:blue[50]
                },
            },
            MuiTypography:{
                body1:{
                    color:blue[50]
                }
            },
        },
    });

    // MUI theme for Home, Restaurant, P5 & P10
    const PageTheme = createMuiTheme({
        flexGrow: 1,
        overrides: {
            MuiLinearProgress: {
                root: {
                    height: '15vh',
                    maxHeight: '100px',
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
        },
    });

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
        },
    });


    return{
        PageTheme: PageTheme,
        FormTheme:FormTheme,
        P5P10ProgressBar:P5P10ProgressBar,
        setBackgroundBlue:setBackgroundBlue
    }
};

export default MuiThemes
