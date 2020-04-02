/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  LinearProgress,
  withStyles,
} from '@material-ui/core'
import Navibar from "../fragments/topNavigationbar";





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
    maxHeight: "50px", // borderlinearprogress root.height
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
  const {TopNavigationbar} = Navibar();

  return(
      <div className={classes.root}>
        {TopNavigationbar()}
        <h1>Inside levels of P5</h1>
        <h3>Live Utilization</h3>
        <div className={classes.progressLabel}>
          <span>50%</span>
        </div>
        <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            value={50}
        />
      </div>
  )
};

export default P5;