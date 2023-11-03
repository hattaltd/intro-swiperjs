"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Basic = () => {
    return (
        <section className="h-screen">
            <div className="max-w-[1780px] mx-auto">
                <div className="mt-8">
                    <h1>Test</h1>
                    <p>Description</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
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
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                        <SwiperSlide key={index} className="">
                            <Image
                                priority
                                alt={`Image number ${i}`}
                                src={`https://source.unsplash.com/random?${i}`}
                                width={1980}
                                height={1080}
                                className="h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Basic;
