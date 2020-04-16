import {makeStyles} from "@material-ui/core";

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

    return{
        progressBarTheme: progressBarTheme
    }
}


export default ProgressBarStyle