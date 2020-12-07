import React, {Fragment, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from 'recharts';

//This function holds the functions needed to make a donut chart
const DonutFragment = (props) => {

    //This function makes a donut chart from the data it is given in DonutData as props
        const Donut = (DonutData) => {

            //this state has temporary data to prevent the function from crashing because of undefined data
            const [dataDonutFormat, setDataDonutFormat] = useState([{value: "no data"}]);

            //This use effect runs every time the data given to the function changes
            useEffect( () =>{
                //check that the data is usable
                if(DonutData !== undefined) {
                    //set data from the given DonutData for the used percentage, and calculate not used percentage
                    setDataDonutFormat([
                        {name: 'usage', value: DonutData.data, color: "#519FF9"},
                        {name: 'nonUsage', value: 100 - DonutData.data, color: "#7A7A7A"}
                    ])
                }
            }, [DonutData]);

            //this renders the donut chart to wherever the function is called
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
            Donut,
        };
    };

export default DonutFragment;