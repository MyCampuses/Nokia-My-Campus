import React from 'react';
import * as ReactDOM from 'react-dom';
import p5 from '../views/p5';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

it('Render h1 to container', () => {
    ReactDOM.render(<h1 />, container);
});