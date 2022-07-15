import { createReducer } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/interfaces';
import {
  loadUserAction,
  updateUserAction,
  loadUserByToken,
} from './user.action.creators';

const initialState: userWithToken = {
  token: '',
  user: {
    _id: '',
    userName: '',
    password: '',
    email: '',
  },
};
export const usersReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loadUserAction, (state, action) => action.payload)
    .addCase(loadUserByToken, (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    })
    .addCase(updateUserAction, (state, action) => (state = action.payload))
    .addDefaultCase((state) => state);
});
