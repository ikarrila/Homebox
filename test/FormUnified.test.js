import React from 'react';
import { render } from '@testing-library/react';
import FormUnified from '../frontend/components/FormUnified'; // Update with the correct path to your file

describe('FormUnified', () => {
  it('renders without crashing', () => {
    render(<FormUnified />);
  });
});