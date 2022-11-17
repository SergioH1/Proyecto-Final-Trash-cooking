import { render, screen } from '../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './home';
import { iRecipe, userWithToken } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
import { usersReducer } from '../reducer/user/user.reducer';
const reducer = {
    user: usersReducer,
    recipes: recipeReducer,
};
const preloadedState = {
    user: {} as userWithToken,
    recipes: [] as Array<iRecipe>,
};
describe('Given the page HomePage', () => {
    describe('When it is called into the browser router', () => {
        test('them it is returned "register', () => {
            render(
                <MemoryRouter>
                    <HomePage></HomePage>
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const display = screen.getByText(/loading/);
            expect(display).toBeInTheDocument();
        });
    });
});
