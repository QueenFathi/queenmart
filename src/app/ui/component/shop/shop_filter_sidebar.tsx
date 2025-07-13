"use client"

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import SmallProductCard from "@/app/ui/component/global/small_product_card";
import PriceFilter from "./price_filter"

export default function ShopFilterSidebar({ openBar, onClose, products }: {
  openBar: boolean;
  onClose: () => void;
  products: any[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 200000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);
  const [filterDiscount, setFilterDiscount] = useState<string | null>(null)

  const toggleSelection = (value: string, selected: string[], setSelected: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategory) params.set("category", selectedCategory);
    else params.delete("category");

    if (selectedPriceRange) params.set("price", `${selectedPriceRange[0]}-${selectedPriceRange[1]}`);
    else params.delete("price");

    if (selectedColors.length > 0) params.set("colors", selectedColors.join(","));
    else params.delete("colors");

    if (selectedSizes.length > 0) params.set("sizes", selectedSizes.join(","));
    else params.delete("sizes");

    if (filterDiscount) params.set("filterbydiscount", filterDiscount);
    else params.delete("filterbydiscount")

    router.push(`${pathname}?${params.toString()}`);
    onClose();
  };

  return (
    <div
      className={`fixed  z-40 inset-0 bg-stone-900 bg-opacity-50 transition-opacity ${openBar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
      <div
        className={`${openBar ? "-translate-x-0" : "-translate-x-full"
          } fixed transition-transform duration-500 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none w-[350px] md:w-[30rem] h-full bg-white`}
      >
        <div className="fixed top-0 z-50 py-5 px-10 border-b border-stone-200 w-full">
          <button
            className="text-3xl me-0 ms-auto flex items-center"
            onClick={onClose}
          >
            <IoCloseOutline /> <p className="text-base"> Close</p>
          </button>
        </div>
        <div className="px-5 my-20">
          <div className="mt-10">
            <h2 className="font-semibold text-lg pb-3">PRODUCT CATEGORIES</h2>
            {["Accessories", "Clothes", "Shoes", "Bags"].map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-1 px-1 cursor-pointer ${selectedCategory === item ? "bg-purple-400 text-white" : "hover:bg-purple-400 hover:text-white"
                  }`}
                onClick={() => setSelectedCategory(selectedCategory === item ? null : item)}
              >
                <span>{item}</span>
                <input type="checkbox" readOnly checked={selectedCategory === item} className="ml-auto border px-2 py-1 text-sm focus:ring-black" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center pb-3">
              <h2 className="font-semibold text-lg">FILTER BY PRICE</h2>
              <button type="button" className="py-1.5 px-5 text-purple-500 text-sm hover:text-underline hover:text-black" onClick={() => setSelectedPriceRange(priceRange)}>Apply</button>
            </div>
            <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-lg pb-3">FILTER BY COLOR</h2>
            {[
              { name: "Black", color: "bg-black" },
              { name: "Blue", color: "bg-blue-500" },
              { name: "Gray", color: "bg-gray-300" },
              { name: "Green", color: "bg-green-500" },
              { name: "Yellow", color: "bg-yellow-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 py-1 px-1 cursor-pointer ${selectedColors.includes(item.name)
                  ? "bg-purple-400 text-white"
                  : "hover:bg-purple-400 hover:text-white"
                  }`}
                onClick={() =>
                  toggleSelection(item.name, selectedColors, setSelectedColors)
                }
              >
                <span className={`w-5 h-5 ${item.color}`}></span>
                <span>{item.name}</span>
                <input type="checkbox" readOnly checked={selectedColors.includes(item.name)} className="ml-auto border px-2 py-1 text-sm focus:ring-black" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-lg pb-3">FILTER BY SIZE</h2>
            {["S", "M", "L", "XL", "XXL"].map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-1 px-1 cursor-pointer ${selectedSizes.includes(item)
                  ? "bg-purple-400 text-white"
                  : "hover:bg-purple-400 hover:text-white"
                  }`}
                onClick={() =>
                  toggleSelection(item, selectedSizes, setSelectedSizes)
                }
              >
                <span>{item}</span>
                <input type="checkbox" readOnly checked={selectedSizes.includes(item)} className="ml-auto border px-2 py-1 text-sm focus:ring-black" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="font-semibold uppercase pb-3">Show only discounted products</h2>
            <div
              className={`flex justify-between items-center py-1 px-1 cursor-pointer ${filterDiscount
                ? "bg-purple-400 text-white"
                : "hover:bg-purple-400 hover:text-white"
                }`}
              onClick={() => { if (!filterDiscount) setFilterDiscount("discount"); else setFilterDiscount(null); }}
            >
              <span>Discount</span>
              <input type="checkbox" readOnly checked={filterDiscount === "discount"} className="ml-auto border px-2 py-1 text-sm focus:ring-black" />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={applyFilters}
              className="bg-purple-500 hover:bg-black text-white px-5 md:px-10 py-1 md:py-2 font-medium border border-purple-500"
            >
              APPLY FILTERs
            </button>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-lg pb-3">TOP RATED PRODUCTS</h2>
            <div className="grid gap-5">
              {products.map((product) => (
                <SmallProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
