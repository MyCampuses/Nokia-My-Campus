import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';




// Create alert with redux
const Alert = ({text, buttonText, type, onClick}) => {
  const [clicked, setClicked] = useState(false)
  function handleOnClick() {
    setClicked(true);
  }
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
        {text} {buttonText && <button onClick={() => handleOnClick}>{buttonText}</button>}
      </div>
  );
};

export default Alert;