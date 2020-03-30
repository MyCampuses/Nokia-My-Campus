import API from '../hooks/ApiHooks';
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  BottomNavigation, Container, Box, TextField,
} from '@material-ui/core';
import LocalStorageOperations from '../hooks/LocalStorageOperations';

const apiUrl = 'https://mycampus-server.karage.fi/api/';
const restaurantUrl = apiUrl + 'common/restaurant';
const parkingP5Url = apiUrl + 'common/parkings/status/P5';
const parkingP10Url = apiUrl + 'common/parkings/status/P10';
const campusMapP5Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P5.png';
const campusMapP10Url = 'https://mycampus-server.karage.fi/style/static/images/campus_map_P10.png';

const Home = (props) => {
  const {getUsageData} = API();

  const [homeData, setHomeData] = useState(undefined);
  getUsageData(parkingP5Url).then(result => {
    setHomeData(result.toString());
  });
  return(
      <Box component="main" maxWidth="xs">
        <TextField
            name="restaurant usage"
            label="restaurant usage"
            type="password"
            id="password"
            autoComplete="current-password"
            value= {homeData}
        />
        </Box>
  )

};

export default Home;