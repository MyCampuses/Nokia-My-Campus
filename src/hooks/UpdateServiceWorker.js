import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const Update = ({type, onUpdate}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onUpdate) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
};

export default Update;