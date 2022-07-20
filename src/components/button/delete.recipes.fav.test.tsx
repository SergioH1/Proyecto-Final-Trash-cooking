import { MemoryRouter } from 'react-router-dom';
import { DeleteRecipesFav } from './delete.recipes.fav';

import { HttpUser } from '../../services/http.user';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Given the component DeleteRecipesFav', () => {
  describe('When it is called', () => {
    test('and press button , delete recipes favorit', async () => {
      const mockid = '123456789012345678901234';

      const mockDelete = '';
      const api = jest.fn().mockReturnValue(mockDelete);
      HttpUser.prototype.deleteFavorites = api;

      const mockDispatch = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

      render(
        <MemoryRouter>
          <DeleteRecipesFav id={mockid}></DeleteRecipesFav>
        </MemoryRouter>
      );
      let button = screen.getByRole('button');

      fireEvent.click(button);

      await waitFor(() => {
        // expect(button).toBeInTheDocument();
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
