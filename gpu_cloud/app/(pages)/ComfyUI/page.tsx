'use client'
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import RightSidebar from '@/app/components/RightSidebar';
import StorageTable from '@/app/components/StorageTable';
import Link from 'next/link';
function page() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

     const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
     };



     let [isOpen2, setIsOpen2] = useState(false)

     function open() {
          setIsOpen2(true)
     }

     function close() {
          setIsOpen2(false)
     }

     return (
          <div className='p-2'>
               <div className="bg-white overflow-hidden dark:bg-black-1000 w-full  rounded-[14px] md:shadow-4xl">
                    <div className="md:px-4 px-2.5 py-2.5 dark:border-white/[15%] border-b border-gray-1100">
                         <div className='flex items-center justify-between flex-wrap gap-2'>
                              <div className='flex items-center gap-4'>
                                   <div className='flex items-center gap-1'>
                                        <img src="images/avatar-3.png" className="rounded-full w-6 h-6" alt="" />
                                        <h2 className="text-base dark:text-gray-1400 font-semibold leading-6 text-black-1000">Fooocus_202508081040</h2>
                                        <div className="text-xs h-fit font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg border border-gray-1100 w-fit">Foocus</div>
                                        <span className='bg-black-1000  dark:bg-gray-1400 w-1.5 h-[1px]'></span>
                                        <h6 className='text-base font-medium leading-6 text-black-1000 dark:text-gray-1400'>$0.25/h</h6>
                                   </div>
                              </div>
                              <ul className="flex items-center gap-2">
                                   <li>
                                        <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/refresh.svg" />Relaunch</button>
                                   </li>
                                   <li>
                                        <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">00:29:45</button>
                                   </li>
                                   <li>
                                        <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Power.svg" />Stop</button>
                                   </li>
                              </ul>
                              <div className='flex gap-2 flex-wrap'>
                                   <button type="button" onClick={open} className="text-xs lg:hidden dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Copy.svg" />Manage File</button>
                                   <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Copy.svg" /> App ID</button>
                                   <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Copy.svg" /> Save as Template</button>
                                   <button onClick={toggleSidebar} type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 p-0.5 md:flex hidden items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">    <img src="images/collapse-icon.svg" className='dark:invert-[1] rotate-180' alt="" /></button>
                              </div>
                         </div>
                    </div>
                    <div className="flex">
                         <div className={`p-1  transition-all ease-in-out duration-300 ${isSidebarOpen ? 'xl:w-[calc(100%_-_340px)] w-full' : 'w-full'}`}>
                              <div className="bg-gray-1400 min-h-[calc(100vh_-_90px)] dark:bg-black-1100 dark:border-white/[10%]  border border-gray-1100 rounded-[10px] ">
                                   <div className="overflow-auto">
                                        <div className="flex items-center justify-between lg:w-auto w-[992px] 2xl:pr-[14px] xl:pr-2 pr-[14px] dark:border-white/[10%] border-b border-gray-1100">
                                             <div className="flex items-center 2xl:px-4 xl:px-2 px-4">
                                                  <h6 className="text-base py-1.5 font-semibold leading-6 text-black-1000 dark:text-gray-1400">ComfyUl</h6>
                                                  <ul className="flex gap-3 pl-6 py-1.5 dark:border-white/[10%] border-r border-gray-1100 pr-[11px]">
                                                       <li><Link href="#" className="text-xs font-medium leading-6 text-black-1000 dark:text-gray-1400">Workflow</Link></li>
                                                       <li><Link href="#" className="text-xs font-medium leading-6 text-black-1000 dark:text-gray-1400">Edit</Link></li>
                                                       <li><Link href="#" className="text-xs font-medium leading-6 text-black-1000 dark:text-gray-1400">Help</Link></li>
                                                  </ul>
                                                  <ul className="flex items-center gap-2.5 px-2.5 py-1.5 dark:border-white/[10%] border-r border-gray-1100">
                                                       <li><Link href="#" className="text-xs font-medium leading-6 text-black-1000 dark:text-gray-1400">Unsaved Workflow</Link></li>
                                                       <li><span className="bg-gray-1700 rounded-full block w-1 h-1"></span></li>
                                                  </ul>
                                                  <Link href="#" className="px-2.5 block"><img src="images/Plus.svg" alt="" /></Link>
                                             </div>
                                             <div className="flex gap-[11px] items-center">
                                                  <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Puzzle.svg" />Manager</button>
                                                  <div className="flex items-center bg-gray-1000 dark:bg-gray-1600 rounded-md py-1.5 px-2 gap-2">
                                                       <Link href="#"><img src="images/Star-2.svg" className="dark:invert-[1]" alt="" /></Link>
                                                       <Link href="#"><img src="images/Fuel.svg" className="dark:invert-[1]" alt="" /></Link>
                                                       <Link href="#"><img src="images/Fuel.svg" className="dark:invert-[1]" alt="" /></Link>
                                                       <Link href="#"><img src="images/Forward.svg" className="dark:invert-[1]" alt="" /></Link>
                                                  </div>
                                                  <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-1.5 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"><img alt="" className="dark:invert-[1] w-4" src="images/Images.svg" />Show Image Feed</button>
                                                  <Link href="#"><img src="images/PanelBottom.svg" className="dark:invert-[1]" alt="" /></Link>
                                                  <Link href="#"><img src="images/Menu.svg" className="dark:invert-[1]" alt="" /></Link>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex">
                                        <div className="w-12 dark:bg-black-1100 bg-gray-1400 h-[calc(100vh_-_123px)] p-2 flex items-center justify-between flex-col">
                                             <ul>
                                                  <li><Link href="#" className="block p-2 mb-1"><img src="images/History-black.svg" className="dark:invert-[1]" alt="" /></Link></li>
                                                  <li><Link href="#" className="block p-2 mb-1"><img src="images/BookText.svg" className="dark:invert-[1]" alt="" /></Link></li>
                                                  <li><Link href="#" className="block p-2 mb-1"><img src="images/Box.svg" alt="" className="dark:invert-[1]" /></Link></li>
                                                  <li><Link href="#" className="block p-2 mb-1"><img src="images/FolderOpen.svg" className="dark:invert-[1]" alt="" /></Link></li>
                                             </ul>
                                             <ul>
                                                  <li><Link href="#" className="block p-2 mb-1"><img src="images/Moon.svg" className="dark:invert-[1]" alt="" /></Link></li>
                                                  <li><Link href="#" className="block p-2"><img src="images/BookText.svg" className="dark:invert-[1]" alt="" /></Link></li>
                                             </ul>
                                        </div>
                                        <div className="w-full dark:bg-gray-160032">
                                             <img src="images/grapgh.png" className="w-full block dark:hidden h-[calc(100vh_-_123px)] object-cover object-center" alt="" />
                                             <img src="images/dark-grapgh.png" className="hidden dark:block" alt="" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className={`lg:block hidden transition-all ease-in-out duration-300 ${isSidebarOpen ? 'w-auto' : 'w-0'}`}>
                              <RightSidebar></RightSidebar>
                         </div>
                    </div>
               </div>
               <Dialog open={isOpen2} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-center justify-center p-4">
                              <DialogPanel
                                   transition
                                   className="w-full max-w-[353px] rounded-[10px] dark:bg-black-1000 dark:border-white/[10%] bg-white shadow-4xl border border-gray-1100 p-4 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                              >
                                   <div className='flex mb-4 items-center justify-between'>
                                        <DialogTitle as="h3" className="text-sm font-semibold dark:text-gray-1400 leading-[100%] text-black-1000">
                                             Fooocus_202508081040
                                        </DialogTitle>
                                        <button onClick={close} className='cursor-pointer'><img src="images/close-icon.svg" className="dark:invert-[1]" alt="" /></button>
                                   </div>
                                   <div className=''>
                                        <TabGroup>
                                             <div className='flex  lg:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center justify-between w-full mb-4'>
                                                  <div className='overflow-auto md:mr-0 -mr-4'>
                                                       <TabList className="bg-gray-1000 dark:bg-black-1200 rounded-[10px] p-1 flex items-center">
                                                            <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Files</Tab>
                                                            <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Tutorials</Tab>
                                                            <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Favorites</Tab>
                                                            <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Logs</Tab>
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
                                                                 <li><Link href="#"><img src="images/Settings-2.svg" alt="" /></Link></li>
                                                                 <li><Link href="#"><img src="images/Upload.svg" alt="" /></Link></li>
                                                                 <li><Link href="#"><img src="images/Dots.svg" alt="" /></Link></li>
                                                            </ul>
                                                       </div>
                                                       <StorageTable></StorageTable>
                                                  </TabPanel>

                                                  <TabPanel>Content 2</TabPanel>
                                                  <TabPanel>Content 3</TabPanel>
                                             </TabPanels>
                                        </TabGroup>
                                   </div>
                              </DialogPanel>
                         </div>
                    </div>
                    <div className='bg-black/[50%] fixed left-0 top-0 w-full h-full'></div>
               </Dialog>
          </div >
     )
}

export default page
