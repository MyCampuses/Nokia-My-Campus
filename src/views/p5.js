/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  LinearProgress,
  withStyles,
} from '@material-ui/core'
import NaviBar from "../fragments/topNavigationbar";
import API from "../hooks/ApiHooks";
import ApiUrls from "../hooks/ApiUrls";
import Authentication from '../hooks/Authentication';


const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff"
  },
  margin: {
    margin: theme.spacing(1),
    border: 1
  },

  progressLabel: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    maxHeight: "50px",
    textAlign: "center",
    textColor: "#000000",
    display: "flex",
    alignItems: "center",
    "& span": {
      width: "100%"
    }}
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 50,
    backgroundColor: ("White"),
    border: 5,
    borderColor: "#000000"
  },
  bar: {
    backgroundColor: "#108EE9",
    borderColor: "#707070",
    border: 1,
    m: 1,
    bgColor: 'background.paper',
    style: { width: '5rem', height: '5rem' }
  },
})(LinearProgress);


const P5 = (props) =>{
  const classes = useStyle();
  const {TopNavigationBar} = NaviBar();
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const {getUsageData} = API();
  const {parkingP5Url} = ApiUrls();
  const {redirectToLogin} = Authentication();

  useEffect(()=>{
    redirectToLogin()
  },[]); // eslint-disable-line

  useEffect(() => {
    getUsageData(parkingP5Url, props)
        .then(result => setParkingP5Data(result.percent));
  });

  return(
      <div className={classes.root}>
        {TopNavigationBar()}
        <h1>Inside levels of P5</h1>
        <h3 align="screenLeft">Live Utilization</h3>
        <div className={classes.progressLabel}>
          <span>{parkingP5Data}%</span>
        </div>
        <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            value={parkingP5Data}
        />
      </div>
  )
};

export default P5;
