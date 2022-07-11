import { userWithToken } from '../../interfaces/interfaces';
import { usersReducer } from './user.reduer';
import * as actions from './user.action.creators';
const mockedUser: userWithToken = {
  token: '123',
  user: {
    id: '',
    userName: 's',
    email: '',
    passwd: '1231',
    avatar: '',
  },
};

describe('Given reducer reciperReducer', () => {
  describe('When calling it with load action with an array of recipes', () => {
    test('It should return a new state with thaht array', () => {
      const newState = usersReducer(
        {
          token: '',
          user: {
            id: '',
            userName: '1',
            email: '',
            passwd: '1',
            avatar: '',
          },
        },
        actions.loadUserAction(mockedUser)
      );

      expect(newState).toEqual(mockedUser);
    });
  });
});
