import { recipeReducer } from './recipes.reducer';
import * as actions from './recipe.action.creators';
import { AnyAction } from '@reduxjs/toolkit';
import { iRecipe } from '../../interfaces/interfaces';

const mockedArray: Array<iRecipe> = [
  {
    _id: '1',
    title: 'Arroz con pollo',
    origin: 'global',
    content: '',
    img: '',
    ingredients: [
      {
        ingredient: {
          name: 'pollo',
          id: '1',
          category: '1',
        },
        measure: 'muslos',
        amount: 3,
      },
    ],
    keywords: ['pollo', 'arroz'],
  },
  {
    _id: '2',
    title: 'Arroz con gambas',
    origin: 'global',
    content: '',
    img: '',
    ingredients: [
      {
        ingredient: {
          name: 'gamba',
          id: '1',
          category: '1',
        },
        measure: 'muslos',
        amount: 3,
      },
    ],
    keywords: ['gambas', 'arroz'],
  },
];
describe('Given recipes reducer', () => {
  describe('When calling it with load action with an array of recipes', () => {
    test('It should return a new state with that array of recipes', () => {
      const newState = recipeReducer(
        [],
        actions.loadRecipesAction(mockedArray)
      );
      expect(newState).toEqual(mockedArray);
    });
  });
  describe('When calling it with add action with a character', () => {
    test('It should return a new state with an array with that character', () => {
      const newState = recipeReducer(
        [],
        actions.addRecipeAction(mockedArray[0])
      );
      expect(newState).toEqual([mockedArray[0]]);
    });
  });
  describe('When calling it with update action with a character or partial character', () => {
    test('It should return a new state with a updated array of recipes', () => {
      const newState = recipeReducer(
        mockedArray,
        actions.updateRecipeAction({
          ...mockedArray[0],
          title: 'Arroz con Pollo asiatico',
        })
      );
      expect(newState.find((item) => item._id === '1')?.title).toBe(
        'Arroz con Pollo asiatico'
      );
    });
  });
  describe('When calling it with delete action with a character', () => {
    test('It should return a new state with an array of previous recipes without the deleted one', () => {
      const newState = recipeReducer(
        mockedArray,
        actions.deleteRecipeAction(mockedArray[0])
      );
      expect(newState).toEqual([mockedArray[1]]);
    });
  });
  describe('When calling it with a non related action', () => {
    test('It should return a new state equal to the previous one', () => {
      const newState = recipeReducer(mockedArray, {} as AnyAction);
      expect(newState).toEqual(mockedArray);
    });
  });
});
