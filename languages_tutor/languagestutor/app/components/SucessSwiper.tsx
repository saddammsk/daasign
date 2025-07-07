'use client'
import React, { useEffect, useState } from 'react'
import Swiper from './common/Swiper'
import Image from 'next/image'
import { LightBox } from './LightBox'
import { sanityClient } from '../lib/sanity'
import { spotlightQuery } from '../lib/queries'
import { urlFor } from '../lib/sanityImage'

export const SucessSwiper = () => {
  const [spotlight, setSpotlight] = useState([])
  const [isOpenModel, setIsOpenModel] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState("")


  useEffect(() => {
    const getSpotlightData = async () => {
      const data = await sanityClient.fetch(spotlightQuery)
      setSpotlight(data)
    }
    getSpotlightData()
  }, [])



  const Slides = spotlight.map((team: any) => (
    <div
      key={team._id}
      onClick={() => {
        setIsOpenModel(true)
        setSelectedVideo(team?.videoUrl)
      }}
      className="w-full video-preview bg-white p-4 rounded-[10px] border border-neutral3 cursor-pointer"
    >
      <div className="inline-flex items-center justify-center relative overflow-hidden sm:h-[369px] h-[300px] rounded-[10px] w-full">
        <Image
          src={urlFor(team?.poster).width(276).url()}
          alt="video thumbnail"
          width={274}
          height={369}
          className="thubmail-img duration-500 scale-100 transition-all w-full absolute left-0 top-0 sm:h-[369px] h-[300px] object-cover"
        />
        <Image src="/PlayButton.svg" className="relative z-10" alt="Play Button" width={64} height={64} />
        <div className="w-full h-full bg-black/30 absolute left-0 top-0"></div>
      </div>
      <div className="w-full flex items-center gap-4 mt-4">
        <div className="inline-flex items-center justify-center relative">
          <Image
            src={urlFor(team?.userAvatar).width(48).url()}
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
            alt="Team Img"
          />
          <Image
            src={urlFor(team?.location).width(14).url() || "/USA-Flag.svg"}
            width={14}
            height={14}
            className="w-3.5 h-3.5 absolute bottom-1 -right-1 rounded-full"
            alt="Location"
          />
        </div>
        <div>
          <h4 className="text-lg text-neutral2 leading-tight font-medium">{team?.user}</h4>
          <p className="text-base text-gray5 leading-tight">{team?.userCourse}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <Swiper
        swiperClass="success-swiper !pb-16"
        slidesPerView={4}
        spaceBetween={20}
        slides={Slides}
        hasPagination={true}
        slidesDesktop={4}
      />
      {isOpenModel && (
        <LightBox isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} media={selectedVideo} />
      )}
    </div>
  )
}
