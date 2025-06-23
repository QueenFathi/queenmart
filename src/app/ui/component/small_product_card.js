import Image from "next/image";
import Link from "next/link";

const item = {
    name: "Basic Tee 6-Pack ",
    price: 192000,
    href: "#",
    imageSrc:
      "/heel.jpg",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    stock: 2,
  };

export default function SmallProductCard() {
  return (
    <Link href={item.href}>
      <div className="flex gap-5">
          <Image
            src={item.imageSrc}
            width={400}
            height={400}
            alt={item.imageAlt}
            className="h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40"
          />
        <div className="flex flex-1 flex-col gap-3 justify-center">
          <h1 className="text-lg md:text-2xl">{item.name}</h1>
            <p className="font-semibold text-purple-500 text-base md:text-xl">#{item.price}</p>
        </div>
      </div>
    </Link>
  );
}
