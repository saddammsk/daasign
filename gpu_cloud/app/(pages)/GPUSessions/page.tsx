'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import StatusDropdown from '@/app/components/StatusDropdown';
import CalendarDropdown from '@/app/components/CalendarDropdown';
import GPUDropdown from '@/app/components/GPUDropdown';
import GPUTable from '@/app/components/GPUTable';
import GPUSessionTable from '@/app/components/GPUSessionTable';
import RegionDropdown from '@/app/components/RegionDropdown';
import RangeDropdown from '@/app/components/RangeDropdown';
import GPUGeneration from '@/app/components/GPUGeneration';
import AdditionalFilter from '@/app/components/AdditionalFilter';

function page() {
     const [isOpen, setIsOpen] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)
     let [isOpen2, setIsOpen2] = useState(false)

     function open() {
          setIsOpen2(true)
     }

     function close() {
          setIsOpen2(false)
     }

     return (
          <div>
               <div ref={sidebarRef} className={`sidebar ${isOpen ? 'active' : ''}`}>
                    {/* Background overlay */}
                    <div
                         className={`bg-black/[50%] fixed md:hidden layer top-0 left-0 w-full h-full z-[9] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                              }`}
                         onClick={() => setIsOpen(false)} // closes sidebar when clicked
                    ></div>

                    <Sidebar />
               </div>
               <div className=" md:w-[calc(100%_-_265px)] ml-auto  md:pr-2 pr-0">
                    <div className="bg-white dark:bg-black-1000 w-full md:mt-2 rounded-[14px] md:shadow-4xl">
                         <div className="md:py-2.5 py-2 md:px-6 px-4 dark:border-white/[15%] border-b border-gray-1100 flex items-center justify-between">
                              <div className="flex items-center">
                                   <Link
                                        href="#"
                                        onClick={(e) => {
                                             e.preventDefault()
                                             setIsOpen(true)
                                        }}
                                        className="block md:pr-2 pr-1"
                                   >
                                        <img src="images/collapse-icon.svg" className='dark:invert-[1]' alt="" />
                                   </Link>
                                   <div className="bg-gray-1100 w-[1px] h-[15px] block"></div>
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">GPU Sessions</p>

                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">GPU Sessions </h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Manage your active GPU instances and launch new ones.</p>
                              <div className='flex items-center justify-between mb-4'>
                                   <h4 className="text-base dark:text-gray-1400 font-semibold leading-6 text-black-1000">Active GPU Sessions</h4>
                                   <ul className='flex mt-[18px] items-center gap-2 justify-end'>
                                        <li><StatusDropdown></StatusDropdown></li>
                                        <li><GPUDropdown></GPUDropdown></li>
                                        <li><CalendarDropdown></CalendarDropdown></li>
                                   </ul>
                              </div>
                              <GPUSessionTable></GPUSessionTable>
                              <div className='flex items-center justify-between mb-4'>
                                   <h4 className="text-base dark:text-gray-1400 font-semibold leading-6 text-black-1000">Rent a New GPU </h4>
                                   <ul className='flex mt-[18px] items-center gap-2 justify-end'>
                                        <li><RegionDropdown></RegionDropdown></li>
                                        <li><RangeDropdown></RangeDropdown></li>
                                        <li><GPUGeneration></GPUGeneration></li>
                                        <li><AdditionalFilter></AdditionalFilter></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
