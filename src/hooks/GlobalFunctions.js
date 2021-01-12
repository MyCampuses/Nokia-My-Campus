/*
    This file contains some functions that are being used in many parts of the app
*/

import {format} from 'date-fns';
import { navigate } from 'hookrouter';

const GlobalFunctions = () => {
  // Navigate to url, check routes.js for more information
  const onItemClickNavigate = (url) => {
    if (url !== undefined) {
      //window.location.href = url;
      navigate(url, false);
    }
  };
  // Converts a Unix timestamp to a real time timestamp
  const convertTime = (timestamp) => {
    return new Date(timestamp);
  };
  // Creates a date in HH:mm format from timestamp
  const formattedDate = (timestamp) => {
    return format(timestamp, 'HH:mm');
  };
  // Create a date in dd-MM-yyyy format from timestamp
  const formattedFullDate = (timestamp) => {
    return format(timestamp, 'dd-MM-yyyy');
  };
  // Returns the current date in chart-friendly format
  const thisDate = format(new Date(), 'dd-MM-yyyy');

  //Returns a date in sodexo compatible format
  const sodexoDate = (timestamp) =>{
    return timestamp.toISOString().slice(0,10)
  };

  return {
    onItemClickNavigate,
    convertTime,
    formattedDate,
    formattedFullDate,
    thisDate,
    sodexoDate,
  };
};
export default GlobalFunctions;
