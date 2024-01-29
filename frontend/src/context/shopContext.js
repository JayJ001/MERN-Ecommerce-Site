import React, { createContext, useReducer } from 'react'

export const ShopContext = createContext()

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        items: action.payload
      }
    case 'DELETE_ITEM':
        console.log('delete')
      return {
        items: state.items.filter((item) => item._id !== action.payload._id)
      }
    default:
      return state;
  }
};

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, {
    items: null
  });

  return (
    <ShopContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
