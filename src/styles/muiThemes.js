import {createMuiTheme} from "@material-ui/core";
import {blue, red} from "@material-ui/core/colors";


const MuiThemes = () => {

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
                main: blue[500],
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
                    }
                }
            },
            MuiInputBase:{
                input:{
                    color:blue[50]
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
                    color: blue[50],
                    marginTop: '0.5em',
                },
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
            }
        },
    });

    return{
        FormTheme:FormTheme,
        setBackgroundBlue:setBackgroundBlue
    }

};

export default MuiThemes
