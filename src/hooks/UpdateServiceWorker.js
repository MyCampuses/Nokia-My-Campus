import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AuthLoading from '../views/authLoading';

// Create alert with redux
const Update = ({type}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type});
  }, []);// eslint-disable-line
  return (
      <AuthLoading/>
  )
};

export default Update;