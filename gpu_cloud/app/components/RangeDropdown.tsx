'use client'
import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react'



function RangeDropdown() {
     const [minVal, setMinVal] = useState(0.05);
     const [maxVal, setMaxVal] = useState(6);

     const min = 0.05;
     const max = 6;
     const step = 0.05;


     return (
          <div className="relative">
               <Menu>
                    <MenuButton className="inline-flex dark:border-white/[15%] dark:bg-white/[5%] dark:text-gray-1400 cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm font-medium leading-4 text-black-1000 border border-gray-1100 shadow-3xl">
                         Price per Hour
                         <img src="images/drop-arrow.svg" className='dark:invert-[1]' alt="" />
                    </MenuButton>

                    <MenuItems
                         transition
                         anchor="bottom end"
                         className="w-[300px] origin-top-right rounded-lg border border-gray-1100 bg-white p-1 shadow-4xl transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                         <div className="w-full">
                              <div className="relative -top-2.5 w-full">
                                   {/* Track background */}
                                   <div className="absolute top-1/2 w-full h-1.5 bg-gray-1000 dark:bg-gray-700 rounded-full -translate-y-1/2"></div>

                                   {/* Track filled */}
                                   <div
                                        className="absolute top-1/2 h-1.5 bg-black-1100 dark:bg-white rounded-full -translate-y-1/2"
                                        style={{
                                             left: `${((minVal - min) / (max - min)) * 100}%`,
                                             right: `${100 - ((maxVal - min) / (max - min)) * 100}%`,
                                        }}
                                   ></div>

                                   {/* Min input */}
                                   <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        step={step}
                                        value={minVal}
                                        onChange={(e) =>
                                             setMinVal(Math.min(Number(e.target.value), maxVal - step))
                                        }
                                        className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none"
                                   />

                                   {/* Max input */}
                                   <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        step={step}
                                        value={maxVal}
                                        onChange={(e) =>
                                             setMaxVal(Math.max(Number(e.target.value), minVal + step))
                                        }
                                        className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none"
                                   />

                                   {/* Styling thumbs */}
                                   <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            pointer-events: auto;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid black;
            background: white;
            cursor: pointer;
            position: relative;
            top:-3px;
            z-index: 3;
          }
          .dark input[type="range"]::-webkit-slider-thumb {
            border: 2px solid white;
            background: black;
          }
          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid #171717;
            background: white;
            cursor: pointer;
            position: relative;
            z-index: 3;
          }
          .dark input[type="range"]::-moz-range-thumb {
            border: 2px solid white;
            background: black;
          }
        `}</style>
                              </div>

                              {/* Labels */}
                              <div className="flex justify-between mt-5 text-sm leading-5 font-normal dark:text-gray-1500 text-gray-1200 ">
                                   <span>${min.toFixed(2)}/hr</span>
                                   <span>${max.toFixed(2)}/hr</span>
                              </div>
                         </div>
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default RangeDropdown
