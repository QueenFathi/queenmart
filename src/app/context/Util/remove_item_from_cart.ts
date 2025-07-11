import { itemType } from "../cart/cart_types";

const removeItemFromCart = (cartItems: itemType[], item: itemType) => {
  const matchingItem = cartItems.find(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.color === item.color &&
      cartItem.size === item.size
  );

  if (!matchingItem) return cartItems;

  if (matchingItem.qty === 1) {
    return cartItems.filter(
      (cartItem) =>
        !(
          cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.size === item.size
        )
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id &&
      cartItem.color === item.color &&
      cartItem.size === item.size
      ? { ...cartItem, qty: cartItem.qty! - 1 }
      : cartItem
  );
};

export default removeItemFromCart;
