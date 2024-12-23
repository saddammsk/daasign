import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotificationsDropdown from './NotificationsDropdown'
import UserSettingsDropdown from './UserSettingsDropdown'
import ArtistsDropdown from './ArtistsDropdown'

const TeamsNavbar = () => {
  return (
    <header className='w-full my-6 relative z-50'>
      <div className="w-full max-w-[1577px] bg-white mx-auto rounded-3xl lg:px-6 px-4">
        <div className="w-full md:py-4 py-2.5 gap-4 flex items-center justify-between">
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
        
            <div className="flex items-center gap-7">
              <ArtistsDropdown/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TeamsNavbar