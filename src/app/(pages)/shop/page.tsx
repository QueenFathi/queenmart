import { getAllProducts, fetchFilteredProducts } from "@/app/lib/queries";
import ShopClient from "./shop_client";
import SearchOverlay from "@/app/ui/component/search/search_overlay";

export default async function ProductDetail(props: {
  searchParams?: Promise<{
    query?: string;
    category?: string;
    price?: string;
    colors?: string;
    sizes?: string;
    sortby?: string;
  }>;
}) {
  const products = await getAllProducts();
  const searchParams = await props.searchParams;
  const { category, price, colors, sizes, sortby } = searchParams;

  const filteredProducts = await fetchFilteredProducts({
    category,
    price,
    colors,
    sizes,
    sortby
  });

  return (
    <>
      <SearchOverlay searchParams={props.searchParams} />
      <ShopClient products={products} filteredProducts={filteredProducts} />
    </>
  );
}
