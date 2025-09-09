"use client";
import { useState } from "react";
import {
     addMonths,
     subMonths,
     format,
     startOfMonth,
     endOfMonth,
     startOfWeek,
     endOfWeek,
     addDays,
     isSameMonth,
     isSameDay,
     isWithinInterval,
} from "date-fns";

export default function RangeCalendar() {
     const [startDate, setStartDate] = useState<Date | null>(null);
     const [endDate, setEndDate] = useState<Date | null>(null);

     // left aur right calendar ke months
     const [leftMonth, setLeftMonth] = useState(new Date(2025, 7, 1)); // August 2025
     const [rightMonth, setRightMonth] = useState(addMonths(new Date(2025, 7, 1), 1));

     // date click logic
     const onDateClick = (day: Date) => {
          if (!startDate || (startDate && endDate)) {
               setStartDate(day);
               setEndDate(null);
          } else if (startDate && !endDate) {
               if (day < startDate) {
                    setEndDate(startDate);
                    setStartDate(day);
               } else {
                    setEndDate(day);
               }
          }
     };

     const months = Array.from({ length: 12 }).map((_, i) =>
          format(new Date(2025, i, 1), "MMM")
     );
     const years = Array.from({ length: 10 }).map((_, i) => 2020 + i);

     const renderCalendar = (
          month: Date,
          setMonth: (d: Date) => void,
          disablePrev?: boolean
     ) => {
          const monthStart = startOfMonth(month);
          const monthEnd = endOfMonth(monthStart);
          const startDateGrid = startOfWeek(monthStart);
          const endDateGrid = endOfWeek(monthEnd);

          const rows = [];
          let days = [];
          let day = startDateGrid;

          while (day <= endDateGrid) {
               for (let i = 0; i < 7; i++) {
                    const cloneDay = day;
                    const isSelectedStart = startDate && isSameDay(day, startDate);
                    const isSelectedEnd = endDate && isSameDay(day, endDate);
                    const inRange =
                         startDate &&
                         endDate &&
                         isWithinInterval(day, { start: startDate, end: endDate });

                    days.push(
                         <div
                              key={day.toString()}
                              className={`flex items-center hover:bg-black-1000 dark:hover:bg-gray-1100 hover:text-white dark:hover:text-black-1100 justify-center text-sm font-normal  leading-5 h-8 w-8 m-auto cursor-pointer rounded-lg
              ${!isSameMonth(day, monthStart)
                                        ? "text-gray-1200 dark:text-gray-1500"
                                        : "text-black-1000 dark:text-white"
                                   }
              ${inRange ? "bg-gray-1000 dark:bg-gray-1600 rounded-none" : ""}
              ${isSelectedStart || isSelectedEnd ? "!bg-black-1100 dark:!bg-gray-1100 text-white dark:!text-black-1100 !rounded-lg" : ""}
            `}
                              onClick={() => onDateClick(cloneDay)}
                         >
                              {format(day, "d")}
                         </div>
                    );
                    day = addDays(day, 1);
               }
               rows.push(
                    <div key={day.toString()} className="grid grid-cols-7">
                         {days}
                    </div>
               );
               days = [];
          }

          return (
               <div className="w-full bg-white dark:bg-black-1200">
                    {/* Header with dropdowns */}
                    <div className="flex justify-between items-center mb-4 gap-2">
                         <button
                              onClick={() => !disablePrev && setMonth(subMonths(month, 1))}
                              disabled={disablePrev}
                              className="w-8 h-8 flex items-center justify-center cursor-pointer dark:hover:bg-white/[0.05] rounded-lg opacity-50"
                         >
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5 9L1 5L5 1" stroke="#0A0A0A" className="dark:stroke-gray-1500" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                         </button>

                         <div className="flex gap-2">
                              {/* Month dropdown */}
                              <div className="relative">
                                   <select
                                        value={format(month, "MMM")}
                                        onChange={(e) => {
                                             const newMonth = new Date(month);
                                             newMonth.setMonth(
                                                  new Date(`${e.target.value} 1, ${format(month, "yyyy")}`)
                                                       .getMonth()
                                             );
                                             setMonth(newMonth);
                                        }}
                                        className="cursor-pointer border border-solid border-gray-1100 dark:border-white/[0.05] bg-white dark:bg-white/[0.15] rounded-lg h-[34px] pr-6 pl-2 shadow-3xl text-black-1000 dark:text-gray-1400 font-normal text-sm leading-5 appearance-none"
                                   >
                                        {months.map((m, i) => (
                                             <option key={i} value={m}>
                                                  {m}
                                             </option>
                                        ))}
                                   </select>
                                   <span className="flex items-center justify-center w-4 h-5 absolute top-1/2 -translate-y-1/2 right-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4 6L8 10L12 6" stroke="#0A0A0A" className="dark:stroke-gray-1500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                   </span>
                              </div>
                              {/* Year dropdown */}
                              <div className="relative">
                                   <select
                                        value={format(month, "yyyy")}
                                        onChange={(e) => {
                                             const newMonth = new Date(month);
                                             newMonth.setFullYear(parseInt(e.target.value));
                                             setMonth(newMonth);
                                        }}
                                        className="cursor-pointer border border-solid border-gray-1100 dark:border-white/[0.05] bg-white dark:bg-white/[0.15] rounded-lg h-[34px] pr-6 pl-2 shadow-3xl text-black-1000 dark:text-gray-1400 font-normal text-sm leading-5 appearance-none"
                                   >
                                        {years.map((y) => (
                                             <option key={y} value={y}>
                                                  {y}
                                             </option>
                                        ))}
                                   </select>
                                   <span className="flex items-center justify-center w-4 h-5 absolute top-1/2 -translate-y-1/2 right-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4 6L8 10L12 6" stroke="#0A0A0A" className="dark:stroke-gray-1500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                   </span>
                              </div>
                         </div>

                         <button
                              onClick={() => setMonth(addMonths(month, 1))}
                              className="w-8 h-8 cursor-pointer flex items-center justify-center dark:hover:bg-white/[0.05] rounded-lg opacity-50"
                         >
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1 9L5 5L1 1" stroke="#0A0A0A" className="dark:stroke-gray-1500" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>

                         </button>
                    </div>

                    {/* Days of week */}
                    <div className="grid grid-cols-7 mb-2">
                         {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                              <div key={d} className="text-center text-gray-1200 dark:text-gray-1500 text-xs font-normal leading-4 py-[2.5px]">
                                   {d}
                              </div>
                         ))}
                    </div>

                    {/* Dates */}
                    {rows}
               </div>
          );
     };

     return (
          <div className="flex gap-4">
               {renderCalendar(leftMonth, setLeftMonth, true)}
               {renderCalendar(rightMonth, setRightMonth)}

          </div>
     );
}
