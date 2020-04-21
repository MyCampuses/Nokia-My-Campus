import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const Update = ({type, onUpdate}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
};

export default Update;