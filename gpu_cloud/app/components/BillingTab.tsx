'use client'
import { useState } from "react";
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link'
import SubscriptionTable from './SubscriptionTable'
import { Checkbox } from '@headlessui/react'
function BillingTab() {
     const [showPopup, setShowPopup] = useState(false);

     const handleConfirmCancelation = () => {
          close(); // call your close function
          setShowPopup(true);

          // Auto-hide after 3 seconds (3000ms)
          setTimeout(() => {
               setShowPopup(false);
          }, 3000);
     };
     let [isOpen2, setIsOpen2] = useState(false)
     function open() {
          setIsOpen2(true)
     }

     function close() {
          setIsOpen2(false)
     }
     return (
          <div>
               <TabGroup>
                    <div className='flex  lg:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center justify-between w-full mb-4'>
                         <div className='overflow-auto md:mr-0 -mr-4'>
                              <TabList className="bg-gray-1000 dark:bg-black-1200 rounded-[10px] p-1 flex items-center">
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 min-w-[157px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Subscription</Tab>
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 min-w-[157px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Balance & Credits</Tab>
                              </TabList>
                         </div>
                    </div>
                    <TabPanels>
                         <TabPanel>
                              <div className='border border-gray-1100 dark:border-white/[10%] mb-6 rounded-[14px] p-4 card-bg'>
                                   <div className='flex flex-wrap md:gap-0 gap-[14px] items-start dark:border-white/[15%] pb-4 mb-4 border-b border-gray-1100 justify-between'>
                                        <div>
                                             <h4 className="text-sm font-normal mb-2 leading-5 text-gray-1200 dark:text-gray-1500">Current Plan</h4>
                                             <div className='flex items-center  mb-5'>
                                                  <div className="flex items-center bg-white border border-gray-1000 dark:border-white/[10%] text-black-1000 dark:text-gray-1400 dark:bg-black-1000  gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg  w-fit">
                                                       Pro
                                                  </div>
                                                  <h4 className='text-lg font-medium ml-1.5 mr-2 leading-7 text-black-1000 dark:text-gray-1400'>$29/month</h4>
                                                  <div className="flex items-center bg-gray-1000 text-black-1000 dark:text-gray-1400 dark:bg-black-1000 gap-1 text-xs font-semibold py-1 pl-1 pr-2 rounded-lg w-fit">
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M6.0498 6.55078C6.32595 6.55078 6.5498 6.32692 6.5498 6.05078C6.5498 5.77464 6.32595 5.55078 6.0498 5.55078C5.77366 5.55078 5.5498 5.77464 5.5498 6.05078C5.5498 6.32692 5.77366 6.55078 6.0498 6.55078Z" stroke="#22C55E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                       </svg>
                                                       Active
                                                  </div>
                                             </div>
                                             <h4 className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">Renews on Aug 30, 2025</h4>
                                        </div>
                                        <div>
                                             <h4 className="text-sm font-normal mb-2 leading-5 text-gray-1200 dark:text-gray-1500">Key Features</h4>
                                             <ul>
                                                  <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                       <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Unlimited AI apps & GPU hours</p>
                                                  </li>
                                                  <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                       <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>200 GB storage</p>
                                                  </li>
                                                  <li className='flex items-center gap-2'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                       <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Priority support</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <ul className='flex gap-2.5'>
                                             <li>
                                                  <button type="button" className="text-xs dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-4 py-2 px-3 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">
                                                       Change Plan
                                                  </button>
                                             </li>
                                             <li>
                                                  <button type="button" onClick={open} className="text-xs dark:border-red-1100 dark:text-red-1100 dark:bg-white/[8%] hover:bg-gray-1000 cursor-pointer font-medium leading-4 py-2 px-3 flex items-center gap-2 rounded-lg  border border-red-1000 shadow-3xl text-red-1000">
                                                       Cancel Subscription
                                                  </button>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className='flex flex-wrap md:gap-0 gap-[14px] items-center justify-between'>
                                        <div className='flex items-center flex-wrap  gap-2'>
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
                                        <h4 className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Next renewal: Sep 30, 2025</h4>
                                   </div>
                              </div>
                              <h4 className="text-base leading-6 mb-2 font-semibold text-black-1000 dark:text-gray-1000">Subscription History</h4>
                              <SubscriptionTable></SubscriptionTable>
                         </TabPanel>

                         <TabPanel>
                              <div className='border border-gray-1100 dark:border-white/[10%] mb-6 rounded-[14px] p-4 card-bg'>
                                   <h4 className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500 mb-2'>Quick Top-up</h4>
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
                                   <div className='grid md:grid-cols-2 mb-10 gap-1'>
                                        <ul>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Instant Credit Top-up via Stripe or Cryptocurrency</p>
                                             </li>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Real-Time Balance Tracking while using services</p>
                                             </li>
                                             <li className='flex items-center gap-2'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Payment for Premium GPU Sessions beyond subscription limits</p>
                                             </li>
                                        </ul>
                                        <ul>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Purchase of Additional Storage beyond free tier or plan quota</p>
                                             </li>
                                             <li className='flex items-center gap-2 mb-1'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Full Credit Transaction History (usage & top-ups)</p>
                                             </li>
                                             <li className='flex items-center gap-2'><img src="images/Check.svg" className='dark:invert-[1]' alt="" />
                                                  <p className='text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400'>Activation of Platform Add-ons using credits</p>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className='flex items-end justify-between'>
                                        <p className='text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500'>Recharge Amount <span className='text-black-1000 dark:text-gray-1400 md:text-lg text-base font-medium leading-7'>$25</span></p>
                                        <div className='text-end'>
                                             <p className='text-sm font-normal mb-4 leading-5 text-gray-1200 dark:text-gray-1500'>Total Paid<span className='text-black-1000 inline-block ml-2.5 dark:text-gray-1400 text-lg font-semibold leading-7'>$25</span></p>
                                             <button type="button" className="md:text-sm text-xs dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium md:leading-5 leading-4 md:py-2.5 py-2 md:px-8 px-3 inline-block rounded-lg bg-black-1100 shadow-3xl text-gray-1400">Add Credit</button>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                    </TabPanels>
               </TabGroup>
               <Dialog open={isOpen2} as="div" className="relative z-[999] focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-center justify-center p-4">
                              <DialogPanel
                                   transition
                                   className="w-full max-w-[512px] rounded-[10px] dark:bg-black-1000 dark:border-white/[10%] bg-white shadow-4xl border border-gray-1100 p-4 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                              >
                                   <div className="text-end">
                                        <button onClick={close} className='cursor-pointer'><img src="images/close-icon.svg" className="dark:invert-[1]" alt="" /></button>
                                   </div>
                                   <div className=' mb-4 md:-mt-4'>
                                        <DialogTitle as="h3" className="text-lg mb-1.5 font-semibold dark:text-gray-1400 leading-[100%] text-black-1000">
                                             Are you sure you want to cancel your subscription?
                                        </DialogTitle>
                                        <p className="text-sm leading-5 font-normal text-gray-1200 dark:text-gray-1500">Your plan will remain active until the end of your current billing period. After that, you will lose access to premium features.</p>
                                   </div>
                                   <div className=''>
                                        <div className='border border-gray-1100 dark:border-white/[10%] mb-4 rounded-[14px] p-4 card-bg'>
                                             <div className='flex flex-wrap md:gap-0 gap-[14px] items-start dark:border-white/[15%] justify-between'>
                                                  <div>
                                                       <h4 className="text-sm font-normal mb-2 leading-5 text-gray-1200 dark:text-gray-1500">Current Plan</h4>
                                                       <div className='flex items-center  mb-5'>
                                                            <div className="flex items-center bg-white border border-gray-1000 dark:border-white/[10%] text-black-1000 dark:text-gray-1400 dark:bg-black-1000  gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg  w-fit">
                                                                 Pro
                                                            </div>
                                                            <h4 className='text-lg font-medium ml-1.5 mr-2 leading-7 text-black-1000 dark:text-gray-1400'>$29/month</h4>
                                                            <div className="flex items-center bg-gray-1000 text-black-1000 dark:text-gray-1400 dark:bg-black-1000 gap-1 text-xs font-semibold py-1 pl-1 pr-2 rounded-lg w-fit">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                      <path d="M6.0498 6.55078C6.32595 6.55078 6.5498 6.32692 6.5498 6.05078C6.5498 5.77464 6.32595 5.55078 6.0498 5.55078C5.77366 5.55078 5.5498 5.77464 5.5498 6.05078C5.5498 6.32692 5.77366 6.55078 6.0498 6.55078Z" stroke="#22C55E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                 </svg>
                                                                 Active
                                                            </div>
                                                       </div>
                                                       <h4 className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">Renews on Aug 30, 2025</h4>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex items-start mb-4 gap-2">
                                             <Checkbox
                                                  className="group size-4 dark:bg-white/[0.05] dark:border-white/[15%] flex items-center justify-center rounded bg-white border-2 
                  data-checked:bg-black-1100 data-checked:border-black-1100 border-gray-1100"
                                             >
                                                  <div className="hidden size-4 group-data-checked:flex items-center justify-center">
                                                       <img src="images/tick-icon.svg" className="w-[9px]" alt="" />
                                                  </div>
                                             </Checkbox>
                                             <label htmlFor="" className="text-sm flex-1 block leading-5 font-medium text-black-1000 dark:text-gray-1400">I understand that I will lose all premium benefits after my subscription ends.</label>
                                        </div>
                                        <ul className='flex justify-end gap-2.5'>
                                             <li>
                                                  <button type="button" onClick={close} className="text-sm dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 cursor-pointer transtion ease-in-out duration-500 hover:bg-gray-1000 dark:hover:bg-white/[0.08] font-medium leading-5 py-2 px-4 flex items-center gap-2 rounded-lg bg-white border border-gray-1100 shadow-3xl text-black-1000">
                                                       Cancel
                                                  </button>
                                             </li>
                                             <li>
                                                  <button type="button"
                                                       onClick={() => {
                                                            close();
                                                            handleConfirmCancelation();
                                                       }} className="text-sm  cursor-pointer font-medium dark:bg-red-1100/[60%] dark:border-red-1100/[60%] leading-5 py-2 px-4 flex items-center gap-2 rounded-lg bg-red-1000 border border-red-1000 shadow-3xl text-gray-1900">
                                                       Confirm Cancelation
                                                  </button>
                                             </li>
                                        </ul>
                                   </div>
                              </DialogPanel>
                         </div>
                    </div>
                    <div className='bg-black/[50%] fixed left-0 top-0 w-full h-full'></div>
               </Dialog>
               {showPopup && (
                    <div className="border absolute  top-3 left-0 right-0 z-[999] mx-auto max-w-[356px] dark:text-gray-1400 p-4 flex items-center gap-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-lg bg-white">
                         <img src="images/tick-circle.svg" className="dark:invert-[1]" alt="" />
                         <div className="flex-1">
                              <h4 className="text-sm font-semibold mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                                   Subscription Canceled
                              </h4>
                              <p className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">
                                   Your subscription has been canceled successfully. Your plan will remain active until Aug 30, 2025.
                              </p>
                         </div>
                    </div>
               )}
          </div>
     )
}

export default BillingTab
