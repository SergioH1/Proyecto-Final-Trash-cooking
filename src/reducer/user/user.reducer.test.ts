import { iUser } from '../../interfaces/interfaces';
import { usersReducer } from './user.reducer';
import * as actions from './user.action.creators';
const mockedUser: iUser = {
    _id: '',
    userName: 's',
    email: '',
    password: '1231',
};

describe('Given reducer reciperReducer', () => {
    describe('When calling it with load action with an array of recipes', () => {
        test('It should return a new state with thaht array', () => {
            const newState = usersReducer(
                {
                    _id: '',
                    userName: '1',
                    email: '',
                    password: '1',
                },

                actions.loadUserAction(mockedUser)
            );

            expect(newState).toEqual(mockedUser);
        });
    });
    describe('When calling it with update action with a user or partial user', () => {
        test('It should return a new state with a updated user', () => {
            const newState = usersReducer(
                mockedUser,
                actions.updateUserAction({
                    _id: '',
                    userName: 'se',
                    email: '',
                    password: '1231',
                })
            );
            expect(newState.userName).toBe('se');
        });
    });
});
