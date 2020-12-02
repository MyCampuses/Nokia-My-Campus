import { makeStyles } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';

const WidgetStyle = () => {
    const colorB = blue[500]

const widgetStyle = makeStyles((theme) => ({
    frag: {
        flexGrow: 1,
    },
    card: {
        position: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '3%',
        marginBottom: '3%',
    },
      plus: {
        maxHeight: '30%',
        maxWidth: '30%'
      },
}));

const barTheme = makeStyles({
    root: {
      flexGrow: 1,
    },
    headLine: {
      marginTop: '10px',
      marginBottom: '10px',
      color: colorB,
    },
    progressLabel: {
      position: 'absolute',
      zIndex: 1,
      maxHeight: '100px',
      height: '14vh',
      maxWidth: '1152px',
      width: '90%',
    },
    labelLocation: {
      maxHeight: '100px',
      height: '15vh',
      justifyContent: 'flex-start',
    }, 

  });

return {
    widgetStyle,
    barTheme,
    };
};

export default WidgetStyle;