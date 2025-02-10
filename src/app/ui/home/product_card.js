import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md"
import { IoBagAdd, IoHeartOutline } from "react-icons/io5";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const product = {
  name: "Basic Tee 6-Pack ",
  price: 192000,
  discount: 21,
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "/heel.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }
    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }

  return (
    <div>
      <div className="pb-3 sm:pb-0 shadow">
        <div className="relative group overflow-hidden">
          <button className="absolute z-10 top-1 sm:top-4 right-2 sm:right-5 text-base sm:text-2xl  hover:bg-purple-500 bg-white p-1.5 sm:p-3 rounded-full text-stone-700">
            <IoHeartOutline />
          </button>
          <button onClick={() => setOpen(true)} className="absolute z-10 top-10 sm:top-20 right-2 sm:right-5 text-base sm:text-2xl  hover:bg-purple-500 bg-white p-1.5 sm:p-3 rounded-full text-stone-700">
            <FaEye />
          </button>
          {product.discount ? (<div className="absolute z-10 top-2 sm:top-4 left-2 sm:left-5 text-white text-xs sm:text-base bg-stone-700 hover:text-opacity-80 p-1.5 py-2.5 sm:px-3 sm:py-4 rounded-full ">
            {product.discount}%
          </div>) : (<></>)}
          <Image
            src={product.imageSrc}
            height={300}
            width={300}
            alt={product.imageAlt}
            className="object-cover w-full transform group-hover:scale-105 transition-transform duration-1000"
          ></Image>
          <div className="hidden absolute bottom-0 right-0 left-0 bg-purple-500 sm:flex gap-3 items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <button className="flex justify-center items-center gap-2 text-white bg-purple-500 w-full py-2 md:py-4 px-5 text-base md:text-lg">
                Add to Bag <IoBagAdd />
            </button>
          </div>
        </div>
        <Link href="/shop/detail">
        <div className="p-2 text-center">
          <h1 className="text-sm md:text-2xl font-semibold">{product.name}</h1>
          {product.discount ? (<p className="text-sm  md:text-lg font-medium"><span className="line-through font-normal text-sm md:text-base text-stone-500">#{product.price}</span> #{product.price * product.discount /100}</p>) : (<p className="text-sm md:text-lg">#{product.price}</p>)}
          <div className="py-1 sm:py-3 text-xs sm:text-base">
            {product.stock>0 ? (<p className="flex items-center gap-2 justify-center"><FaCheck />
              In Stock</p>) : (<p className="flex items-center gap-2 justify-center"><MdNotInterested /> Out of Stock</p>)} 
          </div>
        </div>
        </Link>
        <button className="w-11/12 mx-auto py-1.5 sm:py-2 bg-purple-500 hover:bg-purple-400 hover:font-bold hover:text-black text-sm text-white sm:text-base flex justify-center items-center gap-2 sm:hidden">
          Add to Bag <IoBagAdd />
        </button>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    width={300}
                    height={300}
                    className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                  />
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {product.name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      {product.discount ? (<p><span className="text-xl text-stone-500 line-through pe-3">#{product.price}</span> <span className="text-2xl text-gray-900"> #{product.price}</span></p>) : (<p className="text-2xl text-stone-900"># {product.price}</p>)}

                      {/* Reviews */}
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
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-purple-500 hover:text-stone-700"
                          >
                            {product.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
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
                                className={({checked}) =>
          
                                  `relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 border-2 transition ${checked ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-300'}`
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

                        {/* Sizes */}
                        <fieldset aria-label="Choose a size" className="mt-10">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              Size
                            </div>
                          </div>

                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4 grid grid-cols-4 gap-4"
                          >
                            {product.sizes.map((size) => (
                              <Radio
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({checked}) => classNames(
                                  size.inStock
                                    ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  checked ? 'border-purple-500 ring-2 ring-purple-500' : 'border-stone-300',
                                  "group border-2 transition relative flex items-center justify-center px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1"
                                )}
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

                        <div className="flex justify-between gap-5 mt-6">
                          <div className="flex items-center border-2 border-stone-300">
                            <button onClick={decreaseQuantity} className="px-3 py-2 text-lg border-r-2 border-stone-300 hover:bg-stone-100"> - </button>
                            <input type="text" className="w-12 text-center focus:outline-none" value={quantity} readOnly />
                            <button onClick={increaseQuantity} className="px-3 py-2 text-lg border-l-2 border-stone-300 hover:bg-stone-100"> + </button>
                          </div>
                        <button
                          type="submit"
                          className="flex gap-3 w-full items-center justify-center border border-transparent bg-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-purple-400 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                        >
                          Add to bag <IoBagAdd />
                        </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
