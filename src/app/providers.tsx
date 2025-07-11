import { ProvideCart } from "./context/cart/cart_provider";
import { ProvideWishlist } from "./context/wishlist/wishlist_provider";
import { SearchProvider } from "./context/search/search_context";

export default function Providers({ children }: {
  children: React.ReactNode;
}) {
  return (
    <ProvideWishlist>
      <ProvideCart>
        <SearchProvider>{children}</SearchProvider>
      </ProvideCart>
    </ProvideWishlist>
  );
}
