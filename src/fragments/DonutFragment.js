import React, {Fragment, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';

// Holds all the fragments for charts
const DonutFragment = (props) => {
        // Common chart to be used, needs a date and location(path)

        const Donut = (DonutData) => {

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
                    <Container style={{height: DonutData.size + "vh", width: "100%", textAlign: 'center', display: 'block'}}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={dataDonutFormat}
                                    name="usage"
                                    innerRadius={DonutData.InR}
                                    outerRadius={DonutData.OuR}
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