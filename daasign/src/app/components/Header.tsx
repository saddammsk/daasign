'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {clsx} from 'clsx'
import { BookCall } from './common/BookCall';

const menuItems = [
     { label:"Agenda", url:"/#agenda-sec"}, 
     {label:"How does it work?", url:"/#work-sec"},
      {label:"Case studies", url:"/#case-study-sec"}, 
      {label:"Pricing", url:"/#pricing-sec"},
      {label:"FAQ", url:"/#faqs-sec"}];

function Header() {

     const [ToggleMenu, setToggleMenu] = useState(false);
     const [hidden, setHidden] = useState(false);
     const [lastScrollY, setLastScrollY] = useState(0);

     useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
              setHidden(true);
            } else {
              setHidden(false); 
            }
            setLastScrollY(window.scrollY);
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]);


     function toggleMenu() {
          setToggleMenu(pre => !pre);
     }

     return (
          <header  className={`fixed top-4 left-0 w-full z-[999] transition-transform duration-300 ${
               hidden ? "-translate-y-[150%]" : "translate-y-0"
             }`}>
               <div className='max-w-[995px] mx-auto bg-black-1000 rounded-full border border-black-1100 lg:px-10 px-3.5 lg:w-full w-[112px] py-1.5 lg:py-[13px]'>
                    <div className='flex items-center justify-between'>
                         <Link href="/"><img src='images/logo.svg' className='hidden lg:block' alt='logo'></img>
                         <img src='images/mob-logo.svg' className='lg:hidden block' alt='logo'></img>
                         </Link>
                         <ul className={clsx('flex lg:flex-row flex-col lg:static lg:bg-transparent bg-black-1000 lg:rounded-none rounded-2xl lg:border-none border border-black-1100 absolute lg:top-auto lg:w-fit md:w-2/4 w-4/5 lg:left-auto left-1/2 lg:translate-x-0 -translate-x-1/2 items-center gap-6 lg:px-0 px-4 lg:py-0 py-6 transition-all duration-300', ToggleMenu ? 'top-12':'-top-[100vh]')}>
                              {menuItems.map(({label, url}) => (
                                   <li className='text-base font-gilroy font-semibold leading-5 text-gray-1000' key={label}>
                                        <Link href={url}>{label}</Link>
                                   </li>
                              ))}
                         </ul>
                         <button onClick={toggleMenu} className='menu-btn flex items-center justify-center lg:hidden'>
                         <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <g clipPath="url(#clip0_1_18554)">
                              <path
                                   d="M5.375 7.53125C5.375 6.97266 5.80469 6.5 6.40625 6.5L23.5938 6.5C24.1523 6.5 24.625 6.97266 24.625 7.53125C24.625 8.13281 24.1523 8.5625 23.5938 8.5625L6.40625 8.5625C5.80469 8.5625 5.375 8.13281 5.375 7.53125ZM5.375 14.4062C5.375 13.8477 5.80469 13.375 6.40625 13.375L23.5937 13.375C24.1523 13.375 24.625 13.8477 24.625 14.4063C24.625 15.0078 24.1523 15.4375 23.5937 15.4375L6.40625 15.4375C5.80469 15.4375 5.375 15.0078 5.375 14.4062ZM24.625 21.2813C24.625 21.8828 24.1523 22.3125 23.5937 22.3125L6.40625 22.3125C5.80469 22.3125 5.375 21.8828 5.375 21.2812C5.375 20.7227 5.80469 20.25 6.40625 20.25L23.5937 20.25C24.1523 20.25 24.625 20.7227 24.625 21.2813Z"
                                   fill="#F5F4ED"
                              />
                              </g>
                              <defs>
                              <clipPath id="clip0_1_18554">
                                   <rect width={30} height={30} fill="white" />
                              </clipPath>
                              </defs>
                              </svg>

                         </button>

                         <BookCall className='lg:inline-block hidden'/>
                    </div>
               </div>
          </header>
     )
}

export default Header
