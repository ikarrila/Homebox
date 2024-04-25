import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LongTermLanding from '../frontend/components/LongTermLanding';

describe('LongTermLanding', () => {
  it('renders without crashing', () => {
    render(<LongTermLanding />);
  });

  it('renders the Popup component initially', () => {
    const { container } = render(<LongTermLanding />);
    expect(container.querySelector('.popup')).toBeInTheDocument();
  });
});