import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPage from './register';

describe('Given the page RegisterPage', () => {
  describe('When it is called into the browser router', () => {
    test('them it is returned "register', () => {
      render(
        <MemoryRouter>
          <RegisterPage></RegisterPage>
        </MemoryRouter>
      );

      expect(screen.getByText(/register/i)).toBeInTheDocument();
    });
  });
});
