import { makeStyles } from "@material-ui/core";

const WidgetStyle = () => {

const widgetStyle = makeStyles((theme) => ({
    frag: {
        flexGrow: 1,
    },
    card: {
        position: 'center',
        maxHeight: '10%',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        objectFit: 'cover'
    }
}));

return {
    widgetStyle: widgetStyle
    };
};

export default WidgetStyle;