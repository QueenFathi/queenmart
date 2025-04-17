"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  IoBagOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import Cart from "./component/cart";
import HomeSideBar from "./component/home_sidebar";
import SearchBar from "./component/search_bar";



export default function Navbar() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const pathname = usePathname();

  const updateBodyOverflow = (s1, s2, s3) => {
    document.body.style.overflow = s1 || s2 || s3 ? "hidden" : "auto"
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footerOffset = document.getElementById("footer").offsetTop;
      const windowHeight = window.innerHeight;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      if (currentScrollY == 0) {
        setShowNavbar(true);
      }

      // Stop navbar at the footer
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
              onClick={() => {setIsOpenSideBar(!isOpenSideBar); updateBodyOverflow(!isOpenSideBar, openSearchBar, openCart)}}
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
            {[{href: '/', name: 'HOME'}, {href: '/shop', name: 'SHOP'}, {href: '/about', name: 'ABOUT US'}, {href: '/contact', name: 'CONTACT US'},].map((item, index) => (
                <Link
                href={item.href}
                key={index}
                className={clsx("mx-3 text-lg font-medium hover:border-b-4 hover:border-purple-500", {
                  "border-b-4 border-purple-500 text-stone-950": pathname === item.href,
                })}
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
                onClick={() => {setOpenSearchBar(!openSearchBar); updateBodyOverflow(isOpenSideBar, !openSearchBar, openCart)}}
              >
                {openSearchBar ? <IoCloseOutline /> : <IoSearchOutline />}
              </button>
            </div>
            <div className="relative  hidden lg:flex">
              <button className="text-3xl">
                <Link href="/wishlist"><IoHeartOutline /></Link>
                {/* <span className="absolute top-1 right-0 p-1 rounded-full bg-orange-600 text-blue-600" /> */}
              </button>
            </div>
            <div className="relative">
              <button
                className="text-3xl"
                onClick={() => {setOpenCart(!openCart); updateBodyOverflow(isOpenSideBar, openSearchBar, true)}}
              >
                <IoBagOutline />
                <span className="absolute top-0 -right-1 px-1 rounded-full bg-purple-300 text-xs text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <HomeSideBar isOpenSideBar={isOpenSideBar} pathname={pathname} onClose={() => {setIsOpenSideBar(!isOpenSideBar); updateBodyOverflow(false, openSearchBar, openCart)}} />
      <SearchBar openSearchBar={openSearchBar} />
      <Cart openCart={openCart} onCloseCart={() => {setOpenCart(!openCart); updateBodyOverflow(isOpenSideBar, openSearchBar, false)}}/>
    </div>
  );
}
