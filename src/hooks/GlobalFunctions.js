const GlobalFunctions = () => {
  const onItemClickNavigate = (url) => {
    window.location.href = url;
  };
  const convertTime = (timestamp) =>{
    return new Date(timestamp)
  };


  return {
    onItemClickNavigate,
    convertTime
  };
};
export default GlobalFunctions;
