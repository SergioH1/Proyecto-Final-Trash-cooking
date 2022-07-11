import { createReducer } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/interfaces';
import { loadUserAction, updateUserAction } from './user.action.creators';

const initialState: userWithToken = {
  token: '',
  user: {
    id: '',
    userName: '',
    passwd: '',
    avatar: '',
    email: '',
  },
};
export const usersReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loadUserAction, (state, action) => action.payload)
    .addCase(updateUserAction, (state, action) => (state = action.payload))
    .addDefaultCase((state) => state);
});
