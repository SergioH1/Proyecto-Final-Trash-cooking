/* eslint-disable @typescript-eslint/no-unused-expressions */
import { render, screen } from '../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import ProfilePage from './perfil';
import { iRecipe } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
import { usersReducer } from '../reducer/user/user.reducer';

const reducer = {
  user: usersReducer,
  recipes: recipeReducer,
};

const mockRecipes: Array<iRecipe> = [
  {
    title: 'Ramen',
    img: '2',
    content: '1',
    origin: 'Asia',
    keyword: ['ramen'],
    ingredients: [],
  },
  {
    title: 'Tonkatsu',
    img: '2',
    content: '1',
    origin: 'Asia',
    keyword: ['ramen'],
    ingredients: [],
  },
];
let preloadedState = {
  user: {
    userName: 'Pepe',
    email: '2',
    password: '123',

    recipes: mockRecipes,
  },
  recipes: mockRecipes,
};
describe('Given the page Perfil page', () => {
  describe('When it is called', () => {
    test('them rendered a "Favoritas', () => {
      render(
        <MemoryRouter>
          <ProfilePage></ProfilePage>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );

      const display = screen.getByText(/Recetas/);
      expect(display).toBeInTheDocument();
    });
  });
});
