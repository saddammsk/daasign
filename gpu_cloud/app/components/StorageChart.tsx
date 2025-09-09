"use client";
import {
     PieChart,
     Pie,
     Cell,
     Tooltip,
     ResponsiveContainer,
} from "recharts";
import React from "react";

interface StorageChartProps {
     data: { name: string; value: number; color: string }[];
     freeValue: number;
}

const CustomTooltip = ({ active, payload }: any) => {
     if (active && payload && payload.length) {
          return (
               <div className="bg-white shadow-lg rounded-lg px-2.5 py-1.5 border border-gray-1100">
                    {payload.map((entry: any, index: number) => (
                         <div key={index} className="flex items-center gap-2 mb-1">
                              <span
                                   className="w-2 h-2 rounded-[2px] bg-gray-1000"
                                   style={{ backgroundColor: entry.payload.color }}
                              />
                              <span className="text-xs font-normal text-gray-1200">
                                   {entry.name}
                              </span>
                              <span className="ml-auto text-xs font-normal text-black-1000">
                                   {entry.value}GB
                              </span>
                         </div>
                    ))}
               </div>
          );
     }
     return null;
};

export default function StorageChart({ data, freeValue }: StorageChartProps) {
     return (
          <div className="w-full h-[250px] relative flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                         <Pie
                              data={data}
                              innerRadius={70}
                              outerRadius={100}
                              dataKey="value"
                              stroke="none"
                              startAngle={90}
                              endAngle={480}
                         >
                              {data.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                         </Pie>
                         <Tooltip content={<CustomTooltip />} />
                    </PieChart>
               </ResponsiveContainer>

               {/* Center text */}
               <div className="absolute text-center">
                    <h2 className="text-3xl dark:text-gray-1400 font-bold text-black-1000">
                         {freeValue} GB
                    </h2>
                    <p className="text-xs dark:text-gray-1500 font-normal text-gray-1200">
                         Free
                    </p>
               </div>
          </div>
     );
}
