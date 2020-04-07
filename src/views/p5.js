/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  LinearProgress,
  withStyles, Box,
} from '@material-ui/core';
import NaviBar from '../fragments/topNavigationbar';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import {XYPlot, VerticalBarSeries} from 'react-vis';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  margin: {
    margin: theme.spacing(1),
    border: 1,
  },

  progressLabel: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    maxHeight: '50px',
    textAlign: 'center',
    textColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      width: '100%',
    },
  },
  p5chart: {
    width: '100%',
    height: '100%',
    maxHeight: '200px',
    margin: theme.spacing(1)
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 50,
    backgroundColor: ('White'),
    border: 5,
    borderColor: '#000000',
  },
  bar: {
    backgroundColor: '#108EE9',
    borderColor: '#707070',
    border: 1,
    m: 1,
    bgColor: 'background.paper',
    style: {width: '5rem', height: '5rem'},
  },
})(LinearProgress);

const P5 = (props) => {
  const classes = useStyle();
  const {TopNavigationBar} = NaviBar();
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [chartData, setChartData] = useState(undefined);
  const {getUsageData} = API();
  const {parkingP5Url, selectDate} = ApiUrls();
  const thisLoc = 'P5';
  const thisDate = '02-04-2020';
  const {redirectToLogin} = Authentication();

  useEffect(()=>{
    redirectToLogin()
  },[]); // eslint-disable-line

  useEffect(() => {
    getUsageData(parkingP5Url, props).
        then(result => setParkingP5Data(result.percent));
  }, []);// eslint-disable-line

  const getChartData = () => {
    getUsageData(selectDate(thisLoc, thisDate))
        .then(result => dataToChart(result.samples)).then(result => setChartData(result));
  };

  const dataToChart = (json) => {
    if (json !== undefined) {
      const chart = [];
      for (let key in json) {
        console.log(key)
        let xc = key;
        const xcInt = parseInt(xc)
        let yc = json[key].percent;
        let tempJson = {x: xcInt, y: yc};
        chart.push(tempJson);
      }
      console.log(chart);
      return chart
    }
  };
  useEffect(() => {
    getChartData()
  },[]);

  console.log("Chart:" + JSON.stringify(chartData))

  return (
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
        <Box className={classes.p5chart}><XYPlot height={300} width={600}><VerticalBarSeries data={chartData} color="blue"/></XYPlot></Box>
      </div>
  );
};

export default P5;
