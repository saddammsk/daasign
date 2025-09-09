import React from 'react'

function About() {
     return (
          <section className='3xl:pb-[100px] md:pb-[68px] pb-[50px]'>
               <div className="3xl:max-w-[1660px] max-w-[1192px] px-5 mx-auto">
                    <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                         <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">
                              About Us
                         </h2>
                         <div className="text-end">
                              <img src="images/yellow-wave.svg" className="inline-block md:h-auto h-5" alt="" />
                         </div>
                    </div>
                    <p className="3xl:text-[30px] md:text-xl text-sm max-w-[919px] mx-auto font-normal text-center text-white">
                         At Gud, we combine creativity with performance to help brands launch,  <span className="text-tertiary 3xl:text-[30px] text-xl md:inline-block block font-annie"> grow, and win.</span>
                    </p>
                    <div className='grid xl:grid-cols-2 md:gap-5 gap-10 3xl:mt-[102px] md:mt-14 mt-10'>
                         <div className=''>
                              <p className='3xl:text-[22px] md:text-base text-sm max-w-[720px] 3xl:mb-[70px] mb-10 font-medium 3xl:leading-[30px] md:leading-6 leading-5 text-white'>Founded with a vision to bridge the gap between traditional marketing and the digital age, we've grown from a small team of passionate marketers to a leading digital growth agency trusted by businesses worldwide.
                                   <br></br><br></br>
                                   Our journey began when we recognized that many businesses were struggling to navigate the complex world of social media marketing. We saw an opportunity to not just help them grow their followers, but to build meaningful connections that drive real business results.
                                   <br></br><br></br>
                                   Today, we're proud to have helped hundreds of businesses across various industries achieve remarkable growth through our proven strategies and personalized approach.
                              </p>
                              <div className='grid md:grid-cols-2 md:gap-y-10 gap-y-5'>
                                   <div className='flex items-center gap-2'>
                                        <img src="images/target.svg" className='w-[29px]' alt="" />
                                        <h4 className='3xl:text-[25px] md:text-xl text-lg font-normal xl:leading-[30px] leading-6 text-tertiary'>Results-Driven</h4>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="images/rocket-yellow.svg" className='w-[29px]' alt="" />
                                        <h4 className='3xl:text-[25px] md:text-xl text-lg font-normal xl:leading-[30px] leading-6 text-tertiary'>Innovation First</h4>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="images/heart-icon-yellow.svg" className='w-[29px]' alt="" />
                                        <h4 className='3xl:text-[25px] md:text-xl text-lg font-normal xl:leading-[30px] leading-6 text-tertiary'>Partnership Approach</h4>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="images/grapgh.svg" className='w-[29px]' alt="" />
                                        <h4 className='3xl:text-[25px] md:text-xl text-lg font-normal xl:leading-[30px] leading-6 text-tertiary'>Data-Driven</h4>
                                   </div>
                              </div>
                         </div>
                         <div className=''>
                              <div className='3xl:max-w-[742px] max-w-[528px] xl:ml-auto'>
                                   <div className='bg-black-1/[65%] mb-5 rounded-[20px] text-center md:py-4 py-6 border border-primary'>
                                        <h2 className='3xl:text-[100px] text-[70px] font-bold 3xl:leading-[122px] leading-[85px] text-primary'>100%</h2>
                                        <span className='block 3xl:text-[25px] md:text-base text-sm font-semibold text-primary'>Client Satisfaction %</span>
                                   </div>
                                   <div className='bg-black-1/[65%] mb-5 rounded-[20px] text-center md:py-4 py-6 border border-secondary'>
                                        <h2 className='3xl:text-[100px] text-[70px] font-bold 3xl:leading-[122px] leading-[85px] text-secondary'>30+</h2>
                                        <span className='block 3xl:text-[25px] md:text-base] text-sm font-semibold text-secondary'>Team Members</span>
                                   </div>
                                   <div className='bg-black-1/[65%] mb-5 rounded-[20px] text-center md:py-4 py-6 border border-tertiary'>
                                        <h2 className='3xl:text-[100px] text-[70px] font-bold 3xl:leading-[122px] leading-[85px] text-tertiary'>20+</h2>
                                        <span className='block 3xl:text-[25px] md:text-base text-sm font-semibold text-tertiary'>Years Experience</span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <ul className="flex itmes-center 3xl:mt-[100px] md:mt-6 mt-[50px] justify-center gap-3">
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
                         <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
                    </ul>
               </div>
          </section>
     )
}

export default About
