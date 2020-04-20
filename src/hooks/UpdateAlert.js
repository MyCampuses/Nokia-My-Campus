import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const [clicked, setClicked] = useState(false)
const handleOnClick = (event, value) => {
  if (value != null) {
    setClicked(true);
  }
};

// Create alert with redux
const Alert = ({text, buttonText, type, onClick}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!clicked) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 6000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
  return (
      <div className="updateAlert">
        {text} {buttonText && <button onClick={() => handleOnClick} value={true}>{buttonText}</button>}
      </div>
  );
};

export default Alert;