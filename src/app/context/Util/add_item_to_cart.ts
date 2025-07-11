import { itemType } from "../cart/cart_types";

const addItemToCart = (
  cartItems: itemType[],
  item: itemType,
  add_one = false
) => {
  // Check for duplicate by matching id, color, and size
  const duplicate = cartItems.find(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.color === item.color &&
      cartItem.size === item.size
  );

  if (duplicate) {
    return cartItems.map((cartItem) => {
      if (
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
      ) {
        const newQty = add_one
          ? (cartItem.qty ?? 0) + 1
          : item.qty ?? cartItem.qty ?? 1;

        console.log("Updated qty:", newQty);

        return { ...cartItem, qty: newQty };
      }
      return cartItem;
    });
  }

  const initialQty = item.qty ?? 1;

  return [
    ...cartItems,
    {
      ...item,
      qty: initialQty,
    },
  ];
};

export default addItemToCart;
