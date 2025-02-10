import Image from "next/image";
import Link from "next/link";

export default function CategoriesCard({img, category, href}) {
  return (
    <div className="border border-stone-100">
      <Link href={href}>
      <div className="relative group overflow-hidden">
        <div className="">
          <Image
            src={img}
            width={1000}
            alt="categories image"
            height={1000}
            className="object-cover w-full h-28 md:h-40 transform group-hover:scale-110 transition-transform duration-300"
          ></Image>
        </div>
        <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col text-center gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-base sm:text-xl font-semibold">{category}</h1>
              <button className="bg-purple-500 w-auto py-1 px-3 text-sm sm:text-base">
                SHOP NOW
              </button>
          </div>
      </div></Link>
    </div>
  );
}
