"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

function ServiceSlider() {



  return (
      <div className="relative">
        {/* Swiper Component */}
        <Swiper className="workflows-swiper"
          modules={[Navigation, Pagination]}
          pagination={{
            type: 'fraction',
          }}
          navigation={{
            prevEl: ".swiper-button-prev2",
            nextEl: ".swiper-button-next2",
          }}
          spaceBetween={20}
          slidesPerView={3.2}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2.2, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 10 },
            1024: { slidesPerView: 3.2, spaceBetween: 20 },
          }}
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-1100 rounded-xl border border-gray-1200 lg:py-10 lg:px-8 p-6">
                <h4 className="lg:text-2xl text-base font-medium text-black-1200 leading-[31px] mb-4 lg:mb-9">
                  Complex workflows
                </h4>
                <img src="images/slider-img.png" className="w-full h-[203px] object-cover" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-[1320px] mx-auto px-5 z-20 relative">
          <div className="flex items-center justify-center lg:justify-end lg:gap-6 gap-16 -mt-11">
            <button
              className="!static swiper-button-prev2 !opacity-100 after:hidden !text-white bg-black-1200 text-[22px] md:w-[54px] border border-white md:h-[54px] min-w-[42px] h-[42px] flex items-center justify-center p-2 rounded-full"
            >
              ←
            </button>
            <button
              className="!static swiper-button-next2 !opacity-100 after:hidden text-[22px] bg-black-1200 md:w-[54px] border border-white md:h-[54px] min-w-[42px] h-[42px] flex items-center justify-center !text-white p-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>
  );
}

export default ServiceSlider;
