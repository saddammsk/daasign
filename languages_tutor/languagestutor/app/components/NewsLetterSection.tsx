import React from 'react'
import NewsLetter from './NewsLetter'
import Image from 'next/image'
import heart from '../../public/email-icon-green.svg'
import Translate from './common/Translate'


const NewsLetterSection = () => {
  return (
    <section className="py-20 bg-gray-50 w-full bg-no-repeat border-t border-neutral3 border-b bg-center bg-cover">
    <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
      <div className="w-full max-w-[544px] mx-auto">
        <div className="relative">
          <Image src={heart} alt="icon" className="absolute right-0 -top-3" />
        <h2 className="md:text-5xl text-28 text-neutral2 text-center font-semibold mb-4 px-10"><Translate tKey="newsletter-heading" Tag="span" /></h2>
        </div>
        <p className="text-base text-gray3 text-center mb-6"><Translate tKey="newsletter-desc" Tag="span" /></p>
        <div className="w-full">
          <NewsLetter/>

        </div>
      </div>
      </div>
    </section>
  )
}

export default NewsLetterSection