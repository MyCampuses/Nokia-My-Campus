import LocalStorageOperations from './LocalStorageOperations';

const Logout = () => {
    const {del} = LocalStorageOperations();

    const removeToken = () => {
        del('user');
    };

    return {removeToken};
};

export default Logout()