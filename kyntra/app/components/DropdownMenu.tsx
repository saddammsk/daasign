import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export type UserMenuProps = {
  avatarUrl: string;
  menuItems: {
    label: string;
    href: string;
    onClick?: () => void;
  }[];
};

export default function UserMenu({ avatarUrl, menuItems }: UserMenuProps) {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt="User avatar"
            src={avatarUrl}
            className="size-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {menuItems.map((item, idx) => (
          <MenuItem key={idx}>
            {({ active }) => (
              <a
                href={item.href}
                onClick={item.onClick}
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden ${active ? "bg-gray-100" : ""}`}
              >
                {item.label}
              </a>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
} 