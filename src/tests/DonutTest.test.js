import React from 'react';
import {createMount, createRender, createShallow} from '@material-ui/core/test-utils'
import '@testing-library/jest-dom/extend-expect';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson, renderToJson, mountToJson} from "enzyme-to-json";
import Restaurant from "../views/restaurant";
import DonutFragment from "../fragments/DonutFragment";

Enzyme.configure({ adapter: new Adapter() });

describe('Restaurant', () =>{
    let mount;
    let shallow;

    beforeAll( () =>{
        mount = createMount();
        shallow = createShallow();
    });

    afterAll( () =>{
       mount.cleanUp();
       shallow.cleanUp();
    });

    it('renders', () =>{
        const wrapper = mount(<Restaurant/>);
        expect(wrapper.exists).toBeTruthy();
    });

    it('Finds a specific div', () =>{
        const wrapper = shallow(<DonutFragment />);
        const fragment = wrapper.instance().render();
        expect(shallow(fragment).getElement()).toMatchSnapshot();
    });
});