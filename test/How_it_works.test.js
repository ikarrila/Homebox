import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import How_it_works from '../frontend/components/How_it_works';

describe('How_it_works', () => {
  const sections = [
    { headline: '1. Submit a design request' },
    { headline: '2. Book a design call' },
    { headline: '3. Review your Initial Proposal ' },
    { headline: '4. One off purchase ' },
    { headline: '5. White Glove Delivery' },
    // add more sections if needed
  ];
  test('renders How_it_works component without crashing', () => {
    render(<How_it_works />);
  });

  test('renders the correct number of sections', () => {
    render(<How_it_works />);
    const sectionElements = screen.getAllByRole('heading', { level: 2 });
    expect(sectionElements).toHaveLength(8);
  });

  test('renders section headlines', () => {
    render(<How_it_works />);
    sections.forEach(section => {
      expect(screen.getByText(section.headline.trim())).toBeInTheDocument();
    });
  });

  test('each section contains an unordered list', () => {
    render(<How_it_works />);
    const listElements = screen.queryAllByRole('list');
    expect(listElements).toHaveLength(sections.length);
  });
});