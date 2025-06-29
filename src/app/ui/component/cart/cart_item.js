import Image from "next/image";

export default function CartItem ({item}) {
    return(
        <div className="flex gap-y-5 gap-x-10">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="cart image"
                  className="w-24 h-24 object-cover"
                />
              <div className="flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <p className="text-xl font-semibold">#{item.price}</p>
                  </div>
                  <p>{item.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between">
                  <p className="pb-2">Qty {item.quantity}</p>
                  <button className="border border-stone-200 py-2 px-5 hover:bg-purple-500 hover:text-white">
                    Remove
                  </button>
                </div>
              </div>
            </div>
    )
}