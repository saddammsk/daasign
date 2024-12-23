'use client'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import { useGlobalContext } from '../context/globalContext'


export default function UserSettingsDropdown() {
        const {Mode} = useGlobalContext()

  return (
    <div className="w-[148px] font-avenir">
        <ul className={`${Mode ? 'bg-gray1' : 'bg-white'}`+ " rounded-md border z-50 border-[#EDEDED] py-2 shadow-userDropdownShadow"}>
          <li>
          <Link className="text-sm flex items-center text-black px-3 py-1 transition-all duration-200 hover:bg-gray-100" href="/profile">
          Profile
          </Link>
          </li>
          <li>
          <Link className="text-sm flex items-center text-black px-3 py-1 transition-all duration-200 hover:bg-gray-100" href="/profile">
          Notifications
          </Link>
          </li>
          <li>
          <Link className="text-sm flex items-center text-black px-3 py-1 transition-all duration-200 hover:bg-gray-100" href="/profile">
          Subscriptions
          </Link>
          </li>
          <li>
          <Link className="text-sm flex items-center text-black px-3 py-1 transition-all duration-200 hover:bg-gray-100" href="/profile">
          Settings
          </Link>
          </li>
          <li>
          <label htmlFor='darkModeSwitch' className="text-sm text-black whitespace-nowrap gap-5 flex items-center px-3 py-1 transition-all duration-200 hover:bg-gray-100">
          Dark Mode
          <DarkModeSwitch/>
          </label>
          </li>
          <li>
          <Link className="text-xs flex items-center px-3 py-1 text-black transition-all duration-200 hover:bg-gray-100" href="/logout">
          Log Out
          </Link>
          </li>
        </ul>
  
    </div>
  )
}
