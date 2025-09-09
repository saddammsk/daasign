import About from '@/app/components/About'
import Company from '@/app/components/Company'
import Contact2 from '@/app/components/Contact2'
import Faq from '@/app/components/Faq'
import PrimaryLink from '@/app/components/PrimaryLink'
import Story from '@/app/components/Story'
import Work from '@/app/components/Work'
import MainHeading from "@/app/components/MainHeading";
import Link from "next/link";
import React from 'react'
import GudEffect3 from '@/app/components/GudEffect3'
const page1Faqs = [
     {
          id: '01',
          question: 'Which platforms do you manage?',
          answer: "We offer web development, UI/UX design, and SEO services.",
          colorClass: 'text-primary'
     },
     {
          id: '02',
          question: 'Do you create the content or just post it?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-secondary'
     },
     {
          id: '03',
          question: 'How often will you post?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-tertiary'
     },
     {
          id: '04',
          question: 'Do you offer community management (DMs, comments)?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-primary'
     },
     {
          id: '05',
          question: 'Can I approve content before it goes live?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-secondary'
     },
]
function page() {
     return (
          <div>
               <section className="w-full 3xl:pt-[332px] 
lg:pt-[224px] pt-[186px] 3xl:pb-[169px] lg:pb-[84px] pb-[120px] md:bg-[url(/images/hero-banner.png)] bg-[url(/images/hero-mobile.jpg)] bg-no-repeat bg-[50%_90%] bg-cover">
                    <div className="w-full max-w-3xl:[1420px] 
max-w-[728px] px-5 mx-auto">
                         <div className="w-full flex flex-col text-center items-center justify-center  mx-auto">
                              <h1 className="3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] uppercase md:leading-none leading-[49px] text-center text-white font-medium">Soc<span className="relative after:absolute lg:after:w-5 md:after:w-[14px] after:w-2 lg:after:h-5 md:after:h-[14px] after:h-2 after:rounded-full after:bg-primary after:left-1/2 after:-translate-x-1/2 3xl:after:mt-2 lowercase">i</span>al Media<br></br> That Sells</h1>
                              <p className="3xl:text-size-30 md:text-xl text-base font-light md:pt-[30px] pt-5 md:pb-[50px] max-w-[886px] mx-auto pb-[30px] text-white">Strategic content, visuals, and ads built to grow your audience and drive engagement.</p>
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
               <section className="md:pt-[100px] relative z-10 pt-12 xl:pb-16 md:pb-12 pb-[30px]">
                    <div className="mx-auto 3xl:max-w-[1840px] max-w-[1340px] w-full px-5">
                         <div className="text-center mx-auto 3xl:max-w-[1129px] max-w-[780px] w-full">
                              <div className="inline-flex items-center justify-center flex-col 3xl:mb-[52px] md:mb-10 mb-4">
                                   <MainHeading>What We Offer</MainHeading>
                                   <span className="w-full md:mt-3.5 flex items-center justify-end"><img src='../images/green-line.svg' alt="" className="md:h-auto 3xl:w-auto w-[116px] h-1" /></span>
                              </div>
                              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal md:mt-2">Not just services — solutions. <span className="font-annie text-primary 3xl:text-[40px] 2xl:text-[26px] text-xl  block"> Built for growth, crafted with gud. </span></p>
                         </div>
                         <div className="3xl:pt-[210px] z-10 relative 3xl:pt-[150px] md:pt-[75px] pt-[65px]">
                              <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:max-w-[1652px] xl:max-w-[1080px] max-w-[580px] w-full mx-auto 2xl:gap-6 md:gap-14 gap-[50px]">
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] border xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-5.159deg]">
                                        <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="Your Company"
                                                  src="../images/image-icon.svg"
                                                  className="md:h-auto h-[29px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Content Creation & Planning</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Strategic content calendars with engaging posts, stories, and reels that align with your brand voice and business goals.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[6.158deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/profile-icon.svg"
                                                  className="md:h-auto h-8"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Profile Optimization</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Complete optimization for Instagram, TikTok, and LinkedIn to maximize discoverability and conversion rates.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-8.894deg]">
                                        <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/website-icon.svg"
                                                  className="md:h-auto h-[28px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Community Management</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Active engagement with your audience, responding to comments, DMs, and building genuine relationships with followers.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[4.569deg] ">
                                        <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/speaker-icon.svg"
                                                  className="md:h-auto h-[30px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Paid Social Ads</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">High-converting ad campaigns across all platforms designed to drive traffic, leads, and sales for your business.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[236px] max-w-[293px] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:order-1 order-2 md:rotate-[-9.668deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/chart-icon.svg"
                                                  className="md:h-auto h-6"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Analytics & Reporting</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Detailed performance tracking and monthly reports showing growth metrics, engagement rates, and ROI.</p>
                                   </div>
                              </div>
                              <div className="-mx-[25px] -z-10  md:hidden block absolute top-5 left-0">
                                   <div className='  w-full'>
                                        <img src="images/dots-bg.png" className=' w-full' alt="" />
                                   </div>
                              </div>
                              <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
                         </div>
                    </div>
                    <div className="absolute top-[100px] md:block hidden right-[100px] -z-10">
                         <img src="images/chat-icon.svg" alt="" />
                    </div>
               </section>
               <section className='3xl:pt-[100px] 
md:pt-0 pt-[50px]'>
                    <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
                         <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                              <h2 className="3xl:text-[90px] md:leading-normal leading-[37px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Deliverables</h2>
                              <div className="text-end">
                                   <img src="images/line-img.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
                              </div>
                         </div>
                         <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center 3xl:mb-[120px] md:mb-16 mb-[50px] text-white">Posts, captions, visuals, and insights — we don’t just plan it,  <span className="text-secondary 3xl:text-[30px] text-xl md:block font-annie">we deliver it all, gud-style.</span></p>
                         <div className='grid lg:grid-cols-2 gap-[46px]'>
                              <div className='bg-black-1000 bubble-on-hover border-l-4 border-primary rounded-[30px] 3xl:py-[70px] md:py-14 py-[50px] 3xl:px-[53px] xl:px-8 md:px-6 px-5'>
                                   <h4 className='3xl:text-[30px] text-xl font-black 3xl:mb-[50px] mb-[30px] text-primary 3xl:leading-[37px] leading-6'>Strategy & Planning</h4>
                                   <ul>
                                        <li className='flex xl:pb-[28px] pb-3  border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Monthly content calendar planning and growth KPIs</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Comprehensive page history analysis (views, saves, CTA rates)</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Competitor analysis and benchmarking</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Industry trend analysis and viral content research</li>
                                        <li className='flex xl:pt-[28px] pt-3  items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Niche-specific trend reverse-engineering</li>
                                   </ul>
                              </div>
                              <div className='bg-black-1000 bubble-on-hover border-r-4 border-secondary rounded-[30px] 3xl:py-[70px] md:py-14 py-[50px] 3xl:px-[53px] xl:px-8 md:px-6 px-5'>
                                   <h4 className='3xl:text-[30px] text-xl font-black 3xl:mb-[50px] mb-[30px] text-secondary 3xl:leading-[37px] leading-6'>Content Creation</h4>
                                   <ul>
                                        <li className='flex xl:pb-[28px] pb-3  border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-purple.svg" alt="" />Monthly hook and script writing</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-purple.svg" alt="" />Creative video concept direction and filming</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-purple.svg" alt="" />Reveal videos, talking head content, and lifestyle posts</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-purple.svg" alt="" />Top-performing industry content analysis</li>
                                        <li className='flex xl:pt-[28px] pt-3  items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-purple.svg" alt="" />Brand-consistent visual content creation</li>

                                   </ul>
                              </div>
                              <div className='bg-black-1000 bubble-on-hover border-l-4 border-tertiary rounded-[30px] 3xl:py-[70px] md:py-14 py-[50px] 3xl:px-[53px] xl:px-8 md:px-6 px-5'>
                                   <h4 className='3xl:text-[30px] text-xl font-black 3xl:mb-[50px] mb-[30px] text-tertiary 3xl:leading-[37px] leading-6'>Publishing & Management</h4>
                                   <ul>
                                        <li className='flex xl:pb-[28px] pb-3  border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-yellow.svg" alt="" />Multi-platform content posting (Instagram, TikTok, YouTube Shorts)</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-yellow.svg" alt="" />Cross-channel content repurposing and optimization</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-yellow.svg" alt="" />Stories and carousel format adaptation</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-yellow.svg" alt="" />Optimal posting time scheduling</li>
                                        <li className='flex xl:pt-[28px] pt-3  items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check-yellow.svg" alt="" />Community engagement and response management</li>

                                   </ul>
                              </div>
                              <div className='bg-black-1000 bubble-on-hover border-r-4 border-primary rounded-[30px] 3xl:py-[70px] md:py-14 py-[50px] 3xl:px-[53px] xl:px-8 md:px-6 px-5'>
                                   <h4 className='3xl:text-[30px] text-xl font-black 3xl:mb-[50px] mb-[30px] text-primary 3xl:leading-[37px] leading-6'>Analytics & Optimization</h4>
                                   <ul>
                                        <li className='flex xl:pb-[28px] pb-3  border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Monthly performance reports and insights</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Growth metrics tracking and analysis</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Content performance optimization recommendations</li>
                                        <li className='flex xl:py-[28px] py-3 border-b border-white/[27%] items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />Engagement rate monitoring and improvement strategies</li>
                                        <li className='flex xl:pt-[28px] pt-3  items-center 3xl:text-[22px]  md:text-base text-sm  font-medium md:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5'><img src="images/check.svg" alt="" />ROI tracking and conversion analysis</li>
                                   </ul>
                              </div>
                         </div>
                         <ul className="flex itmes-center md:mt-[100px] mt-[60px] justify-center gap-3">
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li>
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li>
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li>
                         </ul>
                    </div>
               </section>
               <Story
                    contentTitle="Proven Results Across Industries"
                    description="Our data-driven approach has helped businesses of all sizes achieve remarkable growth through strategic social media marketing and comprehensive digital solutions."
                    bulletPoints={[
                         "Average +250% Reach Increase",
                         "Average +180% Engagement Boost",
                         "Average +300% Lead Generation"
                    ]}
                    quote="The results speak for themselves. Our comprehensive approach doesn't just grow numbers - we build engaged communities that convert into real business value. Every campaign is tailored to deliver measurable ROI."
                    stats={[
                         { number: "2M+", label: "Total Followers Generated" },
                         { number: "400%", label: "Average Growth Rate" }
                    ]}
               />
               <section className='3xl:pt-[100px] 
md:pt-0 pt-[50px]'>
                    <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
                         <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
                              <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">The Gud Effect</h2>
                              <div className="text-center md:mr-32 mr-5">
                                   <img src="images/green-line2.svg" className="inline-block md:w-auto w-[76px] md:h-auto h-2" alt="" />
                              </div>
                         </div>
                         <p className="3xl:text-[30px] md:text-xl md:max-w-full max-w-[274px] mx-auto text-sm  font-normal text-center  text-white">We create bold, strategic work that drives real growth <span className="text-primary 3xl:text-[30px] text-xl md:block font-annie">— and the results speak for themselves.</span></p>
                         <div className="md:mt-[100px] mt-[50px]">
                              <GudEffect3></GudEffect3>
                         </div>
                         <ul className="flex itmes-center md:mt-[100px] mt-[60px] justify-center gap-3">
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
                              <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
                         </ul>
                    </div>
               </section>
               <Work></Work>
               <About></About>
               <Company></Company>
               <section className="md:pt-[100px] pt-[50px] md:pb-[120px] pb-[50px]">
                    <div className="mx-auto 3xl:max-w-[1640px] max-w-[1184px] w-full md:px-5 px-[25px]">
                         <div className="w-fit mx-auto  mb-5">
                              <h2 className="3xl:text-[90px] md:leading-normal leading-[37px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Frequently Asked Questions</h2>
                              <div className="text-end">
                                   <img src="images/wave-pink.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
                              </div>
                         </div>
                         <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center  text-white">Got questions?<br></br>  <span className="text-secondary 3xl:text-[30px] text-xl font-annie"> We’ve got gud answers </span>— straight up, no fluff. </p>

                         <Faq items={page1Faqs} />
                    </div>
               </section>
               <Contact2
                    bgImage="/images/agency-bg.jpg"
                    leftText="gud Mojo."
                    rightText="Feelin' gud"
                    heading="Ready to grow<br> your socials?"
                    description="Let's create a social media strategy that actually drives<Br> results for your business."
                    buttonText="Start Your Project"
                    buttonHref="/contact"
               />
          </div>
     )
}

export default page
