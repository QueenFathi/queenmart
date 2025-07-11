"use client"

import { useContext, useReducer } from "react";
import wishlistReducer from "./wishlist_reducer";
import WishlistContext from "./wishlist_context";
import {
  ADD_TO_WISHLIST,
  DELETE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  itemType,
  wishlistType,
} from "./wishlist_type";

export const ProvideWishlist = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useProvideWishlist();
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

const useProvideWishlist = () => {
  const initPersistState: wishlistType = { wishlist: [] };
  const [state, dispatch] = useReducer(wishlistReducer, initPersistState);

  const addToWishlist = (item: itemType) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item,
    });
  };

  const deleteWishlistItem = (item: itemType) => {
    dispatch({
      type: DELETE_WISHLIST_ITEM,
      payload: item,
    });
  };

  const clearWishlist = () => {
    dispatch({
      type: CLEAR_WISHLIST,
    });
  };

  const value: wishlistType = {
    wishlist: state.wishlist,
    addToWishlist,
    deleteWishlistItem,
    clearWishlist,
  };

  return value;
};
