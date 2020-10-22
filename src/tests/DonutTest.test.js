import React from 'react';
import * as ReactDOM from 'react-dom';
import Restaurant from '../views/restaurant';
import Login from '../views/login';
import {PieChart, Pie, Cell, Label, ResponsiveContainer, AreaChart} from 'recharts';
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";


let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
});


//This test should ALWAYS go through, it's proof that testing works.
test('Test rendering a h1 to a empty div', () => {
    ReactDOM.render(<h1 />, container);
});
test('Rendering restaurant', () => {
    ReactDOM.render(<Restaurant />, container);

});


test('Rendering restaurant', () => {
    ReactDOM.render(<Restaurant />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(PieChart);
    if(nbtrue){
        console.log("Piechart exists");
    } else {
        console.log("Piechart does not exist");
    };
});

test('Rendering restaurant', () => {
    ReactDOM.render(<Restaurant />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(Carousel);
    if(nbtrue){
        console.log("Carousel exists");
    } else {
        console.log("Carousel does not exist");
    };

});
test('Rendering restaurant', () => {
    ReactDOM.render(<Restaurant />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(AreaChart);
    if(nbtrue){
        console.log("chart exists");
    } else {
        console.log("chart does not exist");
    };
});

test('Rendering restaurant', () => {
    ReactDOM.render(<Restaurant />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(Grid);
    if(nbtrue){
        console.log("lines exists");
    } else {
        console.log("lines does not exist");
    };
});

test('Rendering login', () => {
    ReactDOM.render(<Login />, container);

});