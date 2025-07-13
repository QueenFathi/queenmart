"use client";

import Link from "next/link";
import Header from "@/app/ui/component/global/header";
import WishlistCard from "@/app/ui/component/wishlist/wishlist_card";
import { useCart } from "@/app/context/cart/cart_provider";
import { useWishlist } from "@/app/context/wishlist/wishlist_provider";

export default function Wishlist() {
  const { wishlist, deleteWishlistItem, clearWishlist } = useWishlist();
  const { addOne } = useCart();

  return (
    <div className="py-16 md:py-20">
      <Header title={"Wishlist"} />
      <div className="container mx-auto px-2">
        <div className="mt-10">
          <Link href="/shop" className="p-1">
            &larr; Continue Shopping
          </Link>
        </div>
        {wishlist.length === 0 ? (
          <div className="w-full text-center flex flex-col gap-5 justify-center items-center h-60">
            <h1 className="text-lg md:text-xl font-semibold">
              Wishlist is empty
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
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
          <>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
              {wishlist.map((product) => (
                <WishlistCard
                  key={product.id}
                  product={product}
                  deleteWishlistItem={deleteWishlistItem}
                  addtocart={addOne}
                />
              ))}
            </div>
            <button
              onClick={clearWishlist}
              className="mt-10 bg-purple-500 shadow-purple-400 text-white px-10 py-2 md:py-3 font-medium shadow hover:bg-black transition"
            >
              Clear cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
