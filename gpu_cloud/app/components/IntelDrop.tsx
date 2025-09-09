"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const CODES = [
     { name: "United States", code: "+1" },
     { name: "United Kingdom", code: "+44" },
     { name: "Pakistan", code: "+92" },
     { name: "India", code: "+91" },
     { name: "United Arab Emirates", code: "+971" },
     { name: "Saudi Arabia", code: "+966" },
     { name: "Qatar", code: "+974" },
     { name: "Bahrain", code: "+973" },
     { name: "Kuwait", code: "+965" },
     { name: "Oman", code: "+968" },
     { name: "Turkey", code: "+90" },
     { name: "Afghanistan", code: "+93" },
     { name: "Bangladesh", code: "+880" },
     { name: "Sri Lanka", code: "+94" },
     { name: "Nepal", code: "+977" },
     { name: "China", code: "+86" },
     { name: "Hong Kong", code: "+852" },
     { name: "Singapore", code: "+65" },
     { name: "Malaysia", code: "+60" },
     { name: "Indonesia", code: "+62" },
     { name: "Philippines", code: "+63" },
     { name: "Thailand", code: "+66" },
     { name: "Vietnam", code: "+84" },
     { name: "Japan", code: "+81" },
     { name: "South Korea", code: "+82" },
     { name: "Australia", code: "+61" },
     { name: "New Zealand", code: "+64" },
     { name: "Canada", code: "+1" },
     { name: "Mexico", code: "+52" },
     { name: "Brazil", code: "+55" },
     { name: "Argentina", code: "+54" },
     { name: "South Africa", code: "+27" },
     { name: "Nigeria", code: "+234" },
     { name: "Egypt", code: "+20" },
     { name: "Morocco", code: "+212" },
     { name: "Spain", code: "+34" },
     { name: "France", code: "+33" },
     { name: "Germany", code: "+49" },
     { name: "Italy", code: "+39" },
     { name: "Netherlands", code: "+31" },
     { name: "Sweden", code: "+46" },
     { name: "Norway", code: "+47" },
     { name: "Denmark", code: "+45" },
     { name: "Finland", code: "+358" },
     { name: "Ireland", code: "+353" },
     { name: "Portugal", code: "+351" },
     { name: "Greece", code: "+30" },
     { name: "Poland", code: "+48" },
     { name: "Romania", code: "+40" },
     { name: "Ukraine", code: "+380" },
     { name: "Russia", code: "+7" },
     { name: "Switzerland", code: "+41" },
     { name: "Austria", code: "+43" },
     { name: "Czechia", code: "+420" },
     { name: "Slovakia", code: "+421" },
     { name: "Hungary", code: "+36" },
     { name: "Belgium", code: "+32" },
     { name: "Luxembourg", code: "+352" },
     { name: "Iceland", code: "+354" },
     { name: "Maldives", code: "+960" },
     { name: "Jordan", code: "+962" },
     { name: "Lebanon", code: "+961" },
     { name: "Iran", code: "+98" },
     { name: "Iraq", code: "+964" },
     { name: "Ethiopia", code: "+251" },
     { name: "Kenya", code: "+254" },
     { name: "Tanzania", code: "+255" },
     { name: "Uganda", code: "+256" },
     { name: "Zimbabwe", code: "+263" },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
     return classes.filter(Boolean).join(" ");
}

export default function CountryPhoneInput({
     value,
     onChange,
     placeholder = "Enter phone number",
}: {
     value?: string;
     onChange?: (fullNumber: string) => void;
     placeholder?: string;
}) {
     const [open, setOpen] = useState(false);
     const [query, setQuery] = useState("");
     const [code, setCode] = useState("+234"); // default Nigeria
     const [phone, setPhone] = useState("");
     const [highlighted, setHighlighted] = useState(0);

     const wrapperRef = useRef<HTMLDivElement | null>(null);
     const inputRef = useRef<HTMLInputElement | null>(null);

     // propagate full number
     useEffect(() => {
          onChange?.(`${code}${phone}`);
     }, [code, phone]);

     // close on outside click
     useEffect(() => {
          function onDocClick(e: MouseEvent) {
               if (!wrapperRef.current) return;
               const target = e.target as Node;
               // agar click wrapper ke andar hai to kuch na karo
               if (wrapperRef.current.contains(target)) return;

               setOpen(false);
               setQuery("");
          }
          document.addEventListener("mousedown", onDocClick);
          return () => document.removeEventListener("mousedown", onDocClick);
     }, []);

     const filtered = useMemo(() => {
          if (!query.trim()) return CODES;
          const q = query.toLowerCase();
          return CODES.filter(
               (c) => c.name.toLowerCase().includes(q) || c.code.includes(q)
          );
     }, [query]);

     function choose(newCode: string) {
          setCode(newCode);
          setOpen(false);
          setQuery("");
     }

     return (
          <div className="w-full max-w-sm" ref={wrapperRef}>
               <div className="relative flex h-9 w-full items-center">
                    {/* Code button */}
                    <button
                         type="button"
                         onClick={(e) => {
                              e.stopPropagation(); // bubbling stop
                              setOpen((o) => !o);
                         }}
                         className="flex items-center cursor-pointer gap-2.5 pl-[18px] pr-2.5 h-full text-sm font-medium text-black-1000 dark:text-gray-1400 focus:outline-none"
                    >
                         {code}
                         <svg
                              className={classNames("w-4 h-4 transition-transform", open && "rotate-180")}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                         >
                              <path
                                   fillRule="evenodd"
                                   d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                   clipRule="evenodd" fill="#737373" className="dark:fill-gray-1500"
                              />
                         </svg>
                    </button>

                    {/* Phone input */}
                    <input
                         ref={inputRef}
                         type="text"
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                         placeholder={placeholder}
                         className="flex-1 h-full bg-transparent outline-none text-gray-1200 placeholder:text-gray-1200 text-sm font-normal font-geist leading-5 dark:text-gray-1500 placeholder:dark:text-gray-1500"
                    /> 
                    {/* Dropdown */}
                    {open && (
                         <div className="absolute left-0 right-0 top-full mt-1 z-50 rounded-xl border border-gray-300 bg-white shadow-lg dark:bg-black-1000 dark:border-white/[0.1]">
                              <div className="p-2">
                                   <input
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search"
                                        className="w-full h-9 rounded-md border border-gray-300 dark:bg-white/[0.05] dark:border-white/[0.5] px-2 text-sm outline-none dark:text-gray-1400"
                                   />
                              </div>
                              <ul className="max-h-60 overflow-auto">
                                   {filtered.map((item) => (
                                        <li
                                             key={item.code + item.name}
                                             onClick={() => choose(item.code)}
                                             className="flex justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-black-1100 text-sm dark:text-gray-1400"
                                        >
                                             <span>{item.name}</span>
                                             <span className="text-gray-500 dark:text-gray-1400">{item.code}</span>
                                        </li>
                                   ))}
                                   {filtered.length === 0 && (
                                        <li className="px-3 py-2 text-sm text-gray-400 dark:text-gray-1400">
                                             No results
                                        </li>
                                   )}
                              </ul>
                         </div>
                    )}
               </div>
          </div>
     );
}
