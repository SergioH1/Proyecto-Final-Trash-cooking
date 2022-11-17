import { MemoryRouter } from 'react-router-dom';
import { iRecipe } from '../../interfaces/interfaces';
import { recipeReducer } from '../../reducer/recipes/recipes.reducer';
import { usersReducer } from '../../reducer/user/user.reducer';
import { render, screen } from '../../utils/test.utils';
import { ListRecipes } from './list.recipes';

const reducer = {
    user: usersReducer,
    recipes: recipeReducer,
};

const mockRecipes: Array<iRecipe> = [
    {
        title: 'Ramen',
        img: '2',
        content: '1',
        origin: 'Asian',
        keywords: ['ramen'],
        ingredients: [
            {
                ingredient: {
                    name: 'pollo',
                    category: 'carne',
                    id: '123',
                },
                amount: 2,
                measure: 'g',
            },
        ],
    },
    {
        title: 'Tonkatsu',
        img: '2',
        content: '1',
        origin: 'Spain',
        keywords: ['ramen'],
        ingredients: [
            {
                ingredient: {
                    name: 'pollo',
                    category: 'carne',
                    id: '123',
                },
                amount: 2,
                measure: 'g',
            },
        ],
    },
    {
        title: 'Tonkatsu',
        img: '2',
        content: '1',
        origin: 'Isdi',
        keywords: ['ramen'],
        ingredients: [
            {
                ingredient: {
                    name: 'pollo',
                    category: 'carne',
                    id: '123',
                },
                amount: 2,
                measure: 'g',
            },
        ],
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
                    <ListRecipes></ListRecipes>
                </MemoryRouter>,
                {
                    reducer,
                    preloadedState,
                }
            );

            const display = screen.getByText(/hambre/);
            expect(display).toBeInTheDocument();
        });
    });
});
