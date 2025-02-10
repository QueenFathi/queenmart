import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

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
    <div
      className={`${
        openCart ? "translate-x-0" : "translate-x-full"
      } fixed z-50 transition-transform duration-300 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none bg-white py-10`}
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
            <div key={index} className="flex gap-y-5 gap-x-10">
              <div className="shrink-0">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="cart image"
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <p className="text-xl font-semibold">#{item.price}</p>
                  </div>
                  <p>{item.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between">
                  <p className="pb-2">Qty {item.quantity}</p>
                  <button className="border border-stone-200 py-2 px-5 hover:bg-purple-500 hover:text-white">
                    Remove
                  </button>
                </div>
              </div>
            </div>
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
          <div className="py-3">
            <button className="w-full bg-purple-500 text-white py-3 text-lg">
              {" "}
              Checkout
            </button>
          </div>
          <p className="text-center">
            or{" "}
            <span className="text-purple-500 hover:text-purple-400">
              {" "}
              Continue Shopping &rarr;
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
