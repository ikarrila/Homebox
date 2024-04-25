import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LongTermLanding from '../frontend/components/LongTermLanding';

describe('LongTermLanding', () => {
  it('renders without crashing', () => {
    render(<LongTermLanding />);
  });

  it('renders the Popup component initially', () => {
    const { getByText } = render(<LongTermLanding />);
    expect(getByText('This is a Cookie Popup.')).toBeInTheDocument();
  });

  it('closes the Popup component when the button is clicked', () => {
    const { getByText, queryByText } = render(<LongTermLanding />);
    fireEvent.click(getByText('Accept Cookies & Go'));
    expect(queryByText('This is a Cookie Popup.')).not.toBeInTheDocument();
  });
});