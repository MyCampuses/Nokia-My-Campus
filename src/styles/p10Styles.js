import { makeStyles } from "@material-ui/core/styles";

const p10Styles = makeStyles({
   p10title: {
       color: "#008AFF",
   },
    progressLabel: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        maxHeight: "50px", // borderlinearprogress root.height
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        "& span": {
            width: "100%"
        }
    },
});

export default p10Styles;