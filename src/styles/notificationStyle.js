import {makeStyles} from '@material-ui/core';

const notificationStyles = () => {

  const updateAlert = makeStyles( () => ({
    body: {
      position: 'absolute',
      left: '50%',
      top: '50%',
    },
  }));

  return {
    updateAlert: updateAlert,
  };
};

export default notificationStyles;