"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  IoBagOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import Cart from "./component/cart/cart";
import HomeSideBar from "./component/home/home_sidebar";
import { useWishlist } from "../context/wishlist/wishlist_provider";
import { useCart } from "../context/cart/cart_provider";
import { useSearch } from "../context/search/search_context";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { state, dispatch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footerOffset = document.getElementById("footer").offsetTop;
      const windowHeight = window.innerHeight;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      if (currentScrollY <= 1) {
        setShowNavbar(true);
      }

      if (currentScrollY + windowHeight >= footerOffset) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`${
          showNavbar && !isAtFooter ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 w-full z-40 transition-transform duration-300 bg-white shadow-sm`}
      >
        <div className="flex justify-between items-center mx-auto container px-2 py-2 xl:py-8">
          <div className="lg:hidden flex flex-end">
            <button
              className="flex items-center md:px-3 py-2 rounded text-gray-200 hover:text-gray-400"
              onClick={() => setIsOpenSideBar(!isOpenSideBar)}
            >
              {isOpenSideBar ? (
                <p className="text-stone-700 flex items-center">
                  <svg
                    className="h-8 w-8 me-3 text-stone-950"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>{" "}
                  CLOSE
                </p>
              ) : (
                <p className="text-stone-700 flex items-center">
                  <svg
                    className="h-8 w-8 me-3 text-stone-950"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>{" "}
                  MENU
                </p>
              )}
            </button>
          </div>
          <div className="text-xl text-stone-700 text font-semibold hidden lg:flex">
            {[
              { href: "/", name: "HOME" },
              { href: "/shop", name: "SHOP" },
              { href: "/about", name: "ABOUT US" },
              { href: "/contact", name: "CONTACT US" },
            ].map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={clsx(
                  "mx-3 text-lg font-medium hover:border-b-4 hover:border-purple-500",
                  {
                    "border-b-4 border-purple-500 text-stone-950":
                      pathname === item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="nav logo image"
                className="w-20 lg:w-32 h-auto"
              />
            </Link>
          </div>
          <div className="gap-5 text-lg font-semibold flex items-center">
            <div className="relative  hidden lg:flex">
              <button className="text-3xl">
                <IoPersonOutline />
              </button>
            </div>
            <div className="relative">
              <button
                className="text-3xl"
                onClick={() => dispatch({ type: "TOGGLE_SEARCH" })}
              >
                {state.isOpen ? <IoCloseOutline /> : <IoSearchOutline />}
              </button>
            </div>
            <div className="relative  hidden lg:flex">
              <button className="text-3xl">
                <Link href="/wishlist">
                  <IoHeartOutline />
                </Link>
                <span className="absolute -top-3 -right-1 px-2 py-1 rounded-full bg-purple-300 text-xs text-white">
                  {wishlist.length}
                </span>
              </button>
            </div>
            <div className="relative">
              <button
                className="text-3xl"
                onClick={() => setOpenCart(!openCart)}
              >
                <IoBagOutline />
                <span className="absolute -top-2 -right-1 px-2 py-1 rounded-full bg-purple-300 text-xs text-white">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <HomeSideBar
        isOpenSideBar={isOpenSideBar}
        pathname={pathname}
        onClose={() => setIsOpenSideBar(!isOpenSideBar)}
      />
      <Cart openCart={openCart} onCloseCart={() => setOpenCart(!openCart)} />
    </div>
  );
}
