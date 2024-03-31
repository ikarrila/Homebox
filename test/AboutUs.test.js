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
    expect(textElement).toHaveTextContent(/We make furnishing a property quick and easy. We can advise you on the perfect fittings for your house. We will also deliver, assemble and remove the packaging from the property. We save you the time and trouble of shopping, sourcing, organising deliveries and assembling the furniture. We take it all off your hands. You can trust us to provide a high level of service and create an interior look suitable to your requirements./i);
  });
});