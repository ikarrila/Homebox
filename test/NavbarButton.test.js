import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarButton from '../frontend/components/NavbarButton';

describe('NavbarButton', () => {
  test('renders NavbarButton component without errors', () => {
    const mockHandleCheckboxChange = jest.fn();
    render(<NavbarButton handleCheckboxChange={mockHandleCheckboxChange} isChecked={false} />);
  });

  test('renders the main elements', () => {
    const mockHandleCheckboxChange = jest.fn();
    render(<NavbarButton handleCheckboxChange={mockHandleCheckboxChange} isChecked={false} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});