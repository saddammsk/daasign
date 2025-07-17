'use client';
import { useState } from 'react';

export default function EnterpriseCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <span
        onClick={() => setOpen(true)}
        className={`bg-yellow-500 w-11 h-11 flex items-center justify-center cursor-pointer hover:scale-105 absolute z-20 transition-all duration-500 translate-x-[280px] translate-y-[240px] ${
          open ? 'opacity-0 scale-75 invisible' : 'opacity-100 scale-100 visible'
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

      <div
       onClick={() => setOpen(false)}
        className={`relative min-h-[375px] min-w-[375px] inline-flex items-center justify-center py-10 px-5 flex-col text-center transition-transform duration-700 ${
          open ? 'scale-100' : 'scale-[0.7]'
        }`}
      >
        <div
          className={`bg-red-1000 w-full h-full absolute -z-10 transition-transform duration-500 ${
            open ? 'rotate-0' : 'rotate-45'
          }`}
        ></div>

        <div>
          <img src="images/presention-chart.svg" className="inline-block" alt="" />
          <h4 className="text-xl font-inter font-bold my-3 leading-[34px] text-white transition-all duration-500">
          Enterprise AI Solutions
          </h4>

          <div
            className={`transition-all duration-1000 overflow-hidden ${
              open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p
              className={`text-[13px] min-w-[335px] font-semibold font-geist leading-6 text-white transition-all duration-700 ease-in-out transform ${
                open
                  ? 'translate-y-0 opacity-100 max-h-[500px]'
                  : 'translate-y-2 opacity-0 max-h-0'
              }`}
            >
             Drive engagement with AI-generated product images and variations that adapt to user behavior. Our dynamic content solutions deliver personalized shopping experiences across platforms, boosting conversions through tailored visual presentations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
