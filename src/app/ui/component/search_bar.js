export default function SearchBar({openSearchBar}) {
  return (
    <div
      className={`${
        openSearchBar ? "translate-y-0" : "translate-y-full"
      } fixed z-20 transition-transform duration-300 overflow-y-hidden w-full h-full bg-white pt-20 lg:pt-40`}
    >
      <div className="flex flex-col items-center h-screen">
        <form className="w-full">
          <input
            className="py-3 border-b-2 border-stone-200 w-full text-lg sm:text-xl md:text-2xl text-black text-center outline-none"
            placeholder="Search here...."
          ></input>
        </form>
      </div>
    </div>
  );
}
