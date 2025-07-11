import { getAllProducts, getProductsById } from "@/app/lib/queries";
import ProductDetailClient from "./product_detail_client"

export default async function ProductDetail({ params }) {
  const products = await getAllProducts()
  const product = await getProductsById(params.id);
  

  return (
    <ProductDetailClient product={product} products={products} />
  );
}
