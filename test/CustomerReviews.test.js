import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerReviews from '../frontend/components/CustomerReviews';

describe('CustomerReviews', () => {
  test('renders CustomerReviews component without errors', () => {
    render(<CustomerReviews />);
  });

  test('renders the main elements', () => {
    const { container } = render(<CustomerReviews />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});