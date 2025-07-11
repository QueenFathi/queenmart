import { createContext } from "react";
import { cartType } from "./cart_types";

export const initialContextValues: cartType = {
  cart: [],
};

const CartContext = createContext<cartType>(initialContextValues);

export default CartContext;
