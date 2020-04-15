/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import strings from "../localization";
import '../styles/App.css';

const P10MapView = () =>{
    return (
        <div>
            <img src={require('../assets/campus_map_P10.webp')} alt={strings.p10MapAlt} className="MapStyle"/>
        </div>
    )
};

export default P10MapView;
