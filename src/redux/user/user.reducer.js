import { UserActionTypes } from './user.types';
import { addItemToStore, removeItemFromStore}  from './user.util.js'

const INITIAL_STATE = {
  currentUser: null,
  storeItems : [
    {
        id: 1,
        name: 'Tomatoes',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/184/184540.png',
        quantity : 10,
        price : 'Rs 2.5',
        unit: 'kg'
    },
    {
      id: 2,
      name: 'Mangoes - Salem',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/700/700804.png',
      quantity : 5,
      price : 'Rs 70',
      unit: 'kg'
  }

    
  ]
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.ADD_ITEM_TO_STORE:
        return {
            ...state,
            storeItems: addItemToStore(state.storeItems, action.payload)
        };
    case UserActionTypes.REMOVE_ITEM_FROM_STORE:
        return {
            ...state,
            storeItems: removeItemFromStore(state.storeItems, action.payload)
        };
    
    default:
      return state;
  }
};

export default userReducer;
