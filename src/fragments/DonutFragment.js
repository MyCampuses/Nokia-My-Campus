import React, {Fragment, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';
import useStyle from "../styles/restaurantStyles";

// Holds all the fragments for charts
const DonutFragment = () => {
        const classes = useStyle();
        const {getChartData, dataForDonutChart} = API();
        const {dailyRestaurantUrl} = ApiUrls();
        const {formattedFullDate} = GlobalFunctions();

        //this renders a pie chart from the values in yKey
        const renderPie = (data, value) => (
            // Responsivecontainer for flexible chart size
            <ResponsiveContainer className={classes.Donut}>
                <PieChart>
                    <Pie
                        data={data}
                        name="usage"
                        innerRadius={60}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        fill="#8884d8"
                    >
                        {
                            data.map(entry => <Cell fill={entry.color} />)
                        }
                        <Label width={30} position="center" fontSize={25}>
                            {value + "%"}
                        </Label>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );

        // Common chart to be used, needs a date and location(path)
        const Donut = (props) => {
            console.log(props);
            const propsDate = formattedFullDate(props);
            console.log(propsDate);
            const [chartData, setChartData] = useState(undefined);
            const [dataDonutFormat, setDataDonutFormat] = useState([]);
            const [yKey, setYKey] = useState(0);

            useEffect(() => {
                    getChartData(dailyRestaurantUrl, '', propsDate)
                        .then(json => dataForDonutChart(json))
                        .then(json => setChartData(json))
            }, [props]); // eslint-disable-line

            //check that the info from the backend is received before trying to create the variable

            useEffect( () =>{
                    if(chartData !== undefined) {
                        setYKey(chartData);
                    }
            }, [chartData]); //eslint-disable-line

            useEffect( () =>{
                setDataDonutFormat([
                    {name: 'usage', value: yKey, color: "#519FF9"},
                    {name: 'nonUsage', value: 100 - yKey, color: "#7A7A7A"}
                ])
            }, [yKey]);

            return (
                <Fragment>
                    <Container className={classes.DonutContainer}>
                        <p>Current usage</p>
                        {renderPie(dataDonutFormat, yKey)}
                    </Container>
                </Fragment>
            );
        };

        /*eslint-disable */
        return {
            Donut: Donut,
        };
    };

export default DonutFragment;