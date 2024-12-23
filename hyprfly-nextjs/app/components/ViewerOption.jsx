import { Description, Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'

export default function ViewerOption() {
  return (
    <div className="w-fit">
      <Field>
        <div className="relative">
          <Select
            className={clsx(
              'block w-full appearance-none rounded-2xl border min-w-[138px] border-[#DBDBDB] bg-white/5 py-1 px-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              '*:text-black'
            )}
          >
            <option value="Viewer">Viewer</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
       
          <svg  aria-hidden="true"  className="group pointer-events-none absolute top-3 right-2.5 size-3 fill-white/60"
            width={10}
            height={6}
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M5.29113 6L0.595267 -8.15666e-07L9.98699 -5.85622e-08L5.29113 6Z"
                fill="black"
            />
            </svg>

        </div>
      </Field>
    </div>
  )
}
