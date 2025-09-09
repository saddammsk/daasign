'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState, useRef, useEffect } from 'react'
import Link from "next/link";
import { RadioGroup } from '@headlessui/react'
import LanguageDropdown from '@/app/components/LanguageDropdown';
import { Switch, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import AppNotification from '@/app/components/AppNotification';
import IntelDrop from '@/app/components/IntelDrop';
import SessionsTable from '@/app/components/SessionsTable';
import { useTheme } from "next-themes";
const people = [
     { id: 1, name: 'UTC+7 — Jakarta' },
     { id: 2, name: 'UTC+8 — Singapore, Beijing' },
     { id: 3, name: 'UTC+9 — Tokyo, Seoul' },
     { id: 4, name: 'UTC+10 — Sydney' },
     { id: 5, name: 'UTC+0 — London' },
]
function Page() {
     const [search, setSearch] = useState("");
     const [isOpen, setIsOpen] = useState(false)
     const [selected, setSelected] = useState("");
     const sidebarRef = useRef<HTMLDivElement>(null)
     const [enabled1, setEnabled1] = useState(false);
     const [enabled2, setEnabled2] = useState(false);
     const [enabled3, setEnabled3] = useState(false);
     const [enabled4, setEnabled4] = useState(false);
     const [selectedPerson, setSelectedPerson] = useState(people[0])

     const { theme, setTheme } = useTheme();
     const [selected2, setSelected2] = useState(theme || "light");

     // Keep radio state in sync with theme
     useEffect(() => {
          if (theme) setSelected(theme);
     }, [theme]);

     // dummy apps data (replace with real data later)
     const apps = [
          {
               name: "Foocus",
               description: "AI-powered image app",
               tags: ["image", "gen"],
               avatar: "images/avatar-3.png"
          },
     ]

     // filter apps based on search
     const filteredApps = apps.filter(
          (app) =>
               app.name.toLowerCase().includes(search.toLowerCase()) ||
               app.description.toLowerCase().includes(search.toLowerCase()) ||
               app.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
               )
     );
     return (
          <div>
               <div ref={sidebarRef} className={`sidebar ${isOpen ? 'active' : ''}`}>
                    {/* Background overlay */}
                    <div
                         className={`bg-black/[50%] fixed md:hidden layer top-0 left-0 w-full h-full z-[9] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                              }`}
                         onClick={() => setIsOpen(false)} // closes sidebar when clicked
                    ></div>

                    <Sidebar />
               </div>
               <div className=" md:w-[calc(100%_-_265px)] ml-auto  md:pr-2 pr-0">
                    <div className="bg-white dark:bg-black-1000 w-full md:mt-2 rounded-[14px] md:shadow-4xl">
                         <div className="md:py-2.5 py-2 md:px-6 px-4 dark:border-white/[15%] border-b border-gray-1100 flex items-center justify-between">
                              <div className="flex items-center">
                                   <Link
                                        href="#"
                                        onClick={(e) => {
                                             e.preventDefault()
                                             setIsOpen(true)
                                        }}
                                        className="block md:pr-2 pr-1"
                                   >
                                        <img src="images/collapse-icon.svg" className='dark:invert-[1]' alt="" />
                                   </Link>
                                   <div className="bg-gray-1100 w-[1px] h-[15px] block"></div>
                                   <p className="text-sm font-normal dark:text-gray-1400 md:pl-4 pl-3 leading-5 text-black-1000">Settings</p>
                              </div>
                              <LanguageDropdown></LanguageDropdown>
                         </div>
                         <div className="md:p-6 p-4">
                              <div className=''>
                                   <h3 className='text-black-1000 font-semibold text-[30px] leading-9 mb-1 dark:text-gray-1400'>Settings</h3>
                                   <p className='text-gray-1200 font-normal text-sm leading-5 dark:text-gray-1500'>Manage your account, preferences, and security settings.</p>
                              </div>

                              <form>
                                   <div className='sm:py-8 py-6 flex xl:flex-row flex-col items-start gap-8 border-b border-solid border-gray-1100 dark:border-white/[0.1] pb-8'>
                                        <div className='xl:max-w-[360px] max-w-full w-full'>
                                             <h4 className='text-black-1000 font-semibold text-base leading-6 font-geist mb-1 dark:text-gray-1400'>Account Information</h4>
                                             <p className='text-gray-1200 font-normal text-sm leading-5 font-geist dark:text-gray-1500'>Your personal information and account security settings.</p>
                                        </div>
                                        <div className='flex-1 w-full'>
                                             <div className='xl:max-w-[373px] w-full'>
                                                  <div className=''>
                                                       <h5 className='text-gray-1200  font-normal text-sm leading-5 dark:text-gray-1500'>Avatar</h5>
                                                       <div className='flex items-center gap-3 mt-3'>
                                                            <span><img src='images/avatar2.png' alt='' /></span>
                                                            <label className='text-black-1000 relative font-medium text-xs cursor-pointer leading-4 flex items-center justify-center bg-white border border-solid border-gray-1100 shadow-3xl rounded-lg h-8 w-16 dark:text-gray-1400 dark:bg-white/[0.05] dark:border-white/[0.15]'>
                                                                 <input type='file' className='opacity-0 invisible absolute left-0 top-0 w-full h-full cursor-pointer rounded-lg' />
                                                                 <span className='flex items-center justify-center w-full h-full cursor-pointer'>Upload</span>
                                                            </label>
                                                       </div>
                                                  </div>
                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Full Name</label>
                                                       <input type='text' className='text-black-1000 placeholder:text-black-1000 font-normal text-sm leading-5 px-3 border border-solid border-gray-1100 rounded-lg h-9 w-full shadow-3xl dark:bg-white/[0.05] dark:border-white/[0.15] dark:text-gray-1400 dark:placeholder:text-gray-1400' placeholder='John Doe' />
                                                  </div>
                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Email</label>
                                                       <input type='email' className='text-black-1000 placeholder:text-black-1000 font-normal text-sm leading-5 px-3 border border-solid border-gray-1100 rounded-lg h-9 w-full shadow-3xl dark:bg-white/[0.05] dark:border-white/[0.15] dark:text-gray-1400 dark:placeholder:text-gray-1400' placeholder='john@example.com' />
                                                  </div>
                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm flex items-center gap-2 mb-2'>Phone Number <span className='text-black-1100 font-semibold text-xs leading-4 gap-1 bg-gray-1000 rounded-lg inline-flex items-center justify-center h-5 px-2 dark:bg-black-1200 dark:text-gray-1400'><img src='images/BadgeAlert.svg' alt='' className='dark:invert-[1]' /> Not Verified</span></label>
                                                       <div className="relative flex h-9 w-full items-center rounded-lg border border-solid border-gray-1100 shadow-3xl  text-black dark:bg-white/[0.05] dark:border-white/[0.15]">
                                                            <IntelDrop />
                                                       </div>
                                                  </div>
                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Change Password</label>
                                                       <input type='password' className='text-gray-1200 placeholder:text-gray-1200 font-normal text-sm leading-5 px-3 border border-solid border-gray-1100 rounded-lg h-9 w-full shadow-3xl dark:bg-white/[0.05] dark:border-white/[0.15] dark:text-gray-1500 dark:placeholder:text-gray-1500' placeholder='Change New Password' />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='sm:py-8 py-6 flex xl:flex-row flex-col items-start gap-8 border-b border-solid border-gray-1100 dark:border-white/[0.1] pb-8'>
                                        <div className='xl:max-w-[360px] max-w-full w-full'>
                                             <h4 className='text-black-1000 dark:text-gray-1400 font-semibold text-base leading-6 font-geist mb-1'>Preferences</h4>
                                             <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5 font-geist'>Customize language, theme, and time settings.</p>
                                        </div>
                                        <div className='flex-1 w-full'>
                                             <div className='xl:max-w-[373px] w-full'>
                                                  <div className=''>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Language</label>
                                                       <LanguageDropdown></LanguageDropdown>
                                                  </div>
                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Theme</label>
                                                       <RadioGroup
                                                            value={selected2}
                                                            onChange={(value) => {
                                                                 setSelected2(value);
                                                                 setTheme(value); // <-- this applies the theme
                                                            }}
                                                            aria-label="Theme"
                                                            className="grid grid-cols-2 gap-3"
                                                       >
                                                            {/* Light Option */}
                                                            <RadioGroup.Option
                                                                 value="light"
                                                                 className="group cursor-pointer flex items-center relative rounded-[10px] dark:bg-transparent dark:border-white/[10%] bg-white px-3 h-10 border border-gray-1100 data-[checked]:bg-gray-1800 dark:data-[checked]:bg-black-1300 data-[checked]:border-black-1100 dark:data-[checked]:border-gray-1100"
                                                            >
                                                                 <div className="flex w-full items-center gap-2">
                                                                      <div className="border dark:bg-transparent dark:border-white/[10%] border-gray-1100 group-data-[checked]:bg-black dark:group-data-[checked]:bg-gray-1100 bg-white w-4 h-4 rounded-full shadow-3xl flex items-center justify-center">
                                                                           <div className="w-1.5 h-1.5 dark:bg-transparent rounded-full hidden group-data-[checked]:block group-data-[checked]:bg-white dark:group-data-[checked]:bg-black bg-black-1000"></div>
                                                                      </div>
                                                                      <h6 className="text-sm dark:text-gray-1400 font-medium leading-6 text-black-1000">
                                                                           Light
                                                                      </h6>
                                                                 </div>
                                                            </RadioGroup.Option>

                                                            {/* Dark Option */}
                                                            <RadioGroup.Option
                                                                 value="dark"
                                                                 className="group cursor-pointer flex items-center relative rounded-[10px] dark:bg-black-1000 dark:border-white/[10%] bg-white px-3 h-10 border border-gray-1100 data-[checked]:bg-gray-1800 dark:data-[checked]:bg-black-1300 data-[checked]:border-black-1100 dark:data-[checked]:border-gray-1100"
                                                            >
                                                                 <div className="flex w-full items-center gap-2">
                                                                      <div className="border dark:bg-transparent dark:border-white/[10%] border-gray-1100 group-data-[checked]:bg-black dark:group-data-[checked]:bg-gray-1100 bg-white w-4 h-4 rounded-full shadow-3xl flex items-center justify-center">
                                                                           <div className="w-1.5 h-1.5 dark:bg-transparent rounded-full hidden group-data-[checked]:block group-data-[checked]:bg-white dark:group-data-[checked]:bg-black bg-black-1000"></div>
                                                                      </div>
                                                                      <h6 className="text-sm dark:text-gray-1400 font-medium leading-6 text-black-1000">
                                                                           Dark
                                                                      </h6>
                                                                 </div>
                                                            </RadioGroup.Option>
                                                       </RadioGroup>
                                                  </div>

                                                  <div className='mt-6'>
                                                       <label className='text-black-1000 dark:text-gray-1400 font-medium text-sm block mb-2'>Timezone</label>
                                                       <div className='relative'>
                                                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                                                 <ListboxButton className='text-black-1000 cursor-pointer placeholder:text-black-1000 text-left font-normal text-sm leading-5 px-3 border border-solid border-gray-1100 rounded-lg h-9 w-full shadow-3xl dark:bg-black-1200 dark:border-white/[0.15] dark:text-gray-1400 dark:placeholder:text-gray-1400 flex items-center justify-between'>{selectedPerson.name} <img src="images/drop-arrow.svg" className='dark:invert-[1] ml-auto' alt=''></img></ListboxButton>
                                                                 <ListboxOptions anchor="bottom" className='bg-white dark:bg-black-1200 border border-solid border-gray-1100 dark:border-white/[0.1] rounded-lg shadow-4xl p-1 mt-1 w-[373px]'>
                                                                      {people.map((person) => (
                                                                           <ListboxOption key={person.id} value={person} className="data-focus:bg-gray-1000 dark:data-focus:bg-gray-1600 rounded-md px-2 text-black-1100 font-normal text-sm leading-5 h-8 cursor-pointer flex items-center   dark:text-gray-1400">
                                                                                {person.name}
                                                                           </ListboxOption>
                                                                      ))}
                                                                 </ListboxOptions>
                                                            </Listbox>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='sm:py-8 py-6 flex xl:flex-row flex-col items-start gap-8 border-b border-solid border-gray-1100 dark:border-white/[0.1] pb-8'>
                                        <div className='xl:max-w-[360px] max-w-full w-full'>
                                             <h4 className='text-black-1000 dark:text-gray-1400 font-semibold text-base leading-6 font-geist mb-1'>Notifications</h4>
                                             <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5 font-geist'>Manage how you receive updates and alerts from the platform.</p>
                                        </div>
                                        <div className='flex-1 w-full'>
                                             <div className='xl:max-w-[373px] w-full'>
                                                  <div className='flex items-start gap-3'>
                                                       <Switch
                                                            checked={enabled1}
                                                            onChange={setEnabled1}
                                                            className="group relative dark:bg-white/[12%] dark:border-white/[0%] flex h-5 w-9 items-center px-0.5 cursor-pointer rounded-full bg-gray-1100 ease-in-out focus:not-data-focus:outline-none data-checked:bg-black-1000 dark:data-checked:bg-gray-1100 data-focus:outline "
                                                       >
                                                            <span
                                                                 aria-hidden="true"
                                                                 className="pointer-events-none dark:bg-black-1000 inline-block size-4 translate-x-0 rounded-full bg-white shadow-3xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"
                                                            />
                                                       </Switch>
                                                       <div className=''>
                                                            <h4 className='text-black-1000 dark:text-gray-1400 font-medium text-sm leading-[100%] mb-2'>Email Notifications</h4>
                                                            <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5'>Receive important updates via email.</p>
                                                       </div>
                                                  </div>
                                                  <div className='flex items-start gap-3 mt-6'>
                                                       <Switch
                                                            checked={enabled2}
                                                            onChange={setEnabled2}
                                                            className="group relative dark:bg-white/[12%] dark:border-white/[0%] flex h-5 w-9 items-center px-0.5 cursor-pointer rounded-full bg-gray-1100 ease-in-out focus:not-data-focus:outline-none data-checked:bg-black-1000 dark:data-checked:bg-gray-1100 data-focus:outline "
                                                       >
                                                            <span
                                                                 aria-hidden="true"
                                                                 className="pointer-events-none dark:bg-black-1000 inline-block size-4 translate-x-0 rounded-full bg-white shadow-3xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"
                                                            />
                                                       </Switch>
                                                       <div className=''>
                                                            <h4 className='text-black-1000 dark:text-gray-1400 font-medium text-sm leading-[100%] mb-2'>In-App Notifications</h4>
                                                            <p className='text-gray-1200 dark:text-gray-1500  font-normal text-sm leading-5'>Get alerts directly in your dashboard.</p>
                                                       </div>
                                                  </div>
                                                  <div className='flex items-start gap-3 mt-6'>
                                                       <Switch
                                                            checked={enabled3}
                                                            onChange={setEnabled3}
                                                            className="group relative dark:bg-white/[12%] dark:border-white/[0%] flex h-5 w-9 items-center px-0.5 cursor-pointer rounded-full bg-gray-1100 ease-in-out focus:not-data-focus:outline-none data-checked:bg-black-1000 dark:data-checked:bg-gray-1100 data-focus:outline "
                                                       >
                                                            <span
                                                                 aria-hidden="true"
                                                                 className="pointer-events-none dark:bg-black-1000 inline-block size-4 translate-x-0 rounded-full bg-white shadow-3xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"
                                                            />
                                                       </Switch>
                                                       <div className=''>
                                                            <h4 className='text-black-1000 dark:text-gray-1400 font-medium text-sm leading-[100%] mb-2'>GPU Session Alerts</h4>
                                                            <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5'>Notify when GPU jobs start, stop, or fail.</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='sm:py-8 py-6 flex xl:flex-row flex-col items-start gap-8 border-b border-solid border-gray-1100 dark:border-white/[0.1] pb-8'>
                                        <div className='xl:max-w-[360px] max-w-full w-full'>
                                             <h4 className='text-black-1000 dark:text-gray-1400 font-semibold text-base leading-6 font-geist mb-1'>Security</h4>
                                             <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5 font-geist'>Protect your account and manage authorized devices.</p>
                                        </div>
                                        <div className='flex-1 w-full'>
                                             <div className='xl:max-w-[580px] w-full'>
                                                  <div className='flex items-start gap-3'>
                                                       <Switch
                                                            checked={enabled4}
                                                            onChange={setEnabled4}
                                                            className="group relative dark:bg-white/[12%] dark:border-white/[0%] flex h-5 w-9 items-center px-0.5 cursor-pointer rounded-full bg-gray-1100 ease-in-out focus:not-data-focus:outline-none data-checked:bg-black-1000 dark:data-checked:bg-gray-1100 data-focus:outline "
                                                       >
                                                            <span
                                                                 aria-hidden="true"
                                                                 className="pointer-events-none dark:bg-black-1000 inline-block size-4 translate-x-0 rounded-full bg-white shadow-3xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"
                                                            />
                                                       </Switch>
                                                       <div className=''>
                                                            <h4 className='text-black-1000 dark:text-gray-1400 font-medium text-sm leading-[100%] mb-2'>Two-Factor Authentication</h4>
                                                            <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5'>Add an extra layer of security to your account.</p>
                                                       </div>
                                                  </div>
                                                  <div className='mt-6'>
                                                       <h4 className='text-black-1000 dark:text-gray-1400 font-medium text-base block mb-2'>Active Sessions</h4>
                                                       <SessionsTable />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='sm:py-8 py-6 flex xl:flex-row flex-col items-start gap-8'>
                                        <div className='xl:max-w-[360px] max-w-full] w-full'>
                                             <h4 className='text-black-1000 dark:text-gray-1400 font-semibold text-base leading-6 font-geist mb-1'>Danger Zone</h4>
                                             <p className='text-gray-1200 dark:text-gray-1500 font-normal text-sm leading-5 font-geist'>Proceed with caution.</p>
                                        </div>
                                        <div className='flex-1 w-full'>
                                             <div className='xl:max-w-[373px] w-full'>
                                                  <button className='flex items-center justify-center text-red-1300 font-medium cursor-pointer text-sm leading-5 rounded-lg h-9 max-w-[124px] w-full bg-red-1000 dark:bg-red-1200/[0.6] dark:text-red-1300 shadow-3xl'>Delete account</button>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <AppNotification></AppNotification>
          </div>
     )
}

export default Page
