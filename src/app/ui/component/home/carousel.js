"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import cardata from "@/app/lib/dummy_data"

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
                <Link href="/shop"><button className="bg-purple-500 w-auto py-3 px-5 hover:bg-black">
                  SHOP NOW
                </button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
