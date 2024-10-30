"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper/modules";
import { workwith } from "@/data";
import WorkWUSlider from "./WorkWUSlider";

const WorkedWith: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F8F8]">
      <div className="w-full max-w-6xl mx-auto h-full md:px-0 px-4 py-12 max-md:py-6">
        <div className="w-full flex items-center space-x-2 justify-center h-full">
          <div className="bg-white max-md:w-2/5 rounded-2xl border-l-4 p-4 border-l-brandcolor text-[24px] max-md:text-[16px] max-sm:text-[14px] font-medium text-black">
            Worked with Leading Clients
          </div>
          <div className="md:w-[80%] w-[60%] h-full flex items-center justify-center">
            <Swiper
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2, // For small devices
                  spaceBetween: 15, // Less space between items on mobile
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4, // More items for larger screens
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, EffectFade]}
              className="w-full h-full flex items-center justify-center"
            >
              {workwith.map((w, i) => (
                <SwiperSlide key={i} className="relative md:pt-8 pt-0">
                  <WorkWUSlider img={w} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
