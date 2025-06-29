import SmallProductCard from "../small_product_card";

export default function CartCard({item}) {
  return (
    <div className="px-5 shadow py-3">
      <SmallProductCard />
      <div className="flex justify-between items-center mt-3 pt-3">
        <button
        // onClick={() => deleteItem!(item)}
         className="w-auto py-1.5 sm:py-2.5 border border-purple-500 px-7 text-purple-500 hover:bg-black hover:text-white font-semibold">
          Remove
        </button>
        <div className="flex divide-gray300">
          <div
            // onClick={() => removeItem!(item)}
            className="h-full py-1 md:py-2 md:text-xl w-12 md:w-16 border border-purple-500 flex justify-center items-center cursor-pointer bg-purple-500 hover:bg-black text-white"
          >
            -
          </div>
          <div className="h-full py-1 md:py-2 md:text-xl w-12 md:w-16 flex justify-center items-center pointer-events-none">
            {item.qty}
          </div>
          <div
            // onClick={() => addOne!(item)}
            className="h-full py-1 md:py-2 md:text-xl w-12 md:w-16 border border-purple-500 flex justify-center items-center cursor-pointer bg-purple-500 hover:bg-black text-white"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
