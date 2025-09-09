import React, { ReactNode } from "react";

interface AccountOverviewProps {
     storageFull: boolean;
     used: number;
     limit: number;
}

interface Card {
     id: number;
     title: string;
     icon: string;
     iconClass?: string;
     badge?: string;
     content: ReactNode;
}

const AccountOverview: React.FC<AccountOverviewProps> = ({
     storageFull,
     used,
     limit,
}) => {
     const cards: Card[] = [
          {
               id: 1,
               title: "Balance",
               icon: "images/dollarsign.svg",
               content: (
                    <h2 className="text-3xl font-semibold leading-9 dark:text-gray-1400 text-black-1000">
                         {storageFull ? "$0.00" : "$5.00"}
                    </h2>
               ),
          },
          {
               id: 2,
               title: "Storage Usage",
               icon: "images/Cloud-2.svg",
               content: (
                    <>
                         <div className="bg-gray-1300 mb-2.5 h-2 overflow-hidden rounded-full w-full">
                              <div
                                   className={`h-2 ${storageFull ? "bg-red-500 w-full" : "bg-blue-1000"
                                        }`}
                                   style={{ width: `${(used / limit) * 100}%` }}
                              ></div>
                         </div>
                         <p className="text-sm font-normal leading-5 dark:text-gray-1400 text-black-1000">
                              {used} GB / {limit} GB used
                         </p>
                    </>
               ),
          },
          {
               id: 3,
               title: "Active GPU Sessions",
               icon: "images/dashboard.svg",
               iconClass: "w-5 h-5",
               content: (
                    <>
                         <p className="text-sm font-normal mb-1 dark:text-gray-1400 leading-5 text-black-1000">
                              2 Running
                         </p>
                         <ul className="flex gap-1">
                              <li>
                                   <span className="text-xs dark:bg-gray-1100 dark:text-black-1100 font-semibold leading-4 text-gray-1400 py-0.5 px-3 block rounded-lg bg-black-1100 shadow-3xl">
                                        NVIDIA A100
                                   </span>
                              </li>
                              <li>
                                   <span className="text-xs dark:bg-gray-1100 dark:text-black-1100 font-semibold leading-4 text-gray-1400 py-0.5 px-3 block rounded-lg bg-black-1100 shadow-3xl">
                                        NVIDIA 4090
                                   </span>
                              </li>
                         </ul>
                    </>
               ),
          },
          {
               id: 4,
               title: "Subscription",
               icon: "images/CreditCard.svg",
               badge: "Trial User",
               content: (
                    <h2 className="text-3xl dark:text-gray-1400 font-semibold leading-9 text-black-1000">
                         {storageFull ? "0h" : "18h"}{" "}
                         <span className="text-sm leading-5 font-normal">remaining</span>
                    </h2>
               ),
          },
     ];

     return (
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 md:mb-6 mb-4">
               {cards.map(({ id, title, icon, iconClass, badge, content }) => (
                    <div
                         key={id}
                         className="bg-gray-1000 dark:border-white/[10%] dark:bg-black-1200 border border-gray-1100 rounded-[10px] p-1.5"
                    >
                         <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 mb-2">
                                   <img
                                        src={icon}
                                        alt=""
                                        className={iconClass || "dark:invert-[1]"}
                                   />
                                   <h4 className="text-sm dark:text-gray-1400 font-normal leading-5 text-black-1000">
                                        {title}
                                   </h4>
                              </div>
                              {badge && (
                                   <span className="text-xs dark:bg-gray-1100 dark:text-black-1100 font-semibold leading-4 text-gray-1400 py-0.5 px-3 block rounded-lg bg-black-1100 shadow-3xl">
                                        {badge}
                                   </span>
                              )}
                         </div>
                         <div className="border dark:text-gray-1400 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 px-4 rounded-[10px] bg-white flex flex-col justify-center min-h-[84px]">
                              {content}
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default AccountOverview;
