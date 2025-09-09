'use client'
import { useState } from "react";

type Row = {
     id: number;
     app: { name: string; img: string };
     location: string,
     date: string;
     status: string,

};

function GPUTable() {

     const data: Row[] = [
          {
               id: 1,
               app: { name: "Chrome MacOS", img: "images/chrome-icon.svg" },
               location: "New York, USA",
               date: "Aug 14, 2025 10:32",
               status: "Revoke",

          },

     ];

     return (
          <>
               <div className="w-full mt-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="lg:w-full md:w-[530px] sm:w-full w-[530px] border-collapse  overflow-hidden">
                         <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1400 text-left text-black-1000 text-sm font-medium">
                              <tr> 
                                   <th className="px-3 py-2.5 dark:border-white/[10%] border-b border-gray-1100 font-medium text-sm leading-5 text-gray-1200 dark:text-gray-1500">Device</th>
                                   <th className="px-3 py-2.5 dark:border-white/[10%] border-b border-gray-1100 font-medium text-sm leading-5 text-gray-1200 dark:text-gray-1500">Location</th>
                                   <th className="px-3 py-2.5 dark:border-white/[10%] border-b border-gray-1100 font-medium text-sm leading-5 text-gray-1200 dark:text-gray-1500">Location</th>
                                   <th className="px-3 py-2.5 dark:border-white/[10%] border-b border-gray-1100 font-medium text-sm leading-5 text-gray-1200 dark:text-gray-1500">Last Active</th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.map((item) => (
                                   <tr key={item.id} className="">


                                        <td className="py-[14px] px-3.5 dark:border-white/[10%] border-b border-gray-200 text-black-1000 dark:text-gray-1400 font-normal text-sm leading-4">
                                             <div className="flex items-center gap-2.5">
                                                  <img src={item.app.img} alt="" className="w-6 h-6 rounded-full" />
                                                  <span className="line-clamp-1 w-20 break-all">{item.app.name}</span> 
                                             </div>
                                        </td>
                                        <td className="py-[14px] px-3.5 dark:border-white/[10%] border-b border-gray-200 text-black-1000 dark:text-gray-1400 font-normal text-sm leading-4">{item.location}</td>

                                        <td className="py-[14px] px-3.5 dark:border-white/[10%] border-b border-gray-200 text-black-1000 dark:text-gray-1400 font-normal text-sm leading-4">{item.date}</td>


                                        <td className="py-[14px] px-3.5 dark:border-white/[10%] border-b border-gray-200 text-red-1000 dark:text-red-1200 font-normal text-sm leading-4">{item.status}</td>

                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div> 
          </>
     );
}

export default GPUTable;
