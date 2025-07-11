import SmallProductCard from "../global/small_product_card";

export default function WishlistCard({
  product,
  deleteWishlistItem,
  addtocart,
}) {
  return (
    <div className="px-5 shadow py-3">
      <SmallProductCard product={product} />
      <div className="flex justify-between items-center border-t mt-3 pt-3">
        <button
          onClick={() => deleteWishlistItem(product)}
          type="button"
          className="w-auto py-1.5 sm:py-2.5 border border-purple-500 px-7 text-purple-500 hover:bg-black hover:text-white font-semibold"
        >
          Remove
        </button>
        <button
          type="button"
          onClick={() => addtocart(product)}
          className="text-sm sm:text-base bg-purple-500 hover:bg-black w-auto py-2 sm:py-3 px-5 text-white font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
