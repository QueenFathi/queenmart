import { getAllProducts, getProductsById } from "@/app/lib/queries";
import ProductDetailClient from "./product_detail_client";
import SearchOverlay from "@/app/ui/component/search/search_overlay";

export default async function ProductDetail({ params, searchParams }) {
  const products = await getAllProducts();
  const product = await getProductsById(params.id);

  return (
    <>
      <SearchOverlay searchParams={searchParams} />
      <ProductDetailClient product={product} products={products} />
    </>
  );
}
