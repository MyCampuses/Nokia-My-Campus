import React from 'react';

const UpdateDialog = (onUpdate) => {
  return (
  <div className="AppUpdated">
    <h1>App Updated</h1>
    <p>Press Ok to update</p>
    <div className="DialogButton">
      <button onClick={() => onUpdate}>Ok</button>
    </div>
  </div>
  )
}
export default UpdateDialog