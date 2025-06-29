'use client'

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function UpButton () {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      const handleScrollButtonVisibility = () => {
        window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
      };
      window.addEventListener("scroll", handleScrollButtonVisibility);
  
      return () => {
        window.removeEventListener("scroll", handleScrollButtonVisibility);
      };
    }, []);
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return(
        showButton && (
        <div className="fixed bottom-4 right-4 m-3 flex justify-end scroll-to-top bg-purple-500 text-white rounded-full">
          <button className="z-50 p-2" onClick={handleScrollToTop}>
            <FaAngleUp />
          </button>
        </div>
      )
    )
}