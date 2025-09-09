'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import AppSlider from '@/app/components/AppSlider';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
interface AppItem {
     name: string;
     description: string;
     tags: string[];
     status: string;
     statusimg: string;
     avatar: string;
     fileSize: string;
     version: string;
     gpu: string;
}
type Row = {
     id: number;
     app: { name: string; };
     gpu: string;
     cost: string;
     date: string;
};
function Page() {
     const data: Row[] = [
          {
               id: 1,
               date: '08/08/2025',
               app: { name: "$ 0.02" },
               gpu: "Medium",
               cost: "0h 4m",
          },
          {
               id: 2,
               date: '08/08/2025',
               app: { name: "$ 0.02" },
               gpu: "Medium",
               cost: "0h 4m",
          },
     ];
     const [search, setSearch] = useState("");
     const [isOpen, setIsOpen] = useState(false)
     let [isOpen3, setIsOpen3] = useState(false)
     const sidebarRef = useRef<HTMLDivElement>(null)
     const [showNotification, setShowNotification] = useState(false);

     const handleClick = () => {
          setShowNotification(true);

          // Auto-hide after 3 seconds (optional)
          setTimeout(() => {
               setShowNotification(false);
          }, 3000);
     };
     const apps = [
          {
               id: 1,
               name: "Foocus",
               description: "AI-powered image app",
               tags: ["image", "gen"],
               avatar: "images/avatar-3.png",
               statusimg: "images/logout-icon.svg",
               status: "stopped",
               fileSize: "15.8 MB",
               version: "Latest • Apr 24, 2024",
               gpu: "Medium Tier • Bargain • $0.25/h",
          },
          {
               id: 2,
               name: "Foocus",
               description: "AI-powered image app",
               tags: ["image", "gen"],
               avatar: "images/avatar-3.png",
               statusimg: "images/Loader.svg",
               status: "Running 00:16:33",
               fileSize: "15.8 MB",
               version: "Latest • Apr 24, 2024",
               gpu: "Medium Tier • Bargain • $0.25/h",
          },
          {
               id: 3,
               name: "Foocus",
               description: "AI-powered image app",
               tags: ["image", "gen"],
               avatar: "images/avatar-3.png",
               statusimg: "images/Loader.svg",
               status: "Running 00:16:33",
               fileSize: "15.8 MB",
               version: "Latest • Apr 24, 2024",
               gpu: "Medium Tier • Bargain • $0.25/h",
          },
     ];


     function open() {
          setIsOpen3(true)
     }

     function close() {
          setIsOpen3(false)
     }
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
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">My Apps</p>
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
                                                       {apps.length === 0 ? (

                                                            <div className="text-center col-span-3 py-20">
                                                                 <img
                                                                      src="images/no-found.svg"
                                                                      className="inline-block dark:invert-[1]"
                                                                      alt=""
                                                                 />
                                                                 <h4 className="text-base font-semibold mt-6 mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                                                                      No Apps Yet
                                                                 </h4>
                                                                 <p className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">
                                                                      You haven't launched any AI apps yet. Start by choosing one from
                                                                      our app catalog and run it instantly with your GPU credit.
                                                                 </p>
                                                            </div>
                                                       ) : filteredApps.length === 0 ? (
                                                            // Case 2: Apps exist but search found nothing
                                                            <div className="text-center col-span-3 py-20">
                                                                 <img
                                                                      src="images/no-found.svg"
                                                                      className="inline-block dark:invert-[1]"
                                                                      alt=""
                                                                 />
                                                                 <h4 className="text-base font-semibold mt-6 mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                                                                      No results found
                                                                 </h4>
                                                                 <p className="text-sm font-normal leading-5 max-w-[400px] mx-auto text-gray-1200 dark:text-gray-1500">
                                                                      Check the spelling or try different keywords
                                                                 </p>
                                                            </div>
                                                       ) : (
                                                            // Case 3: Show filtered apps
                                                            filteredApps.map((app: AppItem, index: number) => (
                                                                 <div
                                                                      key={index}
                                                                      className="bg-gray-1000 dark:border-white/[10%] flex flex-col justify-between dark:bg-black-1200 border border-gray-1100 rounded-[10px] p-1.5 pb-2"
                                                                 >
                                                                      {/* Header */}
                                                                      <div className="flex mb-2 items-center justify-between">
                                                                           <div className="flex items-center bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
                                                                                <img src={app.statusimg} alt="" />
                                                                                <span className="text-gray-700 dark:text-gray-1400 capitalize">
                                                                                     {app.status}
                                                                                </span>
                                                                           </div>
                                                                           <ul className="flex items-center gap-2.5">
                                                                                <li>
                                                                                     <Link href="/" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
                                                                                          <img
                                                                                               src="images/History.svg"
                                                                                               className="dark:invert-[1]"
                                                                                               alt=""
                                                                                          />
                                                                                     </Link>
                                                                                </li>
                                                                                <li>
                                                                                     <Link href="/">
                                                                                          <img
                                                                                               src="images/Trash.svg"
                                                                                               className="dark:invert-[1]"
                                                                                               alt=""
                                                                                          />
                                                                                     </Link>
                                                                                </li>
                                                                           </ul>
                                                                      </div>

                                                                      {/* Middle content */}
                                                                      <div className="border mb-2 dark:text-gray-1400 py-2 px-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-[10px] bg-white">
                                                                           <div className="flex items-center gap-2.5">
                                                                                <div className="flex-1">
                                                                                     <div className="flex mb-2 items-center bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
                                                                                          <span className="text-gray-700 dark:text-gray-1400">
                                                                                               {app.name}
                                                                                          </span>
                                                                                     </div>
                                                                                     <div className="flex mb-1 items-center gap-1">
                                                                                          <img
                                                                                               src={app.avatar}
                                                                                               className="w-6 h-6 rounded-full"
                                                                                               alt=""
                                                                                          />
                                                                                          <div className="flex items-center gap-1">
                                                                                               <div className="max-w-[189px]">
                                                                                                    <h6 className="text-base truncate font-medium leading-6 text-black-1000 dark:text-gray-1400">
                                                                                                         {app.name}_202508081040
                                                                                                    </h6>
                                                                                               </div>
                                                                                               <img
                                                                                                    src="images/PencilLine.svg"
                                                                                                    className="dark:invert-[1]"
                                                                                                    alt=""
                                                                                               />
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                                <button
                                                                                     type="button"
                                                                                     className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-2 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"
                                                                                >
                                                                                     <img
                                                                                          src="images/Copy.svg"
                                                                                          alt=""
                                                                                          className="dark:invert-[1]"
                                                                                     />{" "}
                                                                                     App ID
                                                                                </button>
                                                                           </div>

                                                                           {/* File size */}
                                                                           <div className="mb-2.5">
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">
                                                                                     File Size
                                                                                </h6>
                                                                                <div className="flex items-center gap-1">
                                                                                     <img
                                                                                          src="images/Save.svg"
                                                                                          className="dark:invert-[1]"
                                                                                          alt=""
                                                                                     />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">
                                                                                          {app.fileSize}
                                                                                     </h6>
                                                                                </div>
                                                                           </div>

                                                                           {/* Version */}
                                                                           <div className="mb-2.5">
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">
                                                                                     Version
                                                                                </h6>
                                                                                <div className="flex items-center gap-1">
                                                                                     <img
                                                                                          src="images/Calendar-2.svg"
                                                                                          className="dark:invert-[1]"
                                                                                          alt=""
                                                                                     />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">
                                                                                          {app.version}
                                                                                     </h6>
                                                                                </div>
                                                                           </div>

                                                                           {/* GPU */}
                                                                           <div>
                                                                                <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">
                                                                                     GPU Config
                                                                                </h6>
                                                                                <div className="flex items-center gap-1">
                                                                                     <img
                                                                                          src="images/Cpu.svg"
                                                                                          className="dark:invert-[1]"
                                                                                          alt=""
                                                                                     />
                                                                                     <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">
                                                                                          {app.gpu}
                                                                                     </h6>
                                                                                </div>
                                                                           </div>
                                                                      </div>

                                                                      {/* Footer with conditional buttons */}
                                                                      <div className="flex items-center justify-between">
                                                                           <img
                                                                                src="images/BookMinus.svg"
                                                                                className="dark:invert-[1]"
                                                                                alt=""
                                                                           />
                                                                           {app.status === "stopped" ? (
                                                                                <Link href="/StartApp"
                                                                                     type="button"
                                                                                     className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400"
                                                                                >
                                                                                     Start App
                                                                                </Link>
                                                                           ) : (
                                                                                <div className="flex gap-2">
                                                                                     <button
                                                                                          type="button"
                                                                                          className="text-sm bg-black-1100/[50%] text-gray-1400 flex items-center gap-2 cursor-not-allowed font-medium leading-5 py-2 px-4 rounded-lg"
                                                                                     >
                                                                                          <img src="images/loader-white.svg" alt="" /> Running
                                                                                     </button>
                                                                                     <button
                                                                                          type="button"
                                                                                          className="text-sm bg-red-500 text-gray-1900 flex items-center gap-2 font-medium leading-5 py-2 px-4 rounded-lg"
                                                                                     >
                                                                                          <img src="images/Power-white.svg" alt="" /> Stop
                                                                                     </button>
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 </div>
                                                            ))
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
               <div
                    className={`fixed h-screen top-0 z-[99] max-w-[384px] w-full bg-white transition-all duration-300
        ${isOpen ? "right-0 visible" : "-right-full invisible"}`}
               >
                    <div className='relative z-[999] bg-white  dark:bg-black-1000 dark:border-white/[10%] shadow-4xl p-4 border border-gray-1100  h-full'>
                         <div className='flex mb-4 items-center justify-between'>
                              <div className="text-sm font-semibold dark:text-gray-1400 leading-[100%] text-black-1000">
                                   Details
                              </div>
                              <button className='cursor-pointer' onClick={() => setIsOpen(false)}><img src="images/close-icon.svg" className="dark:invert-[1]" alt="" /></button>
                         </div>
                         <div className="flex mb-4 items-center gap-1">
                              <img
                                   src="images/avatar-2.png"
                                   className="w-6 h-6 rounded-full"
                                   alt=""
                              />
                              <div className="flex items-center gap-1">
                                   <div className="max-w-[189px]">
                                        <h6 className="text-base  font-medium leading-6 text-black-1000 dark:text-gray-1400">
                                             Fooocus_202508081040
                                        </h6>
                                   </div>
                              </div>
                         </div>
                         <h6 className="text-sm leading-5 font-normal mb-1 dark:text-gray-1500 text-gray-1200">Version</h6>
                         <div className="flex mb-4 items-center gap-1">
                              <img src="images/Calendar-2.svg" className="dark:invert-[1]" alt="" />
                              <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">Latest • Apr 24, 2024</h6>
                         </div>
                         <ul className='flex items-center justify-end gap-2.5'>
                              <li><button type="button" className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400">Authorize</button></li>
                              <li><button type="button" onClick={() => (open(), setIsOpen(false))} className="text-sm cursor-pointer bg-red-500 text-gray-1900 flex items-center gap-2 font-medium leading-5 py-2 px-4 rounded-lg">Delete</button></li>
                         </ul>
                         <div className='border-t border-gray-1100 dark:border-white/[10%] mt-4 pt-4'>
                              <h6 className="text-sm leading-5 font-medium dark:text-gray-1400 text-black-1000">History</h6>
                              <div className="w-full my-4  dark:border-white/[10%] border border-gray-1100  rounded-lg">
                                   <table className="w-full border-collapse">
                                        <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1400 text-left text-black-1000 text-sm font-medium">
                                             <tr>
                                                  <th className="px-2 py-3 font-medium dark:border-white/[10%] border-b border-gray-1100">
                                                       Date
                                                  </th>
                                                  <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Balance Used</th>
                                                  <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Hardware</th>
                                                  <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Duration</th>

                                             </tr>
                                        </thead>
                                        <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                                             {data.map((item) => (
                                                  <tr key={item.id} className="">
                                                       <td className="py-[14px] truncate max-w-[70px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                            {item.date}
                                                       </td>
                                                       <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                            <div className="flex items-center gap-1">
                                                                 {item.app.name}
                                                            </div>
                                                       </td>
                                                       <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                            {item.gpu}
                                                       </td>
                                                       <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">{item.cost}</td>

                                                  </tr>
                                             ))}
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
                    <div className='bg-black/[50%] fixed left-0 top-0 z-[9] w-full h-full'></div>
               </div>
               <Dialog open={isOpen3} as="div" className="relative z-[999] focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-center justify-center p-4">
                              <DialogPanel
                                   transition
                                   className="w-full max-w-[512px] rounded-[10px] dark:bg-black-1000 dark:border-white/[10%] bg-white shadow-4xl border border-gray-1100 p-4 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                              >
                                   <div className=''>
                                        <h4 className='text-lg font-semibold mb-2 text-black-1000 dark:text-gray-1400'>Delete App</h4>
                                        <p className='text-sm leading-5 font-normal text-gray-1200 mb-4 dark:text-gray-1500'>The files you have saved in this app will be permanently deleted by clicking "Delete". This action cannot be undone.</p>
                                        <ul className='flex items-center justify-end gap-2'>
                                             <li><button type="button" onClick={close} className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] cursor-pointer font-medium leading-5 py-2 px-4 flex items-center  rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">Cancel</button></li>
                                             <li><button type="button" onClick={() => (handleClick(), close())}
                                                  className="text-sm cursor-pointer bg-red-500 text-gray-1900 flex items-center gap-2 font-medium leading-5 py-2 px-4 rounded-lg">Delete</button></li>
                                        </ul>
                                   </div>
                              </DialogPanel>
                         </div>
                    </div>
                    <div className='bg-black/[50%] fixed left-0 top-0 w-full h-full'></div>
               </Dialog>
               {showNotification && (
                    <div className="border absolute top-3 left-0 right-0 z-[999] mx-auto max-w-[356px] dark:text-gray-1400 p-4 flex items-center gap-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-lg bg-white">
                         <img src="images/tick-circle.svg" className="dark:invert-[1]" alt="" />
                         <div>
                              <h4 className="text-sm font-semibold mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                                   App Deleted
                              </h4>
                              <p className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">
                                   The app has been removed from your My Apps list.
                              </p>
                         </div>
                    </div>
               )}
               <div className="border hidden absolute top-3 left-0 right-0 z-[999] mx-auto max-w-[356px] dark:text-gray-1400 p-4  items-center gap-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-lg bg-white">
                    <img src="images/sonner.svg" className="dark:invert-[1]" alt="" />
                    <div>
                         <h4 className="text-sm font-semibold mb-1 leading-6 text-red-1000">
                              Delete Failed
                         </h4>
                         <p className="text-sm font-normal leading-5 text-red-1000 ">
                              We couldn’t remove the app. Please try again.
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default Page
