import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from '../frontend/components/AboutUs';

describe('AboutUs', () => {
  test('renders AboutUs component without crashing', () => {
    render(<AboutUs />);
  });

  test('renders correct heading', () => {
    render(<AboutUs />);
    const headingElement = screen.getByTestId('heading');
    expect(headingElement).toHaveTextContent('Our Story');
  });

  test('renders correct text', () => {
    render(<AboutUs />);
    const textElement = screen.getByTestId('text');
    expect(textElement).toHaveTextContent(/Lorem ipsum, dolor sit amet consectetur adipisicing elit./i);
  });
});