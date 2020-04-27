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
        const {getChartData, dataToChart, chartEstData, dataToChartRestaurant} = API();
        const {dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
        const {formattedFullDate} = GlobalFunctions();

        // Convert data to be used in chart
        // Check recharts.org for documentation
        const renderChart = (data, maxValue) => (
            // Responsivecontainer for flexible chart size
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart minWidth={200} minHeight={200}
                    //Negative margin below removes the space between YAxis and left side of chart
                           margin={{left: -20, right: 20, top: 10}} data={data}>
                    <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                    <Area dataKey="y" fill="#0000FF"/>
                    <XAxis dataKey="x" padding={{right: 0}} allowDataOverflow={false}
                           interval={0} ticks={["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"]}
                           tickSize={6} type='category'/>
                    <YAxis fill="#8884d8" dataKey="pv" type="number" domain={[0, values => {
                        // If data does not contain values 50 or higher, Y-axis is set to 0-50%, otherwise 0-100%
                        console.log(data); //TODO: remove
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
            const [max, setMax] = useState(undefined);

            useEffect(() => {
                if (props.location === "electric") {
                    getChartData(dailyParkingUrl, 'P10TOP/', propsDate).then(json => chartEstData(json.samples)).then(json => setChartData(json))
                } else {
                    getChartData(dailyParkingUrl, props.location, propsDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
                }
            }, [props]); // eslint-disable-line

            const filterTime = (element) => {
                if (element.x >= "06:00" && element.x <= "18:00") {
                    return element;
                }
            };

            const sortCompareFunction = (a, b) => {
                return (new Date('1970/01/01 ' + a.x) - new Date('1970/01/01 ' + b.x));

            };

            const fixTimes = (array) => {
                let tempArray = [];

                for (let i = 1; i < array.length; i++) {

                    let x =(checkIf(i, array.length -1, array[i - 1], array[i]));
                    if(x !== -1) {
                        tempArray.push(x);
                    }
                }

                let tempReturnableArray = array.concat(tempArray);
                tempReturnableArray.sort(sortCompareFunction);
                return tempReturnableArray;
            };

            //TODO: add type checks
            const getAverage = (x1, x2) => {
                return (x1 + x2)/2;
            };

            const checkIf = (index, lastIndex, prevElement, element) => {
                if(index === 1 && prevElement.x > "06:00") {
                    return {x: "06:00", y: prevElement.y, pv: 100};
                }
                if(prevElement.x < "08:00" && element.x > "08:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "08:00", y: yValue, pv: 100};
                }
                if(prevElement.x < "10:00" && element.x > "10:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "10:00", y: yValue, pv: 100};
                }
                if(prevElement.x < "12:00" && element.x > "12:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "12:00", y: yValue, pv: 100};
                }
                if(prevElement.x < "14:00" && element.x > "14:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "14:00", y: yValue, pv: 100};
                }
                if(prevElement.x < "16:00"  && element.x > "16:00") {
                    let yValue = getAverage(prevElement.y, element.y);
                    return {x: "16:00", y: yValue, pv: 100};
                }
                if(index === lastIndex  && element.x < "18:00") {
                    return {x: "18:00", y: element.y, pv: 100};
                }
                else return -1;
            };

            //Parses retrieved data to only points between 06:00 and 18:00, saves highest utilization point from those data points as well
            //Possible TODO: limit how many times the useeffect runs if no changes to chartdata has occurred
            useEffect(() => {
                if (chartData !== undefined) {
                    let tempChartData = chartData.filter(filterTime);
                    tempChartData = fixTimes(tempChartData);
                    let highest = 0;
                    tempChartData.forEach(element => {
                            if (element.y > highest) {
                                highest = element.y;
                            }
                        }
                    );
                    setMax(highest);
                    setDataForRender(tempChartData);
                }
            }, [chartData]); //eslint-disable-line

            return (
                <Fragment>
                    <Container className={classes.p10Box}>
                        <p>Utilization Records for {propsDate}</p>
                        {renderChart(dataForRender, max)}
                    </Container>
                </Fragment>
            );
        };

// Chart for Restaurant History
        /*eslint-disable */
        const RestaurantChart = (props) => {
            const propsDate = formattedFullDate(props.date);
            const [chartData, setChartData] = useState(undefined);
            const [max, setMax] = useState(undefined);

            useEffect(() => {
                getChartData(dailyRestaurantUrl, '', propsDate)
                    .then(json => dataToChartRestaurant(json))
                    .then(json => setChartData(json))
            }, [props]); // eslint-disable-line

            useEffect(() => {
                if (chartData !== undefined) {
                    let highest = 0;
                    chartData.forEach(element => {
                            if (element.y > highest) {
                                highest = element.y;
                            }
                        }
                    );
                    setMax(highest);
                }}, [chartData]);

            return (
                <Fragment>
                    <Container className={classes.RestaurantBox}>
                        <p>Utilization Records for {propsDate}</p>
                        {renderChart(chartData, max)}
                    </Container>
                </Fragment>
            );
        };

        return {
            Chart: Chart,
            RestaurantChart: RestaurantChart,
        };
    }
;

export default ChartFragment;
