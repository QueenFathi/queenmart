import Link from "next/link";
import { FaShippingFast } from "react-icons/fa";

export default function CheckStatus () {
    return(
        <div className="bg-purple-500 py-20">
          <div className="">
            <div className="flex flex-col justify-center items-center gap-3 text-white">
              <h3 className="text-5xl md:text-6xl">
                <FaShippingFast />
              </h3>
              <h3 className="font-semibold text-xl sm:text-3xl">
                WORRIED ABOUT YOUR ORDER?
              </h3>
              <p>
                Click on the button below and check the status of your order
              </p>
              <Link href="">
                <button className="bg-white text-black py-2 sm:py-3 px-5 flex justify-center items-center gap-2 font-semibold">
                  CHECK STATUS <FaShippingFast />
                </button>
              </Link>
            </div>
          </div>
        </div>
    )
}