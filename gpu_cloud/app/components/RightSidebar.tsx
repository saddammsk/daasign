import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link'
import StorageTable from './StorageTable'
function RightSidebar() {
     return (
          <div className='xl:max-w-[340px] max-w-[270px] w-full'>
               <div className="px-4 py-[18px] w-full dark:border-white/[15%] border-b border-gray-1100">
                    <h2 className="text-sm dark:text-gray-1400 font-semibold leading-5 text-black-1000">Fooocus_202508081040</h2>
               </div>
               <div className='p-4'>
                    <TabGroup>
                         <div className='flex  lg:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center justify-between w-full mb-4'>
                              <div className='overflow-auto md:mr-0 -mr-4'>
                                   <TabList className="bg-gray-1000 dark:bg-black-1200 md:w-auto w-[473px] rounded-[10px] p-1 flex items-center">
                                        <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Files</Tab>
                                        <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Tutorials</Tab>
                                        <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Favorites</Tab>
                                        <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] md:min-w-[80px] min-w-[93px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Logs</Tab>
                                   </TabList>
                              </div>
                         </div>
                         <TabPanels>
                              <TabPanel>
                                   <form action="" className="relative mb-4 md:w-auto w-full">
                                        <input
                                             type="text"
                                             className="text-sm dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-gray-1200 placeholder:text-gray-1200 pl-8 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100"
                                             placeholder="Search AI apps..."
                                        />
                                        <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                             <img src="images/Search.svg" alt="" />
                                        </div>
                                   </form>
                                   <div className='flex justify-between mb-4 items-center'>
                                        <h6 className="text-sm dark:text-gray-1400 font-normal leading-5 text-black-1000">Storage</h6>
                                        <ul className='flex items-center gap-2.5'>
                                             <li><Link href="#"><img src="images/Settings-2.svg" className='dark:invert-[1]' alt="" /></Link></li>
                                             <li><Link href="#"><img src="images/Upload.svg" className='dark:invert-[1]' alt="" /></Link></li>
                                             <li><Link href="#"><img src="images/Dots.svg" className='dark:invert-[1]' alt="" /></Link></li>
                                        </ul>
                                   </div>
                                   <StorageTable></StorageTable>
                              </TabPanel>

                              <TabPanel>Content 2</TabPanel>
                              <TabPanel>Content 3</TabPanel>
                         </TabPanels>
                    </TabGroup>
               </div>
          </div>
     )
}

export default RightSidebar
