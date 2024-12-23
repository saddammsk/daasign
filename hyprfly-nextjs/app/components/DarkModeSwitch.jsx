'use client'
import { Switch } from '@headlessui/react'
import { useGlobalContext } from '../context/globalContext'

export default function DarkModeSwitch() {
  const {Mode, setMode} = useGlobalContext();
  return (
    <Switch id='darkModeSwitch'
      checked={Mode}
      onChange={setMode}
      className="group relative h-4 w-[30px] flex items-center cursor-pointer border border-[#E8E8E8] rounded-full transition-colors duration-200 ease-in-out bg-[#F8F8F8] focus:outline-none data-[focus]:outline-1 shadow-switchshadow data-[focus]:outline-white data-[checked]:bg-[#E0F53E]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-2.5 translate-x-0.5 shadow-switchshadowdot rounded-full bg-white ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
      />
    </Switch>
  )
}
