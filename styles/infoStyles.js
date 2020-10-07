import {makeStyles} from "@material-ui/core";

const InfoStyles = () => {

    const infoStyle = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        margin: {
            margin: theme.spacing(1),
            border: 1,
        },

    }));

    return {
        infoStyle: infoStyle
    }
}

export default InfoStyles