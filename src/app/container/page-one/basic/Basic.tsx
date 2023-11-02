"use client";

import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from 'swiper/modules';

import "swiper/css"; 
import 'swiper/css/pagination';

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
                    }}
                    slidesPerView={3}
                    className="mt-20 w-full h-[420px]"
                >
                    {[1,2,3,4,5,6,7,8].map((i, index) =>
                        <SwiperSlide key={index} className="border">Slide {i}</SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}
export default Basic;