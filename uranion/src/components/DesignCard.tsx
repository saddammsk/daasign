'use client';
import { useState } from 'react';

export default function DesignCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Toggle Button */}
      <span
        onClick={() => setIsOpen(true)}
        className={`bg-yellow-500 w-11 h-11 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 absolute z-10 transition-all duration-500 translate-x-[95px] translate-y-[80px] ${
          isOpen ? 'opacity-0 scale-75 invisible' : 'opacity-100 scale-100 visible'
        }`}
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

      {/* Animated Circle Card */}
      <div
       onClick={() => setIsOpen(false)}
        className={`m-auto bg-blue-1000 min-h-[375px] min-w-[375px] rounded-[50%] custom-radius flex flex-col justify-center items-center text-center px-5 py-[30px] transition-all duration-500 ${
          isOpen ? 'scale-100' : 'scale-[0.7]'
        } sm:pt-10 pt-[26px]`}
      >
        <div>
          <img src="images/status-up.svg" className="inline-block" alt="" />
          <h4
            className={`text-xl font-inter font-bold my-3 leading-[34px] text-white transition-all duration-500 `}
          >
            Unified Design-to-Production
          </h4>

          <div
            className={`transition-all duration-1000 overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p
              className={`text-[13px] min-w-[290px] max-w-[290px] font-semibold font-geist leading-6 text-white transition-all duration-700 ease-in-out transform ${
                isOpen
                  ? 'translate-y-0 opacity-100 max-h-[500px]'
                  : 'translate-y-2 opacity-0 max-h-0'
              }`}
            >
              Transform outdated software while preserving critical business
              logic. Our AI-driven approach reduces modernization costs by 30%
              for initial projects and 70% for subsequent migrations—ideal for
              regulated industries where continuity is paramount.
            </p>
          </div>        
        </div>
      </div>
    </div>
  );
}
