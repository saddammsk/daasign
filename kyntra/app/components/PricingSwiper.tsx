'use client'
import { ListIcon, ListIconPlus } from '@/public/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


const PricingSwiper = () => {
  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="w-full pt-6"
      >
        <SwiperSlide>
          <div className="w-full rounded-[40px] bg-white/5 border border-white/10 lg:p-8 px-5 py-8 overflow-hidden">
            <div className="w-full flex flex-col relative">
              <div className="w-full">
                <h3 className="md:text-size-32 text-xl leading-snug lg:pb-4 pb-2  font-medium font-clash-display bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                  Free Plan
                </h3>
                <p className="lg:text-xl text-base text-gray-2 pb-8">
                  Basic task management & AI suggestions.
                </p>
              </div>
              <div className="w-full">
                <h2 className="lg:text-size-56 text-4xl font-medium text-white pb-4">
                  Free
                </h2>
                <div className="relative inline-flex group transition-all duration-500 hover:scale-105">
                  <Link
                    href={"/"}
                    className="transition-colors duration-500 hover:from-primary hover:to-secondary font-medium font-manrope py-3 px-8 text-white rounded-xl bg-gradient-to-l to-primary from-secondary inline-flex items-center justify-center relative z-10"
                  >
                    Start a Project
                  </Link>
                  <span
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                      boxShadow:
                        "0 0 34px 1px rgba(255, 60, 28,0.6), 0 0 1px 1px #FF3C1C55",
                      filter: "blur(2px)",
                    }}
                  />
                </div>
                <ul className="pt-10 lg:space-y-4 space-y-2">
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">1 Landing Page Design</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">2 Revisions</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full rounded-[40px] bg-gradient-to-b from-primary to-secondary border border-white/10 lg:p-8 px-5 py-8 overflow-hidden relative">
            <Image className="absolute top-0 right-0" src={"/images/proplan-bg-2.png"} alt="no" width={300} height={100} />
            <div className="w-full flex flex-col relative">
              <div className="w-full">
                <h3 className="md:text-size-32 text-xl leading-snug lg:pb-4 pb-2  font-clash-display font-semibold bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                  Pro Plan
                </h3>
                <p className="lg:text-xl text-base text-white pb-8">
                  Advanced AI features, integrations, and collaboration tools.
                </p>
              </div>
              <div className="w-full">
                <h2 className="lg:text-size-56 text-4xl font-medium text-white pb-4">
                  $1,200 <span className="text-xl uppercase">/month</span>
                </h2>
                <div className="relative inline-flex group">
                  <Link
                    href={"/"}
                    className="transition-all duration-500 hover:scale-105 font-medium font-manrope bg-white py-3 px-8 text-black rounded-xl inline-flex items-center justify-center relative z-10"
                  >
                    Start a Project
                  </Link>
                  <span
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                      boxShadow:
                        "0 0 34px 1px rgba(255, 60, 28,0.6), 0 0 1px 1px #FF3C1C55",
                      filter: "blur(2px)",
                    }}
                  />
                </div>
                <ul className="pt-10 lg:space-y-4 space-y-2">
                  <li className="flex items-center gap-3">
                    <ListIconPlus/>
                    <p className="lg:text-lg text-base  text-white">1 Landing Page Design</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIconPlus/>
                    <p className="lg:text-lg text-base  text-white">2 Revisions</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIconPlus/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIconPlus/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIconPlus/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full rounded-[40px] bg-white/5 border border-white/10 lg:p-8 px-5 py-8 overflow-hidden">
            <div className="w-full flex flex-col relative">
              <div className="w-full">
                <h3 className="md:text-size-32 text-xl leading-snug lg:pb-4 pb-2  font-medium font-clash-display bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                  Enterprise Plan
                </h3>
                <p className="lg:text-xl text-base text-gray-2 pb-8">
                  Organize tasks, track progress, and achieve more—effortlessly.
                </p>
              </div>
              <div className="w-full">
                <h2 className="lg:text-size-56 text-4xl font-medium text-white pb-4">
                  $3,600 <span className="lg:text-xl text-base uppercase">/month</span>
                </h2>
                <div className="relative inline-flex group transition-all duration-500 hover:scale-105">
                  <Link
                    href={"/"}
                    className="transition-colors duration-500 hover:from-primary hover:to-secondary font-medium font-manrope py-3 px-8 text-white rounded-xl bg-gradient-to-l to-primary from-secondary inline-flex items-center justify-center relative z-10"
                  >
                    Start a Project
                  </Link>
                  <span
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                      boxShadow:
                        "0 0 34px 1px rgba(255, 60, 28,0.6), 0 0 1px 1px #FF3C1C55",
                      filter: "blur(2px)",
                    }}
                  />
                </div>
                <ul className="pt-10 lg:space-y-4 space-y-2">
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">1 Landing Page Design</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">2 Revisions</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <ListIcon/>
                    <p className="lg:text-lg text-base  text-white">Mobile & Desktop Responsive</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PricingSwiper