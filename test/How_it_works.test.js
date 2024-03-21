import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import How_it_works from '../frontend/components/How_it_works';

describe('How_it_works', () => {
  test('renders How_it_works component without crashing', () => {
    render(<How_it_works />);
  });

  test('renders correct number of HowCard components', () => {
    render(<How_it_works />);
    const howCardElements = screen.getAllByText('Title');
    expect(howCardElements).toHaveLength(5);
  });
});