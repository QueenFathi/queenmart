import clsx from "clsx";
import Link from "next/link";

export default function HomeSideBar({ isOpenSideBar, pathname, onClose }) {
  return (
    <>
    {/* Overlay */}
    <div className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ${isOpenSideBar ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none overflow-y-hidden"}`} onClick={onClose}/>

    <div
      className={`${
        isOpenSideBar ? "-translate-x-0" : "-translate-x-full"
      } fixed z-20 transition-transform duration-300 overflow-y-hidden w-full sm:w-2/3 h-full bg-white pt-20`}
    >
      <div className="text-xl text-stone-700 relative font-semibold flex flex-col gap-1 h-screen">
        {[
          { href: "/", name: "HOME" },
          { href: "/shop", name: "SHOP" },
          { href: "/about", name: "ABOUT US" },
          { href: "/contact", name: "CONTACT US" },
          { href: "/wishlist", name: "WISHLIST" },
        ].map((item, index) => (
          <Link
            href={item.href}
            key={index}
            onClick={onClose}
            className={clsx(
              "ps-5 py-5 hover:text-white hover:bg-purple-500 hover:ps-12 duration-100",
              { "text-purple-500": pathname === item.href }
            )}
          >
            {item.name}
          </Link>
        ))}
        <div className="absolute bottom-28 w-full px-10">
          <div className="flex gap-5">
            <Link className="w-full" href="/login" onClick={onClose}>
              <button className="py-3 w-full text-white bg-purple-500 transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden">
                LOG IN
              </button>
            </Link>
            <Link className="w-full" href="/register" onClick={onClose}>
              <button className="py-3 w-full text-white bg-purple-500 transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
