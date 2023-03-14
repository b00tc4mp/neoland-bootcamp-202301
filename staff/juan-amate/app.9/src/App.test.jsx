import { render, screen } from '@testing-library/react';
import App from './App';

test('render Hola mundo in h1', () => {
  render(<App />);

  const title1 = screen.getByText(/Hola mundo!!!/i);

  expect(title1).toBeInTheDocument();
});
