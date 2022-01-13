export const addItemToStore = (storeItems, storeItemToAdd) => {
    const newStoreItems = storeItems.filter(storeItem => storeItem.id !== storeItemToAdd.id)
    return [...newStoreItems, { ...storeItemToAdd}];
};
  
export const removeItemFromStore = (storeItems, storeItemIdToRemove) => {
    const newStoreItems = storeItems.filter(storeItem => storeItem.id !== storeItemIdToRemove)
    return [...newStoreItems];
};

export const getItemFromStore = (storeItems, storeItemIdToGet) => {
    const newStoreItems = storeItems.filter(storeItem => storeItem.id !== storeItemIdToGet)
    return newStoreItems[0];
};
  