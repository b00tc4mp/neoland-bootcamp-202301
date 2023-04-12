import { render, screen } from '@testing-library/react';
import App from './App';

it('renders hola mundo in h1', () => {
  render(<App />)

  const title1 = screen.getByText(/hola mundo/i)

  expect(title1).toBeInTheDocument()
});
