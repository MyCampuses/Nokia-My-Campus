import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Update app via redux
const UpdateApp = ({type, onUpdate}) => {
  // Redux dispatch, type is either SW_INIT or SW_UPDATE, comes from Update.js when serviceworker is updated
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
      // 2 second timeout and dispatch
      const timer = setTimeout(() => {
        dispatch({type});
      }, 2000)
      // Clear timeout so timer works correctly every time
      return () => clearTimeout(timer)
    }
  }, []);// eslint-disable-line

  return (
        <div className="AppUpdated">
          <h1>App Updated</h1>
          <p>Press Ok to update</p>
          <div className="DialogButton">
            <button onClick={ () => onUpdate}>Ok</button>
          </div>
        </div>
  )
};

export default UpdateApp;