/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {
  makeStyles,
  LinearProgress,
  withStyles, Container,
} from '@material-ui/core';
import NaviBar from '../fragments/TopNavigationBarFragment';
import ChartFragment from '../fragments/ChartFragments';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import Authentication from '../hooks/Authentication';
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
  const {P5Chart} = ChartFragment();
  const {isLoggedIn} = Authentication();
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const {getUsageData} = API();
  const {parkingP5Url} = ApiUrls();

  // Fetch data of P5 parking usage and set it to parkingP5Data state
  useEffect(() => {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
  }, []);// eslint-disable-line

  // Bar chart rendering, X-axis dataKey is from timestamps (x), Y-axis dataKey is the percentage of usage. Data is from chartData state

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
          <P5Chart/>
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
