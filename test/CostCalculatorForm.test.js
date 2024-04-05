import React from 'react';
import { render } from '@testing-library/react';
import CostCalculatorForm from '../frontend/components/CostCalculatorForm';

test('renders CostCalculatorForm component without errors', () => {
  const { getByTestId } = render(<CostCalculatorForm />);
  const formComponent = getByTestId('cost-calculator-form');
  expect(formComponent).toBeInTheDocument();
});


//describe('CostCalculatorForm', () => {
//  let getByTestId;

//  beforeEach(() => {
//    const queries = render(<CostCalculatorForm />);
//    getByTestId = queries.getByTestId;
//  });

//  test('renders CostCalculatorForm component without crashing', () => {
//    const formElement = getByTestId('cost-calculator-form');
//    expect(formElement).toBeTruthy();
//  });

//  test('renders header with correct text', () => {
//    const headerElement = getByTestId('cost-calculator-header');
//    expect(headerElement.textContent).toBe('Cost calculator');
//  });

//  test('renders name input without crashing', () => {
//    const nameInputElement = getByTestId('name-input');
//    expect(nameInputElement).toBeTruthy();
//  });

//  test('renders email input without crashing', () => {
//    const emailInputElement = getByTestId('email-input');
//    expect(emailInputElement).toBeTruthy();
//  });
//});