import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// Create alert with redux
const Update = ({text, buttonText, type, onClick}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 6000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
  return (
      <div className="alert">
      {text} {buttonText} && <button onClick={onClick}>{buttonText}</button>}
      </div>
  )
};

export default Update;