'use client'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
const plans = {
     monthly: [
          {
               name: "Pro",
               price: "$29",
               period: "/month",
               storage: "200GB",
               features: ["Unlimited AI app access", "Unlimited GPU hours"],
               refund: "30 days",
               active: true,
          },
          {
               name: "Premium",
               price: "$99",
               period: "/month",
               storage: "1TB",
               features: ["Unlimited AI app access", "Unlimited GPU hours"],
               refund: "30 days",
               active: false,
          },
     ],
     oneTime: [
          {
               name: "Trial",
               price: "$5",
               period: "one-time fee",
               storage: "10GB",
               features: [
                    "Unlimited AI app & GPU hours (GPUs under $0.20/hr)",
                    "24h time limit, 30-minute GPU session cap",
               ],
               refund: null,
               countdown: "6h:59m",
               active: false,
          },
          {
               name: "Pro",
               price: "$29",
               period: "/month",
               storage: "200GB",
               features: ["Unlimited AI app access", "Unlimited GPU hours"],
               refund: "30 days",
               active: true,
          },
          {
               name: "Premium",
               price: "$99",
               period: "/month",
               storage: "1TB",
               features: ["Unlimited AI app access", "Unlimited GPU hours"],
               refund: "30 days",
               active: false,
          },
     ],
};

