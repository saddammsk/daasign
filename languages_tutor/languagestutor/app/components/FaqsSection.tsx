import React from 'react'
import Faqs from './Faqs'
import Translate from './common/Translate'

const FaqsSection = () => {
  return (
        <section className="lg:py-20 py-10 bg-white">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full">
          <div className="">
            <h2 className="md:text-5xl text-28 text-center text-neutral2 font-semibold md:mt-5 mb-3"><Translate tKey="faq-heading" Tag="span" /></h2>
            <p className="md:text-lg text-base text-center text-gray3"><Translate tKey="faq-desc" Tag="span" /></p>
            </div>
            <div className="w-ful">
              <Faqs/>
              <p className="dm:text-lg text-sm text-neutral2 font-medium text-center"><Translate tKey="faq-still-question" Tag="span" /> <a href="#" className="text-primary1 underline"><Translate tKey="faq-contact-support" Tag="span" /></a></p>
            </div>
          </div>
          </div>
        </section>
  )
}

export default FaqsSection