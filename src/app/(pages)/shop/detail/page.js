"use client";

import ProductCard from "@/app/ui/component/product_card";
import ReviewCard from "@/app/ui/component/reviewcard";
import { Radio, RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { FaAngleDown, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoBagAdd, IoHeartOutline } from "react-icons/io5";

const product = {
  name: "Basic Tee 6-Pack ",
  price: 192000,
  discount: 21,
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc: "/heel.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  description: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
  stock: 2,
};
 const ShippingData = () => { 
  return (
    <p className=" pt-5">
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
      Diam amet duo labore stet elitr ea clita ipsum, tempor labore
      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
      sed eirmod ipsum.
      <br />
    </p>
  )
 }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index)
  }

  const increaseQuantity = () => {
      setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div>
      <div className="container mx-auto py-16 md:py-20 px-2">
        <div className="flex gap-3 py-10 text-base md:text-lg">
          <Link href="/">Home</Link> \<Link href="/shop">Shop</Link> \
          <Link href="text-stone-700">{product.name}</Link>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-12 lg:gap-x-8  border-b border-stone-200 pb-14">
          <Image
            alt={product.imageAlt}
            src={product.imageSrc}
            width={400}
            height={400}
            className="aspect-2/3 w-full h-auto rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
          />
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
              {product.name}
            </h2>
            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>
              {product.discount ? (
                <p>
                  <span className="text-xl text-stone-500 line-through pe-3">
                    #{product.price}
                  </span>{" "}
                  <span className="text-2xl text-stone-900 font-semibold">
                    {" "}
                    #{(product.price * product.discount) / 100}
                  </span>
                </p>
              ) : (
                <p className="text-2xl text-stone-900 font-semibold"># {product.price}</p>
              )}
              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-purple-500 hover:text-stone-700"
                  >
                    {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </section>
            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>
              <form>
                <fieldset aria-label="Choose a color">
                  <legend className="text-sm font-medium text-gray-900">
                    Color
                  </legend>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4 flex items-center gap-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ checked }) =>
                          `relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 border-2 transition ${
                            checked
                              ? "border-purple-500 ring-2 ring-purple-500"
                              : "border-gray-300"
                          }`
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "size-8 rounded-full border border-black/10"
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
                <fieldset aria-label="Choose a size" className="mt-10">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Size
                    </div>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ checked }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            checked
                              ? "border-purple-500 ring-2 ring-purple-500"
                              : "border-stone-300",
                            "group border-2 transition relative flex items-center justify-center px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1"
                          )
                        }
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-stone-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
                <div className="flex flex-1 mt-6">
                  <div className="flex items-center border-2 border-stone-300">
                    <button onClick={decreaseQuantity} className="px-3 py-2 text-lg border-r-2 border-stone-300 hover:bg-stone-100"> - </button>
                    <input type="text" className="w-12 text-center focus:outline-none" value={quantity} readOnly />
                    <button onClick={increaseQuantity} className="px-3 py-2 text-lg border-l-2 border-stone-300 hover:bg-stone-100"> + </button>
                  </div>
                </div>
                <div className="flex items-center gap-10 mt-6">
                  <button
                    type="submit"
                    className="flex gap-3 w-1/2 items-center justify-center bg-purple-500 px-8 py-3 text-base font-medium text-white transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                  >
                    Add to bag <IoBagAdd />
                  </button>
                  <button className="px-3 py-2.5 hover:text-white hover:bg-purple-500">
                    <IoHeartOutline className="text-3xl" />
                  </button>
                </div>
              </form>
              <div className="mt-6 flex gap-2">
                <h1 className="font-semibold">Category:</h1>
                <p>Fashion</p>
              </div>
              <div className="mt-3 flex gap-4 items-center">
                <h1 className="font-semibold">Share:</h1>
                <Link href="">
                  <FaFacebookF />{" "}
                </Link>
                <Link href="">
                  <FaXTwitter />{" "}
                </Link>
                <Link href="">
                  <FaPinterest />{" "}
                </Link>
                <Link href="">
                  <FaLinkedinIn />{" "}
                </Link>
              </div>
            </section>
          </div>
        </div>
        {[{title:"Description", data:product.description}, {title:"Shipping", data: <ShippingData />}, {title:"Returns", data: <ShippingData />}].map((d, index) => (
        <div className="py-10 border-b border-stone-200" key={index}>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg md:text-2xl">{d.title}</h1>
            <button onClick={() => toggleTab(index)}>
              <FaAngleDown
                className={`w-8 h-8 p-2 transition-transform duration-300 ${
                  activeTab === index && "rotate-180"
                }`}
              />
            </button>
          </div>
          {activeTab === index && d.data}
        </div>
        ))}
        <div className="pt-10">
          <div className="py-8 flex gap-2">
            <span className="w-2 bg-purple-500"></span>
            <h1 className=" text-2xl font-bold">CUSTOMERS ALSO VIEWED</h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-4 gap-1 md:gap-3">
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
        </div>

        <div className="py-20">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">Product Ratings & Reviews</h1>
            <Link href="" className="text-base md:text-lg text-stone-800 hover:underline hover:text-purple-500">See more &gt;</Link>
          </div>
          <div className="mt-10">
            {[...Array(3)].map((_, index) => (
                  <ReviewCard key={index} />
                ))}
          </div>
        </div>
        <div className="">
          <div className="py-8 flex gap-2">
            <span className="w-2 bg-purple-500"></span>
            <h1 className=" text-2xl font-bold">YOU MAY ALSO LIKE</h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-4 gap-1 md:gap-3">
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
        </div>
      </div>
    </div>
  );
}
