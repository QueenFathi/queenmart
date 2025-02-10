"use client";

import ProductCard from "@/app/ui/home/product_card";
import Header from "@/app/ui/pages/header";
import Pagination from "@/app/ui/pages/pagination";
import ShopFilterSidebar from "@/app/ui/pages/shop_filter_sidebar";
import SmallProductCard from "@/app/ui/small_product_card";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export default function Shop() {
  const [openBar, setOpenBar] = useState(false);
  

  return (
    <div>
      <ShopFilterSidebar openBar={openBar} onClose={() => setOpenBar(false)} />
      <div className="py-16 md:py-20">
        <Header title={"Shop"} />
        <div className="text-center py-5 border-b border-stone-300">
          <h1 className="text-stone-700">Showing 1-24 of 184 results</h1>
        </div>
        <div className="container mx-auto px-5">
          <div className="py-5 flex justify-between items-center">
            <button
              onClick={() => setOpenBar(true)}
              className="flex items-center gap-2 text-base md:text-lg font-semibold"
            >
              <HiMenuAlt2 /> <p>Show sidebar</p>
            </button>
            <form>
              <select className="mx-3 text-sm md:text-base hover:bg-purple-400 hover:text-white px-4 py-2">
                <option>Default</option>
                <option>Best Ratings</option>
                <option>By Popularity</option>
                <option>Latest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10">
            {[...Array(24)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
          <Pagination />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="py-10">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  POPULAR ITEMS
                </h1>
              </div>
              <div className=" grid grid-row gap-5">
                {[...Array(3)].map((_, index) => (
                  <SmallProductCard key={index} />
                ))}
              </div>
            </div>
            <div>
              <div className="py-10">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  NEW ARRIVAL
                </h1>
              </div>
              <div className=" grid grid-row gap-5">
                {[...Array(3)].map((_, index) => (
                  <SmallProductCard key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
