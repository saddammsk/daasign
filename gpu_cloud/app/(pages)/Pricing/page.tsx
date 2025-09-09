'use client'
import Sidebar from '@/app/components/Sidebar'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import LanguageDropdown from '@/app/components/LanguageDropdown';
import { RadioGroup } from '@headlessui/react'
import RightSidebar from '@/app/components/RightSidebar';
import StorageTable from '@/app/components/StorageTable';
import PricingTab from '@/app/components/PricingTab';

function page() {
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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Pricing</p>

                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className='p-6'>
                              <div className='border relative border-gray-1100 flex lg:pb-0 pb-10 lg:min-h-[639px] items-center justify-center dark:border-white/[10%] xl:h-[calc(100vh_-_150px)] rounded-[12px]'>
                                   <PricingTab></PricingTab>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
