const GlobalFunctions = () => {
  const onItemClickNavigate = (url) => {
    window.location.href = url;
  };
  return {
    onItemClickNavigate
  };
};
export default GlobalFunctions;
