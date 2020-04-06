import LocalStorageOperations from './LocalStorageOperations';

const Authentication = () => {
  const {read} = LocalStorageOperations();

  const isLoggedIn = () => {
    let user = read('user');
    if (user!==null){
      return true
    } else{
      return false
    }
  };

  return {
    isLoggedIn,
  };
};

export default Authentication;
