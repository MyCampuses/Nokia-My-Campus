/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import Navibar from "../fragments/topNavigationbar";

const Restaurant = (props) => {
  const {TopNavigationbar} = Navibar();

  return (
      <div>
        {TopNavigationbar()}
        <p>Restaurant Placeholder</p>
      </div>
  )

};

export default Restaurant;
