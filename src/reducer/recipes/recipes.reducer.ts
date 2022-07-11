import { createReducer } from '@reduxjs/toolkit';
import { iRecipe } from '../../interfaces/interfaces';
import * as actions from './recipe.action.creators';

const initialState = [] as Array<iRecipe>;
export const recipeReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.loadRecipesAction, (state, action) => [...action.payload])
    .addCase(actions.addRecipeAction, (state, action) => [
      ...state,
      action.payload,
    ])
    .addCase(actions.updateRecipeAction, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(actions.deleteRecipeAction, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    )
    .addDefaultCase((state) => state)
);
