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

  const parkingP5Usage = getUsageData(parkingP5Url, props);
  parkingP5Usage.then(result => setParkingP5Data(result.count),
  );
  console.log(parkingP5Usage)
  const restaurantUsage = getUsageData(restaurantUrl, props);
  restaurantUsage.then(result => setRestaurantData(result.fill_percent),
  );
  console.log(restaurantUsage)
  const parkingP10Usage = getUsageData(parkingP10Url, props);
  parkingP10Usage.then(result => setParking10Data(result.count),
  );
  console.log(parkingP10Usage)


  return (
      <Container>
        <Button>{parkingP5Data}</Button>
        <Button>{restaurantData}</Button>
        <Button>{parkingP10Data}</Button>
      </Container>

  );

};

export default Home;
