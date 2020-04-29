import React from 'react';
import '../styles/App.css';

// UpdateDialog, shown when app updates
const UpdateDialog = (params) => {
  return (
  <div className="AppUpdated">
    <h1>App has been updated</h1>
    <button onClick={params.onUpdate}>OK</button>
  </div>
  )
}
export default UpdateDialog