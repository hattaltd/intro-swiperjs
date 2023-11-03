"use client";

import { Card } from "@/app/components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

import "./swiper-infinite-style.css";

const SwiperInfinite = () => {
  return (
    <section className="h-screen">
      <div className="max-w-[1780px] mx-auto text-center">
        <h1 className="mt-14 text-5xl xl:text-7xl">
          Hi there! 👻 <br /> Welcome to my hideout
        </h1>
        <p className="mt-5 xl:px-[31rem] text-base text-clr-text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ut
          eum ad id unde consequatur libero inventore sit, iste explicabo minus
          tempora aspernatur quae, adipisci voluptatum dolorum quasi architecto
          maiores?
        </p>
      </div>
      <div className="relative mt-48 swiper-container w-full">
        <style>
          {`
          .swiper-container .swiper-wrapper {
                @apply ease-linear duration-1000;
            }
          `}
        </style>
        <Swiper
          className="swiper-wrapper w-full"
          modules={[Autoplay, Grid]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false,
            reverseDirection: true,
            waitForTransition: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <Card className={`${index % 2 === 0 ? `mt-0` : `mt-8`}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-10 top-0 left-0 w-2/6 h-full bg-gradient-to-r from-clr-bg-primary"></div>
        <div className="absolute z-10 top-0 right-0 w-1/4 h-full bg-gradient-to-l from-clr-bg-primary "></div>
        {/* <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-clr-bg-primary via-clr-bg-primary/0 to-clr-bg-primary"></div> */}
        {/* <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-clr-bg-primary from-5% via-transparent via-40% to-clr-bg-primary to-95%"></div> */}
      </div>
    </section>
  );
};
export default SwiperInfinite;
