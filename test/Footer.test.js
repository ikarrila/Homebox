import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../frontend/components/Footer';

describe('Footer', () => {
  test('renders Footer component without errors', () => {
    render(<Footer />);
  });

  test('renders the main elements', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer-list')).toBeInTheDocument();
    expect(screen.getByTestId('copyright-text')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Refund Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Shopping Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument();
  });
});