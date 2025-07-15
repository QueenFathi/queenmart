import Image from "next/image";
import { formatMoney } from  "@/app/lib/utils";

export default function ProductSummaryCard({ product }) {
  return (
    <div className="flex gap-5 mt-3 md:mt-5">
      <Image
        src={product.imagesrc}
        width={400}
        height={400}
        alt={product.name}
        className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-28"
      />
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-sm sm:text-base">{product.name}</h1>
        <p className="text-sm sm:text-base font-medium">
          # {formatMoney(product.price - (product.price * product.discount) / 100)}
        </p>
        <p className="text-xs">Qty: {product.qty}</p>
      </div>
    </div>
  );
}
