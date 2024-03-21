import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShortTermForm from '../frontend/components/ShortTermForm';

describe('ShortTermForm', () => {
  test('renders ShortTermForm component without crashing', () => {
    render(<ShortTermForm />);
  });

  test('renders correct heading', () => {
    render(<ShortTermForm />);
    expect(screen.getByText('Short term rental services')).toBeInTheDocument();
  });

  test('renders input field', () => {
    render(<ShortTermForm />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders input fields and select dropdown', () => {
    render(<ShortTermForm />);
    const inputElement = screen.getByTestId('input');
    const selectElement = screen.getByTestId('select');
    const nameInputElement = screen.getByLabelText('Name:');
    const emailInputElement = screen.getByLabelText('Email:');
    expect(inputElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(nameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
  });
});