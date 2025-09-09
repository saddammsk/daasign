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
import BillingTab from '@/app/components/BillingTab';
import HistoryTable from '@/app/components/HistoryTable';
const gpuOptions = [
     {
          name: "RTX 3090",
          vram: "24GB",
          ram: "48GB",
          vcpu: "8",
          max: "8 max",
          perf: "High",
          price: "$0.58/hr",
          discount: "0.47/hr",
     },
     {
          name: "RTX 4090",
          vram: "24GB",
          ram: "41GB",
          vcpu: "8",
          max: "8 max",
          perf: "High",
          price: "$0.69/hr",
          discount: "$0.59/hr",
     },
     {
          name: "RTX 5090",
          vram: "32GB",
          ram: "64GB",
          vcpu: "12",
          max: "8 max",
          perf: "Very High",
          price: "$0.95/hr",
          discount: "0.82/hr",
     },
     {
          name: "L40S",
          vram: "48GB",
          ram: "62GB",
          vcpu: "16",
          max: "8 max",
          perf: "High",
          price: "$0.86/hr",
          discount: "0.70/hr",
     },
     {
          name: "A100",
          vram: "40/80GB",
          ram: "85GB",
          vcpu: "16",
          max: "6 max",
          perf: "High",
          price: "$1.99/hr",
          discount: "1.59/hr",
     },
     {
          name: "H100",
          vram: "80GB",
          ram: "125GB",
          vcpu: "16",
          max: "8 max",
          perf: "High",
          price: "$2.69/hr",
          discount: "2.29/hr",
     },
     {
          name: "RTX A4000",
          vram: "16GB",
          ram: "32GB",
          vcpu: "6",
          max: "6 max",
          perf: "Medium",
          price: "$0.36/hr",
          discount: "0.28/hr",
     },
];
function page() {
     const [isOpen, setIsOpen] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)
     const [selected, setSelected] = useState(gpuOptions[0]);
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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">
                                        Platform Updates
                                   </p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className='md:p-6 p-4'>
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Platform Updates</h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Stay informed about the latest features, improvements, and fixes on our platform.</p>

                              <div className='border border-gray-1100 dark:border-white/[10%] mb-6 rounded-[14px] p-4 card-bg'>
                                   <div>
                                        <h4 className="text-sm font-normal mb-2 leading-5 text-gray-1200 dark:text-gray-1500">Current Version</h4>
                                        <div className='flex items-center gap-2.5 mb-4'>
                                             <h4 className='text-lg font-medium  leading-7 text-black-1000 dark:text-gray-1400'>v1.4.2</h4>
                                             <div className="flex items-center bg-white border border-gray-1000 dark:border-white/[10%] text-black-1000 dark:text-gray-1400 dark:bg-black-1000  gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg  w-fit">
                                                  <img src="images/Check-green.svg" alt="" />   Up to Date
                                             </div>
                                        </div>
                                   </div>
                                   <div className='grid md:grid-cols-2 mb-4 gap-1'>
                                        <ul>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Increased GPU launch speed by 30%</p>
                                             </li>
                                             <li className='flex items-center gap-2'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Fixed billing calculation for storage upgrades</p>
                                             </li>
                                        </ul>
                                        <ul>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>UI improvement for GPU selection filters</p>
                                             </li>
                                             <li className='flex items-center gap-2'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Security patch for API authentication</p>
                                             </li>
                                        </ul>
                                   </div>
                                   <h4 className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">Released on Aug 10, 2025</h4>
                              </div>
                              <h4 className="text-base leading-6 mb-2 font-semibold text-black-1000 dark:text-gray-1000">Update History</h4>
                              <HistoryTable></HistoryTable>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
