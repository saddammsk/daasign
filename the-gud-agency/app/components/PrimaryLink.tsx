import Link from 'next/link'
import React, { ReactNode } from 'react'
import { clsx } from '../lib/tailwindMerge'

interface PrimaryLinkProps {
  href?: string
  children: ReactNode
  className?: string
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  href = "/",
  children,
  className = "",
}) => {
  return (
    <Link href={href} className={clsx("3xl:text-size-30 md:text-xl text-sm inline-block rounded-full transition-all duration-500 text-white font-medium font-montserrat md:w-auto w-[209px] py-2 3xl:px-16 md:px-10 px-4", className)}>
      {children}
    </Link>
  )
}

export default PrimaryLink