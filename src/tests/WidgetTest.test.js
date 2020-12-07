import React from 'react'
import { createMount,createShallow } from '@material-ui/core/test-utils';

describe('Widgets', () =>  {

    let mount;
    let shallow;

    beforeAll(() => {
        mount = createMount();
        shallow = createShallow();
      });
    
    afterAll(() => {
        mount.cleanUp();
        shallow.cleanUp();
    });

    
});

