import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../frontend/components/Portfolio';

describe('Portfolio', () => {
  test('renders Portfolio component without crashing', () => {
    render(<Portfolio />);
  });

  test('renders correct heading', () => {
    render(<Portfolio />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  test('renders correct number of images', () => {
    render(<Portfolio />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(6);
  });
});