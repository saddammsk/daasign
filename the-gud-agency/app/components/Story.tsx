import React from 'react'

function Story({
     contentTitle = "Proven Results Across Industries",
     description = "Our data-driven approach has helped businesses of all sizes achieve remarkable growth through strategic social media marketing and comprehensive digital solutions.",
     bulletPoints = [
          "Average +250% Reach Increase",
          "Average +180% Engagement Boost",
          "Average +300% Lead Generation"
     ],
     quote = `"The results speak for themselves. Our comprehensive approach doesn't just grow numbers - we build engaged communities that convert into real business value. Every campaign is tailored to deliver measurable ROI."`,
     stats = [
          { number: "2M+", label: "Total Followers Generated" },
          { number: "400%", label: "Average Growth Rated" }
     ]
}) {
     return (
          <section className='3xl:pt-[100px] 
md:pt-0 pt-[50px]'>
               <div className="3xl:max-w-[1663px] max-w-[1197] px-5 mx-auto">
                    {/* Static Title & Subtitle */}
                    <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                         <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">
                              Success Story
                         </h2>
                         <div className="text-end">
                              <img src="images/yellow-wave.svg" className="inline-block md:h-auto h-5" alt="" />
                         </div>
                    </div>
                    <p className="3xl:text-[30px] md:text-xl text-sm font-normal text-center text-white">
                         One brand. One bold goal. Here’s how we made it <span className="text-tertiary 3xl:text-[30px] text-xl md:block font-annie">undeniably gud.</span>
                    </p>

                    {/* Customizable Grid Section */}
                    <div className='grid lg:grid-cols-2 md:mt-[100px] mt-[50px] md:gap-5 gap-[50px]'>
                         <div>
                              <div className='max-w-[651px]'>
                                   <h4 className='3xl:text-[30px] text-xl font-black uppercase text-primary md:mb-[30px] mb-5 xl:leading-[37px] leading-[30px]'>{contentTitle}</h4>
                                   <p className='3xl:text-[22px] md:text-base text-sm 3xl:mb-16 md:mb-10 mb-[30px] font-medium md:leading-[30px] leading-5 text-white'>{description}</p>
                                   <ul className='3xl:mb-[60px] md:mb-8 mb-2.5'>
                                        {bulletPoints.map((point, index) => (
                                             <li key={index} className='flex items-center 3xl:mb-10 md:mb-5 mb-2.5 3xl:text-[25px] md:text-xl text-base text-tertiary font-normal leading-[30px] gap-[14px]'>
                                                  <span className='w-[13px] h-[13px] rounded-full block border border-tertiary'></span>{point}
                                             </li>
                                        ))}
                                   </ul>
                                   <p className='3xl:text-xl md:text-base text-xs italic font-medium md:leading-[30px] leading-5 text-white'>{quote}</p>
                              </div>
                         </div>

                         {/* Stats Column */}
                         <div className='bg-black-1/[65%] border border-white/[41%] rounded-[30px] xl:py-[73px] md:px-0 px-10 md:py-10 py-[50px] text-center'>
                              {stats.map((item, index) => (
                                   <div key={index} className={`max-w-[560px] 3xl:pt-12 pt-10 mx-auto ${index === 0 ? '3xl:pb-12 md:pb-8 pb-10 border-b !pt-0 border-white/[27%]' : ''}`}>
                                        <h2 className='33xl:text-[100px] text-[70px] font-black text-secondary mb-2.5 3xl:leading-[122px] leading-[85px]'>{item.number}</h2>
                                        <p className='3xl:text-[25px] md:text-xl text-sm font-bold text-secondary 3xl:leading-[30px] leading-[17px]'>{item.label}</p>
                                   </div>
                              ))}
                         </div>
                    </div>

                    {/* Dots */}
                    <ul className="flex items-center md:mt-[100px] mt-[60px] justify-center gap-3">
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li>
                    </ul>
               </div>
          </section>
     )
}

export default Story
