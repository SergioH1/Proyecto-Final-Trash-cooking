import { configureStore } from '@reduxjs/toolkit';
import { iRecipe } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes/recipes.reducer';
export interface iStore {
  recipes: Array<iRecipe>;
}
const preloadedState: iStore = {
  recipes: [] as Array<iRecipe>,
};
export const store = configureStore({
  reducer: { recipes: recipeReducer },
  preloadedState,
});
