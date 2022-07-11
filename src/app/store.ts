import { configureStore } from '@reduxjs/toolkit';
import { iRecipe, userWithToken } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
import { usersReducer } from '../reducer/user/user.reduer';
export interface iStore {
  recipes: Array<iRecipe>;
  users: userWithToken;
}
const preloadedState: iStore = {
  recipes: [] as Array<iRecipe>,
  users: {} as userWithToken,
};
export const store = configureStore({
  reducer: { recipes: recipeReducer, users: usersReducer },
  preloadedState,
});
