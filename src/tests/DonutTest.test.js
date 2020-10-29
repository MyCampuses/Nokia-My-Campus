import React from 'react';
import * as ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import {createMount, createRender, createShallow} from '@material-ui/core/test-utils'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Restaurant from "../views/restaurant";

Enzyme.configure({ adapter: new Adapter() });

describe('Restaurant', () =>{
    let shallow;
    let mount;

    beforeEach( () =>{
        shallow = createShallow();
        mount = createMount();
    });

    it('renders', () =>{
        shallow(<Restaurant/>);
    });
    it('does something', () =>{
        const wrapper = mount(<Restaurant/>);
        const garbage = wrapper.find("div");
        expect(wrapper.contains(garbage)).toEqual(true);
    });
});