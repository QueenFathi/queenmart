"use client";

import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaLocationArrow,
  FaPhoneAlt,
  FaMailBulk,
  FaInstagram,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoBag, IoHeart, IoPerson } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Footer() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer id="footer" className="bg-black text-white py-20">
      <div className="px-5 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center mb-8">
          <div className="">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="footer logo"
              className=" w-auto h-auto"
            />
            <h2 className="text-lg md:text-2xl font-semibold py-5">
              WORKING DAYS:. MONDAY TO SATURDAY
              <br />
              WORKING HOURS: 10am to 5pm
            </h2>
            <div className=" flex flex-col text-base sm:text-lg md:text-xl gap-3 text-purple-500">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p className="text-white">
                  10, Road 17, Agara Estate, Odo-Ona Elewe, Ibadan, Oyo state
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <p className="text-white">
                  +2348089684723 <br /> +2349036332486
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaMailBulk />
                <p className="text-white"> fathiat477odutayo@gmail.com </p>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div>
              <h4 className="font-semibold mb-2 text-lg md:text-2xl">
                QUICK LINKS
              </h4>
              <div className="flex flex-col gap-2 text-base lg:text-lg">
                {[
                  { href: "/", name: "Home" },
                  { href: "/shop", name: "Shop" },
                  { href: "/about", name: "About us" },
                  { href: "/contact", name: "Contact us" },
                ].map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="hover:underline hover:text-purple-500"
                  >
                    &gt; {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-5">
          <div className="py-2">
            <label className="mb-2 text-xl lg:text-2xl block font-semibold">
              Subscribe to our newsletter
            </label>
            <p className="text-base lg:text-lg">
              Get the latest course updates and technology news.
            </p>
          </div>
          <div>
            <form className="flex flex-row space-x-2 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-purple-500 bg-white placeholder-black w-auto text-base lg:text-lg"
              />
              <button className="bg-purple-500 text-white px-10 py-3 hover:bg-purple-400 w-auto text-base lg:text-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center py-5 border-t border-gray-300">
          <p className="mb-4 lg:mb-0">
            &copy; Made with love by Queen Creations. All rights reserved.
          </p>
          <div className="flex space-x-4 text-3xl">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div
        className={`${
          showNavbar ? "translate-y-0" : "translate-y-full"
        } bottom-0 z-10 fixed w-full sm:hidden transition-transform duration-300`}
      >
        <div className="bg-white text-stone-700 px-10 py-3">
          <div className="flex justify-between">
            {[
              { href: "/shop", name: "Shop", icon: <FaShop /> },
              { href: "/wishlist", name: "Wishlist", icon: <IoHeart /> },
              { href: "/bag", name: "Bag", icon: <IoBag /> },
              { href: "", name: "Account", icon: <IoPerson /> },
            ].map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className={clsx("flex flex-col gap-1 items-center", {
                    "text-purple-500 font-semibold": pathname === item.href,
                  })}
                >
                  {item.icon}
                  <p className="text-xs">{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
