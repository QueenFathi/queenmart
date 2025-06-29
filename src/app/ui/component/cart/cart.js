import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from './cart_item'

const bagItem = [
  {
    img: "/card2img1.png",
    name: "Hip Bag",
    price: 20000,
    color: "blue",
    quantity: 1,
  },
  {
    img: "/card2img2.png",
    name: "Hip Bag",
    price: 15000,
    color: "salmon",
    quantity: 2,
  },
  {
    img: "/card2img3.png",
    name: "Tote Basket",
    price: 10000,
    color: "blue",
    quantity: 1,
  },
  {
    img: "/card2img1.png",
    name: "Hip Bag",
    price: 20000,
    color: "blue",
    quantity: 1,
  },
  {
    img: "/card2img2.png",
    name: "Hip Bag",
    price: 15000,
    color: "salmon",
    quantity: 2,
  },
  {
    img: "/card2img3.png",
    name: "Tote Basket",
    price: 10000,
    color: "blue",
    quantity: 1,
  },
  {
    img: "/card2img1.png",
    name: "Hip Bag",
    price: 20000,
    color: "blue",
    quantity: 1,
  },
];

export default function Cart({ openCart, onCloseCart }) {
  return (
    <>
    {/* Overlay */}
    <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${openCart ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none overflow-y-hidden"}`} onClick={onCloseCart}/>

    <div
      className={`${
        openCart ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 z-50 transition-transform duration-500 ease-out w-full max-w-[400px] h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none bg-white py-10`}
    >
      <div>
        <div className="flex justify-between px-10">
          <p className="text-xl sm:text-2xl text-black font-semibold">
            Shopping Bag
          </p>
          <button className="text-3xl me-0 ms-auto" onClick={onCloseCart}>
            <IoCloseOutline />
          </button>
        </div>
        <div className="py-10 flex flex-col gap-5 px-10">
          {bagItem.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
        <div className="px-10 pt-10 w-full">
          <div className="flex justify-between gap-5">
            <div>
              <p className="text-xl">Subtotal</p>
              <p>Shipping and Taxes calculated at Checkout</p>
            </div>
            <p className="text-xl font-semibold">#10000</p>
          </div>
          <div className="py-3 space-y-3">
            <Link href="/cart">
            <button onClick={onCloseCart} className="w-full border border-purple-500 hover:bg-black hover:text-white py-3 text-lg">
              {" "}
              View Cart
            </button>
            </Link>
            <button className="w-full border border-purple-500 bg-purple-500 hover:bg-black text-white py-3 text-lg">
              {" "}
              Checkout
            </button>
          </div>
          <p className="text-center">
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
