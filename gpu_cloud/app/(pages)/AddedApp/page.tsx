'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import AppSlider from '@/app/components/AppSlider';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import AppNotification from '@/app/components/AppNotification';

function Page() {
     const [search, setSearch] = useState("");
     const [isOpen, setIsOpen] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)

     // dummy apps data (replace with real data later)
     const apps = [
          {
               name: "Foocus",
               description: "AI-powered image app",
               tags: ["image", "gen"],
               avatar: "images/avatar-3.png"
          },
     ]

     // filter apps based on search
     const filteredApps = apps.filter(
          (app) =>
               app.name.toLowerCase().includes(search.toLowerCase()) ||
               app.description.toLowerCase().includes(search.toLowerCase()) ||
               app.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
               )
     );

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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Add App</p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Add App </h2>
                              <p className="text-sm dark:text-gray-1500 font-normal md:mb-6 mb-2 leading-5 text-gray-1200">Choose an AI app and launch it instantly using your GPU credit.</p>
                              <AppSlider></AppSlider>
                              <div className=''>
                                   <TabGroup>
                                        <div className='flex lg:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center justify-between w-full mb-4'>
                                             <div className='overflow-auto md:mr-0 -mr-4'>
                                                  <TabList className="bg-gray-1000 dark:bg-black-1200 md:w-auto w-[473px] rounded-[10px] p-1 flex items-center">
                                                       <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[93px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">All</Tab>
                                                       <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[93px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Image Gen</Tab>
                                                       <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[93px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Text Gen</Tab>
                                                       <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[93px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Noteebook</Tab>
                                                       <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[93px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Other</Tab>
                                                  </TabList>
                                             </div>
                                             <form action="" className="relative md:w-auto w-full">
                                                  <input
                                                       type="text"
                                                       value={search}
                                                       onChange={(e) => setSearch(e.target.value)}
                                                       className="text-sm dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-gray-1200 placeholder:text-gray-1200 pl-8 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100"
                                                       placeholder="Search AI apps..."
                                                  />
                                                  <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                                       <img src="images/Search.svg" alt="" />
                                                  </div>
                                             </form>
                                        </div>
                                        <TabPanels>
                                             <TabPanel>
                                                  <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-2.5">
                                                       {filteredApps.length > 0 ? (
                                                            filteredApps.map((app, index) => (
                                                                 <div key={index} className="bg-gray-1000 dark:border-white/[10%] flex flex-col justify-between dark:bg-black-1200 border border-gray-1100 rounded-[10px] p-1.5 pb-2">
                                                                      <div className='flex mb-2 items-center justify-between'>
                                                                           <div className='flex items-center bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit'>
                                                                                <img src="images/logout-icon.svg" alt="" />
                                                                                <span className="text-gray-700 dark:text-gray-1400">Stopped</span>
                                                                           </div>
                                                                           <ul className='flex items-center gap-2.5'>
                                                                                <li>
                                                                                     <Link href="/"><img src="images/History.svg" className='dark:invert-[1]' alt="" /></Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="/"><img src="images/Trash.svg" className='dark:invert-[1]' alt="" /></Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="border mb-2 dark:text-gray-1400 py-2 px-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-[10px] bg-white">
                                                                           <div className='flex items-center gap-2.5'>
                                                                                <div className='flex-1'>
                                                                                     <div className='flex mb-2 items-center bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit'>
                                                                                          <span className="text-gray-700 dark:text-gray-1400">Foocus</span>
                                                                                     </div>
                                                                                     <div className="flex mb-1 items-center gap-1">
                                                                                          <img src={app.avatar} className="w-6 h-6 rounded-full" alt="" />
                                                                                          <div className=' flex items-center gap-1 '>
                                                                                               <div className='max-w-[189px]'>
                                                                                                    <h6 className="text-base truncate font-medium leading-6 text-black-1000 dark:text-gray-1400">
                                                                                                         Fooocus_202508081040
                                                                                                    </h6>
                                                                                               </div>
                                                                                               <img src="images/PencilLine.svg" className='dark:invert-[1]' alt="" />
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                                <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-2 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img src="images/Copy.svg" alt="" className='dark:invert-[1]' /> App ID</button>
                                                                           </div>
                                                                           <div className='mb-2.5'>
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">File Size</h6>
                                                                                <div className='flex items-center gap-1'>
                                                                                     <img src="images/Save.svg" className='dark:invert-[1]' alt="" />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">15.8 MB</h6>
                                                                                </div>
                                                                           </div>
                                                                           <div className='mb-2.5'>
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">Version</h6>
                                                                                <div className='flex items-center gap-1'>
                                                                                     <img src="images/Calendar-2.svg" className='dark:invert-[1]' alt="" />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">Latest • Apr 24, 2024</h6>
                                                                                </div>
                                                                           </div>
                                                                           <div className=''>
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">GPU Config</h6>
                                                                                <div className='flex items-center gap-1'>
                                                                                     <img src="images/Cpu.svg" className='dark:invert-[1]' alt="" />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">Medium Tier • Bargain • $0.25/h</h6>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <img src="images/BookMinus.svg" className="dark:invert-[1]" alt="" />
                                                                           <button
                                                                                type="button"
                                                                                className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400"
                                                                           >
                                                                                Start App
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                            ))
                                                       ) : (
                                                            <div className='text-center col-span-3 py-20'>
                                                                 <img src="images/no-found.svg" className='inline-block dark:invert-[1]' alt="" />
                                                                 <h4 className='text-base font-semibold mt-6 mb-1 leading-6 text-black-1000 dark:text-gray-1400'>No results found</h4>
                                                                 <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Check the spelling or try different keywords</p>
                                                            </div>
                                                       )}
                                                  </div>
                                             </TabPanel>

                                             <TabPanel>Content 2</TabPanel>
                                             <TabPanel>Content 3</TabPanel>
                                        </TabPanels>
                                   </TabGroup>
                              </div>
                         </div>
                    </div>
               </div>
               <AppNotification></AppNotification>
          </div>
     )
}

export default Page
