import { FaExchangeAlt, FaMoneyBillAlt, FaPhoneVolume, FaShippingFast } from "react-icons/fa";

function Featured({ label, icon, p }) {
    return (
      <div className="">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-4xl sm:text-6xl text-purple-500">{icon}</h1>
          <h5 className="font-semibold text-base sm:text-xl text-center">
            {label}
          </h5>
        </div>
        <p className="text-sm sm:text-base text-center">{p}</p>
      </div>
    );
  }

export default function FeaturedSection () {
    return(
        <div className="container px-2 py-20 mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              Our Redeeming Factors
            </h3>
            <p className="text-purple-500 py-2">
              Our platform is one you can always trust
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mt-5">
            <Featured
              label={"Fast Delivery"}
              icon={<FaShippingFast />}
              p={"Fast Delivery to your front door in less than 3 days"}
            />
            <Featured
              label={"Best Prices"}
              icon={<FaMoneyBillAlt />}
              p={"Best prices to your taste you can always ask for"}
            />
            <Featured
              label={"14 Day Return"}
              icon={<FaExchangeAlt />}
              p={"Implementing our free and 14 days return"}
            />
            <Featured
              label={"24/7 Available Support"}
              icon={<FaPhoneVolume />}
              p={"Our Support team is always available for you 24/7"}
            />
          </div>
        </div>
    )
}