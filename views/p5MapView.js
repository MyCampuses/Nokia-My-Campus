/*
    This file is the component that renders the P5 map.
*/
import React from 'react';
import strings from "../localization";
import '../styles/App.css';
import Box from "@material-ui/core/Box";

const P5MapView = (props) =>{
    const {children, value, index, ...other} = props;
    return (
        <div role="tabfragmentp5map" //eslint-disable-line
             hidden={value !== index}
             id={`tabfragmentp5map-${index}`}
             aria-labelledby={`tab-${index}`}
             inputstyle={{textAlign: 'center'}} //eslint-disable-line
             {...other}>
            <div>
                {value === index && <Box p={5}>{children}</Box>}
            </div>
            <img src={require('../assets/campus_map_P5.webp')} alt={strings.p5MapAlt} className='MapStyle'/>
        </div>
    )
};

export default P5MapView;
