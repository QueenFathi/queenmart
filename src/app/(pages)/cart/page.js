"use client";

import Header from "@/app/ui/component/header";
import { roundDecimal } from "@/app/ui/component/Util/utilFunc";
import CartCard from "@/app/ui/component/cart/cart_page_item";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/app/ui/component/product_card";

const cart = [
  {
    id: 1,
    img: "/heel.jpg",
    name: "Heels",
    price: 24000,
    qty: 1,
    discountPercent: 20,
  },
  {
    id: 1,
    img: "/heel.jpg",
    name: "Heels",
    price: 24000,
    qty: 1,
    discountPercent: 20,
  },
];

export default function Cart() {
  const [delivery, setDelivery] = useState("Pickup");
  let subtotal = 0;

  let deliveryFee = 0;
  if (delivery === "Home") {
    deliveryFee = 2000;
  } else if (delivery === "Others") {
    deliveryFee = 7000;
  }
  return (
    <div>
      <div className="py-16 md:py-20">
        <Header title={"Cart"} />
        <div className="container mx-auto px-2">
          <div className="mt-10">
            <Link href="/shop" className="p-1">
              &larr; Continue Shopping
            </Link>
          </div>
          <section className="flex flex-col lg:flex-row mt-10 gap-10">
            <div className="h-full w-full lg:w-4/6 space-y-5">
              {cart.length === 0 ? (
                <div className="w-full text-center h-60 border-b border-gray-500">
                  Cart is empty
                </div>
              ) : (
                cart.map((item, index) => {
                  subtotal += item.price * item.qty;
                  return <CartCard key={index} item={item} />;
                })
              )}
              <div>
                {cart.length >= 1 && (
                  <button
                    // onClick={clearCart}
                    className="mt-10 bg-purple-500 shadow-purple-400 text-white px-10 py-2 md:py-3 font-medium shadow hover:bg-black transition"
                  >
                    Clear cart
                  </button>
                )}
              </div>
            </div>
            <div className="h-full w-full lg:w-4/12">
              <div className="border border-black divide-y divide-gray-500 p-6">
                <h2 className="text-xl mb-3">Cart Totals</h2>
                <div className="flex justify-between py-2">
                  <span className="uppercase">Subtotal</span>
                  <span># {roundDecimal(subtotal)}</span>
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
                          // defaultChecked
                        />
                        <label htmlFor="home" className="cursor-pointer">
                          Within Ibadan
                        </label>
                      </div>
                      <span># 2000</span>
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
                      <span># 7000</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-3">
                  <span>Grand Total </span>
                  <span># {roundDecimal(subtotal + deliveryFee)}</span>
                </div>
                <button
                  className="w-full bg-purple-500 text-white hover:bg-black py-2 sm:py-4 font-medium"
                  onClick={() => router.push(`/checkout`)}
                  disabled={cart.length < 1 ? true : false}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </section>
          <section className="py-16 md:py-20 px-2">
            <div className="flex items-center justify-between px-0 sm:px-2 pb-8">
              <div className="py-2 flex gap-2">
                <span className="w-2 bg-purple-500"></span>
                <h1 className="text-2xl font-bold">WISHLIST(5)</h1>
              </div>
              <Link
                href=""
                className="text-base md:text-xl font-semibold text-purple-500 hover:underline hover:text-black"
              >
                See All &gt;
              </Link>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-2">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                  >
                    <ProductCard key={index} />
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
