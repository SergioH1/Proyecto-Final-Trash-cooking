import { MemoryRouter, useLocation } from 'react-router-dom';
import RecipePage from './recipe';
import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { HttpUser } from '../services/http.user';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
    state: {
      recipe: {
        img: 's',
        title: '3',
        ingredients: [
          {
            ingredient: {
              name: '',
            },
            ammout: 1,
            meassure: '3',
          },
        ],
      },
    },
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Given the page Recipe page', () => {
  describe('When it is called and click button', () => {
    test('them rendered a "', () => {
      const mockDispatch = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
      useLocation();

      render(
        <MemoryRouter>
          <RecipePage></RecipePage>
        </MemoryRouter>
      );
      HttpUser.prototype.addToFavorites = jest
        .fn()
        .mockResolvedValue({ token: '9', user: { test: 'pepe' } });
      fireEvent.click(screen.getByRole('button'));
      let result = screen.getByText(/Receta/);

      expect(result).toBeInTheDocument();
    });
  });
});
