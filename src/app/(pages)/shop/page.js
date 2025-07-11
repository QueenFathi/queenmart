import { getAllProducts } from "@/app/lib/queries";
import ShopClient from "./shop_client"

export default async function ProductDetail() {
  const products = await getAllProducts()
  

  return (
    <ShopClient products={products} />
  );
}
