import { User } from '../models/user.model';

import { HttpUser } from './http.user';
jest.mock('../utils/getToken');
describe('Given the http.user', () => {
  describe('When i use the method getAllUsers', () => {
    test('Then should be render', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest
          .fn()
          .mockResolvedValue([
            new User('test', 'test', 'test@test.com', [], '3'),
            new User('test', 'test2', 'test2@test.com', [], '5'),
          ]),
      });
      const result = await new HttpUser().getAllUsers();

      expect(fetch).toBeCalled();
      expect(result).toHaveLength(2);
    });
  });

  describe('When i use the method getUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '5');
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new HttpUser().getUser(user);

      expect(fetch).toBeCalled();
      expect(result.userName).toBe('test');
    });
  });

  describe('When i use the method registerUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '3');
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new HttpUser().registerUser(user);

      expect(fetch).toBeCalled();
      expect(result.userName).toBe('test');
    });
  });

  describe('When i use the method loginUser', () => {
    test('Then should be render', async () => {
      const user = { userName: 'test', password: '1234' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      await new HttpUser().loginUser(user);

      expect(fetch).toBeCalled();
      expect(user.userName).toBe('test');
    });
  });
  describe('When i use the method getUserBy token is called', () => {
    test('Then should return a  user with token', async () => {
      const user = { userName: 'test', password: '1234' };
      const token = '1213414141';
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      await new HttpUser().getUserByToken(token);

      expect(fetch).toBeCalled();
      expect(user.userName).toBe('test');
    });
  });

  describe('When i use the method updateUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '3');
      const modifyUser = { ...user, userName: 'pepe' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(modifyUser),
      });
      const result = await new HttpUser().updateUser(modifyUser);

      expect(fetch).toBeCalled();
      expect(result.userName).toBe('pepe');
    });
  });

  describe('When i use the method deleteUser', () => {
    test('Then should be render', async () => {
      const user = new User('url', 'test', 'test@test.com', [], '1');

      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new HttpUser().deleteUser(user._id);

      expect(fetch).toBeCalled();
      expect(result).toBe(undefined);
    });
  });
  describe('When i use the method addTofavorites', () => {
    test('Then should be get token is called', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '1');
      const modifyUser = { ...user, userName: 'pepe' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(modifyUser),
      });

      const result = await new HttpUser().addToFavorites('');

      expect(fetch).toBeCalled();
      expect(result).toBe(modifyUser);
    });
  });
});
