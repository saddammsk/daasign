'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
interface Testimonial {
     bgImage: string;
     text: string;
     author: string;
     authorClass?: string;
}
const testimonials: Testimonial[] = [
     {
          bgImage: '/images/card-bg1.png',
          text: 'Working with GUD was a game-changer for our startup. Their UX insights and clean design turned our app into something users actually love to use. Fast, professional, and visionary.',
          author: '— Mark L., CEO at FinFlow',
          authorClass: 'text-primary'
     },
     {
          bgImage: '/images/card-bg2.png',
          text: 'The gud agency completely transformed our brand presence. From strategy to execution, everything was seamless. We saw a 3x increase in engagement after launch.',
          author: '— Majid H., Founder of VibeStudio',
          authorClass: 'text-secondary'
     },
     {
          bgImage: '/images/card-bg3.png',
          text: `OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya!!!`,
          author: '— Mark L., CEO at FinFlow',
          authorClass: 'text-tertiary'
     },
     {
          bgImage: '/images/card-bg1.png',
          text: 'Working with GUD was a game-changer for our startup. Their UX insights and clean design turned our app into something users actually love to use. Fast, professional, and visionary.',
          author: '— Mark L., CEO at FinFlow',
          authorClass: 'text-primary'
     },
     {
          bgImage: '/images/card-bg2.png',
          text: 'The gud agency completely transformed our brand presence. From strategy to execution, everything was seamless. We saw a 3x increase in engagement after launch.',
          author: '— Majid H., Founder of VibeStudio',
          authorClass: 'text-secondary'
     },
     {
          bgImage: '/images/card-bg3.png',
          text: `OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya!!!`,
          author: '— Mark L., CEO at FinFlow',
          authorClass: 'text-tertiary'
     },
];

function Company() {
     const prevRef = useRef<HTMLButtonElement | null>(null);
     const nextRef = useRef<HTMLButtonElement | null>(null);

     // Needed to delay swiper init to let refs be assigned
     const [swiperReady, setSwiperReady] = useState(false);

     useEffect(() => {
          setSwiperReady(true);
     }, []);
     return (
          <div>
               <section className="bg-black-1 pb-[100px]">
                    <div className="max-w-[1760px] px-5 mx-auto">
                         <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                              <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">You're in Gud Company</h2>
                              <div className="md:text-end text-center">
                                   <img src="images/green-line.svg" className="inline-block md:w-auto w-[156px] mx-auto" alt="" />
                              </div>
                         </div>
                         <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center 3xl:mb-[120px] md:mb-[70px] mb-[50px] text-white">Real words from real clients.  <span className="text-primary block 3xl:text-[30px] text-xl font-annie">See why brands trust us to bring the gud.</span></p>

                    </div>
                    <div className="relative">
                         {swiperReady && (
                              <Swiper
                                   modules={[Navigation]}
                                   spaceBetween={30}
                                   slidesPerView={2.8}
                                   loop={true}
                                   breakpoints={{
                                        320: {
                                             slidesPerView: 1.2,
                                             spaceBetween: 10,
                                        },
                                        640: {
                                             slidesPerView: 2,
                                             spaceBetween: 20,
                                        },
                                        1199: {
                                             slidesPerView: 2.8,
                                             spaceBetween: 30,
                                        },
                                   }}
                                   centeredSlides={true}
                                   navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                   }}
                                   onBeforeInit={(swiper) => {
                                        if (swiper.params.navigation) {
                                             const nav = swiper.params.navigation as any;
                                             nav.prevEl = prevRef.current;
                                             nav.nextEl = nextRef.current;
                                        }
                                   }}
                              >
                                   {testimonials.map(({ bgImage, text, author, authorClass }, idx) => (
                                        <SwiperSlide key={idx}>
                                             <div
                                                  className="md:bg-size-[100%_100%] bg-cover bg-no-repeat 3xl:px-0 px-4 md:rounded-[54px] rounded-[30px] text-center md:min-h-[448px] min-h-[281px] flex flex-col justify-center items-center"
                                                  style={{ backgroundImage: `url(${bgImage})` }}
                                             >
                                                  <ul className="flex items-center justify-center gap-2.5 mb-4">
                                                       {[...Array(5)].map((_, i) => (
                                                            <li key={i}>
                                                                 <img src="/images/star.svg" alt="star" />
                                                            </li>
                                                       ))}
                                                  </ul>
                                                  <p className="3xl:text-xl md:text-lg text-sm max-w-[488px] my-7 mx-auto font-medium md:leading-[34px] leading-5 text-white">
                                                       {text}
                                                  </p>
                                                  <span className={`block md:text-base text-xs font-light ${authorClass}`}>
                                                       {author}
                                                  </span>
                                             </div>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         )}
                         <div className='flex items-center md:gap-[51px] gap-[30px] mt-7 justify-center'>
                              <button className='cursor-pointer'
                                   ref={prevRef}
                              >
                                   <img src="images/left-arrow.svg" className='md:w-auto w-[34px]' alt="" />
                              </button>
                              <button className='cursor-pointer'
                                   ref={nextRef}
                              >
                                   <img src="images/right-arrow.svg" className='md:w-auto w-[34px]' alt="" />
                              </button>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default Company
