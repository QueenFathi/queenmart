"use client";

import { useState } from "react";

export default function PriceFilter() {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(17605210);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMinPrice(value < 0 ? 0 : value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value < minPrice ? minPrice : value);
  };

  const handleApply = () => {
    console.log(`Applied Price Range: ₦${minPrice} - ₦${maxPrice}`);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">PRICE (₦)</h3>
        <button
          onClick={handleApply}
          className="bg-purple-500 text-white hover:bg-black font-medium hover:underline border px-5 py-1"
        >
          Apply
        </button>
      </div>

      <div className="relative my-4">
        <input
          type="range"
          min="0"
          max="10000"
          value={minPrice}
          onChange={handleMinChange}
          className="w-full accent-purple-500"
        />
        <input
          type="range"
          min="0"
          max="100000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-full accent-purple-500 -mt-2"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={handleMinChange}
          className="w-1/2 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="mx-2 text-gray-500">-</span>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-1/2 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}
