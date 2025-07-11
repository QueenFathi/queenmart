import Image from "next/image";

export default function SmallProductCardSkeleton({}) {
  return (
    <div className="flex gap-5">
      <Image
        src="/placeholderimg.webp"
        width={400}
        height={400}
        alt="placeholder image"
        className="h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40"
      />
      <div className="flex flex-1 flex-col gap-3 justify-center">
        <div className="w-32 h-7 bg-gray-200" />
        <div className="w-24 h-7 bg-gray-200" />
      </div>
    </div>
  );
}
