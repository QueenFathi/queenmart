import addItemToCart from "../Util/add_item_to_cart";
import {
  ADD_ITEM,
  ADD_ONE,
  REMOVE_ITEM,
  DELETE_ITEM,
  cartType,
  itemType,
  CLEAR_CART,
  SET_CART,
} from "./cart_types";
import removeItemFromCart from "../Util/remove_item_from_cart";

type actionType = {
  type: string;
  payload?: itemType | itemType[];
};

const cartReducer = (state: cartType, action: actionType) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload as itemType),
      };
    case ADD_ONE:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload as itemType, true),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload as itemType),
      };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) =>
            !(
              cartItem.id === (action.payload as itemType).id &&
              cartItem?.color === (action.payload as itemType).color &&
              cartItem?.size === (action.payload as itemType).size
            )
        ),
      };

    case SET_CART:
      return {
        ...state,
        cart: action.payload as itemType[],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
