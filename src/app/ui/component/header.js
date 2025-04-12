import Image from "next/image";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <div className="-">
      <div className="relative">
        <Image
          src="/car5.jpg"
          alt="header bg-image"
          width={1000}
          height={1000}
          className="w-full h-40 md:h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p>
            <Link href="/">Home</Link> /
            <Link href={`/${title}`} className="font-semibold">
              {" "}
              {title}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
