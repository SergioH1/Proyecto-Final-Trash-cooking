import { configureStore } from '@reduxjs/toolkit';
import { iRecipe, iUser } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
import { usersReducer } from '../reducer/user/user.reducer';
export interface iStore {
    recipes: Array<iRecipe>;
    user: iUser;
}
const preloadedState: iStore = {
    recipes: [] as Array<iRecipe>,
    user: {} as iUser,
};
export const store = configureStore({
    reducer: { recipes: recipeReducer, user: usersReducer },
    preloadedState,
});
