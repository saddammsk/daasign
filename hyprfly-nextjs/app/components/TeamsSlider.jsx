'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import NewArtistTeamModel from "./NewArtistTeamModel";

const userImages = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "new-team",
];

const TeamsSlider = () => {

  const [AddNewTeamModel, setAddNewTeamModel] = useState(false);



  return (
    <div>
      <div className="w-full relative flex justify-center items-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView="auto"
          className="w-full !py-2 team-slider"
        >
          {userImages.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "125px", height: "125px" }}
            >
              <div className="w-[125px] h-[125px] rounded-[50px]  flex relative items-center justify-center overflow-hidden">
              {src != "new-team" ? <img
                  src={src}
                  alt={`User ${index + 1}`}
                  className="w-full h-full object-cover"
                />:
              <button onClick={()=>setAddNewTeamModel(true)} className="absolute w-full bg-[#D8D8D8] outline-none ring-0 border-none h-full text-5xl">+</button> 
              }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
          
        <NewArtistTeamModel setIsOpen={setAddNewTeamModel} isOpen={AddNewTeamModel} />
    </div>
  )
}

export default TeamsSlider