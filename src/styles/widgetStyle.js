import { makeStyles } from "@material-ui/core";

const WidgetStyle = () => {

const widgetStyle = makeStyles((theme) => ({
    frag: {
        flexGrow: 1,
    },
    card: {
        position: 'center',
        maxHeight: '20%',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        height: 100,
    }
}));

return {
    widgetStyle: widgetStyle
    };
};

export default WidgetStyle;