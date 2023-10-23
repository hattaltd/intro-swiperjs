"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";

import { ShapeOval } from "@/app/components";

import "./swiper-halfrounded-style.css";

const SwiperHalfRounded = () => {
    return (
        <section className="h-screen">
            <div className="max-w-[1780px] mx-auto text-center">
                <h1 className="mt-14 text-7xl font-medium">
                    Hello there! 👻 <br /> Welcome to my hideout
                </h1>
                <p className="mt-5 px-[31rem] text-base text-clr-text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem ut eum ad id unde consequatur libero inventore sit,
                    iste explicabo minus tempora aspernatur quae, adipisci
                    voluptatum dolorum quasi architecto maiores?
                </p>
            </div>
            <div className="swiper-container mt-16 relative overflow-hidden">
                <Swiper
                    className="swiper-wrapper w-full"
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={7000}
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <span className="relative block h-[640px]">
                                    <Image
                                        priority
                                        alt={`Image number ${i}`}
                                        src={`https://source.unsplash.com/random?${i}`}
                                        width={1980}
                                        height={1080}
                                        className={`absolute h-full w-full object-cover transition duration-300 ease-linear ${
                                            isActive
                                                ? `brightness-100`
                                                : `brightness-[.4]`
                                        }`}
                                    />
                                </span>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ShapeOval className="-bottom-[25%] h-80" />
                <ShapeOval className="-top-[25%] h-80" />
            </div>
        </section>
    );
};
export default SwiperHalfRounded;
