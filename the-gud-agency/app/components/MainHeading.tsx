import Link from 'next/link'
import React, { ReactNode } from 'react'
import { clsx } from '../lib/tailwindMerge'

interface HeadingFirstProps {
  children: ReactNode
  className?: string
}

const HeadingFirst: React.FC<HeadingFirstProps> = ({
  children,
  className = "",
}) => {
  return (
    <h2 className={clsx("text-white font-medium 3xl:text-[90px] lg:text-[66px] md:text-[52px] text-[30px] 3xl:leading-[90px] md:leading-[70px] leading-10 uppercase", className)}>
      {children}
    </h2>
  )
}

export default HeadingFirst