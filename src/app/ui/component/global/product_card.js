"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { IoBagAdd, IoHeart, IoHeartOutline } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useCart } from "@/app/context/cart/cart_provider";
import { useWishlist } from "@/app/context/wishlist/wishlist_provider";
import AddOrRemoveQuantity from "./add_or_remove_quantity";
import ProductDetailForm from "@/app/ui/component/shop/product/product_detail_form";
import { formatMoney } from  "@/app/lib/utils";
import toast from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const { wishlist, addToWishlist, deleteWishlistItem } = useWishlist();
  const { cart, addOne, addItem, removeItem } = useCart();

  const itemLink = `/shop/${encodeURIComponent(product.id)}`;

  const alreadyWishlisted =
    wishlist.filter((wItem) => wItem.id === product.id).length > 0;

  const alreadyCarted =
    cart.filter((cItem) => cItem.id === product.id).length > 0;

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.qty : 0;

  const handleWishlist = () => {
    alreadyWishlisted ? deleteWishlistItem(product) : addToWishlist(product);
  };
  const addToBag = () => {
    if (product.colors || product.sizes) {
      setOpen(true);
    } else {
      addOne(product);
    toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div>
      <div className="pb-3 sm:pb-0 hover:shadow-lg shadow sm:shadow-none">
        <div className="relative group overflow-hidden">
          <button
            aria-label="Wishlist"
            onClick={handleWishlist}
            className="absolute z-10 top-1 sm:top-4 right-2 sm:right-5 text-base sm:text-2xl  hover:bg-purple-500 bg-white p-1.5 sm:p-3 rounded-full text-stone-700"
          >
            {alreadyWishlisted ? <IoHeart /> : <IoHeartOutline />}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="absolute z-10 top-10 sm:top-20 right-2 sm:right-5 text-base sm:text-2xl  hover:bg-purple-500 bg-white p-1.5 sm:p-3 rounded-full text-stone-700"
          >
            <FaEye />
          </button>
          {product.discount > 0 ? (
            <div className="absolute z-10 top-2 sm:top-4 left-2 sm:left-5 text-white text-xs sm:text-base bg-stone-700 hover:text-opacity-80 p-1.5 py-2.5 sm:px-3 sm:py-4 rounded-full ">
              {product.discount}%
            </div>
          ) : (
            <></>
          )}
          <Image
            src={product.imagesrc}
            height={1000}
            width={1000}
            alt={product.name}
            className="w-full h-52 sm:h-80 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
          ></Image>
          <div className="hidden absolute bottom-0 right-0 left-0 bg-purple-500 sm:flex gap-3 items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <button
              type="button"
              disabled={product.stock < 1}
              onClick={addToBag}
              className={`flex justify-center items-center gap-2 text-white hover-text-white w-full py-2 md:py-4 px-5 text-base md:text-lg ${
                product.stock < 1
                  ? "cursor-not-allowed bg-stone-400"
                  : "cursor-pointer bg-purple-500 hover:bg-black hover:font-bold"
              }`}
            >
              Add to Bag <IoBagAdd />
            </button>
          </div>
        </div>
        <Link href={itemLink}>
          <div className="py-5 text-center">
            <h1 className="text-sm sm:text-xl lg:text-2xl text-stone-600">
              {product.name}
            </h1>
            {product.discount > 0 ? (
              <p className="text-sm  sm:text-lg font-semibold">
                <span className="line-through font-normal text-xs sm:text-sm text-stone-500">
                  # {formatMoney(product.price)}
                </span>{" "}
                # {formatMoney(product.price - (product.price * product.discount) / 100)}
              </p>
            ) : (
              <p className="text-sm sm:text-lg font-semibold">
                # {formatMoney(product.price)}
              </p>
            )}
            {/* <div className="py-1 sm:py-3 text-xs sm:text-base">
              {product.stock > 0 ? (
                <p className="flex items-center gap-2 justify-center">
                  <FaCheck />
                  In Stock
                </p>
              ) : (
                <p className="flex items-center gap-2 justify-center">
                  <MdNotInterested /> Out of Stock
                </p>
              )}
            </div> */}
          </div>
        </Link>
        {alreadyCarted && quantity > 0 && !product.colors && !product.sizes ? (
          <div className="w-11/12 mx-auto sm:hidden">
            <AddOrRemoveQuantity
              className={"w-full"}
              addOne={addOne}
              removeItem={removeItem}
              qty={quantity}
              product={product}
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={addToBag}
            disabled={product.stock < 1}
            className={`w-11/12 mx-auto py-2 shadow text-sm text-white sm:text-base flex justify-center items-center gap-2 sm:hidden ${
              product.stock < 1
                ? "cursor-not-allowed bg-stone-400"
                : "cursor-pointer bg-purple-500 hover:bg-black hover:font-bold"
            }`}
          >
            Add to Bag <IoBagAdd />
          </button>
        )}
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
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
                  className="absolute top-4 right-4 text-gray-400 hover:text-black sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <Image
                    alt={product.name}
                    src={product.imagesrc}
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
                      {product.discount ? (
                        <p>
                          <span className="text-xl text-stone-500 line-through pe-3">
                            # {formatMoney(product.price)}
                          </span>{" "}
                          <span className="text-2xl text-gray-900">
                            {" "}
                            # {formatMoney(product.price - (product.price * product.discount) / 100)}
                          </span>
                        </p>
                      ) : (
                        <p className="text-2xl text-stone-900">
                          # {formatMoney(product.price)}
                        </p>
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
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-purple-500 hover:text-stone-700"
                          >
                            {product.reviewcount} reviews
                          </a>
                        </div>
                      </div>
                    </section>
                    <ProductDetailForm
                      alreadyCarted={alreadyCarted}
                      alreadyWishlisted={alreadyWishlisted}
                      handleWishlist={handleWishlist}
                      product={product}
                      addOne={addOne}
                      addItem={addItem}
                      removeItem={removeItem}
                      quantity={quantity}
                    />
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
