import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import {BarChart, CartesianGrid, ResponsiveContainer, XAxis} from 'recharts';
import Bar from 'recharts/lib/cartesian/Bar';
import YAxis from 'recharts/lib/cartesian/YAxis';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';

const useStyle = makeStyles((theme) => ({
  p5Box: {
    width: '100%',
    height: '50vh',
    marginTop: '5%',
    display: 'block',
  },
  p10Box: {
    width: '100%',
    height: '30vh',
    marginTop: '5%',
    display: 'block',
  },
  RestaurantBox: {
    width: '100%',
    height: '50vh',
    marginTop: '5%',
    display: 'block',
  }
}));
// Holds all the fragments for charts
const ChartFragment = () => {
  const classes = useStyle();
  const {getChartData, dataToChart} = API();
  const { dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
  const p5Loc = 'P5/';
  const p10Loc = 'P10/';
  //const p10TopLoc = 'P10TOP/';
  const {formattedFullDate, thisDate} = GlobalFunctions();

  // Convert data to be used in chart



  const renderBarChart = (data) => (
      <ResponsiveContainer width="100%" height="100%"><BarChart minWidth={200} minHeight={200}
          margin={{left: 0, right: 50}} data={data}>
        <XAxis dataKey="x"/>
        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
        <Bar dataKey="y" fill="#0000FF"/>
        <YAxis barSize={50} fill="#8884d8" dataKey="pv"/>
      </BarChart></ResponsiveContainer>);


  // Chart for P5 History
  const P5Chart = () => {
    const [chartData, setChartData] = useState(undefined);
    useEffect(() => {
      getChartData(dailyParkingUrl, p5Loc, thisDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
    },[]); // eslint-disable-line

    return (
        <Fragment>
          <Container className={classes.p5Box}><p>Utilization Records
            for {thisDate}</p>{renderBarChart(chartData)}</Container>
        </Fragment>
    );
  };
  // Chart for P10 History
  const P10Chart = (props) => {
    const propsDate = formattedFullDate(props.date);
    const [chartData, setChartData] = useState(undefined);
    useEffect(() => {
      getChartData(dailyParkingUrl, p10Loc, propsDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
    },[]); // eslint-disable-line

    return (
        <Fragment>
          <Container className={classes.p10Box}><p>Utilization Records
            for {propsDate}</p>{renderBarChart(chartData)}</Container>
        </Fragment>
    );
  };
  // Chart for Restaurant History
  /*eslint-disable */
  const RestaurantChart = (props) => {
    const propsDate = formattedFullDate(props.date);
    const [chartData, setChartData] = useState(undefined);
    useEffect(() => {
      getChartData(dailyRestaurantUrl, '', propsDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
    },[]); // eslint-disable-line

    return (
        <Fragment>
          <Container className={classes.RestaurantBox}><p>Utilization Records
            for {propsDate}</p>{renderBarChart(chartData)}</Container>
        </Fragment>

    );
  };

  return {
    P5Chart: P5Chart,
    P10Chart: P10Chart,
  };
};
export default ChartFragment;
