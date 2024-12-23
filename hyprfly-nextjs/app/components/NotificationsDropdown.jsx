'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react'

const NotificationsDropdown = () => {
    const [newNotifications, setNotifications] = useState(true)

  return (
    <div>
      <button>
              {newNotifications &&
              <span className='absolute'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#DFFB48"/>
              </svg>
              </span>}
              <img src="/images/noti-icon.svg"/>
        </button>
  
    </div>
  )
}

export default NotificationsDropdown