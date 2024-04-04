import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrivacyPolicyContent from '../frontend/components/PrivacyPolicyContent';

describe('PrivacyPolicyContent', () => {
  test('renders PrivacyPolicyContent component without errors', () => {
    render(<PrivacyPolicyContent />);
  });

  test('renders the main elements', () => {
    render(<PrivacyPolicyContent />);
    expect(screen.getByRole('heading', { name: /Cookies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /License/i })).toBeInTheDocument();
  });
});