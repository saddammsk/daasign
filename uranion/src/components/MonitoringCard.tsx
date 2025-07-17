'use client';
import { useState } from 'react';

export default function MonitoringCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
    
    <div className="relative flex items-center justify-center">
    <span
      onClick={() => setIsOpen(true)}
      className={`w-11 h-11 flex z-20 items-center justify-center cursor-pointer hover:scale-105 absolute transition-all duration-500 translate-x-[95px] translate-y-[80px] ${
        isOpen ? 'opacity-0 scale-75 invisible' : 'opacity-100 scale-100 visible'
      }`}
      style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)', backgroundColor: '#f0b100' }} // bg-red-500
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={20}
        viewBox="0 0 29 21"
      >
        <path
          d="M0.76 10.5L26 10.5"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeLinecap="square"
        />
        <path
          d="M17.73 21C17.53 21 17.35 20.93 17.21 20.78 16.93 20.49 16.93 20.02 17.21 19.73L26.25 10.5 17.21 1.27C16.93 0.98 16.93 0.51 17.21 0.22 17.5-0.07 17.96-0.07 18.24 0.22L27.79 9.98C28.07 10.26 28.07 10.74 27.79 11.03L18.24 20.78C18.1 20.93 17.92 21 17.73 21Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
      
      <div
        className={`m-auto min-h-[375px] min-w-[375px] justify-center relative transition-all duration-700 z-10 pt-14 flex flex-col items-center text-center px-5 pb-14 group cursor-pointer 
            ${isOpen ? 'scale-100' : 'scale-[0.7]'}`}
       
        onClick={() => setIsOpen(false)}
      >
        <div>
          <img src="images/cloud-plus.svg" className="inline-block" alt="" />

          <h4
            className={`text-xl font-inter font-bold my-3 leading-[34px] text-black transition-all duration-500 `}
          >
          Environmental Monitoring Systems
          </h4>

          <div
            className={`transition-all flex items-center justify-center text-center duration-1000 overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p
              className={`text-[13px] min-w-[290px] max-w-[290px] font-semibold font-geist leading-6 text-black transition-all duration-700 ease-in-out transform ${
                isOpen
                  ? 'translate-y-0 opacity-100 max-h-[500px]'
                  : 'translate-y-2 opacity-0 max-h-0'
              }`}
            >
              Protect urban green spaces with AI-driven risk assessments. From noise-filtered data
                  collection to structural analysis integration,
                  our solutions enable targeted interventions
                  that balance public safety with conservation goals.
            </p>
          </div>  
    
        </div>

        <div className={`hexgon bg-yellow-1000 w-full h-full absolute top-0 -z-10`}></div>
      </div>
    </div>

    </>

  );
}
