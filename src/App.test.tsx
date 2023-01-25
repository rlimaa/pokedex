import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pokedex = screen.getByText(/Pokedex/);
  expect(pokedex).toBeInTheDocument();
});
