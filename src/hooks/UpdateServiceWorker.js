import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const Update = ({type, onUpdate}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type});
    }, []);// eslint-disable-line
  return (
      <div className="updateAlert">
        {onUpdate}
      </div>
  );
};

export default Update;