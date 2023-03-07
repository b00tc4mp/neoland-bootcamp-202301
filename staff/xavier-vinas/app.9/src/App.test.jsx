import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const title1 = screen.getByText(/hola mundl/i);
  
  expect(title1).toBeInTheDocument();
});
