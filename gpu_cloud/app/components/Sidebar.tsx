'use client';
import Link from 'next/link'
import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Switch } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { useTheme } from "next-themes";
function Sidebar() {
     const { theme, setTheme, resolvedTheme } = useTheme();
     const pathname = usePathname();
     const [mounted, setMounted] = useState(false);
     const mainMenu = [
          { href: '/', label: 'Dashboard', icon: 'images/grid-icon.svg' },
          { href: '/AddApp', label: 'Add App', icon: 'images/list.svg' },
          { href: '/MyApp', label: 'My Apps', icon: 'images/grid-icon2.svg' },
          { href: '/GPUSessions', label: 'GPU Sessions', icon: 'images/dashboard.svg' },
          { href: '/Storage', label: 'Storage', icon: 'images/cloud.svg' },
     ];


     const infoMenu = [
          { href: '/PlatformUpdates', label: 'Platform Updates', icon: 'images/refresh.svg' },
     ];

     const bottomMenu = [
          { href: '/Settings', label: 'Settings', icon: 'images/Settings.svg' },
          { href: '/help', label: 'Get Help', icon: 'images/list.svg' },
     ];

     // Common link classes
     const linkClasses = (href: string) =>
          `p-2 flex items-center gap-2 text-sm leading-[100%] rounded-md transition-colors ${pathname === href
               ? 'bg-gray-1000 font-medium text-black-1100 dark:bg-black-1200 dark:text-gray-1400'
               : 'font-normal text-black-1100 hover:bg-gray-1000 dark:hover:bg-black-1200 dark:text-gray-1400'
          }`;

     useEffect(() => setMounted(true), []);
     if (!mounted) return null;

     const isDark = resolvedTheme === "dark";
     return (
          <div className="max-w-[256px] sidebar-inner   overflow-auto h-screen  w-full font-geist fixed top-0 md:left-0 -left-full transition-all ease-in-out duration-500 z-[99]">
               <div className='dark:bg-black-1100 md:bg-transparent bg-gray-1400 flex flex-col justify-between relative z-[999]  p-2 h-full'>
                    {/* Top Section */}
                    <div>
                         {/* Logo */}
                         <div className="p-2">
                              <Link href="/" className="py-[5.5px] block px-1.5">
                                   <img src="images/logo.svg" className="inline-block dark:hidden" alt="" />
                                   <img src="images/dark-logo.svg" className="hidden dark:inline-block" alt="" />

                              </Link>
                         </div>

                         {/* Main Menu */}
                         <div className="px-2">
                              <h6 className="p-2 text-xs dark:text-gray-1400 font-medium leading-4 text-black-1000">Main</h6>
                              <ul className="pb-2 mb-2">
                                   {mainMenu.map((item, i) => (
                                        <li key={i} className="mb-1">
                                             <Link href={item.href} className={linkClasses(item.href)}>
                                                  <img src={item.icon} className='dark:invert-[1]' alt={item.label} />
                                                  {item.label}
                                             </Link>
                                        </li>
                                   ))}

                                   {/* Account Dropdown */}
                                   <li className="mb-1">
                                        <Menu>
                                             <MenuButton className="p-2 cursor-pointer  dark:text-gray-1400 w-full flex items-center gap-2 text-sm font-normal leading-[100%] text-black-1100">
                                                  <img src="images/user-icon.svg" className='dark:invert-[1]' alt="Account" /> Account
                                                  <img src="images/drop-arrow.svg" className="ml-auto dark:invert-[1]" alt="" />
                                             </MenuButton>

                                             <MenuItems portal={false} className="static ml-6 mt-2">
                                                  {[
                                                       { href: '/Billing&Credits', label: 'Billing' },
                                                       { href: '/Support', label: 'Support' },
                                                  ].map((item, i) => (
                                                       <MenuItem key={i}>
                                                            {({ active }) => (
                                                                 <a
                                                                      href={item.href}
                                                                      className={`block px-2 relative after:content-[]  text-sm text-black-1100 after:bg-gray-1100 after:w-[1px] after:h-full after:absolute after:-left-2 after:top-0 py-1.5 rounded-lg ${pathname === item.href
                                                                           ? 'bg-gray-1000 text-sm text-black-1100'
                                                                           : active
                                                                                ? 'bg-gray-1000'
                                                                                : ''
                                                                           }`}
                                                                 >
                                                                      {item.label}
                                                                 </a>
                                                            )}
                                                       </MenuItem>
                                                  ))}
                                             </MenuItems>
                                        </Menu>
                                   </li>
                              </ul>

                              {/* Info Section */}
                              <h6 className="p-2 text-xs  dark:text-gray-1400 font-medium leading-4 text-black-1000">Info</h6>
                              {infoMenu.map((item, i) => (
                                   <Link key={i} href={item.href} className={linkClasses(item.href)}>
                                        <img src={item.icon} className='dark:invert-[1]' alt={item.label} />
                                        {item.label}
                                   </Link>
                              ))}
                         </div>
                    </div>
                    {/* Bottom Section */}
                    <div className='p-2'>
                         <ul className="pb-2 mb-2">
                              {bottomMenu.map((item, i) => (
                                   <li key={i} className="mb-1">
                                        <Link href={item.href} className={linkClasses(item.href)}>
                                             <img src={item.icon} className='dark:invert-[1]' alt={item.label} />
                                             {item.label}
                                        </Link>
                                   </li>
                              ))}

                              {/* Dark Mode */}
                              <li>
                                   <Link
                                        href="#"
                                        className="p-2 flex items-center dark:text-gray-1400 gap-2 text-sm font-normal leading-[100%] text-black-1100"
                                   >
                                        <img src="images/grid-icon2.svg" className='dark:invert-[1]' alt="Dark Mode" /> Dark Mode
                                        <Switch
                                             checked={isDark}
                                             onChange={() => setTheme(isDark ? "light" : "dark")}

                                             className="group relative ml-auto dark:bg-white/[12%] dark:border-white/[0%] flex h-5 w-8 items-center px-0.5 cursor-pointer rounded-full bg-gray-1100 ease-in-out focus:not-data-focus:outline-none data-checked:bg-black-1000 data-focus:outline "
                                        >
                                             <span
                                                  aria-hidden="true"
                                                  className="pointer-events-none dark:bg-black-1000 inline-block size-4 translate-x-0 rounded-full bg-white shadow-3xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-3"
                                             />
                                        </Switch>
                                   </Link>
                              </li>
                         </ul>

                         {/* Storage Progress */}
                         <div className="border border-gray-1100 mb-2 dark:border-white/[10%] dark:bg-black-1100 bg-white rounded-[14px] p-4">
                              <div className="flex mb-1.5 items-center justify-between">
                                   <h6 className="text-sm font-semibold leading-5 dark:text-gray-1400 text-black-1000">Storage Progress</h6>
                                   <h6 className="text-sm font-medium leading-5 text-blue-1100">Upgrade</h6>
                              </div>
                              <div className="bg-gray-1300 mb-4 h-2 overflow-hidden rounded-full w-full">
                                   <div className="bg-blue-1000 h-2 w-1/2"></div>
                              </div>
                              <div className="flex mb-1.5 items-center justify-between">
                                   <h6 className="text-sm font-normal leading-5  dark:text-gray-1400 text-black-1000">Balance</h6>
                                   <h6 className="text-sm font-medium leading-5 text-blue-1100">Add Balance</h6>
                              </div>
                              <h4 className="text-lg font-semibold mb-4  dark:text-gray-1400 text-black-1000">$5.00</h4>
                              <button
                                   type="button"
                                   className="flex items-center justify-center dark:text-black-1100 dark:bg-gray-1400 gap-2 text-sm font-medium leading-5 text-white py-2 w-full rounded-lg bg-black-1100"
                              >
                                   <img src="images/discord-icon2.svg" className='dark:invert-[1]' alt="" /> Join Our Discord
                              </button>
                         </div>

                         {/* User Menu */}
                         <div className="relative">
                              <Menu>
                                   <MenuButton className="inline-flex w-full cursor-pointer items-center gap-2 p-2">
                                        <img
                                             src="images/avatar.png"
                                             className="w-8 h-8 rounded-[10px] object-cover object-center"
                                             alt="Avatar"
                                        />
                                        <div className="text-start">
                                             <h6 className="text-sm dark:text-gray-1400 font-semibold text-black-1000 mb-0.5">John Doe</h6>
                                             <span className="text-xs dark:text-gray-1400 font-normal text-black-1000 mb-0.5">
                                                  john@example.com
                                             </span>
                                        </div>
                                        <img src="images/arrow-down-up.svg" className="ml-auto dark:invert-[1]" alt="" />
                                   </MenuButton>

                                   <MenuItems
                                        transition
                                        anchor="bottom end"
                                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-black z-[999] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                                   >
                                        {[
                                             { label: 'Edit', shortcut: '⌘E' },
                                             { label: 'Duplicate', shortcut: '⌘D' },
                                             { divider: true },
                                             { label: 'Archive', shortcut: '⌘A' },
                                             { label: 'Delete', shortcut: '⌘D' },
                                        ].map((item, i) =>
                                             item.divider ? (
                                                  <div key={i} className="my-1 h-px bg-white/5" />
                                             ) : (
                                                  <MenuItem key={i}>
                                                       <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                            {item.label}
                                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                                                                 {item.shortcut}
                                                            </kbd>
                                                       </button>
                                                  </MenuItem>
                                             )
                                        )}
                                   </MenuItems>
                              </Menu>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Sidebar
