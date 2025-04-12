import Header from "@/app/ui/component/header";
import WishlistCard from "@/app/ui/component/wishlist_card";

export default function Wishlist() {
  return (
    <div className="py-16 md:py-20">
      <Header title={"Wishlist"} />
      <div className="container mx-auto px-5">
        <div className="pt-10">
          <h1 className="text-2xl md:text-4xl font-semibold">YOUR SAVED ITEMS</h1>
        </div>
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
          {[...Array(4)].map((_, index) => (
                <WishlistCard key={index} />
            ))}
          </div>
      </div>
    </div>
  );
}
