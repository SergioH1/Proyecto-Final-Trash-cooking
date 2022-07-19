import { MemoryRouter } from 'react-router-dom';
import { iRecipe } from '../../interfaces/interfaces';
import { recipeReducer } from '../../reducer/recipes/recipes.reducer';
import { render, screen } from '../../utils/test.utils';
import { UnicRecipe } from './unicRecipe';
const reducer = {
  recipes: recipeReducer,
};

const mockState: Array<iRecipe> = [
  {
    title: 'Ramen',
    img: '2',
    content: '1',
    origin: 'Asia',
    keywords: ['ramen'],
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
  recipes: mockState,
};
describe('Given the component unicRecipe', () => {
  describe('When it is called', () => {
    test('Then it render a unic Recipe', () => {
      render(
        <MemoryRouter>
          <UnicRecipe></UnicRecipe>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );

      let display = screen.getByText(/Ramen/);
      expect(display).toBeInTheDocument();
    });
    test('and store fail then render a loading', () => {
      preloadedState = {
        recipes: [],
      };

      render(
        <MemoryRouter>
          <UnicRecipe></UnicRecipe>
        </MemoryRouter>,
        {
          reducer,
          preloadedState,
        }
      );

      let display = screen.getByText(/loading/);
      expect(display).toBeInTheDocument();
    });
  });
});
