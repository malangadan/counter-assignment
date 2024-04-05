import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let component;

beforeEach(() => {
  component = render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = component.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = component.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const addButton = component.getByText('+');
  const countElement = component.getByTestId('count');

  fireEvent.click(addButton);
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const minusButton = component.getByText('-');
  const countElement = component.getByTestId('count');

  fireEvent.click(minusButton);
  expect(countElement.textContent).toBe('-1');
});
