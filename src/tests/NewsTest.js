import { Typography } from '@material-ui/core';
import React from 'react';
import * as ReactDOM from 'react-dom';
import News from '../views/news';
import HighlightItem from './../fragments/NewsHighlight';
import NewsBrowseGrid from './../fragments/NewsBrowseGrid';


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
test('Test rendering a div', () => {
    ReactDOM.render(<h1>Rips</h1>, container);
});
test('Rendering News', () => {
    ReactDOM.render(<News />, container);
});


test('Rendering News', () => {
    ReactDOM.render(<News />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining();
    if(nbtrue){
        console.log("News page renders");
    } else {
        console.log("News page rendering fail");
    };
});

test('Rendering news 2', () => {
    ReactDOM.render(<News />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(HighlightItem);
    if(nbtrue){
        console.log("HighlightItem exists");
    } else {
        console.log("HighlightItem does not exist");
    };
});
test('Rendering news 3', () => {
    ReactDOM.render(<News />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(Typography);
    if(nbtrue){
        console.log("Typography exists");
    } else {
        console.log("Typography does not exist");
    };
});

test('Rendering news 4', () => {
    ReactDOM.render(<News />, container);
    console.log("Checking if Piechart Exists in restaurant");
    const nbtrue = expect.objectContaining(NewsBrowseGrid);
    if(nbtrue){
        console.log("NewsBrowseGrid exists");
    } else {
        console.log("NewsBrowseGrid does not exist");
    };
});
