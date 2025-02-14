"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function ComparisonSlider() {



  return (
    <div>
      <div className="relative mt-5 md:hidden rounded-lg">
        {/* Swiper Component */}
        <Swiper className="table-swiper"
             modules={[Navigation, Pagination]}
             pagination={{
               type: "fraction",
             }}
             navigation={{
              prevEl: ".swiper-button-prev1",
              nextEl: ".swiper-button-next1",
            }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            580: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
            <SwiperSlide>
              <div className="bg-gray-1100 rounded-xl border border-gray-1200 p-5">
                <h4 className="text-lg text-center font-semibold text-black-1200 leading-[31px] mb-2 lg:mb-10">
                In-house design
                </h4>
                <div className="w-full text-start">
                  <ul>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Project management</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Understand your needs</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] bg-red-1000 p-1.5 rounded-full flex items-center justify-center">
                      <img src="images/close.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Technical knowlegde</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] bg-red-1000 p-1.5 rounded-full flex items-center justify-center">
                      <img src="images/close.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">SaaS MVP expertise</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] bg-red-1000 p-1.5 rounded-full flex items-center justify-center">
                      <img src="images/close.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Low overhead</h4>
                    </li>
                  </ul>
                  <ul className="w-full py-2 border-t mt-2 pt-4">
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Low overhead</h4>
                    <span className="text-sm text-black-1200 font-semibold">≈ 40+ hours</span>
                    </li>
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Speed</h4>
                    <span className="text-sm text-black-1200 font-semibold">Weeks</span>
                    </li>
                    <li>
                    <div className="flex items-start justify-between gap-4" >
                    <span className="text-sm text-black-1200">Avg. costs</span>
                    <div className="flex flex-col">
                    <span className="text-base text-right text-black-1200 font-semibold">≈ €70.000/yr</span>
                    <span className="text-xs text-black-1200">salary sr. designer</span>
                    </div>
                  </div>

                    </li>
                  </ul>
                
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-1100 rounded-xl border border-gray-1200 p-5">
                <h4 className="text-lg text-center font-semibold text-black-1200 leading-[31px] mb-2 lg:mb-10">
                Agency
                </h4>
                <div className="w-full text-start">
                  <ul>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Project management</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Understand your needs</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Technical knowlegde</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">SaaS MVP expertise</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] bg-red-1000 p-1.5 rounded-full flex items-center justify-center">
                      <img src="images/close.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Low overhead</h4>
                    </li>
                  </ul>
                  <ul className="w-full py-2 border-t mt-2 pt-4">
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Low overhead</h4>
                    <span className="text-sm text-black-1200 font-semibold">≈ 16 hours</span>
                    </li>
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Speed</h4>
                    <span className="text-sm text-black-1200 font-semibold">Weeks</span>
                    </li>
                    <li>
                    <div className="flex items-start justify-between gap-4" >
                    <span className="text-sm text-black-1200">Avg. costs</span>
                    <div className="flex flex-col">
                    <span className="text-base text-right text-black-1200 font-semibold">≈ €20.000</span>
                    </div>
                  </div>

                    </li>
                  </ul>
                
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-1100 rounded-xl border border-gray-1200 p-5">
                <h4 className="text-lg text-center font-semibold text-black-1200 leading-[31px] mb-2 lg:mb-10">
                Daasign
                </h4>
                <div className="w-full text-start">
                  <ul>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Project management</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Understand your needs</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Technical knowlegde</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">SaaS MVP expertise</h4>
                    </li>
                    <li className="flex items-center gap-3 py-2">
                    <div className="w-[20px] h-[20px] p-1 flex items-center justify-center bg-gray-1400/[80%] rounded-full">
                      <img src="images/check-2.svg" alt=""></img>
                    </div>
                    <h4 className="text-sm text-black-1200">Low overhead</h4>
                    </li>
                  </ul>
                  <ul className="w-full py-2 border-t mt-2 pt-4">
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Low overhead</h4>
                    <span className="text-sm text-black-1200 font-semibold">4 hours</span>
                    </li>
                    <li className="flex items-center justify-between gap-4 pb-3">
                      <h4 className="text-sm text-black-1200">Speed</h4>
                    <span className="text-sm text-black-1200 font-semibold">5 days</span>
                    </li>
                    <li>
                    <div className="flex items-start justify-between gap-4" >
                    <span className="text-sm text-black-1200">Avg. costs</span>
                    <div className="flex flex-col">
                    <span className="text-base text-right text-black-1200 font-semibold">€5.000</span>
                    <span className="text-xs text-black-1200">one-time payment</span>
                    </div>
                  </div>

                    </li>
                  </ul>
                
                </div>
              </div>
            </SwiperSlide>
            
        </Swiper>

        <div className="max-w-[1320px] mx-auto px-5 z-20 relative">
          <div className="flex items-center justify-center lg:justify-end gap-16 -mt-11">
            <button
              className="!static swiper-button-prev1 after:hidden !text-white bg-black-1200 text-[22px] md:w-[54px] border border-white md:h-[54px] min-w-[42px] h-[42px] flex items-center justify-center p-2 rounded-full"
            >
              ←
            </button>
            <button
              className="!static swiper-button-next1 after:hidden text-[22px] bg-black-1200 md:w-[54px] border border-white md:h-[54px] min-w-[42px] h-[42px] flex items-center justify-center !text-white p-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonSlider;