"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperVertical = () => {
  return (
    <section className="h-screen">
      {/* Swiper horizontal */}
      <div className="pt-6 max-w-[1600px] mx-auto">
        <div className="border bg-clr-text-secondary pl-4 py-2">
          <h1 className="font-medium text-lg">Swiper for horizontal</h1>
        </div>
        <Swiper
          className="mt-2 h-[420px]"
          loop
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Mousewheel, Pagination]}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i, index) => (
            <SwiperSlide key={index}>
              <Image
                alt={`Image number ${i}`}
                src={`https://source.unsplash.com/random?${i}`}
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Swiper vertical */}
      <div className="pt-6 max-w-[1600px] mx-auto">
        <div className="border bg-clr-text-secondary pl-4 py-2">
          <h1 className="font-medium text-lg">Swiper for vertical</h1>
        </div>
        <Swiper
          className="mt-2 h-[680px] rounded-2xl"
          direction={"vertical"}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i, index) => (
            <SwiperSlide key={i}>
              <Image
                alt={`Image number ${i}`}
                src={`https://source.unsplash.com/random?${i}`}
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default SwiperVertical;
