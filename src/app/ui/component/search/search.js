"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="py-3 border-2 border-stone-200 w-full text-lg sm:text-xl md:text-2xl text-black text-center outline-none"
        placeholder="Search here...."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      ></input>
    </form>
  );
}
