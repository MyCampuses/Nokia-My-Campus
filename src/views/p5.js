/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  LinearProgress,
  withStyles, Container,
} from '@material-ui/core';
import NaviBar from '../fragments/topNavigationbar';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import Authentication from '../hooks/Authentication';
import {
  BarChart, CartesianGrid, ResponsiveContainer, XAxis,
} from 'recharts';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Bar from 'recharts/lib/cartesian/Bar';
import GlobalFunctions from '../hooks/GlobalFunctions';
import AuthLoading from './authLoading';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    border: 5,
    maxHeight: '50px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      width: '100%',
    },
  },
  p5Box: {
    width: '100%',
    height: '50vh',
    marginRight: '5%',
    marginTop: '5%',
    display: 'block',
  },

}));

//Progress bar style
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
  const {isLoggedIn} = Authentication();
  const {convertTime, formattedDate, thisDate} = GlobalFunctions();

  // Check if user is logged in
  useEffect(() => {
  }, []); // eslint-disable-line

  // Fetch data of P5 parking usage and set it to parkingP5Data state
  useEffect(() => {
    getUsageData(parkingP5Url, props).
        then(result => setParkingP5Data(result.percent));
  }, []);// eslint-disable-line

  // Get usage of specific day thisDate and return sample date and set it to ChartData state
  const getChartData = () => {
    getUsageData(selectDate(thisLoc, thisDate)).
        then(result => dataToChart(result.samples)).
        then(result => setChartData(result));
  };

  // Set the data to a chart json and return it
  const dataToChart = (json) => {
    if (json !== undefined) {
      const chart = [];
      for (let key in json) {
        const timeStamp = convertTime(json[key].date);
        const fromUnixTime = formattedDate(timeStamp);
        let yc = json[key].percent;
        let tempJson = {x: fromUnixTime, y: yc, pv: 100};
        chart.push(tempJson);
      }
      return chart;
    }
  };
  useEffect(() => {
    getChartData();
  }, []);// eslint-disable-line

  // Bar chart rendering, X-axis dataKey is from timestamps (x), Y-axis dataKey is the percentage of usage. Data is from chartData state
  const renderBarChart = (
      <ResponsiveContainer width="100%" height="100%"><BarChart
          margin={{left: 0, right: 50}} data={chartData}>
        <XAxis dataKey="x"/>
        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
        <Bar dataKey="y" fill="#0000FF"/>
        <YAxis barSize={50} fill="#8884d8" dataKey="pv"/>
      </BarChart></ResponsiveContainer>);

  const P5Page = () => {
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
          <Container className={classes.p5Box}><p>Utilization Records
            for {thisDate}</p>{renderBarChart}</Container>
        </div>
    );

  };

  const AuthP5 = () => {
    if (isLoggedIn()) {
      return <P5Page/>;
    } else {
      return <AuthLoading/>;
    }
  };

  return (
          <AuthP5/>
      )
};

export default P5;
