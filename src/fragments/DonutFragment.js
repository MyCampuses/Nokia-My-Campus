import React, {Fragment, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';
import useStyle from "../styles/restaurantStyles";

// Holds all the fragments for charts
const DonutFragment = () => {
        const classes = useStyle();
        // Common chart to be used, needs a date and location(path)

        const Donut = (props) => {

            const [dataDonutFormat, setDataDonutFormat] = useState();

            useEffect( () =>{
                setDataDonutFormat([
                    {name: 'usage', value: props.value, color: "#519FF9"},
                    {name: 'nonUsage', value: 100 - props.value, color: "#7A7A7A"}
                ])
            }, [props]);

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
                                        {dataDonutFormat.value + "%"}
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