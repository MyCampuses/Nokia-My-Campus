import React, {Fragment, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';
import useStyle from "../styles/restaurantStyles";

// Holds all the fragments for charts
const DonutFragment = (props) => {
        const classes = useStyle();
        // Common chart to be used, needs a date and location(path)

        const Donut = (DonutData) => {

            console.log(DonutData);

            const [dataDonutFormat, setDataDonutFormat] = useState([{value: "no data"}]);

            useEffect( () =>{
                if(DonutData !== undefined) {
                    setDataDonutFormat([
                        {name: 'usage', value: DonutData.data, color: "#519FF9"},
                        {name: 'nonUsage', value: 100 - DonutData.data, color: "#7A7A7A"}
                    ])
                }
            }, [DonutData]);

            return (
                <Fragment>
                    <Container className={classes.DonutContainer}>
                        <ResponsiveContainer className={classes.Donut}>
                            <PieChart>
                                <Pie
                                    data={dataDonutFormat}
                                    name="usage"
                                    innerRadius={60}
                                    outerRadius={80}
                                    startAngle={90}
                                    endAngle={-270}
                                    fill="#8884d8"
                                >
                                    {
                                        dataDonutFormat.map(entry => <Cell fill={entry.color} />)
                                    }
                                    <Label width={30} position="center" fontSize={25}>
                                        {DonutData.data + "%"}
                                    </Label>
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
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