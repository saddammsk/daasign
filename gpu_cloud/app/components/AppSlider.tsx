import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const slidesData = [
     {
          badge: "🔥 Hot",
          img: "images/slide-img1.png",
          avatar: "images/avatar-4.png",
          title: "FaceFusion",
     },
     {
          badge: "🔥 Hot",
          img: "images/slide-img2.png",
          avatar: "images/avatar-3.png",
          title: "Auto1111 WebUI Forge_202508080857",
     },
     {
          badge: "🔥 Hot",
          img: "images/slider-img3.png",
          avatar: "images/avatar-2.png",
          title: "ComyUI",
     },
     {
          badge: "🔥 Hot",
          img: "images/slider-img4.png",
          avatar: "images/avatar-1.png",
          title: "diffusion-pipe",
     },
     // repeat if needed
     {
          badge: "🔥 Hot",
          img: "images/slide-img1.png",
          avatar: "images/avatar-4.png",
          title: "FaceFusion",
     },
     {
          badge: "🔥 Hot",
          img: "images/slide-img2.png",
          avatar: "images/avatar-3.png",
          title: "Auto1111 WebUI Forge_202508080857",
     },
     {
          badge: "🔥 Hot",
          img: "images/slider-img3.png",
          avatar: "images/avatar-2.png",
          title: "ComyUI",
     },
     {
          badge: "🔥 Hot",
          img: "images/slider-img4.png",
          avatar: "images/avatar-1.png",
          title: "diffusion-pipe",
     },
];
function AppSlider() {
     return (
          <div>
               <div className='flex mb-2.5 items-center justify-between'>
                    <h4 className='text-base font-semibold leading-6 dark:text-gray-1400 text-black-1000'>Recommended for you</h4>
                    <div className="flex items-center gap-2.5 ">
                         <button
                              type="button"
                              className="custom-prev w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer  rounded-lg flex items-center justify-center bg-white border border-gray-1100 dark:border-white/[10%] shadow-3xl"
                         >
                              <img src="images/arrow-left.svg" className="dark:invert-[1]" alt="" />
                         </button>
                         <button
                              type="button"
                              className="custom-next w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer rounded-lg flex items-center justify-center bg-white border border-gray-1100 dark:border-white/[10%] shadow-3xl"
                         >
                              <img src="images/arrow-right.svg" className="dark:invert-[1]" alt="" />
                         </button>
                    </div>
               </div>
               <Swiper
                    modules={[Navigation]}
                    slidesPerView={4.2}
                    spaceBetween={8}
                    navigation={{
                         nextEl: ".custom-next",
                         prevEl: ".custom-prev",
                    }}
                    breakpoints={{
                         320: {  // small screens
                              slidesPerView: 1.2,
                              spaceBetween: 8,
                         },
                         640: {  // tablets
                              slidesPerView: 2.2,
                              spaceBetween: 10,
                         },
                         992: { // laptops
                              slidesPerView: 3.2,
                              spaceBetween: 12,
                         },
                         1199: { // desktops
                              slidesPerView: 4.2,
                              spaceBetween: 8,
                         },
                    }}
                    className="!pb-6"
               >
                    {slidesData.map((slide, index) => (
                         <SwiperSlide key={index}>
                              <div className="border border-gray-1100 dark:border-white/[10%] dark:bg-black-1100 bg-white rounded-[10px] p-1.5 pb-2">
                                   <div className="relative">
                                        <div className="text-xs dark:bg-black-1000 font-semibold leading-4 text-black-1000 dark:text-gray-1400 border border-gray-1100 dark:border-white/[10%] bg-white rounded-lg inline-block py-0.5 px-2 absolute left-3 top-3">
                                             {slide.badge}
                                        </div>
                                        <img
                                             src={slide.img}
                                             className="rounded-lg w-full"
                                             alt={slide.title}
                                        />
                                   </div>
                                   <div className="flex items-center gap-1 mt-2.5">
                                        <img
                                             src={slide.avatar}
                                             className="w-6 h-6 rounded-full"
                                             alt={slide.title}
                                        />
                                        <h4 className="text-sm text-limit text-black-1000 font-medium leading-5 dark:text-gray-1400">
                                             {slide.title}
                                        </h4>
                                   </div>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     )
}

export default AppSlider
