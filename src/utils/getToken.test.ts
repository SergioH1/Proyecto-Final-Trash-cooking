import { getToken } from './getToken';

describe('Given the function get token is called', () => {
  test('them it return a string', () => {
    let result = getToken();
    expect(result).toBe(null);
  });
});
