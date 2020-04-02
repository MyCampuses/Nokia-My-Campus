import LocalStorageOperations from './LocalStorageOperations';

const Authentication = () => {
  const {read} = LocalStorageOperations();
  const isLoggedIn = () => {
    let user = read('user');
    return !!user

  };
  return {
    isLoggedIn,
  };
};

export default Authentication;