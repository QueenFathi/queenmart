"use client";

import { useMemo, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import ProductCard from "@/app/ui/component/global/product_card";
import Header from "@/app/ui/component/global/header";
import ShopFilterSidebar from "@/app/ui/component/shop/shop_filter_sidebar";
import SmallProductCard from "@/app/ui/component/global/small_product_card";

export default function ShopClient({ products }) {
  const [openBar, setOpenBar] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  const getDiscountedPrice = (product) => {
    if (product.discount) {
      return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
  };
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      const priceA = getDiscountedPrice(a);
      const priceB = getDiscountedPrice(b);
      switch (sortOption) {
        case "bestRatings":
          return b.rating - a.rating;
        case "popularity":
          return b.reviewcount - a.reviewcount;
        case "priceLowToHigh":
          return priceA - priceB;
        case "priceHighToLow":
          return priceB - priceA;
        default:
          return 0;
      }
    });
  }, [products, sortOption]);

  const popularProducts = products
    .slice()
    .sort((a, b) => b.reviewcount - a.reviewcount)
    .slice(0, 3);

  return (
    <div>
      <ShopFilterSidebar
        openBar={openBar}
        onClose={() => setOpenBar(false)}
        products={popularProducts.slice(0, 3)}
      />
      <div className="py-16 md:py-20">
        <Header title={"Shop"} />
        <div className="text-center py-5 border-b border-stone-300">
          <h1 className="text-stone-700">
            Showing 1-12 of {products && products.length} results
          </h1>
        </div>
        <div className="container mx-auto px-2">
          <div className="py-5 flex justify-between items-center">
            <button
              onClick={() => setOpenBar(true)}
              className="flex items-center gap-2 text-base md:text-lg font-semibold"
            >
              <HiMenuAlt2 /> <p>Show sidebar</p>
            </button>
            <form>
              <select
                onChange={(e) => setSortOption(e.target.value)}
                className="mx-3 text-sm md:text-base hover:bg-purple-400 hover:text-white px-4 py-2"
              >
                <option value="default">Default</option>
                <option value="bestRatings">Best Ratings</option>
                <option value="popularity">By Popularity</option>
                <option value="priceLowToHigh">Price: low to high</option>
                <option value="priceHighToLow">Price: high to low</option>
              </select>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10">
            {/* {loading
              ? [...Array(12)].map((_, index) => (
                  <ProductCardSkeleton key={index} />
                )) */}
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* <Pagination /> */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="py-10">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  POPULAR ITEMS
                </h1>
              </div>
              <div className="grid grid-row gap-5">
                {/* {loading
                  ? [...Array(3)].map((_, index) => (
                      <SmallProductCardSkeleton key={index} />
                    )) */}
                {popularProducts.map((product) => (
                  <SmallProductCard key={product.id} product={product} />
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
                {/* {loading
                  ? [...Array(3)].map((_, index) => (
                      <SmallProductCardSkeleton key={index} />
                    )) */}
                {products.slice(0, 3).map((product) => (
                  <SmallProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
