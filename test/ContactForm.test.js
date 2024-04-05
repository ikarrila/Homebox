import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../frontend/components/ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  test('renders ContactForm component without crashing', () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  test('renders input fields', () => {
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  });

  test('renders select field with correct options', () => {
    const selectElement = screen.getByTestId('select');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('Select...')).toBeInTheDocument();
    expect(screen.getByText('Standard')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  test('renders Postbutton component', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});