import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Weather App', () => {
  render(<App />);
  const initialElement = screen.getByText(/Weather App/i);
  expect(initialElement).toBeInTheDocument();
});