'use client'
import React, { useState } from "react";
import { JoinListPopup } from "./JoinListPopup";

function Availability() {  

   const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="agenda-sec" className="bg-black-1200 rounded-t-2xl md:py-20 py-8">
      <div className="max-w-[1240px] px-5 mx-auto">
        <div className="text-center md:mb-10 mb-5">
          <span className="block font-semibold md:text-lg md:leading-7 text-sm text-gray-1000 mb-1 md:mb-2">Availability</span>
          <h2 className="md:text-[42px] text-[26px] font-semibold md:leading-[50px] text-gray-1000">Upcoming slots</h2>
        </div>
        <div className="bg-black-1000 mb-4 rounded-xl lg:px-10 p-5 md:py-6 flex md:flex-row flex-col md:items-center justify-between lg:gap-5">
          <h6 className="lg:text-2xl md:text-lg text-base md:w-1/3 font-medium font-grotesque-arabic-pro leading-[31px] text-gray-1000">
            Idea to prototype
          </h6>
          <div className="flex  md:w-1/4 w-full items-center  gap-2 ">
            <div className="w-[14px] h-[14px] bg-green-1000/[24%] rounded-full p-[3px] block">
              <div className="w-full h-full drop-shadow-3xl rounded-full bg-green-1000"></div>
            </div>
            <h6 className="lg:text-2xl md:text-lg text-base font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">Remote</h6>
          </div>
          <h6 className="lg:text-2xl md:text-lg text-base  md:w-1/4 w-full font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">
            27 Jan - 31 Jan, 2025
          </h6>
          <div className="lg:w-1/4 w-fit md:text-end">
            <button
              type="button"
              className="md:text-lg text-sm md:w-fit w-full opacity-50 font-semibold min-w-[180px] ml-auto leading-7 inline-block text-gray-1100 border border-gray-1100 bg-transparent rounded-lg md:py-2.5 py-1.5 px-5 md:mt-0 mt-5">
              Not available
            </button>
          </div>
        </div>
        <div className="bg-black-1100 mb-4 rounded-xl lg:px-10 md:py-6 p-5 flex md:flex-row flex-col md:items-center justify-between lg:gap-5">
          <h6 className="lg:text-2xl md:text-lg text-base md:w-1/3 font-medium font-grotesque-arabic-pro leading-[31px] text-gray-1000">
            Idea to prototype
          </h6>
          <div className="flex  md:w-1/4 w-full items-center  gap-2 ">
            <div className="w-[14px] h-[14px] bg-green-1000/[24%] rounded-full p-[3px] block">
              <div className="w-full h-full drop-shadow-3xl rounded-full bg-green-1000"></div>
            </div>
            <h6 className="lg:text-2xl md:text-lg text-base font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">Remote</h6>
          </div>
          <h6 className="lg:text-2xl md:text-lg text-base  md:w-1/4 w-full font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">
            27 Jan - 31 Jan, 2025
          </h6>
          <div className="lg:w-1/4 w-fit md:text-end">
            <button
              type="button"
              className="md:text-lg text-sm md:w-fit w-full font-semibold min-w-[180px] ml-auto leading-7 inline-block text-gray-1100 border border-gray-1100 bg-transparent rounded-lg md:py-2.5 py-1.5 px-5 md:mt-0 mt-5">
              Reserve
            </button>
          </div>
        </div>
        <div className="bg-black-1000 mb-4 rounded-xl lg:px-10 p-5 md:py-6 flex md:flex-row flex-col md:items-center justify-between lg:gap-5">
          <h6 className="lg:text-2xl md:text-lg text-base md:w-1/3 font-medium font-grotesque-arabic-pro leading-[31px] text-gray-1000">
            Idea to prototype
          </h6>
          <div className="flex  md:w-1/4 w-full items-center  gap-2 ">
            <div className="w-[14px] h-[14px] bg-green-1000/[24%] rounded-full p-[3px] block">
              <div className="w-full h-full drop-shadow-3xl rounded-full bg-green-1000"></div>
            </div>
            <h6 className="lg:text-2xl md:text-lg text-base font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">Remote</h6>
          </div>
          <h6 className="lg:text-2xl md:text-lg text-base  md:w-1/4 w-full font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">
            10 Feb - 14 Feb, 2025
          </h6>
          <div className="lg:w-1/4 w-fit md:text-end">
            <button
              type="button"
              className="md:text-lg text-sm md:w-fit w-full font-semibold min-w-[180px] ml-auto leading-7 inline-block text-gray-1100 border border-gray-1100 bg-transparent rounded-lg md:py-2.5 py-1.5 px-5 md:mt-0 mt-5">
              Reserve
            </button>
          </div>
        </div>
        <div className="bg-black-1100 mb-4 rounded-xl lg:px-10 md:py-6 p-5 flex md:flex-row flex-col md:items-center justify-between lg:gap-5">
          <h6 className="lg:text-2xl md:text-lg text-base md:w-1/3 font-medium font-grotesque-arabic-pro leading-[31px] text-gray-1000">
            Idea to prototype
          </h6>
          <div className="flex  md:w-1/4 w-full items-center  gap-2 ">
            <div className="w-[14px] h-[14px] bg-green-1000/[24%] rounded-full p-[3px] block">
              <div className="w-full h-full drop-shadow-3xl rounded-full bg-green-1000"></div>
            </div>
            <h6 className="lg:text-2xl md:text-lg text-base font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">Remote</h6>
          </div>
          <h6 className="lg:text-2xl md:text-lg text-base  md:w-1/4 w-full font-medium font-grotesque-arabic-pro leading-7 text-gray-1000">
            17 Feb - 21 Feb, 2025
          </h6>
          <div className="lg:w-1/4 w-fit md:text-end">
            <button onClick={()=>setIsOpen(true)}
              type="button"
              className="md:text-lg text-sm md:w-fit w-full font-semibold leading-7 inline-block text-black-1200 min-w-[180px] bg-green-1000 rounded-lg md:py-2.5 py-1.5 px-5 md:mt-0 mt-5">
              Join waitlist
            </button>
          </div>
        </div>
    
      </div>
      <JoinListPopup setIsOpen={setIsOpen} isOpen={isOpen}/>
    </section>
  );
}

export default Availability;
