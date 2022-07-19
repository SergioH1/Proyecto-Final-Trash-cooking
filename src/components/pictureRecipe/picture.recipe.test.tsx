import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PictureRecipe } from './picture.recipe';

describe('Given the component PictureRecipe', () => {
  describe('When it is called and recive by props a recipe', () => {
    test('Then it a render img with link', () => {
      let recipe = {
        title: 'Pollo',
        origin: 'Asian',
        content: '',
        img: 'img',
        ingredients: [],
        keywords: ['pollo'],
      };
      render(
        <MemoryRouter>
          <PictureRecipe styles="img" recipe={recipe}></PictureRecipe>
        </MemoryRouter>
      );

      let display = screen.getByAltText('Pollo');
      expect(display).toBeInTheDocument();
    });
  });
});
