"use client";

import ProductCard from "@/app/ui/component/product_card";
import Header from "@/app/ui/component/header";
import Pagination from "@/app/ui/component/pagination";
import ShopFilterSidebar from "@/app/ui/component/product/shop_filter_sidebar";
import SmallProductCard from "@/app/ui/component/small_product_card";
import SmallProductCardSkeleton from "@/app/ui/component/small_product_card_skeleton";
import { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import ProductCardSkeleton from "@/app/ui/component/product_card_skeleton";

export default function Shop() {
  const [openBar, setOpenBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

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
          <h1 className="text-stone-700">Showing 1-12 of {products && products.length} results</h1>
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
            {loading
              ? [...Array(12)].map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
              <div className="grid grid-row gap-5">
                {loading
                  ? [...Array(3)].map((_, index) => (
                      <SmallProductCardSkeleton key={index} />
                    ))
                  : popularProducts.map((product) => (
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
                {loading
                  ? [...Array(3)].map((_, index) => (
                      <SmallProductCardSkeleton key={index} />
                    ))
                  : products
                      .slice(0, 3)
                      .map((product) => (
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
