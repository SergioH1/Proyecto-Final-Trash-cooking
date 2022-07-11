import { createAction } from '@reduxjs/toolkit';
import { iRecipe } from '../../interfaces/interfaces';
import { actionTypesRecipes } from './recipe.action.types';

export const loadRecipesAction = createAction<Array<iRecipe>>(
  actionTypesRecipes['recipe@load']
);
export const addRecipeAction = createAction<iRecipe>(
  actionTypesRecipes['recipe@add']
);
export const updateRecipeAction = createAction<iRecipe>(
  actionTypesRecipes['recipe@update']
);
export const deleteRecipeAction = createAction<iRecipe>(
  actionTypesRecipes['recipe@delete']
);
