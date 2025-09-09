'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import AppSlider from '@/app/components/AppSlider';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Card from '@/app/components/Card';
const apps = [
     {
          id: 1,
          avatar: "images/avatar-3.png",
          name: "Fooocus",
          description:
               "An open-source image generator combining Stable Diffusion and MidJourney for high-quality results, supporting upscaling, variations, inpainting, and outpainting.",
          tags: ["🔥 Hot", "Image Generation"],
          rating: 4.0,
          stars: [1, 1, 1, 1, 0],
          bestWith: ["A100", "4090"],
     },
     {
          id: 2,
          avatar: "images/avatar-3.png",
          name: "Auto1111 WebUI Forge",
          description:
               "Stable Diffusion WebUI Forge is an AI image generation tool with an intuitive interface, adjustable settings, and advanced models for high-quality, customizable visuals.",
          tags: ["🔥 Hot", "Image Generation"],
          rating: 5.0,
          stars: [1, 1, 1, 1, 1],
          bestWith: ["A100", "4090", "A6000", "3090"],
     },
     {
          id: 3,
          avatar: "images/avatar-2.png",
          name: "ComfyUI",
          description:
               "ComfyUI is a modular AI tool for image, video, and audio processing, offering fast rendering, low resource usage, plugin support, and customizable workflows.",
          tags: ["🔥 Hot", "Image Generation", "Video Generation"],
          rating: 5.0,
          stars: [1, 1, 1, 1, 1],
          bestWith: ["A100", "4090", "A6000", "3080 Ti"],
     },
     {
          id: 4,
          avatar: "images/avatar-5.png",
          name: "RVC",
          description:
               "A VITS-based voice transformation system with low latency and high-quality conversion, allowing real-time custom model training.",
          tags: ["🔥 Hot", "Video Generation", "Audio Generation"],
          rating: 4.0,
          stars: [1, 1, 1, 1, 0],
          bestWith: ["T4", "V100", "A10", "A100"],
     },
     {
          id: 5,
          avatar: "images/avatar-4.png",
          name: "FaceFusion",
          description:
               "A deep-learning-powered face-swapping tool with precise facial tracking, video enhancement, and advanced algorithms for seamless results.",
          tags: ["🔥 Hot", "Video Generation"],
          rating: 5.0,
          stars: [1, 1, 1, 1, 1],
          bestWith: ["A100", "3090", "A5000", "4090"],
     },
     {
          id: 6,
          avatar: "images/avatar-1.png",
          name: "diffusion-pipe",
          description:
               "Diffusion-Pipe enables multi-GPU training for large diffusion models, supporting Flux and LoRA fine-tuning, pipeline parallelism, and easy model extension.",
          tags: ["🔥 Hot", "Lora Model Training"],
          rating: 5.0,
          stars: [1, 1, 1, 1, 1],
          bestWith: ["A100", "4090", "A6000", "3080 Ti"],
     },
];
function page() {
     const [search, setSearch] = useState("");

     // filter apps based on search
     const filteredApps = apps.filter(
          (app) =>
               app.name.toLowerCase().includes(search.toLowerCase()) ||
               app.description.toLowerCase().includes(search.toLowerCase()) ||
               app.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
               )
     );
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
                                                            filteredApps.map((app) => (
                                                                 <Card key={app.id} >
                                                                      <div className="border mb-2 dark:text-gray-1400 py-2 px-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-[10px] bg-white">
                                                                           {/* Header */}
                                                                           <div className="flex mb-1 items-center gap-1">
                                                                                <img src={app.avatar} className="w-6 h-6 rounded-full" alt="" />
                                                                                <h6 className="text-base font-medium leading-6 text-black-1000 dark:text-gray-1400">
                                                                                     {app.name}
                                                                                </h6>
                                                                           </div>

                                                                           {/* Description */}
                                                                           <p className="text-limit2 dark:text-gray-1500 text-sm font-normal leading-5 text-gray-1200">
                                                                                {app.description}
                                                                           </p>

                                                                           {/* Tags */}
                                                                           <div className="flex gap-1 flex-wrap my-2.5">
                                                                                {app.tags.map((tag, i) => (
                                                                                     <div
                                                                                          key={i}
                                                                                          className="text-xs dark:bg-black-1200 dark:border-transparent font-semibold leading-4 text-black-1000 dark:text-gray-1400 border border-gray-1100 bg-gray-1000 rounded-lg inline-block py-0.5 px-2"
                                                                                     >
                                                                                          {tag}
                                                                                     </div>
                                                                                ))}
                                                                           </div>

                                                                           {/* Rating */}
                                                                           <h4 className="text-sm font-normal dark:text-gray-1500 leading-normal text-gray-1200 mb-1">
                                                                                Rating
                                                                           </h4>
                                                                           <div className="flex items-center gap-1 mb-2.5">
                                                                                <h5 className="text-base font-medium leading-6 text-black-1000 dark:text-gray-1400">
                                                                                     {app.rating.toFixed(1)}
                                                                                </h5>
                                                                                <ul className="flex items-center gap-1">
                                                                                     {app.stars.map((star, i) => (
                                                                                          <li key={i}>
                                                                                               <img
                                                                                                    src={star ? "images/Star.svg" : "images/empty-star.svg"}
                                                                                                    alt=""
                                                                                               />
                                                                                          </li>
                                                                                     ))}
                                                                                </ul>
                                                                           </div>

                                                                           {/* Best With */}
                                                                           <div className="flex items-center gap-1 flex-wrap">
                                                                                <h6 className="text-sm font-normal dark:text-gray-1500 leading-5 text-gray-1200">
                                                                                     ⚡ Best with
                                                                                </h6>
                                                                                {app.bestWith.map((gpu, i) => (
                                                                                     <div
                                                                                          key={i}
                                                                                          className="text-xs font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg border border-gray-1100 w-fit"
                                                                                     >
                                                                                          {gpu}
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                      </div>
                                                                 </Card>
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
          </div>
     )
}

export default page
