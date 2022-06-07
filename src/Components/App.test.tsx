import React from 'react';
import { render, screen } from '@testing-library/react';
import{ App } from './App';

// the purpose of the tests are to ensure correct rendering  of the component
// this type of testing is called  unit testing
// this is called a test suite
test('renders sword art gamers header', () => {
  render(<App />);
  const linkElement = screen.getByText(/sword art headers/i);
  expect(linkElement).toBeInTheDocument();
});
