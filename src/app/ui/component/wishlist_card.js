"use client";

import { IoCloseOutline } from "react-icons/io5";
import ProductCard from "../component/product_card";

export default function WishlistCard() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <button className="flex gap-1 items-center"> <IoCloseOutline className="text-lg" /> <span>Remove</span></button>
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <ProductCard />
    </div>
  );
}
