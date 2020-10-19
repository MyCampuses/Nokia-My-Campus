import React from 'react';
import { render } from '@testing-library/react';
import P10 from '../views/p10';

describe('renders correctly', () => {
    test('renders P10 component', () => {
      render(<P10 />)
    });
  });