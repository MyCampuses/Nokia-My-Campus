import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const UpdateApp = ({type, onUpdate}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 6000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
};

export default UpdateApp;