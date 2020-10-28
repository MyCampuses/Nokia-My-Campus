import React, {Fragment, useEffect, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';
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

    },
    DonutContainer:{
        textAlign: 'center',
        width: '100%',
        height: '45vh',
        display: 'block',
    },
}));
// Holds all the fragments for charts
const DonutFragment = () => {
        const classes = useStyle();
        const {getChartData, dataToChart, chartEstData, dataToChartRestaurant, menuByDate} = API();
        const {dailyParkingUrl, dailyRestaurantUrl} = ApiUrls();
        const {formattedFullDate} = GlobalFunctions();

        //this renders a pie chart from the values in yKey
        const renderPie = (data, value) => (
            // Responsivecontainer for flexible chart size
            <ResponsiveContainer width="100%" height="100%">
                <PieChart minWidth={200} minHeight={200}>
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
            const propsDate = formattedFullDate(props.date);
            const [chartData, setChartData] = useState(undefined);
            const [dataForRender, setDataForRender] = useState(undefined);
            const [ticksForRender, setTicksForRender] = useState(undefined);
            const [max, setMax] = useState(undefined);

            useEffect(() => {
                if (props.location === "restaurant") {
                    getChartData(dailyRestaurantUrl, '', propsDate)
                        .then(json => dataToChartRestaurant(json))
                        .then(json => setChartData(json))

                } else if (props.location === "electric") {
                    getChartData(dailyParkingUrl, 'P10TOP/', propsDate)
                        .then(json => chartEstData(json.samples))
                        .then(json => setChartData(json))

                } else {
                    getChartData(dailyParkingUrl, props.location, propsDate)
                        .then(json => dataToChart(json.samples))
                        .then(json => setChartData(json))
                }
            }, [props]); // eslint-disable-line

            //Filters data to only have datapoints between 06:00 and 18:00
            const filterTime = (element) => {
                if (element.x >= "06:00" && element.x <= "18:00") {
                    return element;
                }
            };

            //Sort function for time.
            const sortCompareFunction = (a, b) => {
                return (new Date('1970/01/01 ' + a.x) - new Date('1970/01/01 ' + b.x));
            };

            //Looks at array and adds missing data points for certain hour marks.
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

            //check that the info from the backend is received before trying to create the variable
            //this prevents the app from crashing
            let yKey;

            if(dataForRender !== undefined){
                yKey = dataForRender[dataForRender.length - 1].y;
            }
            else{
                console.log('hold on');
            }

            //data from backend put into a format the donut chart can read
            const dataDonutFormat =[
                {name: 'usage', value: yKey, color: "#519FF9"},
                {name: 'nonUsage', value: 100 - yKey, color: "#7A7A7A"}
            ];

            //Return an average of two values
            const getAverage = (x1, x2) => {
                return (x1 + x2) / 2;
            };

            //Returns a data point for possible missing hour mark
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

            //Returns a data point for possible missing hour mark. Intended for restaurant data.
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
            console.log(dataForRender);

            return (
                <Fragment>
                    <Container className={classes.DonutContainer}>
                        <p>Current usage</p>
                        {renderPie(dataDonutFormat, yKey)}
                    </Container>
                </Fragment>
            );
        };

// Chart for Restaurant History
        /*eslint-disable */
        return {
            Donut: Donut,
        };
    }
;

export default DonutFragment;