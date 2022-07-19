import { HttpRecipe } from './http.recipes';

let mockIngredient: {
  name: 'pollo';
  category: 'carne';
  id: '13431';
};
let mockRecipe: {
  id: '123456789012345678901234';
};

const api = new HttpRecipe();
describe('Given the services htttp.ingredients is instantiated', () => {
  describe('When the method getALlingredientes is called', () => {
    test('Them should be render', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([mockIngredient]),
      });
      const result = await api.getAllRecipes();

      expect(fetch).toBeCalled();
      expect(result).toEqual([mockIngredient]);
    });
  });
  describe('When the method getIngredient is called', () => {});
  test('Then it should return a Ingredient', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockIngredient),
    });

    const response = await api.getRecipe('');
    expect(response).toEqual(mockIngredient);
  });
  describe('When the method updateIngredientRecipe is called', () => {
    test('Them it should return a recipe with the data changes', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockIngredient),
      });

      const response = await api.updateIngredientRecipe('21', {
        ingredient: {
          name: 'gamba',
          id: '1',
          category: '1',
        },
        amount: 2,
        measure: 'unidades',
      });
      // const expectedResponse = { ...mockRecipe, promotion: true };
      expect(response).toEqual(undefined);
    });
  });
  describe('When the method updateKeyword is called', () => {
    test('Them it should return a recipe with the data changes', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockIngredient),
      });

      const response = await api.updateKeywordsRecipe('21', 'pollo');
      expect(response).toEqual(undefined);
    });
  });
  describe('When the method getByIngredient is called', () => {
    test('Them it should return a recipe with the data changes', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockIngredient),
      });
      const query = ['Pollo', 'alga'];
      const response = api.getByingredient(query);
      expect(fetch).toHaveBeenCalled();
      // expect(response).toBe({});
    });
  });
});
