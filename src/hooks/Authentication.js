import LocalStorageOperations from './LocalStorageOperations';

const Authentication = () => {
  const {read} = LocalStorageOperations();

  const isLoggedIn = () => {
    let user = read('user');
    if (user!==null){
      return false
    } else{
      return true
    }
  };

  return {
    isLoggedIn,
  };
};

export default Authentication;
