"use client";

import { iClassName } from "@/app/type";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classNames from "classnames";

const SwiperVertical = ({ className }: iClassName) => {
    className = "font-medium text-lg text-green-700";

    return (
        <section className="h-screen">
            {/* Swiper horizontal */}
            <div className="pt-6 max-w-[1600px] mx-auto">
                <div className="border bg-clr-text-secondary pl-4 py-2">
                    <h1 className={className}>Swiper for horizontal</h1>
                </div>
                <Swiper
                    className="mt-2 h-[420px]"
                    modules={[Mousewheel, Pagination, Navigation]}
                    loop
                    mousewheel={true}
                    pagination={true}
                    navigation={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            pagination: { enabled: false },
                            navigation: { enabled: false },
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            pagination: { enabled: true, clickable: true },
                            navigation: { enabled: true },
                        },
                    }}
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
