import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from '../lib/clsx'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Why Choose Us', href: '#', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'How It Works', href: '#', current: false },
  { name: 'Testimoni', href: '#', current: false },
]



export default function Header() {
  return (
    <Disclosure as="nav" className="absolute top-8 left-0 w-full z-50">
      <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-8 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="/images/kyntra-logo.svg"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden pl-6 lg:block border-top-gradient-nav rounded-2xl !mx-auto">
              <div className="flex space-x-3 bg-white/10 rounded-2xl p-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={clsx(
                      item.current ? 'text-white to-secondary from-primary' : 'text-gray-1 to-transparent from-transparent hover:bg-primary hover:text-white',
                      'rounded-[10px] font-inter-tight bg-gradient-to-l px-5 py-2.5 font-medium text-lg transition-all duration-500',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute hidden right-0 lg:flex group items-center shadow-sm hover:shadow-primary transition-all duration-500 sm:static overflow-hidden rounded-2xl">
            <div className="w-fit">
            <Link
              href="/register"
              className="relative border-top-gradient transition-all duration-500 hover:bg-black/100 rounded-2xl bg-black-1/40 text-white text-lg font-medium h-16 w-[166px] flex items-center justify-center font-inter-tight"
              >
              <span className="">Register Now</span>
          
            </Link>
              </div>
       
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden bg-black">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={clsx(
                item.current ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
