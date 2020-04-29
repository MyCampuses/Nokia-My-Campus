import React from 'react';
// UpdateDialog, shown when app updates

const UpdateDialog = (params) => {
  return (
        <div className="AppUpdated">
          <h1 className="AppUpdatedHeading">There's a new update,
          press ok to continue.</h1>
          <button className="AppUpdatedButton" onClick={params.onUpdate}>OK</button>
        </div>
  );
};
export default UpdateDialog;