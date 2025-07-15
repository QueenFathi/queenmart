import { getAllProducts, fetchFilteredProducts } from "@/app/lib/queries";
import ShopClient from "./shop_client";
import SearchOverlay from "@/app/ui/component/search/search_overlay";

export default async function ProductDetail(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
    price?: string;
    colors?: string;
    sizes?: string;
    sortby?: string;
    filterbydiscount?: string;
  }>;
}) {
  const Allproducts = await getAllProducts();
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const { category, price, colors, sizes, sortby, filterbydiscount } = searchParams;

  const { products, totalPages, total } = await fetchFilteredProducts({
    page,
    category,
    price,
    colors,
    sizes,
    sortby, 
    filterbydiscount,
  });

  return (
    <>
      <SearchOverlay searchParams={props.searchParams} />
      <ShopClient products={Allproducts} filteredProducts={products} totalPages={totalPages} totalProducts={total} page={page} />
    </>
  );
}
