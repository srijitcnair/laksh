export const addItemToStore = (storeItems, storeItemToAdd) => {
    const newStoreItems = storeItems.filter(storeItem => storeItem.id !== storeItemToAdd.id)
    return [...newStoreItems, { ...storeItemToAdd}];
};
  
export const removeItemFromStore = (storeItems, storeItemToRemove) => {
    const newStoreItems = storeItems.filter(storeItem => storeItem.id !== storeItemToRemove.id)
    return [...newStoreItems];
};
  