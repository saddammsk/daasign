import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotificationsDropdown from './NotificationsDropdown'
import UserSettingsDropdown from './UserSettingsDropdown'

const Navbar = () => {
  return (
    <header className='w-full my-6 relative z-50'>
      <div className="w-full max-w-[1577px] bg-white mx-auto rounded-3xl lg:px-6 px-4">
        <div className="w-full md:py-4 py-2.5  flex items-center justify-between">
          <Link href="/">
          <Image
            width={205}
            height={19.7}
            src="/images/hyprfly-logo.png"
            alt="Logo"
            className="inline-block md:w-auto w-32 h-5 object-contain"
            priority
          />
          </Link>

          <div className="">
            
            <div className="flex items-center lg:gap-12 gap-6">
              <div className="flex items-center gap-3">
            {/* Group Team */}
            <ul className='md:flex items-center -space-x-4 hidden'>
              <li className='z-[4]'>
                <Image src="/images/group-team-1.png"
                width={45}
                height={45}
                alt=''
                className='w-11 h-11 rounded-full'
                />
              </li>
              <li className='z-[3]'>
                <Image src="/images/group-team-2.png"
                width={45}
                height={45}
                alt=''
                className='w-11 h-11 rounded-full'
                />
              </li>
              <li className='z-[2]'>
                <Image src="/images/group-team-3.png"
                width={45}
                height={45}
                alt=''
                className='w-11 h-11 rounded-full'
                />
              </li>
              <li className='z-[1]'>
                <Image src="/images/group-team-4.png"
                width={45}
                height={45}
                alt=''
                className='w-11 h-11 rounded-full'
                />
              </li>
            </ul>

            {/* Invite Link */}
            <Link href="/invite" className='md:inline-flex hidden text-black border items-center gap-2 border-[#979797] px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200'>
              <span>+</span>  Invite
            </Link>
            </div>
            <div className="flex items-center gap-7">
            <NotificationsDropdown/>
            <button>
            <Image src="/images/user-img-1.png" width={49} height={49} className='w-12 cursor-pointer h-12 rounded-full object-cover' alt='user img'/>
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar