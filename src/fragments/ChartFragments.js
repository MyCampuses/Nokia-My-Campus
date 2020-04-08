import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import {BarChart, CartesianGrid, ResponsiveContainer, XAxis} from 'recharts';
import Bar from 'recharts/lib/cartesian/Bar';
import YAxis from 'recharts/lib/cartesian/YAxis';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import P10 from '../views/p10';
import TabFragmentHistory from '../views/p10'

const useStyle = makeStyles((theme) => ({
  pBox: {
    width: '100%',
    height: '50vh',
    marginRight: '5%',
    marginTop: '5%',
    display: 'block',
  },
}));
// Holds all the fragments for charts
const ChartFragment = () => {
  const classes = useStyle();
  const [chartData, setChartData] = useState(undefined);
  const {getUsageData} = API();
  const {selectDate, dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
  const p5Loc = 'P5';
  const p10Loc = 'P10';
  const p10TopLoc = 'P10TOP';
  const {convertTime, formattedDate, formattedFullDate, thisDate} = GlobalFunctions();
  // Convert data to be used in chart
  const dataToChart = (json) => {
    if (json !== undefined) {
      const chart = [];
      for (let key in json) {
        const timeStamp = convertTime(json[key].date);
        const fromUnixTime = formattedDate(timeStamp);
        let yc = json[key].percent;
        let tempJson = {x: fromUnixTime, y: yc, pv: 100};
        chart.push(tempJson);
        // Set the data to a chart json and return it
      }
      return chart;
    }
  };
  //const datePicked = formattedFullDate(selectedDate);
  // Get data for chart for the desired location (p5, p10 etc.)
  const getChartData = (location, date) => {
    getUsageData(selectDate(dailyParkingUrl, location, date))
    .then(result => dataToChart(result.samples))
    .then(result => setChartData(result));
  };
  const renderBarChart = (
      <ResponsiveContainer width="100%" height="100%"><BarChart
          margin={{left: 0, right: 50}} data={chartData}>
        <XAxis dataKey="x"/>
        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
        <Bar dataKey="y" fill="#0000FF"/>
        <YAxis barSize={50} fill="#8884d8" dataKey="pv"/>
      </BarChart></ResponsiveContainer>);



  const P5Chart = () => {
      useEffect(() => {
        getChartData(p5Loc, thisDate);
      },[]);// eslint-disable-line

    return (
        <Fragment>
          <Container className={classes.pBox}><p>Utilization Records
            for {thisDate}</p>{renderBarChart}</Container>
        </Fragment>
    );
  };
  const P10Chart = () => {
    useEffect(() => {
      getChartData(p10Loc, thisDate);
    },[]);// eslint-disable-line

    return (
        <Fragment>
          <Container className={classes.pBox}><p>Utilization Records
            for {thisDate}</p>{renderBarChart}</Container>
        </Fragment>
    );
  };
  return {
    P5Chart: P5Chart,
    P10Chart: P10Chart,
  };
};
export default ChartFragment;
