import React from 'react'

function Work() {
     return (
          <section className="bg-black-1 md:py-[100px] py-[50px]">
               <div className="3xl:max-w-[1760px] max-w-[962px]  px-5 mx-auto">
                    <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                         <h2 className="3xl:text-[90px] md:leading-normal leading-[37px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">How We Work</h2>
                         <div className="text-end">
                              <img src="images/line-img.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
                         </div>
                    </div>
                    <p className="3xl:text-[30px] md:text-xl text-sm md:max-w-full max-w-[320px] mx-auto font-normal text-center 3xl:mb-[120px] md:mb-16 mb-[50px] text-white">Clear steps. Sharp strategy. Smooth execution.  <span className="text-secondary 3xl:text-[30px] text-xl md:block font-annie">That’s how we do Gud work.</span></p>
                    <div className="max-w-[1360px] mx-auto">
                         <div className="flex md:items-center items-start 3xl:pb-[66px] pb-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
                              <h2 className='3xl:text-[145px] md:text-[108px] text-[64px] md:leading-[102px] leading-[45px] font-black text-secondary'><span className='md:inline hidden'>0</span>1</h2>
                              <div>
                                   <h4 className="3xl:text-[30px] text-xl font-black text-secondary uppercase md:mb-5 mb-2.5">Discovery & Audit</h4>
                                   <p className="3xl:text-[22px] md:text-xl text-sm font-medium md:leading-[30px] leading-5 text-white">Comprehensive analysis of your current SEO performance, competitor research, and PPC account audit to identify opportunities.</p>
                              </div>
                         </div>
                         <div className="flex md:items-center items-start 3xl:py-[66px] py-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
                              <h2 className='3xl:text-[145px] md:text-[108px] text-[64px] md:leading-[102px] leading-[45px] font-black text-tertiary'><span className='md:inline hidden'>0</span>2</h2>
                              <div>
                                   <h4 className="3xl:text-[30px] text-xl   font-black text-tertiary uppercase md:mb-5 mb-2.5">Strategy Development</h4>
                                   <p className="3xl:text-[22px] md:text-xl text-sm font-medium md:leading-[30px] leading-5 text-white">Create customized SEO and PPC strategies based on your business goals, target audience, and competitive landscape.</p>
                              </div>
                         </div>
                         <div className="flex md:items-center items-start 3xl:py-[66px] py-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
                              <h2 className='3xl:text-[145px] md:text-[108px] text-[64px] md:leading-[102px] leading-[45px] font-black text-primary'><span className='md:inline hidden'>0</span>3</h2>
                              <div>
                                   <h4 className="3xl:text-[30px] text-xl   font-black text-primary uppercase md:mb-5 mb-2.5">Implementation</h4>
                                   <p className="3xl:text-[22px] md:text-xl text-sm font-medium md:leading-[30px] leading-5 text-white">Execute technical SEO optimizations, launch targeted PPC campaigns, and implement tracking for comprehensive performance monitoring.</p>
                              </div>
                         </div>
                         <div className="flex md:items-center items-start 3xl:pt-[30px] pt-[30px] md:gap-[51px] gap-4">
                              <h2 className='3xl:text-[145px] md:text-[108px] text-[64px] md:leading-[102px] leading-[45px] font-black text-secondary'><span className='md:inline hidden'>0</span>4</h2>
                              <div>
                                   <h4 className="3xl:text-[30px] text-xl  font-black text-secondary uppercase md:mb-5 mb-2.5">Optimization & Scale</h4>
                                   <p className="3xl:text-[22px] md:text-xl text-sm font-medium md:leading-[30px] leading-5 text-white">Continuously optimize campaigns based on performance data, scale successful strategies, and provide detailed monthly reporting.</p>
                              </div>
                         </div>
                    </div>
                    <ul className="flex itmes-center 3xl:mt-[100px] mt-[60px] justify-center gap-3">
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
                    </ul>
               </div>
          </section>
     )
}

export default Work
