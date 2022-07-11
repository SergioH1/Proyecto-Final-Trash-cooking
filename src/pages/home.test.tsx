import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HomePage from './home';

describe('Given the page Unit', () => {
  describe('when it is calling', () => {
    test('should print trash-cooking', () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      );
      const display = screen.getByText(/trash-cooking/i);
      expect(display).toBeInTheDocument();
    });
  });
});
