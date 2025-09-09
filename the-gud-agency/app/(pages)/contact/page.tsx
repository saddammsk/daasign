
import PrimaryLink from '@/app/components/PrimaryLink'
import React from 'react'
import Link from 'next/link'
function page() {
     return (
          <>
               <section className="w-full 3xl:pt-[332px] 
lg:pt-[224px] pt-[186px] 3xl:pb-[169px] lg:pb-[84px] pb-[120px] md:bg-[url(/images/hero-banner.png)] bg-[url(/images/hero-mobile.jpg)] bg-no-repeat bg-[50%_90%] bg-cover">
                    <div className="w-full max-w-3xl:[1420px] 
max-w-[728px] px-5 mx-auto">
                         <div className="w-full flex flex-col text-center items-center justify-center  mx-auto">
                              <h1 className="3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] uppercase md:leading-none leading-[49px] text-center text-white font-medium">This <span className="relative after:absolute lg:after:w-5 md:after:w-[14px] after:w-2 lg:after:h-5 md:after:h-[14px] after:h-2 after:rounded-full after:bg-secondary after:left-1/2 after:-translate-x-1/2 3xl:after:mt-2 lowercase">i</span>s Where<br></br> Gud Begins</h1>
                              <p className="3xl:text-size-30 md:text-xl text-base font-light md:pt-[30px] pt-5 md:pb-[50px] pb-[30px] text-white">Ready to start something gud? Let's talk.</p>
                              <div className="md:flex md:max-w-full max-w-[209px] mx-auto items-center justify-center gap-10">
                                   <PrimaryLink href="/" className="bg-primary md:mb-0 mb-5 hover:bg-primary/70">
                                        <span>Start Your Project</span>
                                   </PrimaryLink>
                                   <PrimaryLink href="/" className="bg-secondary hover:bg-secondary/70">
                                        <span>See our work</span>
                                   </PrimaryLink>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="bg-black-1 relative z-10 2xl:pt-[100px] pt-[50px]">
                    <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
                         <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                              <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Talk to Gud</h2>
                              <div className="text-end">
                                   <img src="images/wave-shape.svg" className="inline-block md:h-auto h-5" alt="" />
                              </div>
                         </div>
                         <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center  text-white">Don’t just fill out a form —  <span className="text-primary 3xl:text-[30px] text-xl font-annie">start something gud. </span>  Let’s talk.</p>
                         <div className='grid lg:grid-cols-2 3xl:mt-[120px] md:mt-[88px] mt-[50px] md:gap-10 gap-[50px]'>
                              <form action="">
                                   <div className='3xl:mb-11 mb-[30px]'>
                                        <label htmlFor="" className='3xl:text-[22px] md:text-base text-sm font-medium text-white block md:mb-[15px] mb-3'>Full Name *</label>
                                        <input type="text" className='border border-secondary rounded-[10px] 3xl:h-[67px] h-[46px] w-full text-white 3xl:text-[22px] md:text-base text-xs md:px-[31px] px-4 font-medium bg-black-1000/[65%]' placeholder='' />
                                   </div>
                                   <div className='3xl:mb-11 mb-[30px]'>
                                        <label htmlFor="" className='3xl:text-[22px] md:text-base text-sm font-medium text-white block md:mb-[15px] mb-3'>Email Address *</label>
                                        <input type="text" className='border border-secondary rounded-[10px] 3xl:h-[67px] h-[46px] w-full text-white 3xl:text-[22px] md:text-base text-xs md:px-[31px] px-4 font-medium bg-black-1000/[65%]' placeholder='' />
                                   </div>
                                   <div className='3xl:mb-11 mb-[30px]'>
                                        <label htmlFor="" className='3xl:text-[22px] md:text-base text-sm font-medium text-white block md:mb-[15px] mb-3'>Company/Organization</label>
                                        <input type="email" className='border border-secondary rounded-[10px] 3xl:h-[67px] h-[46px] w-full text-white 3xl:text-[22px] md:text-base text-xs md:px-[31px] px-4 font-medium bg-black-1000/[65%]' placeholder='' />
                                   </div>
                                   <div className='3xl:mb-11 mb-[30px]'>
                                        <label htmlFor="" className='3xl:text-[22px] md:text-base text-sm font-medium text-white block md:mb-[15px] mb-3'>Service Interested In</label>
                                        <select className='border appearance-none border-secondary rounded-[10px] 3xl:h-[67px] h-[46px]  w-full text-white/[61%] bg-[url(/images/drop-arrow.svg)] select bg-no-repeat md:px-[31px] px-4 3xl:text-xl md:text-base text-xs font-medium bg-black-1000/[65%]'>
                                             <option value="">Select a service</option>
                                        </select>
                                   </div>
                                   <div className='3xl:mb-11 mb-5'>
                                        <label htmlFor="" className='3xl:text-[22px] md:text-base text-sm font-medium text-white block md:mb-[15px] mb-3'>Project Details *</label>
                                        <textarea placeholder='Tells us about your project, goals, timeline, and any specific requirements...' className='border border-secondary rounded-[10px] 3xl:h-[271px] md:h-[188px] h-[171px] w-full text-white md:pt-[30px] pt-4 3xl:text-xl md:text-base text-xs md:px-[31px] px-4 font-medium bg-black-1000/[65%]'>
                                        </textarea>
                                   </div>
                                   <PrimaryLink href="/" className="bg-secondary w-full !block text-center hover:bg-secondary/70">
                                        <span>send message</span>
                                   </PrimaryLink>
                              </form>
                              <div>
                                   <div className='3xl:max-w-[749px] max-w-[543px] ml-auto'>
                                        <div className='bg-black-1000 mb-[30px] border-l-4 border-primary md:rounded-[30px] rounded-[20px] 3xl:p-[50px] md:p-[38px] px-[30px] py-10'>
                                             <h4 className='3xl:text-[30px] text-xl font-bold text-primary 3xl:mb-10 md:mb-[22px] mb-[30px]'>Email Us</h4>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-medium text-white md:mb-5 mb-3'>For general inquiries:</p>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-semibold text-primary mb-5'>hello@thegudagency.com</p>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-medium text-white md:mb-5 mb-3'>For new projects:</p>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-semibold text-primary'>projects@thegudagency.com</p>
                                        </div>
                                        <div className='bg-black-1000 mb-[30px] border-l-4 border-primary md:rounded-[30px] rounded-[20px] 3xl:p-[50px] md:p-[38px] px-[30px] py-10'>
                                             <h4 className='3xl:text-[30px] text-xl font-bold text-primary 3xl:mb-10 md:mb-[22px] mb-[30px]'>Call Us</h4>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-medium text-white md:mb-5 mb-3'>Ready to talk? Give us a call:</p>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-semibold text-primary mb-5'>+1 (234) 567-8900</p>
                                             <p className='md:text-lg text-sm font-semibold text-primary'>Monday - Friday, 9am - 6pm EST</p>
                                        </div>
                                        <div className='bg-black-1000 mb-[30px] border-l-4 border-primary md:rounded-[30px] rounded-[20px] 3xl:p-[50px] md:p-[38px] px-[30px] py-10'>
                                             <h4 className='3xl:text-[30px] text-xl font-bold text-primary 3xl:mb-10 md:mb-[22px] mb-[30px]'>follow Us</h4>
                                             <p className='3xl:text-[22px] md:text-base text-sm font-medium text-white md:mb-5 mb-3'>Stay connected on social media:</p>
                                             <ul className='flex items-center md:gap-[27px] gap-4'>
                                                  <li><Link href="#"><img src="images/ig.svg" className='3xl:w-auto w-8' alt="" /></Link></li>
                                                  <li><Link href="#"><img src="images/facebook.svg" className='3xl:w-auto w-8' alt="" /></Link></li>
                                                  <li><Link href="#"><img src="images/youtube.svg" className='3xl:w-auto w-8' alt="" /></Link></li>
                                                  <li><Link href="#"><img src="images/twiter.svg" className='3xl:w-auto w-8' alt="" /></Link></li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="absolute top-[100px] md:block hidden right-[100px] -z-10">
                         <img src="images/chat-icon.svg" alt="" />
                    </div>
               </section>
               <section className='md:mt-[120px] mt-[50px] overflow-hidden'>
                    <div
                         className="text-center lg:px-0 px-10 md:py-[122px] py-10 bg-cover bg-no-repeat md:rounded-t-[170px] rounded-t-[70px] bg-[url(/images/contact-bg2.png)]">
                         <div className='w-fit mx-auto md:flex 3xl:gap-0 gap-4 relative text-center'>
                              <div className='3xl:text-[50px] w-fit md:text-[32px] text-xl 3xl:mt-[100px] md:mt-20 font-annie text-white'>
                                   <div className="text-end md:-mr-12 -mr-4">
                                        <img src="images/curve-arrow.svg" className='inline-block  xl:w-auto w-10' alt="" />
                                   </div>
                                   <span className='block rotate-[-9deg] md:ml-0 -ml-10 md:-mt-5'>gud Mojo.</span>
                              </div>
                              <h2 className='3xl:text-[120px] md:text-[74px] text-[40px] uppercase font-medium 3xl:leading-[157px] md:leading-[102px] leading-[49px] text-black-1'>Need <br></br>Something<br></br> Quick?</h2>
                              <div className='3xl:text-[50px] md:mr-0 -mr-5 md:mt-[120px] -mt-3 ml-auto w-fit lg:text-[32px] text-xl md:flex gap-2 md:pb-16 justify-end items-end  font-annie text-white'>
                                   <div className="text-end md:mr-0 -mr-8">
                                        <img src="images/curve-arrow2.svg" className='inline-block md:rotate-0 rotate-[135deg] xl:w-auto w-10' alt="" />
                                   </div>
                                   <span className='block rotate-[9deg] md:-mt-5 -mt-7'>Feelin' gud</span>
                              </div>
                         </div>
                         <p className='3xl:text-[30px] md:text-xl text-base md:mb-10 mb-[30px] mt-5 font-medium text-black-1'>For faster responses, reach out through these channels:</p>
                         <ul className='flex md:flex-nowrap flex-wrap items-center justify-center md:gap-[30px] gap-[15px] md:max-w-[866px] max-w-[209px] mx-auto'>
                              <li className='md:w-1/2 w-full'>
                                   <Link href="/" className='flex items-center justify-center gap-3 py-1 border-[3px] border-black-1 rounded-[100px] lg:text-[30px] md:text-xl text-sm font-medium text-black-1 '><img src="images/mobile-icon.svg" className='md:h-auto h-[14px]' alt="" /> Whatsapp</Link>
                              </li>
                              <li className='md:w-1/2 w-full'>
                                   <Link href="/" className='flex items-center justify-center gap-3 py-1 border-[3px] border-black-1 rounded-[100px] lg:text-[30px] md:text-xl text-sm font-medium text-black-1 '><img src="images/calendar-icon.svg" className='md:h-auto h-[14px]' alt="" /> Schedule Call</Link>
                              </li>
                         </ul>
                    </div>
               </section>
          </>
     )
}

export default page
