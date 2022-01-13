import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const addItemToStore = item => ({
  type: UserActionTypes.ADD_ITEM_TO_STORE,
  payload: item
});

export const removeItemFromStore = itemId => ({
  type: UserActionTypes.REMOVE_ITEM_FROM_STORE,
  payload: itemId
});
