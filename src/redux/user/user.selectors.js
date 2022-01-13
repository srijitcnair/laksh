import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.userProfile
);

export const getCurrentStore = createSelector(
  [selectUser],
  user => user.storeItems
);

export const getStoreItem = itemId => 
  createSelector(
    [getCurrentStore],
    (storeItems) => {
      return storeItems.find( item => item.id == itemId)
    }
  );