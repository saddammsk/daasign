import Link from 'next/link'
import React from 'react'
import {clsx} from "clsx"

interface Props {
    className?: string
}


export const BookCall = ({className=""}) => {
  return (
    <Link href="https://meetings.hubspot.com/julien-kreuk" target='_blank' className={clsx(className,'text-lg transition-all sm:w-fit w-full duration-200 hover:bg-transparent hover:border-white hover:text-white border border-green-1000 font-semibold leading-7 inline-block text-black-1200 bg-green-1000 rounded-lg py-2.5 px-5')}>Book a call</Link>
  )
}
