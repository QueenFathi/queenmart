import Image from "next/image";
import Link from "next/link";

export default function SmallProductCard({ product }) {
  const itemLink = `/shop/${encodeURIComponent(product.id)}`;
  return (
    <Link href={itemLink}>
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
          {product.discount > 0 ? (
            <p className="text-base sm:text-xl font-semibold text-purple-500">
              <span className="line-through font-normal text-xs sm:text-sm text-stone-500">
                #{product.price}
              </span>{" "}
              #{product.price - (product.price * product.discount) / 100}
            </p>
          ) : (
            <p className="text-base sm:text-xl font-semibold text-purple-500">
              #{product.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
