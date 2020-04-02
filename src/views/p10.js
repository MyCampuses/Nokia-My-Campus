/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import Navibar from "../fragments/topNavigationbar";

const P10 = (props) => {
  const {TopNavigationbar} = Navibar();

  return (
      <div>
        {TopNavigationbar()}
        <p>P10 Placeholder</p>
      </div>
  )

};

export default P10;
