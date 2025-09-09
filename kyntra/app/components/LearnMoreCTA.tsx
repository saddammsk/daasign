import Link from 'next/link'
import React from 'react'

interface Props{
    href?: string
}

const LearnMoreCTA = ({href= '/'}: Props) => {
  return (
        <div className="inline-flex rounded-2xl group items-center shadow-sm hover:shadow-primary transition-all duration-500">
        <Link href={href} className="border-top-gradient font-inter-tight font-medium text-lg transition-all duration-500 bg-white/10 group-hover:bg-black whitespace-nowrap h-16 items-center justify-center w-[151px] inline-flex rounded-2xl ">
        Learn More
        </Link>
        </div>
  )
}

export default LearnMoreCTA