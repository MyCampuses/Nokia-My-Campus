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
        maxHeight: '20%',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        height: 100,
    },
    header: {
        fontSize: 'large',
        textColor: 'black',
      },
      plus: {
        maxHeight: '40%',
        maxWidth: '40%'
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
    widgetStyle: widgetStyle,
    barTheme: barTheme,
    };
};

export default WidgetStyle;