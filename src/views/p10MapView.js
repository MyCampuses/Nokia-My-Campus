/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import strings from "../localization";
import '../styles/App.css';
import Box from "@material-ui/core/Box";

const P10MapView = (props) =>{
    const {children, value, index, ...other} = props;

    return (
        <div role="tabfragmentp10map" //eslint-disable-line
            hidden={value !== index}
            id={`tabfragmentp10map-${index}`}
            aria-labelledby={`tab-${index}`}
            inputstyle={{textAlign: 'center'}} //eslint-disable-line
            {...other}>
            <div>
                {value === index && <Box p={5}>{children}</Box>}
            </div>
            <img src={require('../assets/campus_map_P10.webp')} alt={strings.p10MapAlt} className="MapStyle"/>
        </div>
    )
};

export default P10MapView;
