'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import CategoryDropdown from '@/app/components/CategoryDropdown';
import StatusDropdown from '@/app/components/StatusDropdown';
import CalendarDropdown from '@/app/components/CalendarDropdown';
import SupportTable from '@/app/components/SupportTable';

function Page() {
     const [isOpen, setIsOpen] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)

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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Support</p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Support </h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Get help with your account, billing, or technical issues.</p>
                              <div className='flex items-center justify-between'>
                                   <h4 className="text-base dark:text-gray-1400 font-semibold leading-6 text-black-1000">My Support Tickets</h4>
                                   <form action="" className="flex gap-2.5 flex-1 justify-end">
                                        <div className='relative max-w-[250px]  w-full'>
                                             <input type="text" className="text-sm dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-gray-1200 placeholder:text-gray-1200 pl-8 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100" placeholder="Search by Ticket ID or Subject..." />
                                             <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                                  <img src="images/Search.svg" alt="" />
                                             </div>
                                        </div>
                                        <button type="button" className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400">Create Ticket</button>
                                   </form>
                              </div>
                              <ul className='flex mt-[18px] items-center gap-2 justify-end'>
                                   <li><CategoryDropdown></CategoryDropdown></li>
                                   <li><StatusDropdown></StatusDropdown></li>
                                   <li><CalendarDropdown></CalendarDropdown></li>
                              </ul>
                              <SupportTable></SupportTable>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Page
