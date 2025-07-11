import Link from "next/link";
import AddOrRemoveQuantity from "../global/add_or_remove_quantity";
import Image from "next/image";

export default function CartCard({ item, addOne, removeItem, deleteItem }) {
  const itemLink = `/shop/${encodeURIComponent(item.id)}`;
  return (
    <div className="px-5 shadow py-3">
      <Link href={itemLink}>
        <div className="flex gap-5">
          <Image
            src={item.imagesrc}
            width={400}
            height={400}
            alt={item.name}
            className="h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40"
          />
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between py-2">
              <h1 className="text-lg md:text-2xl text-stone-500">
                {item.name}
              </h1>
              {item.discount > 0 ? (
                <p className="text-xl md:text-2xl font-semibold">
                  <span className="line-through font-normal text-xs sm:text-sm text-stone-500">
                    #{item.price}
                  </span>{" "}
                  #{item.price - (item.price * item.discount) / 100}
                </p>
              ) : (
                <p className="text-xl md:text-2xl font-semibold">
                  #{item.price}
                </p>
              )}
            </div>
            {item.color && (
              <p className="text-sm font-medium">Color: {item.color}</p>
            )}
            {item.size && (
              <p className="text-sm font-medium">Size: {item.size}</p>
            )}
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center mt-3 pt-3">
        <button
          onClick={() => deleteItem(item)}
          className="w-auto py-1.5 sm:py-2.5 border border-purple-500 px-7 text-purple-500 hover:bg-black hover:text-white font-semibold"
        >
          Remove
        </button>
        <AddOrRemoveQuantity
          addOne={addOne}
          removeItem={removeItem}
          qty={item.qty}
          product={item}
        />
      </div>
    </div>
  );
}
