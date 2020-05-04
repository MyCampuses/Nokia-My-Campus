/*
        This class holds the charts and their styling for P5, P10 & Restaurant
 */
import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import {AreaChart, CartesianGrid, ResponsiveContainer, XAxis} from 'recharts';
import Area from 'recharts/lib/cartesian/Area';
import YAxis from 'recharts/lib/cartesian/YAxis';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import {scaleTime} from 'd3-scale';
import {utcHour} from 'd3-time';
import format from 'date-fns/format'

const useStyle = makeStyles((theme) => ({
    p5Box: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',
    },
    p10Box: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',
    },
    RestaurantBox: {
        width: '100%',
        height: '45vh',
        marginTop: '5%',
        display: 'block',
    }
}));
// Holds all the fragments for charts
const ChartFragment = () => {
        const classes = useStyle();
        const {getChartData, dataToChart, chartEstData, dataToChartRestaurant} = API();
        const {dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
        const {formattedFullDate} = GlobalFunctions();

        // Convert data to be used in chart
        // Check recharts.org for documentation
        const renderChart = (data, maxValue, ticks) => (
            // Responsivecontainer for flexible chart size
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart minWidth={200} minHeight={200}
                    //Negative margin below removes the space between YAxis and left side of chart
                           margin={{left: -20, right: 20, top: 10}} data={data}>
                    <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                    <Area dataKey="y" fill="#0000FF"/>
                    <XAxis dataKey="x" padding={{right: 0}} allowDataOverflow={false}
                           interval={0} ticks={ticks}
                           tickSize={6} type='category'/>
                    <YAxis fill="#8884d8" dataKey="pv" type="number" domain={[0, values => {
                        // If data does not contain percentage values 50 or higher, Y-axis is set to 0-50%, otherwise 0-100%
                        if (maxValue < 50) {
                            return 50
                        } else {
                            return 100
                        }
                    }]}
                           unit={"%"}
                           allowDataOverflow={true}/>
                </AreaChart>
            </ResponsiveContainer>);

        // Common chart to be used, needs a date and location(path)
        const Chart = (props) => {
            const propsDate = formattedFullDate(props.date);
            const [chartData, setChartData] = useState(undefined);
            const [dataForRender, setDataForRender] = useState(undefined);
            const [ticksForRender, setTicksForRender] = useState(undefined);
            const [max, setMax] = useState(undefined);

            useEffect(() => {
                if (props.location === "restaurant") {
                    getChartData(dailyRestaurantUrl, '', propsDate).then(json => dataToChartRestaurant(json)).then(json => setChartData(json))
                } else if (props.location === "electric") {
                    getChartData(dailyParkingUrl, 'P10TOP/', propsDate).then(json => chartEstData(json.samples)).then(json => setChartData(json))
                } else {
                    getChartData(dailyParkingUrl, props.location, propsDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
                }
            }, [props]); // eslint-disable-line

            //Filters data to only have datapoints between 06:00 and 18:00
            const filterTime = (element) => {
                if (element.x >= "06:00" && element.x <= "18:00") {
                    return element;
                }
            };

            const sortCompareFunction = (a, b) => {
                return (new Date('1970/01/01 ' + a.x) - new Date('1970/01/01 ' + b.x));

            };

            const fixTimes = (array) => {
                let returnArray = [];
                let tempArray = [];
                let highest = 0;
                for (let i = 1; i < array.length; i++) {
                    let dataObject = undefined;
                    if (props.location === "restaurant") {
                        dataObject = (checkIfMissingTimeRestaurant(i, array.length - 1, array[i - 1], array[i]));
                    } else {
                        dataObject = (checkIfMissingTime(i, array.length - 1, array[i - 1], array[i]));
                    }
                    if (array[i].y > highest) {
                        highest = array[i].y;
                    }
                    if (dataObject !== -1 && dataObject !== undefined) {
                        tempArray.push(dataObject);
                    }
                }

                setMax(highest);
                returnArray = array.concat(tempArray);
                returnArray.sort(sortCompareFunction);
                return returnArray;
            };

            //TODO: add type checks
            const getAverage = (x1, x2) => {
                return (x1 + x2) / 2;
            };

            const checkIfMissingTime = (index, lastIndex, prevElement, element) => {
                if (index === 1 && prevElement.x > "06:00") {
                    return {x: "06:00", y: prevElement.y, pv: 100};
                } else if (prevElement.x < "08:00" && element.x > "08:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "08:00", y: yValue, pv: 100};
                } else if (prevElement.x < "10:00" && element.x > "10:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "10:00", y: yValue, pv: 100};
                } else if (prevElement.x < "12:00" && element.x > "12:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "12:00", y: yValue, pv: 100};
                } else if (prevElement.x < "14:00" && element.x > "14:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "14:00", y: yValue, pv: 100};
                } else if (prevElement.x < "16:00" && element.x > "16:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "16:00", y: yValue, pv: 100};
                } else if (index === lastIndex && element.x < "18:00" && prevElement.x > "17:50") {
                    return {x: "18:00", y: element.y, pv: 100};
                } else return -1;
            };

            const checkIfMissingTimeRestaurant = (index, lastIndex, prevElement, element) => {
                if (element.x < "08:30" && index === 1 && prevElement.x > "08:00") {
                    return {x: "08:00", y: element.y, pv: 100};
                } else if (prevElement.x < "10:00" && element.x > "10:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "10:00", y: yValue, pv: 100};
                } else if (prevElement.x < "12:00" && element.x > "12:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "12:00", y: yValue, pv: 100};
                } else if (prevElement.x < "14:00" && element.x > "14:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "14:00", y: yValue, pv: 100};
                } else if (index === lastIndex && element.x < "16:00" && prevElement.x > "15:50") {
                    return {x: "16:00", y: element.y, pv: 100};
                } else return -1;
            };

            //Parses retrieved data to only points between 06:00 and 18:00, saves highest utilization point from those data points as well
            //Possible TODO: limit how many times the useEffect runs if no changes to chartdata has occurred
            //TODO: if checking time sometimes outside of 06:00 - 18:00 the chart pages are empty
            useEffect(() => {
                if (chartData !== undefined) {
                    let tempChartData = chartData.filter(filterTime);
                    let fixTimesArray = fixTimes(tempChartData);
                    let domain = [];
                    let timeFormat = (time => format(time, "HH:mm"));
                    if (fixTimesArray.length > 0) {
                        domain = [new Date('1970/01/01 ' + fixTimesArray[0].x), new Date('1970/01/01 ' + fixTimesArray[fixTimesArray.length - 1].x)];
                    }
                    let scale = scaleTime().domain(domain);
                    let ticks = scale.ticks(utcHour.every(2)).map(item => timeFormat(item));
                    tempChartData = fixTimesArray;
                    setTicksForRender(ticks);
                    setDataForRender(tempChartData);
                }
            }, [chartData]); //eslint-disable-line

            return (
                <Fragment>
                    <Container className={classes.p10Box}>
                        <p>Utilization Records for {propsDate}</p>
                        {renderChart(dataForRender, max, ticksForRender)}
                    </Container>
                </Fragment>
            );
        };

// Chart for Restaurant History
        /*eslint-disable */

        return {
            Chart: Chart,
        };
    }
;

export default ChartFragment;
