'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const languages = [
  { id: 1, name: 'EN' },
  { id: 2, name: 'NL' },

]

export default function Localization() {
  const [selected, setSelected] = useState(languages[0])

  return (
    <div className="w-24">
      <Listbox value={selected} onChange={setSelected} >
        <ListboxButton
          className={clsx(
            'relative flex items-center uppercase text-lg font-semibold text-white leading-7 gap-2 w-full rounded-lg py-1.5 pr-8 pl-3',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
            <img src="images/bars.svg" alt="no-img"></img>
          {selected.name}
          <img src="images/angles-up-down.svg" alt="no-img"></img>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {languages.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
