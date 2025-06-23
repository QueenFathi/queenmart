import Image from "next/image";
import Link from "next/link";

export default function Card2({ img, p, height }) {
  return (
    <div>
      <div className="p-2 text-base md:text-xl relative">
        <div className="">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="categories image"
            className={`w-full ${height} object-cover`}
          ></Image>
        </div>
        <div className="flex items-center bg-stone-100 h-16 absolute bottom-10 w-full opacity-70">
          <p className="px-5 lg:px-10">{p}</p>
          <Link href="/shop"><button className="bg-purple-500 px-3 py-2 hover:bg-black hover:text-white font-medium">Shop now &gt;</button></Link>
        </div>
      </div>
    </div>
  );
}
