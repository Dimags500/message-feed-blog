import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const logoutAction = createAction(ActionTypes.LOGOUT);
