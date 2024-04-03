import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RentingVsBuying from '../frontend/components/RentingVsBuying';

describe('RentingVsBuying', () => {
  test('renders RentingVsBuying component without errors', () => {
    render(<RentingVsBuying />);
  });

  test('renders the main elements', () => {
    render(<RentingVsBuying />);
    expect(screen.getByRole('heading', { name: /Rent vs. Buying/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /Ecological and sustainable/i })).toBeInTheDocument();
  });
});