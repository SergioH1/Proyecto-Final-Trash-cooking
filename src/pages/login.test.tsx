import { render, screen } from '../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './login';
import { iRecipe, userWithToken } from '../interfaces/interfaces';
import { usersReducer } from '../reducer/user/user.reducer';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';

const reducer = {
  user: usersReducer,
  recipe: recipeReducer,
};
const preloadedState = {
  user: {} as userWithToken,
  recipe: [] as Array<iRecipe>,
};
jest.mock('sweetalert2');
describe('Given the page login', () => {
  describe('When it is called', () => {
    test('Then it a rendered a "Login', () => {
      render(
        <MemoryRouter>
          <LoginPage></LoginPage>
        </MemoryRouter>,
        {
          preloadedState,
          reducer,
        }
      );
      let display = screen.getByText(/Login/);
      expect(display).toBeInTheDocument();
    });
  });
});
