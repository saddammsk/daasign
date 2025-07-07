import React from 'react'
import { PrimaryLinkGradient } from './common/PrimaryLinkGradient'
import { SucessSwiper } from './SucessSwiper'
import Translate from './common/Translate'

const SuccessStoriesSection = () => {
  return (
       <section className="lg:py-20 py-10 w-full">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full">
          <span className="text-base font-medium text-primary2"><Translate tKey="success-stories-title" Tag="span" /></span>
            <div className="w-full flex lg:flex-row flex-col gap-6 items-start lg:items-center justify-between mb-9">
            <div className="">
            <h2 className="md:text-5xl text-28 text-neutral2 font-semibold md:mt-5 md:mb-5 my-3"><Translate tKey="success-stories-heading" Tag="span" /></h2>
            <p className="md:text-lg text-base text-gray3"><Translate tKey="success-stories-desc" Tag="span" /></p>
            </div>
                <PrimaryLinkGradient href="/testimonials" className="py-3 text-base">
                  <Translate tKey="success-stories-link" Tag="span" />
                </PrimaryLinkGradient>
            </div>
          </div>
          <div className="w-full">
            <SucessSwiper/>
          </div>
    
        </div>
        </section>
  )
}

export default SuccessStoriesSection