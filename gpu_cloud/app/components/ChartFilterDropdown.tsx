'use client'
import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Checkbox } from '@headlessui/react'

type Option = {
     id: number
     label: string
}

function StatusDropdown() {
     // Define your checkbox options
     const options = [
          { id: 1, label: 'Last 7 days' },
          { id: 2, label: 'Last 30 days' },
          { id: 3, label: 'Last 3 months' },
     ]

     const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(
          options.reduce((acc, item) => {
               acc[item.id] = false
               return acc
          }, {} as Record<number, boolean>)
     )

     const handleChange = (id: number) => {
          setCheckedItems((prev) => ({
               ...prev,
               [id]: !prev[id],
          }))
     }

     return (
          <div className="relative">
               <Menu>
                    <MenuButton className="inline-flex dark:border-white/[15%] dark:bg-white/[5%] dark:text-gray-1400 cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium leading-4 text-black-1000 border border-gray-1100 shadow-3xl">
                         Last 7 days
                         <img src="images/drop-arrow.svg" className='dark:invert-[1]' alt="" />
                    </MenuButton>

                    <MenuItems
                         transition
                         anchor="bottom end"
                         className="w-[160px] origin-top-right rounded-lg border border-gray-1100 bg-white p-1 shadow-4xl transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                         <div className='overflow-y-auto scrollbar'>
                              {options.map((item) => (
                                   <MenuItem key={item.id}>
                                        <div className="group flex w-full items-center gap-2 text-sm font-normal leading-5 text-black-1100 py-1.5 px-2 rounded-lg hover:bg-gray-1000 transition-all ease-in-out duration-500">
                                             {item.label}
                                        </div>
                                   </MenuItem>
                              ))}
                         </div>
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default StatusDropdown
