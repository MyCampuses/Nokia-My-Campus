/*
    This file contains the logout event for the user
*/
import LocalStorageOperations from './LocalStorageOperations';

// Logout, remove auth token from localstorage
const Logout = () => {
    const {del} = LocalStorageOperations();
    const removeToken = () => {
        del('user');
    };
    return {removeToken};
};

export default Logout()
