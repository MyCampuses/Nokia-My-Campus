/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import strings from "../localization";
import '../styles/App.css';


const P5MapView = () =>{

    return (
        <div>
            <img src={require('../assets/campus_map_P5.webp')} alt={strings.p5MapAlt} className='MapStyle'/>
        </div>
    )

};

export default P5MapView;
