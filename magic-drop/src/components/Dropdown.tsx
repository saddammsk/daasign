import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
function Dropdown() {
     return (
          <div className="">
               <Menu>
                    <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-1200 px-2 py-1.5 text-sm/6 font-semibold text-white/[46%] shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
                         <img src='images/uk.png' className='w-4 h-4' alt=""></img>ENG <img src='images/angle-down-solid.svg' className='w-2.5 brightness-110' alt=''></img>
                    </MenuButton>

                    <MenuItems
                         transition
                         anchor="bottom end"
                         className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                    >
                         <MenuItem>
                              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">

                                   Edit
                                   <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘E</kbd>
                              </button>
                         </MenuItem>
                         <MenuItem>
                              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">

                                   Duplicate
                                   <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
                              </button>
                         </MenuItem>
                         <div className="my-1 h-px bg-white/5" />
                         <MenuItem>
                              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">

                                   Archive
                                   <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
                              </button>
                         </MenuItem>
                         <MenuItem>
                              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">

                                   Delete
                                   <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
                              </button>
                         </MenuItem>
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default Dropdown
