import React from 'react';
import { render } from '@testing-library/react';
import P5 from '../views/p5';

describe('renders correctly', () => {
    test('renders P5 component', () => {
      render(<P5 />)
    });
  });