function PricingTab() {

     return (
          <div className="w-full px-6 xl:mt-0 lg:mt-[115px] mt-[168px]">

               <TabGroup>
                    <div className='flex  lg:flex-nowrap justify-center flex-wrap xl:gap-0 gap-4 items-center w-full mb-4'>
                         <div className='overflow-auto md:mr-0 -mr-4'>
                              <TabList className="bg-gray-1000 dark:bg-black-1200 rounded-[10px] p-1 flex items-center">
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 min-w-[129px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Monthly</Tab>
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 min-w-[129px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Yearly</Tab>
                              </TabList>
                         </div>
                    </div>
                    <TabPanels>
                         <TabPanel>
                              <div className="max-w-[812px] w-full mx-auto">
                                   <div className="grid lg:grid-cols-2 gap-3">
                                        {plans.monthly.map((plan, idx) => (
                                             <div
                                                  key={idx}
                                                  className={`border border-gray-1100 dark:border-white/[10%] rounded-[14px] p-3 ${plan.active ? "active-card dark:border-white/[10%]" : "dark:border-white/[10%]"
                                                       }`}
                                             >
                                                  {/* Header */}
                                                  <div className="flex items-center mb-3 bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
                                                       <span className="text-gray-700 dark:text-gray-1400">{plan.name}</span>
                                                  </div>

                                                  {/* Price */}
                                                  <h2 className="text-[36px] font-medium leading-10 text-black-1000 dark:text-gray-1400">
                                                       {plan.price}{" "}
                                                       <span className="text-lg font-medium leading-7 text-gray-1200 dark:text-gray-1500">
                                                            {plan.period}
                                                       </span>
                                                  </h2>

                                                  {/* Storage + Features */}
                                                  <div className="border border-gray-1100  dark:border-white/[10%] rounded-lg p-3 pb-8 my-3">
                                                       <div className="flex items-center justify-between">
                                                            <h6 className="text-lg font-medium leading-7 text-gray-1200 dark:text-gray-1500">
                                                                 Storage
                                                            </h6>
                                                            <span className="md:text-4xl font-semibold text-3xl leading-10 text-black-1000 dark:text-gray-1400 block">
                                                                 {plan.storage}
                                                            </span>
                                                       </div>
                                                       <div className="mt-4">
                                                            <h4 className="text-lg font-medium leading-7 mb-2.5 text-black-1000 dark:text-gray-1400">
                                                                 Key Features
                                                            </h4>
                                                            <ul>
                                                                 {plan.features.map((feature, fIdx) => (
                                                                      <li key={fIdx} className="flex items-center gap-2 mb-1">
                                                                           <img src="images/Check.svg" className="dark:invert-[1]" alt="" />
                                                                           <p className="text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400">
                                                                                {feature}
                                                                           </p>
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       </div>
                                                  </div>

                                                  {/* Refund Policy */}
                                                  {plan.refund && (
                                                       <div className="flex items-center justify-between">
                                                            <h6 className="text-lg leading-7 font-normal text-gray-2200">Refund Policy</h6>
                                                            <h6 className="text-xl leading-[100%] font-medium text-black-1000 dark:text-gray-1400">
                                                                 {plan.refund}
                                                            </h6>
                                                       </div>
                                                  )}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </TabPanel>

                         <TabPanel>
                              <div className="border absolute top-0 left-0 w-[calc(100%_-_48px)] m-6 flex md:flex-nowrap flex-wrap lg:gap-0 gap-3 dark:bg-black-1100 dark:border-white/[10%] border-gray-1100 md:mb-6 mb-2 rounded-[10px] items-center justify-between py-3 px-4">
                                   <div className="flex md:flex-1 items-start gap-3">
                                        <img src="images/CircleAlert.svg" alt="" />
                                        <div>
                                             <p className="text-sm leading-5 mb-1 font-medium text-red-1000">
                                                  Trial ends in 6 hours. Upgrade to continue using GPU apps without limits.
                                             </p>
                                        </div>
                                   </div>
                                   <button className="text-xs font-medium leading-4 dark:text-gray-1400 dark:bg-white/[0.05] dark:border-white/[15%] text-black-1000 py-1 px-3 border border-gray-1100 bg-white rounded-lg transition ease-in-out duration-500 hover:bg-black-1100 cursor-pointer hover:text-gray-1400">
                                        Upgrade Plan
                                   </button>
                              </div>
                              <div className="grid xl:grid-cols-3  lg:grid-cols-2 gap-3">
                                   {plans.oneTime.map((plan, idx) => (
                                        <div
                                             key={idx}
                                             className={`border border-gray-1100  dark:border-white/[10%] rounded-[14px] p-3 ${plan.active ? "active-card dark:border-white/[10%]" : "dark:border-white/[10%]"
                                                  }`}
                                        >
                                             {/* Header */}
                                             <div className="flex items-center mb-3 bg-white dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
                                                  <span className="text-gray-700 dark:text-gray-1400">{plan.name}</span>
                                             </div>

                                             {/* Price */}
                                             <h2 className="text-[36px] font-medium leading-10 text-black-1000 dark:text-gray-1400">
                                                  {plan.price}{" "}
                                                  <span className="text-lg font-medium leading-7 text-gray-1200 dark:text-gray-1500">
                                                       {plan.period}
                                                  </span>
                                             </h2>

                                             {/* Storage + Features */}
                                             <div
                                                  className={`rounded-lg p-3 my-3 ${plan.refund ? "border  dark:border-white/[10%] border-gray-1100 pb-8" : ""
                                                       }`}
                                             >
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-lg font-medium leading-7 text-gray-1200 dark:text-gray-1500">
                                                            Storage
                                                       </h6>
                                                       <span className="md:text-4xl font-semibold text-3xl leading-10 text-black-1000 dark:text-gray-1400 block">
                                                            {plan.storage}
                                                       </span>
                                                  </div>
                                                  <div className="mt-4">
                                                       <h4 className="text-lg font-medium leading-7 mb-2.5 text-black-1000 dark:text-gray-1400">
                                                            Key Features
                                                       </h4>
                                                       <ul>
                                                            {plan.features.map((feature, fIdx) => (
                                                                 <li key={fIdx} className="flex items-center gap-2 mb-1">
                                                                      <img src="images/Check.svg" className="dark:invert-[1]" alt="" />
                                                                      <p className="text-sm font-normal leading-5 text-black-1000 dark:text-gray-1400">
                                                                           {feature}
                                                                      </p>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  </div>
                                             </div>

                                             {/* Refund or Countdown */}
                                             {plan.refund ? (
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-lg leading-7 font-normal text-gray-2200">Refund Policy</h6>
                                                       <h6 className="text-xl leading-[100%] font-medium text-black-1000 dark:text-gray-1400">
                                                            {plan.refund}
                                                       </h6>
                                                  </div>
                                             ) : (
                                                  <h6 className="text-base leading-[100%] font-medium text-black-1000 dark:text-gray-1400">
                                                       {plan.countdown}
                                                  </h6>
                                             )}
                                        </div>
                                   ))}
                              </div>
                         </TabPanel>
                    </TabPanels>
               </TabGroup>
          </div>
     )
}

export default PricingTab
