import { store } from './store';

describe('Given the store', () => {
  describe('When imported', () => {
    test('It should give you an object', () => {
      expect(store).toBeTruthy();
    });
  });
});
