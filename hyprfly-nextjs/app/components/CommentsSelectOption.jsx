import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function CommentsSelectOption() {
  return (
    <Menu>
      <MenuButton className="p-3">
      <svg
        width={22}
        height={5}
        viewBox="0 0 22 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z"
            fill="black"
        />
        <path
            d="M13.5 2.5C13.5 3.88071 12.3807 5 11 5C9.61929 5 8.5 3.88071 8.5 2.5C8.5 1.11929 9.61929 0 11 0C12.3807 0 13.5 1.11929 13.5 2.5Z"
            fill="black"
        />
        <path
            d="M19.5 5C20.8807 5 22 3.88071 22 2.5C22 1.11929 20.8807 0 19.5 0C18.1193 0 17 1.11929 17 2.5C17 3.88071 18.1193 5 19.5 5Z"
            fill="black"
        />
        </svg>

      </MenuButton>
      <MenuItems anchor="bottom" className="bg-white rounded-2xl shadow-lg py-3 px-1">
        <MenuItem>
          <button className="block text-[#5D5D5D] w-full text-end hover:bg-gray-100 px-2 py-1 whitespace-nowrap text-sm">
          Hide comments
          </button>
        </MenuItem>
        <MenuItem>
          <button className="flex items-center w-full text-end gap-3 hover:bg-gray-100 px-2 py-1 whitespace-nowrap text-[#5D5D5D] text-sm">
            <svg
            fill="#000000"
            height="10px"
            width="10px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
            >
            <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
            </svg>

          Mark all as read
          </button>
        </MenuItem>
     
      </MenuItems>
    </Menu>
  )
}