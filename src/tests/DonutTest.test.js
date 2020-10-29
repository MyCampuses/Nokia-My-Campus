import React from 'react';
import * as ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import Restaurant from "../views/restaurant";

let container;

beforeEach( () =>{
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach( () =>{
   ReactDOM.unmountComponentAtNode(container);
   document.body.removeChild(container);
   container = null;
});

test('render div', () =>{
    act( () =>{
        ReactDOM.render(<h1>asdfasdaf</h1>, container)
    });
});

test('render restaurant', () =>{
    act( () =>{
        ReactDOM.render(<Restaurant/>, container)
    });
});

test('Render carousel', () =>{
   act( () =>{
       ReactDOM.render(<Restaurant/>, container)
   });
   const carousel = container.querySelector('Carousel');
});