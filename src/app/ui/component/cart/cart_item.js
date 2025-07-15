import Image from "next/image";
import Link from "next/link";
import { formatMoney } from  "@/app/lib/utils";

export default function CartItem({ item, deleteItem }) {
  const itemLink = `/shop/${encodeURIComponent(item.id)}`;
  return (
    <Link href={itemLink}>
      <div className="flex gap-y-5 gap-x-3 md:gap-x-5">
        <Image
          src={item.imagesrc}
          width={300}
          height={300}
          alt="cart image"
          className="w-24 h-24 object-cover"
        />
        <div className="flex flex-1 flex-col">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-stone-500">{item.name}</h1>
              {item.discount > 0 ? (
                <p className="text-lg md:text-xl font-semibold">
                  <span className="line-through font-normal text-xs md:text-sm text-stone-500">
                    # {formatMoney(item.price)}
                  </span>{" "}
                  # {formatMoney(item.price - (item.price * item.discount) / 100)}
                </p>
              ) : (
                <p className="text-lg md:text-xl font-semibold">
                  # {formatMoney(item.price)}
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
          <div className="flex flex-1 items-end justify-between">
            <p className="pb-2 text-sm font-medium">Qty: {item.qty}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteItem(item);
              }}
              className="border py-2 px-5 hover:bg-purple-500 hover:text-white text-sm sm:text-base"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
