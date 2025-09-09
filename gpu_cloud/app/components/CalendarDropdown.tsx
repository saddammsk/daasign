'use client'
import { useState } from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { DayPicker, DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import Calendar from "../components/Calendar";

function CalendarDropdown() {
     const [range, setRange] = useState<DateRange | undefined>({
          from: new Date(2025, 0, 7),
          to: new Date(2025, 0, 11),
     })



     return (
          <div className="relative">
               <Menu>
                    <MenuButton className="inline-flex dark:border-white/[15%] dark:bg-white/[5%] dark:text-gray-1400 cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm font-medium leading-4 text-black border border-gray-300 shadow">
                         <img src="images/Calendar.svg" className='dark:invert-[1]' alt="" />
                         Date
                    </MenuButton>

                    <MenuItems
                         transition anchor="bottom end"
                         className="origin-top-right w-[500px] mt-1 rounded-lg border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-black-1200 p-3 shadow-lg transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                         <Calendar />
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default CalendarDropdown
