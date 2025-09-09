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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Billing & Credits</p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className='md:p-6 p-4'>
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Billing & Credits </h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Manage your subscription, credits, and payment</p>
                              <div className='dark:border-white/[15%] pb-2.5 mb-2.5 border-b border-gray-1100'>
                                   <div className='flex items-center gap-1'>
                                        <img src="images/DollarSign2.svg" className='dark:invert-[1]' alt="" />
                                        <h6 className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Balance</h6>
                                   </div>
                                   <div className='flex items-center my-1.5 gap-1.5'>
                                        <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">$5.00</h2>
                                        <button type="button" className="w-8 h-8 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer rounded-lg flex items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                             <img className="dark:invert-[1]" alt="" src="images/Plus.svg" /></button>
                                   </div>
                                   <h6 className='text-sm font-normal leading-5 dark:text-gray-1400 text-black-1000'>Fund:$0.38 (Long term)</h6>
                              </div>
                              <BillingTab></BillingTab>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
