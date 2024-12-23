"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const people = [
  { id: 1, name: "Artist Name", userImg: "/images/user-img-1.png" },
  { id: 2, name: "Artist Name", userImg: "" },
  { id: 3, name: "Artist Name", userImg: "" },
  { id: 4, name: "Artist Name", userImg: "" },
  { id: 5, name: "Artist Name", userImg: "" },
];

export default function ArtistsDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-fit">
      <Listbox className="relative w-full font-medium flex flex-col items-center  text-left text-sm/6 text-black"
        as="div" 
        value={selected}
        onChange={setSelected}
      >
        {({ open }) => (
          <>
            <ListboxButton
              className={clsx(
                "relative w-fit md:min-w-[215px] z-10 rounded-[18px] border gap-2 font-medium flex items-center py-1 pr-8 pl-3 text-left text-sm/6 text-black",
                "focus:outline-none",
                open ? "border-transparent" : "border-[#979797]" 
              )}>
              {selected.userImg ? (
                <Image
                  width={28}
                  height={28}
                  src={selected.userImg}
                  alt={selected.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 rounded-full block bg-[#979797]"></div>
              )}
              {selected.name}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-3.5 right-3"
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
                    fill="black"
                  />
                </svg>
              </span>
            </ListboxButton>
            <ListboxOptions
              className={clsx(
                "w-[var(--button-width)] absolute top-0 pt-10 bg-white rounded-2xl border border-[#979797] [--anchor-gap:var(--spacing-1)] focus:outline-none",
                "transition duration-100 ease-in"
              )}
            >
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="group flex cursor-default items-center gap-2 rounded-lg select-none data-[focus]:bg-white/10"
                >
                  <div className="flex gap-2 items-center group-data-[selected]:hidden py-1.5 px-3 w-full">
                    {person.userImg ? (
                      <Image
                        width={28}
                        height={28}
                        src={person.userImg}
                        alt={person.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full block bg-[#979797]"></div>
                    )}
                    <div className="text-sm/6 text-black">{person.name}</div>
                  </div>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </div>
  );
}
