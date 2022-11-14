import { MemoryRouter } from 'react-router-dom';
import { iRecipe } from '../../interfaces/interfaces';
import { recipeReducer } from '../../reducer/recipes/recipes.reducer';
import { HttpRecipe } from '../../services/http.recipes';
import { render, screen } from '../../utils/test.utils';
import { SearchMultiple } from './search.multiple';

const reducer = {
  recipes: recipeReducer,
};
const mockRecipes: Array<iRecipe> = [
  {
    title: 'Ramen',
    img: '2',
    content: '1',
    origin: 'Asia',
    keywords: ['Pollo'],
    ingredients: [],
  },
  {
    title: 'Tonkatsu',
    img: '2',
    content: '1',
    origin: 'Asia',
    keywords: ['ramen'],
    ingredients: [],
  },
];
let preloadedState = {
  recipes: mockRecipes,
};
describe('Given the component SearchMultiple', () => {
  describe('When it is called', () => {
    test('Them it is search a recipes', () => {
      render(
        <MemoryRouter>
          <SearchMultiple></SearchMultiple>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );
      HttpRecipe.prototype.getByingredient = jest
        .fn()
        .mockResolvedValue(mockRecipes);
      let input = screen.getByText(/Find/);

      expect(input).toBeInTheDocument();
    });
    test('Them it is search a recipes and rendered picture', async () => {
      render(
        <MemoryRouter>
          <SearchMultiple></SearchMultiple>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );

      HttpRecipe.prototype.getByingredient = jest
        .fn()
        .mockResolvedValue(mockRecipes);
      const input = screen.getByText(/Find Recipes/);

      expect(input).toBeInTheDocument();
    });
  });
});