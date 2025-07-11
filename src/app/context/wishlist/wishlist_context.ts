import { createContext } from "react";
import { wishlistType } from "./wishlist_type";

export const initialContextValues: wishlistType = {
  wishlist: [],
};

const WishlistContext = createContext<wishlistType>(initialContextValues);

export default WishlistContext;
