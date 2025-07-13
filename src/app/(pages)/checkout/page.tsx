"use client"

import { useCart } from "@/app/context/cart/cart_provider";
import Header from "@/app/ui/component/global/header";
import ProductSummaryCard from "@/app/ui/component/checkout/product_summary_card";
import { roundDecimal, formatMoney } from "@/app/ui/component/Util/utilFunc";
import Image from "next/image";
import { useState } from "react";
import { FaCcMastercard, FaCreditCard } from "react-icons/fa";

export default function Page() {
    const [delivery, setDelivery] = useState("Pickup");
    const [isDifferentAddress, setIsDifferentAddress] = useState(false);
    const { cart } = useCart();

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
        <div className="py-16 md:py-20">
            <Header title={"Checkout"} />
            <section className="container mx-auto px-2 pt-5">
                <div className="py-5 flex gap-2">
                    <span className="w-2 bg-purple-500"></span>
                    <h1 className="text-lg md:text-xl font-bold uppercase">
                        order summary
                    </h1>
                </div>
                <div className="p-3 md:p-5 bg-stone-50">
                    <div className="flex justify-between">
                        <span className="font-medium">Bag total</span>
                        <span># {formatMoney(roundDecimal(subtotal))}</span>
                    </div>
                    <div>
                        {cart.map((product) => (
                            <ProductSummaryCard
                                product={product}
                                key={`${product.id}-${product.color}-${product.size}`}
                            />
                        ))}
                    </div>
                    <div className="mt-3 space-y-2">
                        <h1 className="font-medium pb-1">Delivery</h1>
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
                    <div className="flex gap-2 sm:gap-5 pt-3">
                        <input type="text" placeholder="Enter coupon code" className="w-full border px-5 py- md:py-3" />
                        <button type="button" className="border bg-white hover:bg-black hover:text-white hover:font-medium px-5 md:px-10 py-2 md:py-3">Apply</button>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-medium">Grand Total </span>
                        <span># {formatMoney(roundDecimal(subtotal + deliveryFee))}</span>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-2 pt-5">
                <div className="py-5 flex gap-2">
                    <span className="w-2 bg-purple-500"></span>
                    <h1 className="text-lg md:text-xl font-bold uppercase">
                        payment method
                    </h1>
                </div>
                <div className="bg-stone-50 flex flex-col lg:flex-row gap-3 p-3 md:p-5 items-center justify-between">
                    <button type="button" className="w-4/5 font-medium border border-stone-200 bg-white hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white px-10 py-2 md:py-3">Cash On Delivery</button>
                    <button type="button" className="w-4/5 border border-stone-200 bg-white hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white px-10 py-2 md:py-3 flex justify-center"><Image alt="paystack" width={1000} height={1000} src="/paystack.png" className="w-32" /></button>
                    <button type="button" className="w-4/5 font-medium border border-stone-200 bg-white hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white px-10 py-2 md:py-3 flex justify-center gap-2 items-center"><FaCcMastercard className="text-2xl" />Debit or Credit Card</button>
                </div>
            </section>
            <section className="container mx-auto px-2  pt-5">
                <div className="py-5 flex gap-2">
                    <span className="w-2 bg-purple-500"></span>
                    <h1 className="text-lg md:text-xl font-bold uppercase">
                        customer address
                    </h1>
                </div>
                <div className="bg-stone-50 p-3 md:p-5 space-y-1">
                    <h1 className="font-medium sm:text-lg">Fathiat Abimbola Odutayo</h1>
                    <p>10, Road 17, Agara Estate, Odo Ona Elewe, Ibadan, Oyo State, Nigeria</p>
                    <p>email123@gmail.com  +2348085671234</p>
                    <div className="flex items-center py-5">
                        <button
                            onClick={() => setIsDifferentAddress(!isDifferentAddress)}
                            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isDifferentAddress ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${isDifferentAddress ? "translate-x-4" : ""
                                    }`}
                            />
                        </button>
                        <span className="ml-2 text-gray-800">Send to different shipping address</span>
                    </div>
                    {isDifferentAddress &&
                        <div>
                            <div className="grid grid-cols-2 gap-2 md:gap-5">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="cursor-pointer text-sm sm:text-base">
                                        Full Name
                                    </label>
                                    <input type="text" id="name" placeholder="Full Name" className="p-3 bg-white border focus:outline-stone-300" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="cursor-pointer text-sm sm:text-base">
                                        Email
                                    </label>
                                    <input type="number" id="email" placeholder="Email" className="p-3 bg-white border focus:outline-stone-300" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone_number" className="cursor-pointer text-sm sm:text-base">
                                        Phone Number
                                    </label>
                                    <input type="number" id="phone_number" placeholder="Phone Number" className="p-3 bg-white border focus:outline-stone-300" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="alternate_phone_number" className="cursor-pointer text-sm sm:text-base">
                                        Alternate Phone Number
                                    </label>
                                    <input type="number" id="alternate_phone_number" placeholder="Alternative phone number" className="p-3 bg-white border focus:outline-stone-300" />
                                </div>
                            </div>
                            <div className="flex flex-col py-3 md:py-5">
                                <label htmlFor="name" className="cursor-pointer text-sm sm:text-base">
                                    Address
                                </label>
                                <textarea id="address" className="p-3 min-h-40 bg-white border focus:outline-stone-300" placeholder="Address here..." />
                            </div>
                            <button type="button" className="py-2 sm:py-3 px-10 bg-purple-500 hover:bg-black text-white">Save Address</button>
                        </div>
                    }
                </div>
            </section>
            <section className="container mx-auto px-2 pt-10">
                <div className=" ml-auto flex justify-end">
                    <button
                        className="w-full sm:w-auto bg-purple-500 text-white hover:bg-black py-2.5 sm:py-4 px-10 font-medium"
                        disabled={cart.length < 1 ? true : false}
                    >
                        Place Order
                    </button>
                </div>
            </section>
        </div>
    )
}