'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef } from 'react'
import Link from "next/link";
import LanguageDropdown from '@/app/components/LanguageDropdown';
import { RadioGroup } from '@headlessui/react'
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
                                   <Link href="#" className="text-sm block mr-2.5 font-normal dark:text-gray-1500 md:pl-4 pl-3 leading-5 text-gray-1200">Add App</Link>
                                   <img src="images/arrow-right.svg" alt="" />
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Launch App</p>

                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              <div className='flex items-center md:mb-6 mb-4 gap-4'>
                                   <button type="button" className="w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer rounded-lg flex items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                        <img src="images/arrow-left.svg" className="dark:invert-[1]" alt="" />
                                   </button>
                                   <div>
                                        <h2 className="md:text-3xl text-2xl dark:text-gray-1400 font-semibold md:leading-9 leading-[100%] text-black-1000 mb-1">Launch an AI App Instantly</h2>
                                        <p className="text-sm dark:text-gray-1500 font-normal leading-5 text-gray-1200">Choose from a variety of GPU tiers</p>
                                   </div>
                              </div>
                              <div className='bg-gray-1000 md:p-8 px-4 py-3 dark:border-white/[10%] dark:bg-black-1100 border border-gray-1100 rounded-[10px] '>
                                   <div className='max-w-[850px] mx-auto'>
                                        <div className="border lg:gap-0 gap-3 dark:bg-black-1100 bg-white dark:border-white/[10%] border-gray-1100 mb-6 rounded-[10px] flex items-center justify-between py-3 px-4">
                                             <div className="flex flex-1 items-start gap-3">
                                                  <img className="dark:invert-[1]" alt="" src="images/BookMinus.svg" />
                                                  <p className="text-sm leading-5 mb-1 font-normal text-black-1000 dark:text-gray-1400">
                                                       See the instruction here
                                                  </p>
                                             </div>
                                             <button className="text-xs font-medium leading-4 dark:text-gray-1400 dark:bg-white/[0.05] dark:border-white/[15%] text-black-1000 py-1 px-3 border border-gray-1100 bg-white rounded-lg transition ease-in-out duration-500 hover:bg-black-1100 cursor-pointer hover:text-gray-1400">
                                                  View Instruction
                                             </button>
                                        </div>
                                        <div className='flex mb-6 items-center gap-3'>
                                             <img src="images/avatar-big.png" className='w-[100px] h-[100px] rounded-full' alt="" />
                                             <div className='flex-1'>
                                                  <label htmlFor="" className='text-sm font-medium leading-5 text-black-1000 mb-2 block dark:text-gray-1400'>Name</label>
                                                  <input type="text" className="text-sm dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-black-1000 placeholder:text-black-1000 px-3 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100 dark:text-gray-1400" placeholder="Fooocus_202508081035" />
                                                  <div className='flex mt-5 items-center gap-1.5'>
                                                       <div className="text-xs font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg bg-white dark:bg-black-1000 border border-gray-1100 w-fit">Foocus</div>
                                                       <div className="text-xs font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg bg-white dark:bg-black-1000 border border-gray-1100 w-fit">Image Generation</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='border-b border-gray-1100 dark:border-white/[10%] pb-6 mb-6'>
                                             <label htmlFor="" className='text-sm font-medium leading-5 text-black-1000 mb-2 block dark:text-gray-1400'>Version</label>
                                             <select className="text-sm dark:text-gray-1400 bg-position-[right_20px_center] bg-[url(/../images/drop-arrow.svg)] bg-no-repeat appearance-none dark:border-white/[15%] dark:bg-white/[5%] dark:placeholder:text-gray-1500 font-normal leading-5 text-black-1000 placeholder:text-black-1000 px-3 h-9 w-full rounded-lg bg-white shadow-3xl border border-gray-1100" >
                                                  <option value="latest . 2024-04-24">latest . 2024-04-24</option>
                                             </select>
                                        </div>
                                        <div>
                                             <h4 className='text-xl font-semibold leading-7 text-black-1000 dark:text-gray-1400'>Customize Your Run</h4>
                                             <p className="text-sm dark:text-gray-1500 font-normal leading-5 text-gray-1200">Select a version, choose your preferred GPU, and set the runtime — all in one place.</p>
                                        </div>
                                        <div className='border-b border-gray-1100 dark:border-white/[10%] pb-6 mb-6'>
                                             <RadioGroup
                                                  value={selected}
                                                  onChange={setSelected}
                                                  aria-label="Server size"
                                                  className="grid xl:grid-cols-3 lg:grid-cols-2 mt-4 gap-2.5"
                                             >
                                                  {gpuOptions.map((gpu, idx) => (
                                                       <RadioGroup.Option
                                                            key={idx}
                                                            value={gpu}
                                                            className="group block relative rounded-[10px] dark:bg-gray-1600 dark:border-white/[10%] bg-gray-1000 pt-1.5 px-1.5 pb-1.5 border border-gray-1100 data-checked:bg-gray-1800 dark:data-checked:bg-black-1300 data-checked:border-black-1100 dark:data-checked:border-gray-1100"
                                                       >
                                                            <div className="flex mb-2 w-full items-center gap-2">
                                                                 <div className="border dark:bg-transparent dark:border-white/[10%] border-gray-1100 bg-white w-4 h-4 rounded-full shadow-3xl flex items-center justify-center">
                                                                      <div className="w-1.5 h-1.5 dark:bg-gray-1400 rounded-full hidden group-data-checked:block bg-black-1000"></div>
                                                                 </div>
                                                                 <h6 className="text-base dark:text-gray-1400 font-medium leading-6 text-black-1000">
                                                                      {gpu.name}
                                                                 </h6>
                                                            </div>

                                                            <div className="bg-white dark:bg-black-1100 dark:border-white/[10%] mb-2 rounded-lg border border-gray-1100 p-2.5">
                                                                 <div className="flex mb-2.5 items-center justify-between">
                                                                      <h6 className="text-sm leading-5 font-normal dark:text-gray-1500 text-gray-1200">
                                                                           VRAM{" "}
                                                                           <span className="inline-block text-black-1000 text-base font-medium dark:text-gray-1400 ml-1">
                                                                                {gpu.vram}
                                                                           </span>
                                                                      </h6>
                                                                      <div className="text-xs dark:bg-black-1200 dark:border-transparent font-semibold leading-4 text-black-1000 dark:text-gray-1400 bg-gray-1000 rounded-lg inline-block py-0.5 px-2">
                                                                           {gpu.max}
                                                                      </div>
                                                                 </div>

                                                                 <div className="flex items-center justify-between">
                                                                      <div className="flex items-center gap-2 flex-1">
                                                                           <h6 className="text-sm leading-5 font-normal  dark:text-gray-1500 text-gray-1200">
                                                                                RAM{" "}
                                                                                <span className="inline-block text-black-1000 text-base font-medium dark:text-gray-1400 ml-1">
                                                                                     {gpu.ram}
                                                                                </span>
                                                                           </h6>
                                                                           <span className="bg-gray-1700 w-1 h-1 rounded-full"></span>
                                                                           <h6 className="text-sm leading-5 font-normal  dark:text-gray-1500 text-gray-1200">
                                                                                vCPU{" "}
                                                                                <span className="inline-block text-black-1000 text-base font-medium dark:text-gray-1400 ml-1">
                                                                                     {gpu.vcpu}
                                                                                </span>
                                                                           </h6>
                                                                      </div>
                                                                      <div
                                                                           className={`text-xs font-semibold leading-4 rounded-lg inline-block py-0.5 px-2
                                                                                     ${gpu.perf === "Medium"
                                                                                     ? " text-blue-1100 bg-blue-1200 "
                                                                                     : "text-green-1000 bg-green-1100 dark:bg-gray-1400 dark:border-transparent"
                                                                                }`}
                                                                      >
                                                                           {gpu.perf}
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            <h6 className="text-sm text-end leading-5 font-normal  dark:text-gray-1500 text-gray-1200">
                                                                 {gpu.price}{" "}
                                                                 <span className="inline-block text-green-1000 text-xs font-medium  ml-1">
                                                                      {gpu.discount}
                                                                 </span>
                                                            </h6>
                                                       </RadioGroup.Option>
                                                  ))}
                                             </RadioGroup>
                                        </div>
                                        <ul className='flex items-center justify-end gap-2.5'>
                                             <li>
                                                  <button
                                                       type="button"
                                                       className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000"
                                                  >
                                                       Create
                                                  </button>
                                             </li>
                                             <li>
                                                  <button
                                                       type="button"
                                                       className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400"
                                                  >
                                                       Create and Start
                                                  </button>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
