import Link from "next/link";
import { FaShippingFast } from "react-icons/fa";

export default function CheckStatus() {
  return (
    <div className="bg-purple-500 py-20">
      <div className="">
        <div className="flex flex-col justify-center items-center gap-3 text-white">
          <h3 className="text-5xl md:text-6xl">
            <FaShippingFast />
          </h3>
          <h3 className="font-semibold text-xl sm:text-3xl">
            WORRIED ABOUT YOUR ORDER?
          </h3>
          <p className="text-center">
            Click on the button below and check the status of your order
          </p>
          <Link
            href=""
            className="relative shadow-md bg-white text-black py-2 sm:py-3 px-5 group overflow-hidden cursor-pointer"
          >
            <span className="absolute top-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out" />
            <span className="relative z-10 font-medium group-hover:text-white transition-colors duration-300 flex justify-center items-center gap-2">
              CHECK STATUS <FaShippingFast />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
