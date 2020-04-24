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
                           margin={{left: -20, right: 0, top: 10}} data={data}>
                    <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                    <Area dataKey="y" fill="#0000FF"/>
                    <XAxis dataKey="x" padding={{right: 20}} allowDataOverflow={false}
                           /*interval={0} ticks={["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"]}*/
                           tickSize={6} type='category'/>
                    <YAxis fill="#8884d8" dataKey="pv" type="number" domain={[0, values => {
                        // If data does not contain values 50 or higher, Y-axis is set to 0-50%, otherwise 0-100%
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

            //Parses retrieved data to only points between 06:00 and 18:00, saves highest utilization point from those data points as well
            //Possible TODO: limit how many times the useeffect runs if no changes to chartdata has occurred
            useEffect(() => {
                if (chartData !== undefined) {
                    let tempChartData = [];
                    chartData.forEach(element => {
                        if (element.x >= "06:00" && element.x <= "18:00") {
                            tempChartData.push(element);
                        }
                    });
                    let highest = 0;
                    tempChartData.forEach(element => {
                            if (element.y > highest) {
                                highest = element.y;
                            }
                        }
                    );
                    setMax(highest);
                    setDataForRender(tempChartData);
                    console.log(dataForRender);
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
