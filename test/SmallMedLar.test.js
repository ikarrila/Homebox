import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmallMedLar from '../frontend/components/SmallMedLar';

describe('SmallMedLar', () => {
  test('renders SmallMedLar component without errors', () => {
    const mockOnSizeSelect = jest.fn();
    render(<SmallMedLar name="test" onSizeSelect={mockOnSizeSelect} />);
  });

  test('renders the main elements', () => {
    const mockOnSizeSelect = jest.fn();
    render(<SmallMedLar name="test" onSizeSelect={mockOnSizeSelect} />);
    expect(screen.getByRole('option', { name: /Small/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Medium/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Large/i })).toBeInTheDocument();
  });
});