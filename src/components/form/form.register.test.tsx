import { MemoryRouter } from 'react-router-dom';
import sweetalert2 from 'sweetalert2';
import { iRecipe, userWithToken } from '../../interfaces/interfaces';
import { recipeReducer } from '../../reducer/recipes/recipes.reducer';
import { usersReducer } from '../../reducer/user/user.reducer';
import { HttpUser } from '../../services/http.user';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
import { FormRegister } from './form.register';

const reducer = {
  user: usersReducer,
  recipe: recipeReducer,
};
const preloadedState = {
  user: {} as userWithToken,
  recipe: [] as Array<iRecipe>,
};
jest.mock('sweetalert2');

describe('Given the component FormRegister', () => {
  describe('When is called', () => {
    test('Then it shoul render with "crear"', () => {
      render(
        <MemoryRouter>
          <FormRegister></FormRegister>
        </MemoryRouter>,
        { preloadedState, reducer }
      );
      const element = screen.getByText(/Crear/i);
      expect(element).toBeInTheDocument();
    });
    describe('When form is filled and click button send', () => {
      test('Then userHttpStore should be called with invalid token', async () => {
        HttpUser.prototype.registerUser = jest
          .fn()
          .mockResolvedValue({ user: { test: 'pepe' } });
        render(
          <MemoryRouter>
            <FormRegister></FormRegister>
          </MemoryRouter>,
          { preloadedState, reducer }
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(HttpUser.prototype.registerUser).toBeCalled();
      });

      describe('When form is fillend and click button login', () => {
        test('them navigate should be called', () => {
          HttpUser.prototype.registerUser = jest
            .fn()
            .mockResolvedValue({ userName: 'sergio', user: { test: 'pepe' } });
          render(
            <MemoryRouter>
              <FormRegister></FormRegister>
            </MemoryRouter>,
            { preloadedState, reducer }
          );
          const input = screen.getByPlaceholderText(
            /email/i
          ) as HTMLFormElement;
          fireEvent.change(input, { target: { value: 'email' } });

          const button = screen.getByText(/Crear mi usuario/);
          fireEvent.click(button);

          expect(HttpUser.prototype.registerUser).toBeCalled();
        });
        test('Then Swal.fire should be called', async () => {
          render(
            <MemoryRouter>
              <FormRegister></FormRegister>
            </MemoryRouter>,
            { preloadedState, reducer }
          );
          HttpUser.prototype.registerUser = jest.fn().mockResolvedValue({});
          const inputs = screen.getAllByRole('textbox');
          fireEvent.change(inputs[0], { target: { value: 'test' } });
          const button = screen.getByText(/Crear mi usuario/);
          fireEvent.click(button);
          await waitFor(() => {
            expect(sweetalert2.fire).toHaveBeenCalled();
          });

          expect(await sweetalert2.fire).toHaveBeenCalled();
        });
      });
    });
  });
});