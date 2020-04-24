import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Update app via redux
const UpdateApp = ({type, onUpdate}) => {
  // Redux dispatch, type is either SW_INIT or SW_UPDATE, comes from Update.js when serviceworker is updated
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
      // 2 second timeout and dispatch
      const timer = setTimeout(() => {
        console.log("updating app, dispatch")
        dispatch({type});
      }, 2000)
      // Clear timeout so timer works correctly every time
      return () => clearTimeout(timer)
    }
  }, []);// eslint-disable-line
};

export default UpdateApp;