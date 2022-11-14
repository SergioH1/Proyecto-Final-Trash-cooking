import { MemoryRouter } from 'react-router-dom';
import { usersReducer } from '../../reducer/user/user.reducer';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { DeleteAcount } from './delete.acount';

import { HttpUser } from '../../services/http.user';
const reducer = {
  user: usersReducer,
};
const preloadedState = {
  user: {},
};

describe('Given the component DeleteAcount', () => {
  describe('When it is called', () => {
    test('and press button, then it call http', async () => {
      render(
        <MemoryRouter>
          <DeleteAcount></DeleteAcount>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );

      let button = screen.getByRole('button');
      fireEvent.click(button);
      expect(button).toBeInTheDocument();
    });

    test('It should render the button when I click Si', () => {
      render(
        <MemoryRouter>
          <DeleteAcount></DeleteAcount>
        </MemoryRouter>,

        {
          reducer,
          preloadedState,
        }
      );
      HttpUser.prototype.deleteUser = jest.fn().mockResolvedValue({});
      const button = screen.getByText(/Eliminar cuenta/i);
      fireEvent.click(button);
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[0]);
      let result = screen.getByText(/Eliminar/);
      expect(result).toBeInTheDocument();
    });
    test('It should render the button when I click No', () => {
      render(
        <MemoryRouter>
          <DeleteAcount></DeleteAcount>
        </MemoryRouter>,

        {
          reducer,
          preloadedState,
        }
      );

      const button = screen.getByText(/Eliminar cuenta/i);
      fireEvent.click(button);
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[1]);
      let result = screen.getByText(/Eliminar/);
      expect(result).toBeInTheDocument();
    });
  });
});