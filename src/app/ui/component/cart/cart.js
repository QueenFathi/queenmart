import Link from "next/link";
import CartItem from "./cart_item";
import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "@/app/context/cart/cart_provider";
import { formatMoney } from  "@/app/lib/utils";

export default function Cart({ openCart, onCloseCart }) {
  const { cart, deleteItem } = useCart();

  const subtotal = cart.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - (item.price * item.discount) / 100
      : item.price;

    return total + discountedPrice * item.qty;
  }, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          openCart
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none overflow-y-hidden"
        }`}
        onClick={onCloseCart}
      />

      <div
        className={`${
          openCart ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 z-50 transition-transform duration-500 ease-out w-full max-w-[400px] h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none bg-white py-10`}
      >
        <div className="px-5 md:px-10">
          <div className="flex justify-between">
            <p className="text-xl sm:text-2xl text-black font-semibold">
              Shopping Bag
            </p>
            <button className="text-3xl me-0 ms-auto" onClick={onCloseCart}>
              <IoCloseOutline />
            </button>
          </div>
          {cart.length < 1 ? (
            <div className="h-40 text-center flex justify-center items-center">
              Bag Is Empty
            </div>
          ) : (
            <div className="py-10 flex flex-col gap-5">
              {cart.map((item) => (
                <CartItem
                  deleteItem={deleteItem}
                  item={item}
                  key={`${item.id}-${item.color}-${item.size}`}
                />
              ))}
            </div>
          )}
          <div className="pt-10 w-full">
            <div className="flex justify-between gap-5">
              <div>
                <p className="text-base sm:text-xl">Subtotal</p>
                <p className="text-sm sm:text-base">
                  Shipping and Taxes calculated at Checkout
                </p>
              </div>
              <p className="text-xl font-semibold"># {formatMoney(subtotal)}</p>
            </div>
            <div className="py-3">
              <Link href="/bag">
                <button
                  onClick={onCloseCart}
                  className="w-full border border-purple-500 hover:bg-black hover:text-white py-2 sm:py-3 text-base"
                >
                  {" "}
                  View Bag
                </button>
              </Link>
              {cart.length > 0 && (
                <Link href="/checkout">
                  <button
                  onClick={onCloseCart} className="mt-3 w-full border border-purple-500 bg-purple-500 hover:bg-black text-white py-2 sm:py-3 text-base">
                    {" "}
                    Checkout
                  </button>
                </Link>
              )}
            </div>
            <p className="text-center" onClick={onCloseCart}>
              or{" "}
              <Link href="/shop" className="text-purple-500 hover:text-black">
                {" "}
                Continue Shopping &rarr;
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
