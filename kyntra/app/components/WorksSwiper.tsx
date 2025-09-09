'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const steps = [
  {
    number: 1,
    title: 'Purchase a Plan',
    description:
      'The client purchases a subscription plan easily and confidently through the official landing page.',
    img: '/images/Plan-Card-img-1.png',
  },
  {
    number: 2,
    title: 'Setup & Credentials',
    description:
      'Once the purchase is confirmed, we set up the client environment and generate platform credentials.',
    img: '/images/Plan-Card-img-2.png',
  },
  {
    number: 3,
    title: 'Email Delivery',
    description:
      'We send the client an email containing login credentials, platform details, and setup instructions for access.',
    img: '/images/Plan-Card-img-3.png',
  },
  {
    number: 4,
    title: 'Platform Access',
    description:
      'The client securely logs in to the application using provided credentials and accesses their personalized dashboard immediately.',
    img: '/images/Plan-Card-img-4.png',
  },
  {
    number: 5,
    title: 'Purchase a Plan',
    description:
      'The client purchases a subscription plan easily and confidently through the official landing page.',
    img: '/images/Plan-Card-img-1.png',
  },
  {
    number: 6,
    title: 'Setup & Credentials',
    description:
      'Once the purchase is confirmed, we set up the client environment and generate platform credentials.',
    img: '/images/Plan-Card-img-2.png',
  },
]

const WorksSwiper = () => {
  return (
    <div className="lg:w-[calc(100%_+_55%)] relative">
      <div className="border-t-2 border-dashed border-gray-4 absolute w-full top-8 z-0"></div>
      <Swiper
        slidesPerView={4.4}
        spaceBetween={24}
        loop={true}
        className="flex relative z-10 !pl-1"
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
        
          640: {
            slidesPerView: 2.2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 4.4,
            spaceBetween: 24,
          },
        }}
      >
        {steps.map((step) => (
          <SwiperSlide key={step.number} className='!h-auto'>
            <div className="relative flex flex-col h-full">
              <div className="bg-[url(/images/steps-count-frame.svg)] bg-no-repeat w-16 h-16 text-2xl font-medium text-white inline-flex bg-contain items-center justify-center p-2">
                <span>{step.number}</span>
              </div>
              <h4 className="text-size-28 lg:pt-10 pt-6 pb-4 font-clash-display font-medium text-white">
                {step.title}
              </h4>
              <p className="text-lg text-orange-1 pb-8">
                {step.description}
              </p>
              <Image
                className="w-fit  object-contain mt-auto"
                src={step.img}
                width={400}
                height={370}
                alt="no-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WorksSwiper