import Image from "next/image";
import Link from "next/link";

export default function SmallProductCard({
  product = { name: "kkk", imagesrc: "/heels.jpg", price: 200 },
}) {
  return (
    <Link href="">
      <div className="flex gap-5">
        <Image
          src={product.imagesrc}
          width={400}
          height={400}
          alt={product.name}
          className="h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40"
        />
        <div className="flex flex-1 flex-col gap-3 justify-center">
          <h1 className="text-lg md:text-2xl">{product.name}</h1>
          <p className="font-semibold text-purple-500 text-base md:text-xl">
            # {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
