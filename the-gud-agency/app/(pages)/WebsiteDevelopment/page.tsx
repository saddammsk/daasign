import About from '@/app/components/About'
import Company from '@/app/components/Company'
import Contact2 from '@/app/components/Contact2'
import Faq from '@/app/components/Faq'
import GudEffect from '@/app/components/GudEffect'
import GudEffect2 from '@/app/components/GudEffect2'
import PrimaryLink from '@/app/components/PrimaryLink'
import ServiceCards from '@/app/components/ServiceCards'
import Story from '@/app/components/Story'
import Work from '@/app/components/Work'
import MainHeading from "@/app/components/MainHeading";
import React from 'react'
const services = [
     {
          title: "Frontend Development",
          color: "text-primary",
          icon: "images/check.svg",
          items: [
               "Custom responsive web design",
               "Mobile-first development approach",
               "Cross-browser compatibility testing",
               "Interactive user interface elements",
               "Advanced CSS animations and effects",
               "Modern JavaScript functionality",
               "Performance optimization",
               "SSL certificate installation",
               "Email integration and forms",
               "Third-party service integrations"
          ]
     },
     {
          title: "Backend Development",
          color: "text-secondary",
          icon: "images/check-purple.svg",
          items: [
               "Database design and setup",
               "Content Management System (CMS)",
               "User authentication and security",
               "API development and integration",
               "Server configuration and hosting",
               "Automated backup systems",
               "Performance monitoring",
               "SSL certificate installation",
               "Email integration and forms",
               "Third-party service integrations"
          ]
     },
     {
          title: "Optimization & Analytics",
          color: "text-tertiary",
          icon: "images/check-yellow.svg",
          items: [
               "Google Analytics setup and configuration",
               "Conversion tracking implementation",
               "Site speed optimization",
               "Image optimization and compression",
               "Search engine optimization (Technical SEO)",
               "Social media pixel installation",
               "A/B testing framework setup",
               "Performance monitoring tools",
               "Regular security updates",
               "Monthly performance reports"
          ]
     }
];
const page1Faqs = [
     {
          id: '01',
          question: 'How long does it take to build a website?',
          answer: "We offer web development, UI/UX design, and SEO services.",
          colorClass: 'text-primary'
     },
     {
          id: '02',
          question: "Will my website be mobile-friendly?",
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-secondary'
     },
     {
          id: '03',
          question: 'Do you provide ongoing maintenance?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-tertiary'
     },
     {
          id: '04',
          question: 'Can you integrate with our existing systems?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-primary'
     },
     {
          id: '05',
          question: 'Will I be able to update content myself?',
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
                              <h1 className="3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] uppercase md:leading-none leading-[49px] text-center text-white font-medium">Website<br></br> Development</h1>
                              <p className="3xl:text-size-30 md:text-xl text-base font-light md:pt-[30px] pt-5 md:pb-[50px] max-w-[886px] mx-auto pb-[30px] text-white">Professional websites that convert visitors into customers. Fast, secure, and optimized for growth.</p>
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
               <section className="md:pt-[100px] pt-12 3xl:pb-16 md:pb-12 pb-[30px]">
                    <div className="mx-auto 3xl:max-w-[1840px] max-w-[1340px] w-full px-5">
                         <div className="text-center mx-auto 3xl:max-w-[1129px] max-w-[780px] w-full">
                              <div className="inline-flex items-center justify-center flex-col 3xl:mb-[52px] md:mb-10 mb-4">
                                   <MainHeading>What We Offer</MainHeading>
                                   <span className="w-full md:mt-3.5 flex items-center justify-end"><img src='../images/green-line.svg' alt="" className="md:h-auto 3xl:w-auto w-[116px] h-1" /></span>
                              </div>
                              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal md:mt-2">Not just services — solutions. <span className="font-annie text-primary 3xl:text-[40px] 2xl:text-[26px] text-xl  block"> Built for growth, crafted with gud. </span></p>
                         </div>
                         <div className="3xl:pt-[210px] z-10 relative 3xl:pt-[150px] md:pt-[75px] pt-[65px]">
                              <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:!gap-y-10 grid-cols-1 3xl:max-w-[1257px] xl:max-w-[876px] max-w-[580px] w-full mx-auto 3xl:gap-6 md:gap-24 gap-[50px]">
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] border xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-5.159deg]">
                                        <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="Your Company"
                                                  src="../images/design-icon2.svg"
                                                  className="md:h-auto h-[29px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Custom Design</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Unique, responsive designs that reflect your brand identity and provide exceptional user experiences across all devices.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[6.158deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/setting-icon.svg"
                                                  className="md:h-auto h-8"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Full-Stack Development</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Complete frontend and backend development using modern technologies for fast, secure, and scalable websites.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-8.894deg]">
                                        <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/rocket-white.svg"
                                                  className="md:h-auto h-[28px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Performance
                                             Optimization</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Lightning-fast loading speeds, SEO optimization, and conversion-focused features that drive business results.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[4.569deg] ">
                                        <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/mobile-icon.svg"
                                                  className="md:h-auto h-[30px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Mobile-First Approach</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Responsive designs that look and perform perfectly on smartphones, tablets, and desktop computers.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-8.894deg]">
                                        <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/lock-icon.svg"
                                                  className="md:h-auto h-[28px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Security & Maintenance</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Enterprise-level security, regular updates, backups, and ongoing maintenance to keep your site running smoothly.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[4.569deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/chart-icon.svg"
                                                  className="md:h-auto h-[30px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Analytics Integration</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Comprehensive tracking setup to monitor user behavior, conversions, and website performance metrics.</p>
                                   </div>
                              </div>
                              <div className="-mx-[25px] -z-10  sm:hidden block absolute top-5 left-0">
                                   <div className=' w-full'>
                                        <img src="images/shape-2.png" className=' w-full' alt="" />
                                   </div>
                              </div>
                              <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
                         </div>
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
                         <div className='grid lg:grid-cols-3 xl:gap-[42px] gap-6'>
                              {services.map((service, index) => (
                                   <ServiceCards
                                        key={index}
                                        title={service.title}
                                        colorClass={service.color}
                                        checkIcon={service.icon}
                                        items={service.items}
                                   />
                              ))}
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
                    description="Our development expertise has helped businesses of all sizes achieve remarkable growth through modern, high-converting websites and digital solutions."
                    bulletPoints={[
                         "Average +350% Conversion Rate Increase",
                         "Average +75% Reduction in Bounce Rate",
                         "Average Average +280% Lead Generation Boost"
                    ]}
                    quote="Working with GUD was a game-changer for our startup. Their UX insights and clean design turned our app into something users actually love to use. Fast, professional, and visionary."
                    stats={[
                         { number: "98%", label: "GOOGLE PAGESPEED SCORE" },
                         { number: "24/7", label: "UPTIME GUARANTEE" }
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
                              <GudEffect2></GudEffect2>
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
                    heading="Ready to Build<Br> Your Dream<Br> Website?"
                    description="Let's create high-converting paid advertising campaigns that<br> drive qualified traffic and maximize your return on investment."
                    buttonText="Start Your Project"
                    buttonHref="/contact"
               />
          </div>
     )
}

export default page
