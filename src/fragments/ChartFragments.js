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
        const {getChartData, dataToChart} = API();
        const {dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
        //const p10TopLoc = 'P10TOP/';
        const {formattedFullDate} = GlobalFunctions();

        // Convert data to be used in chart
        const renderChart = (data, maxValue) => (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart minWidth={200} minHeight={200}
                           margin={{left: 0, right: 50}} data={data}>
                    <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                    <Area dataKey="y" fill="#0000FF"/>
                    <XAxis dataKey="x"/>
                    <YAxis fill="#8884d8" dataKey="pv" type="number" domain={[0, data => {
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
            const [max, setMax] = useState(undefined);
            useEffect(() => {
                getChartData(dailyParkingUrl, props.location, propsDate).then(json => dataToChart(json.samples)).then(json => setChartData(json))
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
                    <Container className={classes.p10Box}>
                        <p>Utilization Records for {propsDate}</p>
                        {renderChart(chartData, max)}
                    </Container>
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
            }); // eslint-disable-line

            return (
                <Fragment>
                    <Container className={classes.RestaurantBox}>
                        <p>Utilization Records for {propsDate}</p>
                        {renderChart(chartData)}
                    </Container>
                </Fragment>
            );
        };

        return {
            Chart: Chart,
        };
    }
;
export default ChartFragment;
