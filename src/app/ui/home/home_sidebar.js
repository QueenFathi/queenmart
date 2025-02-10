import clsx from "clsx";
import Link from "next/link";

export default function HomeSideBar({ isOpenSideBar, pathname, onClose }) {
  return (
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
          <div className="flex justify-center gap-5">
            <button className="py-3 text-white bg-purple-500 hover:bg-purple-400  w-full focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden">
              <Link className="px-8 mx-2" href="/login">
                LOG IN
              </Link>
            </button>
            <button className="py-3 text-white bg-purple-500 hover:bg-purple-400  w-full focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden">
              <Link className="px-8 mx-2" href="/register">
                REGISTER
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
