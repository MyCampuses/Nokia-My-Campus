import { makeStyles} from "@material-ui/core/styles";

const commonStyles = makeStyles({
    bottomTabs: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "white",
    },
    bottomTab: {
        color: "white",
        background: "#108EE9",
    },
    bottomTabSelected: {
        background: "white",
        color: "#008AFF",
    },
});

export default commonStyles;