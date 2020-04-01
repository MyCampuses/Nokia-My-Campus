/* eslint-disable no-unused-vars */

import API from '../hooks/ApiHooks';
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {useRoutes} from 'hookrouter';
import {Container, TextField, Button} from '@material-ui/core';

const apiUrl = 'https://mycampus-server.karage.fi/api/';
const restaurantUrl = apiUrl + 'common/restaurant/Midpoint?select=fill_percent';
const parkingP5Url = apiUrl + 'common/parking/status/P5';
const parkingP10Url = apiUrl + 'common/parking/status/P10';
const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

const Home = (props) => {
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const {getUsageData} = API();

  useEffect(()=>{
    getUsageData(parkingP5Url, props).then((json)=>{
      console.log(json);
      setParkingP5Data(json.percent)
    });

    getUsageData(restaurantUrl, props).then((json)=>{
      console.log(json);
      setRestaurantData(json.fill_percent)
    });

    getUsageData(parkingP10Url, props).then((json)=>{
      console.log(json);
      setParking10Data(json.percent)
    });
  },[]);

  return (
      <Container>
        <Button>{parkingP5Data}% P5</Button>
        <Button>{restaurantData}% Rest</Button>
        <Button>{parkingP10Data}% P10</Button>
      </Container>

  );

};

export default Home;
