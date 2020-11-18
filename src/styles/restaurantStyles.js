import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    MenuContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
    },
    DialogContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingBottom: "3%",
    },
    WeeklyContainer:{
        width: '100%',
        height: '100%',
        display: "inline-block",
        paddingTop: "5%",
    },
    overStyle: {
        height:"100%",
        width:"100%",
        fontSize:"3vw",
    },
    menuStyle: {
        color: "black",
        height:"100%",
        width:"75%",
        fontSize:"3vw",
    },
    waitStyle: {
        width:"25%",
        height: "100%",
        fontSize:"3vw",
    },
    TopP: {
        color: "#124191",
        textAlign: "left",
    },
    Card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "5px",
    },
    mItem:{
        width: "50%",
        paddingLeft: "3%",
        position: "relative",
        display: "inline-block",
    },
    mInfo: {
        width: "50%",
        position: "relative",
        display: "inline-block",
    },
    mProperties:{
        textAlign: "right",
        paddingRight: "5%"
    },
    properties: {
        color: "red",
    },
    stripe: {
        width: "5%",
    },
    rightInfo: {
        color: "#969696",
        width: "50%",
        textAlign: "right",
    },
    leftInfo: {
        color: "#969696",
        width: "50%",
        textAlign: "left",
    },
    Carousel: {
        minHeight: "90vh",
    },
    Frag: {
        height: "85vh",
    },
    RestaurantBox: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',

    },
    DonutContainer:{
        textAlign: 'center',
        width: '100%',
        height: '45vh',
        display: 'inline-block',
    },
    Donut: {
        width: '100%',
        height: '100%',
        minWidth: "200px",
        minHeight: "200px",
    },
}));

export default useStyle;


