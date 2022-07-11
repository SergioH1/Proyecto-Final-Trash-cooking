import { configureStore } from '@reduxjs/toolkit';
import { iRecipe } from '../interfaces/interfaces';
import { recipeReducer } from '../reducer/recipes.reducer';
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

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
