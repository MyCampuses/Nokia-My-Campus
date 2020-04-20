import React from 'react';
import Home from '../views/home';
import Login from '../views/login';
import Info from '../views/info'
import P5 from '../views/p5';
import P10 from '../views/p10';
import Restaurant from '../views/restaurant';
import ForgotPassword from '../views/forgotPass'
import Register from "../views/register";
import AuthLoading from "../views/authLoading";
import P5MapView from "../views/p5MapView";
import P10MapView from "../views/p10MapView";
import ResetPassword from "../views/resetPassword";
const routes = {
  '/': ()=> <Home/>,
  '/info': ()=> <Info/>,
  '/home': () => <Home/>,
  '/login': () => <Login/>,
  '/p5': () => <P5/>,
  '/p10': () => <P10/>,
  '/restaurant': () => <Restaurant/>,
  '/register': () => <Register/>,
  '/forgot_password': () => <ForgotPassword/>,
  '/auth':()=> <AuthLoading/>,
  '/p5map': ()=> <P5MapView/>,
  '/p10map': () => <P10MapView/>,
  '/reset_password': (userEmail) => <ResetPassword userEmail={userEmail}/>,
};


export default routes;
