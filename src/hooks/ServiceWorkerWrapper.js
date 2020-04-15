import React, {FC, useEffect, useState} from 'react';
import {Snackbar, Button} from '@material-ui/core';
import * as serviceWorker from '../serviceWorker';

const ServiceWorkerWrapper: FC = () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };
  useEffect(() => {
    serviceWorker.register({onUpdate: onSWUpdate});
  }, []); // eslint-disable-line

  const reloadPage = () => {
    waitingWorker.postMessage({type: 'SKIP_WAITING'});
    setShowReload(false);
    window.location.reload(true);
  };
  return (
      <Snackbar
          open={showReload}
          message="App has a newer version available!"
          onClick={reloadPage}
          anchorOrigin={{vertical: 'center', horizontal: 'center'}}
          action={
            <Button
                color="inherit"
                size="small"
                onClick={reloadPage}
            >Reload</Button>}
      />
  );
};

export default ServiceWorkerWrapper;