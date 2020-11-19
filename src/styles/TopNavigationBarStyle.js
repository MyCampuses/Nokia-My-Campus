import { makeStyles } from "@material-ui/core";

const topNavigationBarStyle = () => {
//Styles for the Top Navigation Bar
const topBar = makeStyles((theme) => ({
    frag: {
        flexGrow: 1,
    },
    toolBar: {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        flexGrow: 1
    },
    appBar: {
        position: "static",
        backgroundColor: '#124191',
    },
    iconButton: {
        color: "white",
    },
    logo: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        maxWidth: 160
    },
    menu: {
        color:"inherit",
        edge: "end"
    },
    rightToolbar: {
        marginLeft: 'auto',
    },
}));
return {
    topBar
    };
};

export default topNavigationBarStyle;