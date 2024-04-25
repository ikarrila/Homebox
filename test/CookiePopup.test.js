import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LongTermLanding from '../frontend/components/LongTermLanding';

describe('LongTermLanding', () => {
  it('renders without crashing', () => {
    render(<LongTermLanding />);
  });
});