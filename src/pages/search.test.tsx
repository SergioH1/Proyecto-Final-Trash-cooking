import { MemoryRouter } from 'react-router-dom';

import { iRecipe } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';

import { render, screen } from '../utils/test.utils';
import SearchPage from './search';

const reducer = {
    recipes: recipeReducer,
};

const mockRecipes: Array<iRecipe> = [
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
    recipes: mockRecipes,
};
describe('Given the component SearchMultiple', () => {
    describe('When it is called', () => {
        test('Them it is search a recipes', () => {
            render(
                <MemoryRouter>
                    <SearchPage></SearchPage>
                </MemoryRouter>,
                {
                    reducer,
                    preloadedState,
                }
            );

            const display = screen.getByText(/nevera/);
            // fireEvent.change(input, { target: { value: 'ramen' } });
            expect(display).toBeInTheDocument();
        });
    });
});
