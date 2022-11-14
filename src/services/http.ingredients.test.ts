import { HttpIngredient } from './http.ingredients';
let mockIngredient: {
  name: 'pollo';
  category: 'carne';
  id: '13431';
};
describe('Given the services htttp.ingredients is instantiated', () => {
  describe('When the method getALlingredientes is called', () => {
    test('Them should be render', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([mockIngredient]),
      });
      const result = await new HttpIngredient().getAllIngredients();

      expect(fetch).toBeCalled();
      expect(result).toEqual([mockIngredient]);
    });
  });
  describe('When the method getIngredient is called', () => {});
  test('Then it should return a Ingredient', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockIngredient),
    });
    const api = new HttpIngredient();
    const response = await api.getIngredient('');
    expect(response).toEqual(mockIngredient);
  });
});
