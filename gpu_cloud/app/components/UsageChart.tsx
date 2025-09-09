"use client";

import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer,
     CartesianGrid,
} from "recharts";

const data = [
     { date: "Aug 1", value: 200, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 2", value: 350, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 3", value: 220, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 4", value: 280, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 5", value: 180, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 6", value: 210, gpu: "A100", model: "Stable Diffusion", total: "$5" },
     { date: "Aug 7", value: 190, gpu: "A100", model: "Stable Diffusion", total: "$5" },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
     if (active && payload && payload.length) {
          const { gpu, model, total } = payload[0].payload;
          return (
               <div className="bg-white shadow-lg rounded-lg px-2.5 py-1.5 border border-gray-1100">
                    <p className="font-medium text-xs leading-4 text-black-1000">{label}</p>
                    <p className="flex items-center text-xs leading-4 text-gray-1200 gap-2">
                         <span className="w-2 h-2 rounded-[2px] bg-blue-1000 inline-block" />
                         {gpu}
                    </p>
                    <p className="font-medium text-xs leading-4 text-black-1000">{model}</p>
                    <div className="flex justify-between font-medium mt-1 border-t border-gray-1100 pt-1">
                         <span className="font-medium text-xs leading-4 text-black-1000">Total</span>
                         <span className="font-medium text-xs leading-4 text-black-1000">{total}</span>
                    </div>
               </div>
          );
     }
     return null;
};

export default function UsageChart() {
     return (
          <div className="w-full h-[300px] text-gray-1200 dark:text-gray-1500 text-xs">
               <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={70}>
                         <CartesianGrid
                              strokeDasharray="3 3"
                              vertical={false}
                              stroke="#E5E5E5"
                         />
                         <XAxis
                              dataKey="date"
                              axisLine={false}
                              tickLine={false}
                         />

                         {/* ✅ Y Axis (left) */}
                         <YAxis
                              axisLine={false}
                              tickLine={false}
                              ticks={[100, 200, 300, 400]} // custom tick values
                         />
                         <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                         <Bar dataKey="value" fill="#325FEC" radius={[4, 4, 4, 4]} />
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
}
