import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import News from './../views/news';




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
    act(() => {
        ReactDOM.render(<h1>Kek</h1>, container);
    },);
});
test('Rendering News 0', () => {
    act(() => {
        ReactDOM.render(<News/>, container);
    },);
    const highlight = container.querySelector('Typography');
    expect(highlight.textContent).toBe("Selaa Uutisia");
});