import {format} from 'date-fns';

const GlobalFunctions = () => {
  // Navigate to url, check routes.js for more information
  const onItemClickNavigate = (url) => {
    window.location.href = url;
  };
  // Converts a Unix timestamp to a real time
  const convertTime = (timestamp) =>{
    return new Date(timestamp)
  };
  // Creates a date in HH:mm format from timestamp
  const formattedDate = (timeStamp) => {
    return format(timeStamp, "HH:mm")
  };
  return {
    onItemClickNavigate,
    convertTime,
    formattedDate
  };
};
export default GlobalFunctions;
