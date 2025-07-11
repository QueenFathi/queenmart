import Image from "next/image";

export default function ProductCardSkeleton() {
  return (
    <div className="pb-3 sm:pb-0 shadow sm:shadow-none animate-pulse">
      <Image
        src="/placeholderimg.webp"
        height={1000}
        width={1000}
        alt="placeholder img"
        className="w-full h-52 sm:h-80 lg:h-96"
      />
      <div className="py-2 space-y-3">
        <div className="bg-gray-200 h-8" />
        <div className="bg-gray-200 h-8" />
        <div className="bg-gray-200 h-8" />
      </div>
    </div>
  );
}
