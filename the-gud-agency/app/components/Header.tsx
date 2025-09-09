'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import Link from 'next/link';
import PrimaryLink from './PrimaryLink';
import { SearchIcon } from '@/public/icons'; 

export default function Header() {
  return (
    <nav className="absolute lg:bg-transparent bg-body-bg left-0 3xl:top-12 lg:top-6 top-0 w-full 3xl:py-5 lg:py-2.5 py-px">
      <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px] w-full px-5">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/">
              <img
                alt="Your Company"
                src="/images/logo.svg"
                className="3xl:h-auto lg:h-[60px] h-[43px]"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden 3xl:ml-[70px] xl:ml-12 ml-8 lg:flex items-center">
            <ul className="flex items-center 3xl:gap-[35px] gap-6">
              {/* Dropdown */}
              <li>
                <Menu as="div" className="relative">
                  <MenuButton className="cursor-pointer hover:text-primary relative flex items-center 3xl:text-size-30 text-xl text-white font-normal gap-1.5">
                    Services
                    <span className="3xl:mt-2 mt-1 flex items-center justify-center">
                      <img
                        alt="Dropdown"
                        src="/images/down-arrow.svg"
                        className="3xl:h-auto h-1.7"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition">
                    {[
                      ['WebsiteDevelopment', 'Website Development'],
                      ['ppc', 'PPC Advertising'],
                      ['Branding&Design', 'Branding & Design'],
                      ['SoftwareDevelopment', 'Software Development'],
                      ['SeoOptimization', 'SEO Optimization'],
                      ['socailmediamarketing', 'Social Media Marketing'],
                      ['AIAutomation', 'AI Automation'],
                    ].map(([href, label]) => (
                      <MenuItem key={href}>
                        <Link
                          href={`/${href}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {label}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </li>

              {/* Static Links */}
              <li>
                <Link
                  href="/"
                  className="hover:text-primary 3xl:text-size-30 text-xl text-white font-normal"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary 3xl:text-size-30 text-xl text-white font-normal"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary 3xl:text-size-30 text-xl text-white font-normal"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side CTA/Search */}
          <div className="hidden lg:flex items-center pr-2 lg:ml-6">
            <form>
              <div className="flex items-center gap-10">
                <PrimaryLink
                  href="/"
                  className="bg-primary hover:bg-primary/[70%] xl:px-[45px] px-8"
                >
                  Let’s Talk
                </PrimaryLink>
                <div className="relative">
                  <input
                    type="text"
                    className="border border-solid border-white rounded-5xl h-[46px] w-0 invisible opacity-0"
                  />
                  <Link
                    href="/"
                    className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    {/* If SearchIcon is not a component, replace with <img src="/icons/search.svg" /> */}
                    <SearchIcon className="text-white" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
