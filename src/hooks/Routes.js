import React from 'react';
import Home from '../views/home';
import Login from '../views/login';
import P5 from '../views/p5';
import P10 from '../views/p10';
import Restaurant from '../views/restaurant';

const routes = {
  '/': () => <Login/>,
  '/home': () => <Home/>,
  '/p5': () => <P5/>,
  '/p10': () => <P10/>,
  '/restaurant': () => <Restaurant/>,
};
export default routes;