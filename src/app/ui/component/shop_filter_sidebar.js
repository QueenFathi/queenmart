import { IoCloseOutline } from "react-icons/io5";
import SmallProductCard from "../component/small_product_card";

export default function ShopFilterSidebar ({openBar, onClose}) {
    return (
        <div
        className={`fixed  z-40 inset-0 bg-stone-900 bg-opacity-50 transition-opacity ${
          openBar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      >
        <div
          className={`${
            openBar ? "-translate-x-0" : "-translate-x-full"
          } fixed transition-transform duration-500 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none w-96 md:w-[30rem] h-full bg-white`}
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
              {["Accessories", "Clothes", "Shoes", "Bags"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-1 text-stone-700"
                  >
                    <span>{item}</span>
                    <span className="text-stone-500 border px-2 py-1 text-sm">
                      12
                    </span>
                  </div>
                )
              )}
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-lg pb-3">FILTER BY PRICE</h2>
              <input className="w-full" type="range" min="0" max="100000" />
              <div className="flex justify-between mt-2">
                <span>
                  Price: <b>#0 - #100,000</b>
                </span>
                <button className="bg-stone-100 px-3 py-1">FILTER</button>
              </div>
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
                  className="flex items-center gap-2 py-1 text-stone-700"
                >
                  <span className={`w-5 h-5 ${item.color}`}></span>
                  <span>{item.name}</span>
                  <span className="ml-auto text-stone-500 border px-2 py-1 text-sm">
                    4
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-lg pb-3">FILTER BY</h2>
              {["S", "M", "L", "XL", "XXL"].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1 text-stone-700"
                >
                  <span>{item}</span>
                  <span className="text-stone-500 border px-2 py-1 text-sm">
                    12
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-lg pb-3">PRODUCT STATUS</h2>
              <div className="flex items-center gap-2 py-1">
                <input type="checkbox" />
                <label>On Sale</label>
              </div>
              <div className="flex items-center gap-2 py-1">
                <input type="checkbox" />
                <label>In stock</label>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-lg pb-3">TOP RATED PRODUCTS</h2>
              <div className="grid gap-5">
                <SmallProductCard />
                <SmallProductCard />
                <SmallProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}