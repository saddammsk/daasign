"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Week" },
  { id: 2, name: "Month"},
  { id: 3, name: "3 Months"},
  { id: 4, name: "This Year"},
  { id: 5, name: "All Time"},
];



const DateOption = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-fit">
    <Listbox className="relative w-full font-medium flex flex-col items-center text-left text-sm/6 text-black"
      as="div" 
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <>
          <ListboxButton
            className={clsx(
              "relative w-fit min-w-[100px] z-10 gap-2 rounded-[18px] border font-medium flex items-center py-1.5 pr-8 pl-4 text-left text-xs text-[#808080]",
              "focus:outline-none",
              open ? "border-transparent" : "border-[#D9D9D9]" 
            )}>
        
            {selected.name}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-3"
            >
              <svg
                className={clsx(
                  "transition-transform duration-300",
                  open ? "rotate-180" : "rotate-0" 
                )}
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 8L14 0H0L7 8Z"
                  fill="#D9D9D9"
                />
              </svg>
            </span>
          </ListboxButton>
          <ListboxOptions
            className={clsx(
              "w-[var(--button-width)] absolute top-0 pt-6 bg-white rounded-2xl border border-[#D9D9D9] [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in"
            )}
          >
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="group flex cursor-default items-center gap-2 pb-1 rounded-lg select-none data-[focus]:bg-white/10"
              >
                <div className="flex gap-2 items-center group-data-[selected]:hidden px-3 py-0.5 w-full">
                  <div className="text-xs text-[#808080] whitespace-nowrap">{person.name}</div>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  </div>
  )
}

export default DateOption;





