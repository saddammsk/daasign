'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import StorageUsageBar from '@/app/components/StorageUsageBar';
import FileTab from '@/app/components/FileTab';

function Page() {
     const [isOpen, setIsOpen] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)
     const items = [
          { name: "Foocus", value: 40, color: "#EF4444" },
          { name: "RVC", value: 20, color: "#F97316" },
          { name: "Auto1111 WebUI Forge", value: 2, color: "#22C55E" },
          { name: "FaceFusion", value: 4, color: "#EAB308" },
          { name: "ComfyUI", value: 4, color: "#3B82F6" },
          { name: "diffusion-pipe", value: 22.4, color: "#A855F7" },
     ];

     const total = 200;
     const used = items.reduce((acc, item) => acc + item.value, 0);


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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Storage</p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              {used >= total && (
                                   <div className="border flex md:flex-nowrap flex-wrap lg:gap-0 gap-3 dark:bg-black-1100 dark:border-white/[10%] border-gray-1100 md:mb-6 mb-2 rounded-[10px] items-center justify-between py-3 px-4">
                                        <div className="flex md:flex-1 items-start gap-3">
                                             <img src="images/CircleAlert.svg" alt="" />
                                             <div>
                                                  <p className="text-sm leading-5 mb-1 font-medium text-red-1000">
                                                       Storage Limit Reached
                                                  </p>
                                                  <p className="text-sm leading-5 font-normal text-red-1000">
                                                       You have used all of your available storage. Please delete unused
                                                       files or purchase additional storage to continue uploading
                                                  </p>
                                             </div>
                                        </div>
                                        <button className="text-xs font-medium leading-4 dark:text-gray-1400 dark:bg-white/[0.05] dark:border-white/[15%] text-black-1000 py-1 px-3 border border-gray-1100 bg-white rounded-lg transition ease-in-out duration-500 hover:bg-black-1100 cursor-pointer hover:text-gray-1400">
                                             Manage Storage
                                        </button>
                                   </div>
                              )}
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Storage </h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Manage your files, monitor usage, and upgrade storage if needed.</p>
                              <StorageUsageBar total={200} items={items}></StorageUsageBar>
                              <div className='border-t border-gray-1100 dark:border-white/[10%] mt-2.5 pt-6'>
                                   <div className='border border-gray-1100 dark:border-white/[10%] mb-6 rounded-[14px] p-4 card-bg'>
                                        <h4 className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500 mb-2'>Upgrade Your Storage</h4>
                                        <div className='flex mb-6 gap-2.5 flex-wrap'>
                                             <button type="button" className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] cursor-pointer font-medium leading-5 py-2 md:px-4 px-[27px] flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">
                                                  +5 GB
                                             </button>
                                             <button type="button" className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] cursor-pointer font-medium leading-5 py-2 md:px-4 px-[27px] flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">
                                                  +10 GB
                                             </button>
                                             <button type="button" className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] cursor-pointer font-medium leading-5 py-2 md:px-4 px-[27px] flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">
                                                  +20 GB
                                             </button>
                                             <form action="" className="relative  w-full md:max-w-[373px]">
                                                  <input
                                                       type="text"
                                                       className="text-sm dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-gray-1200 placeholder:text-gray-1200 px-3 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100"
                                                       placeholder="Enter capacity (GB)"
                                                  />
                                             </form>
                                        </div>
                                        <div className='flex items-center flex-wrap mb-6 gap-2'>
                                             <h4 className='text-sm lg:w-auto w-full font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Payment method</h4>
                                             <div className='border border-gray-1100 dark:bg-white dark:border-gray-2000 rounded flex items-center justify-center w-[35px] h-6'>
                                                  <img src="images/Stripe.svg" alt="" />
                                             </div>
                                             <span className='bg-gray-1100 w-1.5 h-1.5 dark:bg-white/[10%] rounded-full block'></span>
                                             <div className='border border-gray-1100 dark:border-white/[10%] rounded flex items-center justify-center md:gap-[14px] gap-2 py-1 px-2.5'>
                                                  <img src="images/Mastercard.svg" alt="" />
                                                  <h6 className='text-sm leading-5 font-normal text-black-1000 dark:text-gray-1400'>**** 8243</h6>
                                             </div>
                                             <Link href="#" className='text-xs font-medium leading-4 text-black-1000 inline-block dark:text-gray-1400 py-2 px-3'>Change Payment Method</Link>
                                        </div>
                                        <div className='flex items-end justify-between'>
                                             <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Your new Storage will be <span className='text-black-1000 dark:text-gray-1400 md:text-lg text-base font-medium leading-7'>+210GB</span></p>
                                             <div className='text-end'>
                                                  <p className='text-sm font-normal mb-4 leading-5 text-gray-1200 dark:text-gray-1500'>Total Paid<span className='text-black-1000 inline-block ml-2.5 dark:text-gray-1400 text-lg font-semibold leading-7'>$25</span></p>
                                                  <button type="button" className="md:text-sm text-xs dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium md:leading-5 leading-4 md:py-2.5 py-2 md:px-8 px-3 inline-block rounded-lg bg-black-1100 shadow-3xl text-gray-1400">Add Credit</button>
                                             </div>
                                        </div>
                                   </div>
                                   <h4 className='text-base leading-6 mb-2 font-semibold text-black-1000 dark:text-gray-1000'>File List</h4>
                                   <FileTab></FileTab>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Page
