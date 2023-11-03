"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Basic = () => {
  const items = [
    {
      id: 1,
      link: "/images/img1.png",
    },
    {
      id: 2,
      link: "/images/img2.png",
    },
    {
      id: 3,
      link: "/images/img3.png",
    },
    {
      id: 4,
      link: "/images/img4.png",
    },
  ];
  return (
    <section className="h-screen">
      <div className="max-w-[1780px] mx-auto">
        <div className="mt-8">
          <h1>Test</h1>
          <p>Description</p>
        </div>
        <style>
          {`
                :root {
                    --swiper-pagination-color: red;
                    --swiper-pagination-bullet-inactive-color: yellow;
                    --swiper-pagination-bullet-inactive-opacity: 0.5;
                }
            `}
        </style>
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{
            clickable: true,
            // bulletClass: "swiper-pagination-bullet bg-[red]",
            // bulletActiveClass: "swiper-pagination-bullet-active bg-white opacity-100",
            // type: "progressbar",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          className="mt-20 w-full h-[420px]"
        >
          {items.map((i, index) => (
            <SwiperSlide key={index}>
              <div className=" h-full grid place-items-center">
                <span className="relative block w-[240px] h-[240px] ">
                  <Image
                    priority
                    alt={`Image number ${i.id}`}
                    src={i.link}
                    fill
                  />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Basic;
