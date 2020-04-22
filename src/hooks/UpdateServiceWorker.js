import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const UpdateApp = ({type, onUpdate}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
        dispatch({type});
    }
  }, []);// eslint-disable-line
};

export default UpdateApp;