"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/app/ui/component/global/header";
import { useCart } from "@/app/context/cart/cart_provider";
import { useWishlist } from "@/app/context/wishlist/wishlist_provider";
import { formatMoney, roundDecimal } from "@/app/ui/component/Util/utilFunc";
import CartCard from "@/app/ui/component/cart/cart_page_item";
import ProductCard from "@/app/ui/component/global/product_card";

export default function Bag() {
  const [delivery, setDelivery] = useState("Pickup");
  const { cart, addOne, removeItem, deleteItem, clearCart } = useCart();
  const { wishlist } = useWishlist();

  const subtotal = cart.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - (item.price * item.discount) / 100
      : item.price;

    return total + discountedPrice * item.qty;
  }, 0);

  let deliveryFee = 0;
  if (delivery === "Home") {
    deliveryFee = 2000;
  } else if (delivery === "Others") {
    deliveryFee = 7000;
  }

  return (
    <div>
      <div className="py-16 md:py-20">
        <Header title={"Bag"} />
        <div className="container mx-auto px-2">
          <div className="mt-10">
            <Link href="/shop" className="p-1">
              &larr; Continue Shopping
            </Link>
          </div>
          <section className="flex flex-col lg:flex-row mt-10 gap-10">
            <div
              className={`h-full w-full ${
                cart.length === 0 ? "lg:w-full" : "lg:w-4/6"
              } space-y-5`}
            >
              {cart.length === 0 ? (
                <div className="w-full text-center flex flex-col gap-5 justify-center items-center h-60">
                  <h1 className="text-lg md:text-xl font-semibold">
                    Your Bag is empty
                  </h1>
                  <p className=" text-base md:text-lg">
                    Browse our categories and discover our best deals!
                  </p>
                  <Link
                    href="/shop"
                    className="relative shadow-md px-16 py-3 bg-purple-500 border border-purple-500 group overflow-hidden cursor-pointer"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out" />
                    <span className="relative z-10 text-base md:text-lg font-medium text-white transition-colors duration-300">
                      Shop Now
                    </span>
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <CartCard
                    key={`${item.id}-${item.color}-${item.size}`}
                    item={item}
                    addOne={addOne}
                    removeItem={removeItem}
                    deleteItem={deleteItem}
                  />
                ))
              )}
              <div>
                {cart.length >= 1 && (
                  <button
                    onClick={clearCart}
                    className="mt-10 bg-purple-500 shadow-purple-400 text-white px-10 py-2 md:py-3 font-medium shadow hover:bg-black transition"
                  >
                    Clear Bag
                  </button>
                )}
              </div>
            </div>
            {cart.length >= 1 && (
              <div className="h-full w-full lg:w-4/12">
                <div className="border border-black divide-y divide-gray-500 p-6">
                  <h2 className="text-lg sm:text-xl mb-3">Bag Totals</h2>
                  <div className="flex justify-between py-2">
                    <span className="uppercase">Subtotal</span>
                    <span># {formatMoney(roundDecimal(subtotal))}</span>
                  </div>
                  <div className="py-3">
                    <span className="uppercase">Delivery</span>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between">
                        <div className="space-x-2">
                          <input
                            type="radio"
                            name="delivery"
                            value="Pickup"
                            id="pickup"
                            checked={delivery === "Pickup"}
                            onChange={() => setDelivery("Pickup")}
                          />
                          <label htmlFor="pickup" className="cursor-pointer">
                            Store Pickup
                          </label>
                        </div>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="space-x-2">
                          <input
                            type="radio"
                            name="delivery"
                            value="home"
                            id="home"
                            checked={delivery === "Home"}
                            onChange={() => setDelivery("Home")}
                          />
                          <label htmlFor="home" className="cursor-pointer">
                            Within Ibadan
                          </label>
                        </div>
                        <span># {formatMoney(2000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="space-x-2">
                          <input
                            type="radio"
                            name="deli"
                            value="Others"
                            id="others"
                            checked={delivery === "Others"}
                            onChange={() => setDelivery("Others")}
                          />{" "}
                          <label htmlFor="others" className="cursor-pointer">
                            Other Cities
                          </label>
                        </div>
                        <span># {formatMoney(7000)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Grand Total </span>
                    <span># {formatMoney(roundDecimal(subtotal + deliveryFee))}</span>
                  </div>
                  <Link href="/checkout">
                  <button
                    className="w-full bg-purple-500 text-white hover:bg-black py-2 sm:py-4 font-medium"
                  >
                    Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </section>
          <section className="py-16 md:py-20 px-2">
            <div className="flex items-center justify-between px-0 sm:px-2 pb-8">
              <div className="py-2 flex gap-2">
                <span className="w-2 bg-purple-500"></span>
                <h1 className="text-2xl font-bold">
                  WISHLIST({wishlist.length})
                </h1>
              </div>
              <Link
                href="/wishlist"
                className="text-base md:text-xl font-semibold text-purple-500 hover:underline hover:text-black"
              >
                See All &gt;
              </Link>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-2">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                  >
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
