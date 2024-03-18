import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShortTermForm from '../frontend/components/ShortTermForm';

describe('ShortTermForm', () => {
  test('renders ShortTermForm component without crashing', () => {
    render(<ShortTermForm />);
  });

  test('renders input field', () => {
    render(<ShortTermForm />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders select dropdown', () => {
    render(<ShortTermForm />);
    const selectElement = screen.getByTestId('select');
    expect(selectElement).toBeInTheDocument();
  });
});