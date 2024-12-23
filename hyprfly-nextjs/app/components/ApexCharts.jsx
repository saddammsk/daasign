'use client'
import React from 'react'
import ApexChart from './ApexChart'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const series = [
  {
    name: "Listeners",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "Listeners",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

const ApexCharts = () => {

    
  return (
    <div className="w-full pl-8">
        <h2 className='text-lg text-gray-500 font-bold mb-5'>Last 7 days performances</h2>

        <Swiper className='!pb-10'
      modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={6}
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1, 
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 2.5, 
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5, 
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 6, 
          spaceBetween: 50,
        },
      }}
      
    >
      <SwiperSlide>
      <ApexChart data={"74.4M"} gradientStart="#04C910" lineColor="#04C910" gradientEnd="#fff" lalelColor={"#00B11B"}  serier={series} title={"Listeners"} logo={<FaSpotify color="#00B11B" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"93.4M"} gradientStart="#04C910" lineColor="#04C910" gradientEnd="#fff" serier={series} lalelColor={"#00B11B"} title={"Folllows"} logo={<FaSpotify color="#00B11B" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"96"} gradientStart="#04C910" lineColor="#04C910" gradientEnd="#fff" serier={series} lalelColor={"#00B11B"} title={"Popularity"} logo={<FaSpotify color="#00B11B" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"96"}gradientStart="#04C910" lineColor="#04C910" gradientEnd="#fff" serier={series} lalelColor={"#00B11B"} title={"Conversions"} logo={<FaSpotify color="#00B11B" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"144.2M"} gradientStart="#FF5901" lineColor="#FF5901" gradientEnd="#fff" serier={series} lalelColor={"#FC58BD"} title={"Followers"} logo={<FaInstagram color="#FF5901" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"30.3M"} gradientStart="#FF5B3C" lineColor="#FF5B3C" gradientEnd="#fff" serier={series}  lalelColor={"#FF5B3C"} title={"Subscribers"} logo={<FaYoutube color="#FF5B3C" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"30.3M"} gradientStart="#FF5901" lineColor="#FF5901" gradientEnd="#fff" serier={series}  lalelColor={"#FF5B3C"} title={"Views"} logo={<FaYoutube color="#FF5B3C" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"931.6K"} gradientStart="#FF54A3" lineColor="#FF54A3" gradientEnd="#fff" serier={series}  lalelColor={"#FC58BD"} title={"Followers"} logo={<FaTiktok color="#11120D" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"51.1M"} gradientStart="#05B8FE" lineColor="#05B8FE" gradientEnd="#fff" serier={series}  lalelColor={"#05B8FE"} title={"Likes"} logo={<FaFacebook color="#05B8FE" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"8.6K"} gradientStart="#05B8FE" lineColor="#05B8FE" gradientEnd="#fff" serier={series}  lalelColor={"#05B8FE"} title={"Talks"} logo={<FaFacebook color="#05B8FE" size={30} className="mb-2" />}/>
      </SwiperSlide>
      <SwiperSlide>
      <ApexChart data={"8.6K"} gradientStart="#000" lineColor="#000" gradientEnd="#fff" serier={series}  lalelColor={"#000"} title={"Followers"} logo={<FaTwitter color="#000" size={30} className="mb-2" />}/>
      </SwiperSlide>
     
    </Swiper>

    </div>

  )
}

export default ApexCharts