import { configureStore } from '@reduxjs/toolkit';
import { iRecipe, userWithToken } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
import { usersReducer } from '../reducer/user/user.reducer';
export interface iStore {
  recipes: Array<iRecipe>;
  user: userWithToken;
}
const preloadedState: iStore = {
  recipes: [] as Array<iRecipe>,
  user: {} as userWithToken,
};
export const store = configureStore({
  reducer: { recipes: recipeReducer, user: usersReducer },
  preloadedState,
});
