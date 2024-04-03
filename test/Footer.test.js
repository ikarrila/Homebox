jest.mock('next/link', () => {
  return ({ children }) => children;
});

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../frontend/components/Footer';

describe('Footer', () => {
  test('renders Footer component without crashing', () => {
    render(<Footer />);
  });

  test('renders correct links', () => {
    render(<Footer />);
    expect(screen.getByText('Refund Policy')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Shopping Policy')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  test('renders footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
  
  test('renders unordered list', () => {
    render(<Footer />);
    const listElement = screen.getByTestId('footer-list');
    expect(listElement).toBeInTheDocument();
  });
  
  test('renders copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByTestId('copyright-text');
    expect(copyrightText).toBeInTheDocument();
  });
});