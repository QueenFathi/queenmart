"use client";

import { IoCloseOutline } from "react-icons/io5";
import ProductCard from "../component/product_card";
import SmallProductCard from "./small_product_card";

export default function WishlistCard() {
  return (
    <div className="px-5 shadow py-3">
      <SmallProductCard />
      <div className="flex justify-between items-center border-t mt-3 pt-3">
      <button className="w-auto py-3 px-5 text-purple-500 font-semibold">
          Remove
        </button>
        <button className="bg-purple-500 w-auto py-3 px-5 text-white font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
