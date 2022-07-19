import { fireEvent, render, screen } from '../../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import { DeleteRecipesFav } from './delete.recipes.fav';
import { recipeReducer } from '../../reducer/recipes/recipes.reducer';
import { HttpUser } from '../../services/http.user';

const reducer = {
  recipes: recipeReducer,
};
const preloadedState = {
  recipes: [],
};
describe('Given the component DeleteRecipesFav', () => {
  describe('When it is called', () => {
    test('and press button , delete recipes favorit', async () => {
      const mockid = '1241';
      render(
        <MemoryRouter>
          <DeleteRecipesFav id={mockid}></DeleteRecipesFav>
        </MemoryRouter>,
        {
          preloadedState,
          reducer,
        }
      );
      let api = HttpUser.prototype.deleteFavorites;
      api = jest.fn().mockReturnValue({});

      let button = screen.getByRole('button');
      fireEvent.click(button);

      expect(api).toHaveBeenCalled();
    });
  });
});
