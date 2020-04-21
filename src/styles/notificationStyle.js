import {makeStyles} from '@material-ui/core';

const notificationStyles = () => {
  const updateAlertTheme = makeStyles(theme => ({
    alertWindow: {
      position: 'absolute',
      left: '50%',
      top: '50%',
    },

  }));

  return {
    updateAlertTheme: updateAlertTheme,
  };
};

export default notificationStyles();