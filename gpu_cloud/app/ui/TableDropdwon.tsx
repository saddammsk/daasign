import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


function TableDropdwon() {
     return (
          <div className="">
               <Menu>
                    <MenuButton className="inline-flex w-8 h-8 dark:hover:bg-gray-1600 cursor-pointer justify-center rounded-lg hover:bg-gray-1000 items-center bg-transparent border-none">
                         <img src="images/dots.svg" className='dark:invert-[1]' alt="" />
                    </MenuButton>

                    <MenuItems
                         transition
                         anchor="bottom end"
                         className="w-[180px] origin-top-right rounded-lg dark:border-white/[10%] dark:bg-black-1200 border border-gray-1100 bg-white p-1 shadow-4xl transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                         <MenuItem>
                              <button className="group flex w-full dark:text-gray-1400 dark:hover:bg-gray-1600 items-center gap-2 text-sm cursor-pointer font-normal leading-5 text-black-1100 py-1.5 px-2 rounded-lg hover:bg-gray-1000 transition-all ease-in-out duration-500">
                                   <img src="images/Power-gray.svg" className='dark:invert-[1]' alt="" />Start
                              </button>
                         </MenuItem>
                         <MenuItem>
                              <button className="group flex w-full items-center gap-2 text-sm cursor-pointer font-normal leading-5 text-red-1000 py-1.5 px-2 rounded-lg hover:bg-gray-1000 transition-all ease-in-out duration-500">
                                   <img src="images/Trash-red.svg" alt="" />Delete
                              </button>
                         </MenuItem>
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default TableDropdwon
