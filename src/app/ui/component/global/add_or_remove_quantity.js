export default function AddOrRemoveQuantity ({addOne, removeItem, qty, product, className=""}) {
    return (
        <div className="flex">
          <button
          type="button"
            onClick={() => removeItem(product)}
            className="h-full py-1 md:py-2 md:text-xl w-12 md:w-16 border border-purple-500 flex justify-center items-center cursor-pointer bg-purple-500 hover:bg-black text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
          >
            -
          </button>
          <div className={`${className} h-full py-1 md:py-2 md:text-xl w-12 md:w-16 flex justify-center items-center pointer-events-none`}>
            {qty}
          </div>
          <button
          type="button"
            onClick={() => addOne(product)}
            className="h-full py-1 md:py-2 md:text-xl w-12 md:w-16 border border-purple-500 flex justify-center items-center cursor-pointer bg-purple-500 hover:bg-black text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
          >
            +
          </button>
        </div>
    )
}