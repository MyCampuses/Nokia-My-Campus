import LocalStorageOperations from './LocalStorageOperations';

const Authentication = () => {
  const {read} = LocalStorageOperations();

  const isLoggedIn = () => {
    let user = read('user');
    return user !== null;
  };

  const checkIfLogged = () =>{
    const login = read("user");
    if (login!==null){
      window.location.href = '/home'
    } else {
      window.location.href = '/login'
    }
  };

  const redirectToLogin = () =>{
      const login = read("user");
      if (login===null){
        window.location.href = "/login"
      }
  };


  return {
    isLoggedIn,
    checkIfLogged,
    redirectToLogin
  };
};

export default Authentication;
