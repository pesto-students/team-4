import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Snake Out/i);
  expect(linkElement).toBeInTheDocument();
});
