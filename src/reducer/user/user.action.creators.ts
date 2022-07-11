import { createAction } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/interfaces';
import { actionTypes } from './user.action.types';

export interface iAction {
  type: actionTypes;
  payload: any;
}

export const loadUserAction = createAction<userWithToken>(
  actionTypes['user@load']
);
export const deleteUserAction = createAction<userWithToken>(
  actionTypes['user@delete']
);
export const updateUserAction = createAction<userWithToken>(
  actionTypes['user@update']
);
