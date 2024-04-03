import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Postbutton from '../frontend/components/Postbutton';

describe('Postbutton', () => {
  test('renders Postbutton component without errors', () => {
    render(<Postbutton />);
  });

  test('renders the main elements', () => {
    render(<Postbutton />);
    expect(screen.getByRole('button', { name: /console.logs the content/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Post test/i })).toBeInTheDocument();
  });
});