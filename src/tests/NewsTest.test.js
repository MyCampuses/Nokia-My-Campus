import React from 'react'
import { createMount } from '@material-ui/core/test-utils';
import News from './../views/news';

describe('News', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<News/>);
    console.log(wrapper);
    //expect(wrapper).to.have.property('highlight');
  });
});