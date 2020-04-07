import LocalStorageOperations from './LocalStorageOperations';

const Authentication = () => {
  const {read} = LocalStorageOperations();
  const getUser = () => {
    console.log("Hei");
    let user = read('user');
    if(user == null) {
      console.log("returning false");
      return false
    }
    console.log("user");
    return user
  };
  return {
    getUser,
  };
};

export default Authentication;