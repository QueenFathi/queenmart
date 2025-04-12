"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";

const cardata = [
  {
    img: "/car1.png",
    text: "AUTUMN FASHION SALE",
    smalltext: "DISCOUNT UP TO 30% OFF",
  },
  {
    img: "/car2.png",
    text: "ELEVATE YOUR FASHION STYLE",
    smalltext: "INSPIRED BY YOUR FAVOURITE CELEBRITIES",
  },
  {
    img: "/car3.png",
    text: "NEW COLLECTION: BAG FASHION SALE",
    smalltext: "TO MAKE YOUR APPEARANCE BETTER",
  },
  {
    img: "/car4.jpg",
    text: "NEW ARRIVALS: SPECIAL OFFER",
    smalltext: "DISCOUNT UP TO 20% OFF",
  },
  {
    img: "/car5.jpg",
    text: "ENHANCE YOUR INNER BEAUTY",
    smalltext: "CHECK OUT OUR FASHION ACCESORIES",
  },
];

export default function Carousel() {
  return (
    <div className="pt-16 md:pt-20">
      <Swiper
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {cardata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <Image
                src={item.img}
                width={10000}
                height={10000}
                className="relative w-full h-[40rem] md:h-[50rem]"
                alt="carousel image"
              />
              <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex  flex-col text-center gap-5 items-center justify-center">
                <h1 className="text-3xl md:text-6xl font-extrabold">{item.text}</h1>
                <p>{item.smalltext}</p>
                <button className="bg-purple-500 w-auto py-3 px-5">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
