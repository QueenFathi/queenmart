"use client";

import { useSearch } from "@/app/context/search/search_context";
import { FaArrowLeft } from "react-icons/fa";
import Search from "./search";
import SmallProductCard from "@/app/ui/component/global/small_product_card";
import { usePathname, useRouter } from "next/navigation";

export default function SearchOverlayClient({ results, query }) {
  const { state, dispatch } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  const handleCloseSearch = () => {
    router.replace(pathname, { scroll: false, shallow: true });
    dispatch({ type: "CLOSE_SEARCH" });
  };

  return (
    <div
      className={`${
        state.isOpen ? "translate-y-0" : "-translate-y-full"
      } fixed z-50 transition-transform duration-300 overflow-y-hidden w-full h-full bg-white pt-5 lg:pt-40`}
    >
      <div className="flex justify-between gap-3 md:gap-5 mx-5">
        <button
          onClick={handleCloseSearch}
          className="border-2 border-stone-200 px-3 sm:px-5"
          type="button"
        >
          <FaArrowLeft />
        </button>
        <Search />
      </div>
      <div className="mt-6 mx-5">
        {query && (
          <h2 className="text-lg font-semibold mb-10">
            Showing results for "{query}":
          </h2>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {results.map((product) => (
              <SmallProductCard key={product.id} product={product} onClick={handleCloseSearch} />
            ))}
          </div>
        ) : (
          query && (
            <p className="text-gray-500">No products found for "{query}".</p>
          )
        )}
      </div>
    </div>
  );
}
