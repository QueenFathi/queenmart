import Header from "@/app/ui/component/header";
import WishlistCard from "@/app/ui/component/wishlist/wishlist_card";
import Link from "next/link";

export default function Wishlist() {
  return (
    <div className="py-16 md:py-20">
      <Header title={"Wishlist"} />
      <div className="container mx-auto px-2">
        <div className="mt-10">
          <Link href="/shop" className="p-1">
            &larr; Continue Shopping
          </Link>
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {[...Array(14)].map((_, index) => (
            <WishlistCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
