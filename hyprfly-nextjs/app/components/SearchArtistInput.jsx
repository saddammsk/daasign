import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
]

export default function SearchArtistInput() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(people[1])

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')} >
        <div className="relative">
          <ComboboxInput placeholder='Search Artist  '
            className={clsx(
              'w-full border border-[#DBDBDB] text-lg placeholder:text-black h-12 px-5 rounded-3xl bg-white/5 py-1.5 pr-8 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-1 px-2.5">
            <svg className="size-3 fill-white/60 group-data-[hover]:fill-white"
                width={12}
                height={9}
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M7 9L0.0717954 -2.49747e-07L13.9282 8.67273e-07L7 9Z" fill="black" />
                </svg>

          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-2xl border border-[#DBDBDB] bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
                <div className="w-8 h-8 rounded-full bg-[#D9D9D9]"></div>
              <div className="text-sm/6 text-black">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}
