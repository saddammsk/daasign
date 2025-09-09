"use client";
import React from "react";

type UsageItem = {
     name: string;
     value: number; // GB
     color: string;
};

type StorageUsageBarProps = {
     total: number;
     items: UsageItem[];
};

const StorageUsageBar: React.FC<StorageUsageBarProps> = ({ total, items }) => {
     const used = items.reduce((acc, item) => acc + item.value, 0);

     return (
          <div className="w-full">
               {/* Header */}
               <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                         <img src="images/Cloud-2.svg" alt="" className="dark:invert-[1]" />
                         <h4 className="text-sm dark:text-gray-1500 font-normal leading-5 text-gray-1200">
                              Storage Usage
                         </h4>
                    </div>
                    <span className="text-lg leading-7 font-semibold text-black-1000 dark:text-gray-1400">
                         {used.toFixed(1)} GB / {total} GB used
                    </span>
               </div>

               {/* Bar */}
               <div className="w-full h-2 flex rounded overflow-hidden bg-gray-1300 dark:bg-gray-2100">
                    {items.map((item, idx) => (
                         <div
                              key={idx}
                              className="h-full"
                              style={{
                                   width: `${(item.value / total) * 100}%`,
                                   backgroundColor: item.color,
                              }}
                         />
                    ))}
               </div>

               {/* Legend */}
               <div className="flex flex-wrap gap-1 mt-2.5 text-xs">
                    {items.map((item, idx) => (
                         <div
                              key={idx}
                              className="flex items-center gap-1.5 px-2 py-[1px] dark:bg-white/[0.05] border border-gray-1100 dark:border-white/[10%] rounded-lg bg-white text-black-1000 text-xs leading-4 font-semibold dark:text-gray-1400"
                         >
                              <span
                                   className="w-1.5 h-1.5 rounded-full"
                                   style={{ backgroundColor: item.color }}
                              />
                              {item.name}
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default StorageUsageBar;
