import LocalStorageOperations from './LocalStorageOperations';
import Login from '../views/login';
import React from "react";

const Authentication = (props) => {
  const {read} = LocalStorageOperations();
  // Returns true or false according to if the user is logged in
  const isLoggedIn = () => {
    let user = read('user');
    return user !== null;
  };
  // Checks if the user is logged in and navigates to home or login accordingly
  const checkIfLogged = () =>{
    const login = read("user");
    if (login!==null){
      window.location.href = '/home'
    } else {
      window.location.href = '/login'
    }
  };

  // Redirects user to login if he tries to use url navigation without being logged in
  const redirectToLogin = () =>{
      const login = read("user");
      if (login===null){
        window.location.href = "/login"
      }
  };

  // Redirects from login if the user is already logged in and tries to use url navigation
  const redirectFromLogin = () =>{
    const login = read("user")
    if (login !== null){
      window.location.href = "/home"
    }
  };

  // Checks if logged in Then redirects to login or returns the intended page to be shown. Not in use
  const checkLogged = (props,page) =>{
    if (isLoggedIn()){
      return page
    } else {
      return <Login/>
    }
  };

  return {
    isLoggedIn,
    checkIfLogged,
    redirectToLogin,
    redirectFromLogin,
    checkLogged
  };
};

export default Authentication;
