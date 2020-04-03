import LocalStorageOperations from './LocalStorageOperations';

const Authentication = (props) => {
  const {read} = LocalStorageOperations();
  const user = read('user');
  return !!user

};

export default Authentication;