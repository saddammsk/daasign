import { Metadata } from "next";
import Company from "@/app/components/Company";
import Contact from "@/app/components/Contact";
import PrimaryLink from "@/app/components/PrimaryLink";

const AboutUs = () => {
  return (
    <div className="w-full">
      <section className="w-full 3xl:pt-[332px] 
lg:pt-[224px] pt-[186px] 3xl:pb-[169px] lg:pb-[84px] pb-[120px] md:bg-[url(/images/hero-banner.png)] bg-[url(/images/hero-mobile.jpg)] bg-no-repeat bg-[50%_90%] bg-cover">
        <div className="w-full max-w-3xl:[1420px] 
max-w-[1000px] px-5 mx-auto">
          <div className="w-full flex flex-col text-center items-center justify-center  mx-auto">
            <h1 className="3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] uppercase md:leading-none leading-[49px] text-center text-white font-medium">Built Different.<br></br> Bu<span className="relative after:absolute lg:after:w-5 md:after:w-[14px] after:w-2 lg:after:h-5 md:after:h-[14px] after:h-2 after:rounded-full after:bg-tertiary after:left-1/2 after:-translate-x-1/2 3xl:after:mt-2 lowercase">i</span>lt Gud.</h1>
            <p className="3xl:text-size-30 md:text-xl text-base font-light md:pt-[30px] pt-5 md:pb-[50px] pb-[30px] text-white">We're not just gud – we're exceptionally gud at what we do</p>
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
      <section className="bg-black-1 relative z-10  md:pt-[100px] pt-[50px]">
        <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
          <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
            <h2 className="3xl:text-[90px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Our Story</h2>
            <div className="text-end">
              <img src="images/wave-shape.svg" className="inline-block md:h-auto h-5" alt="" />
            </div>
          </div>
          <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center  text-white">From bold beginnings to real results — our story is written <span className="text-primary 3xl:text-[30px] text-xl md:block font-annie">in the brands we’ve built.</span></p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 3xl:mb-[100px] mb-[60px] 3xl:mt-[144px] md:mt-[100px] mt-[50px] md:gap-[30px] gap-10">
            <div className='border bubble-on-hover border-primary rounded-[20px] bg-black-1000/[65%] 3xl:py-[50px] py-7 3xl:px-9 px-5'>
              <div className='flex mb-7 items-center gap-2'>
                <img src="images/rocket.svg" alt="" />
                <h4 className='3xl:text-[30px] text-xl font-black text-primary'>The Beginning</h4>
              </div>
              <p className='3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white'>Founded in 2020 with a simple mission: to create gud work that makes a real difference. We started small but dreamed big, believing that exceptional creativity combined with strategic thinking could transform brands and businesses.</p>
            </div>
            <div className='border bubble-on-hover border-secondary rounded-[20px] bg-black-1000/[65%] 3xl:py-[50px] py-7 3xl:px-9 px-5'>
              <div className='flex mb-7 items-center gap-2'>
                <img src="images/light.svg" alt="" />
                <h4 className='3xl:text-[30px] text-xl font-black text-secondary'>Our Philosophy</h4>
              </div>
              <p className='3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white'>We believe that being "gud" isn't just about quality—it's about understanding, empathy, and creating solutions that resonate. Every project we take on is an opportunity to push boundaries and exceed expectations.</p>
            </div>
            <div className='border bubble-on-hover border-tertiary rounded-[20px] bg-black-1000/[65%] 3xl:py-[50px] py-7 3xl:px-9 px-5'>
              <div className='flex mb-7 items-center gap-2'>
                <img src="images/target.svg" alt="" />
                <h4 className='3xl:text-[30px] text-xl font-black text-tertiary'>Today</h4>
              </div>
              <p className='3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white'>Today, we're a full-service creative agency helping businesses tell their stories, connect with audiences, and achieve remarkable growth. Our work spans branding, digital marketing, web development, and strategic consulting.</p>
            </div>
          </div>
          <ul className="flex itmes-center justify-center md:gap-3 gap-2">
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
          </ul>
        </div>
        <div className="absolute top-[100px] md:block hidden right-[100px] -z-10">
          <img src="images/chat-icon.svg" alt="" />
        </div>
      </section>
      <section className="bg-black-1 md:py-[100px] py-[50px]">
        <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
          <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
            <h2 className="3xl:text-[90px] md:leading-normal leading-[37px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Our Values</h2>
            <div className="text-end">
              <img src="images/line-img.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
            </div>
          </div>
          <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center 3xl:mb-[120px] mb-16 text-white">Think sharp. Move fast. Stay real. <span className="text-secondary 3xl:text-[30px] text-xl block font-annie">These values guide everything we do at gud.</span></p>
          <div className="3xl:max-w-[1360px] max-w-[1060px] mx-auto">
            <div className="flex md:items-center items-start pb-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
              <img src="images/badge.svg" className="3xl:w-auto md:w-20 w-[54px]" alt="" />
              <div>
                <h4 className="3xl:text-[30px] text-xl font-black text-primary uppercase md:mb-5 mb-2.5">Excellence</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[30px] leading-5 text-white">We don't settle for good enough. Every pixel, every word, every strategy is crafted with meticulous attention to detail.</p>
              </div>
            </div>
            <div className="flex md:items-center items-start py-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
              <img src="images/partnership-icon.svg" className="3xl:w-auto md:w-20 w-[54px]" alt="" />
              <div>
                <h4 className="3xl:text-[30px] text-xl   font-black text-secondary uppercase md:mb-5 mb-2.5">Partnership</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[30px] leading-5 text-white">We're not just vendors—we're partners in your success. Your wins are our wins, and we're invested in your long-term growth.</p>
              </div>
            </div>
            <div className="flex md:items-center items-start py-[30px] border-b border-white/[27%] md:gap-[51px] gap-4">
              <img src="images/star-icon.svg" className="3xl:w-auto md:w-20 w-[54px]" alt="" />
              <div>
                <h4 className="3xl:text-[30px] text-xl font-black text-tertiary uppercase md:mb-5 mb-2.5">Innovation</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[30px] leading-5 text-white">We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions that give you a competitive advantage.</p>
              </div>
            </div>
            <div className="flex md:items-center items-start pt-[30px]  md:gap-[51px] gap-4">
              <img src="images/heart-icon.svg" className="3xl:w-auto md:w-20 w-[54px]" alt="" />
              <div>
                <h4 className="3xl:text-[30px] text-xl  font-black text-primary uppercase md:mb-5 mb-2.5">Authenticity</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[30px] leading-5 text-white">We believe in honest communication, transparent processes, and creating work that genuinely represents who you are as a brand.</p>
              </div>
            </div>
          </div>
          <ul className="flex itmes-center md:mt-[100px] mt-[60px] justify-center gap-3">
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
          </ul>
        </div>
      </section>
      <section className="bg-black-1 md:pb-[100px] pb-[50px]">
        <div className="3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto">
          <div className="w-fit mx-auto 3xl:mb-14 md:mb-3 mb-5">
            <h2 className="3xl:text-[90px] md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Our Approach</h2>
            <div className="">
              <img src="images/yellow-line.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
            </div>
          </div>
          <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center  text-white">Our process is simple: understand, create, deliver — <span className="text-tertiary 3xl:text-[30px] text-xl md:block font-annie">always with results in mind.</span></p>
          <div className="max-w-[1368px] 3xl:mt-[130px] md:mt-20 mt-[75px] mx-auto">
            <div className="grid md:grid-cols-2 lg:gap-[60px] gap-10">
              <div className="border relative z-10 group border-primary bg-black-1000/[65%] rounded-[20px] lg:p-[50px] md:p-8 py-10 px-5">
                <h4 className="3xl:text-[30px] text-xl  font-black text-primary uppercase md:mb-10 mb-5">Strategy First</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white">We start every project with deep research and strategic planning. Understanding your goals, audience, and market landscape is crucial to creating work that delivers real results.</p>
                <div className="absolute group-hover:opacity-100  md:-top-20 -top-10  -left-6 md:-left-20  md:opacity-0 -z-10">
                  <img src="images/strategy-first.png" className="md:h-auto h-20" alt="" />
                </div>
              </div>
              <div className="border relative z-10 group border-secondary bg-black-1000/[65%] rounded-[20px] lg:p-[50px] md:p-8 py-10 px-5">
                <h4 className="3xl:text-[30px] text-xl  font-black text-secondary uppercase md:mb-10 mb-5">Creative Excellence</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white">Our creative process balances bold innovation with proven principles. We push boundaries while ensuring every design decision serves a purpose and enhances user experience.</p>
                <div className="absolute group-hover:opacity-100 md:-top-20 -top-10  -right-6 md:-right-20 md:opacity-0 -z-10">
                  <img src="images/creative.svg" className="md:h-auto h-20" alt="" />
                </div>
              </div>
              <div className="border relative z-10 group border-tertiary bg-black-1000/[65%] rounded-[20px] lg:p-[50px] md:p-8 py-10 px-5">
                <h4 className="3xl:text-[30px] text-xl  font-black text-tertiary uppercase md:mb-10 mb-5">Data-Driven Decisions</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white">We measure everything and optimize continuously. Our decisions are backed by analytics, user feedback, and performance metrics to ensure maximum impact.</p>
                <div className="absolute group-hover:opacity-100 md:-top-20 -top-10 md:-left-[60px] -left-6 md:opacity-0 -z-10">
                  <img src="images/data.png" className="md:h-auto h-20" alt="" />
                </div>
              </div>
              <div className="border relative z-10 group border-primary bg-black-1000/[65%] rounded-[20px] lg:p-[50px] md:p-8 py-10 px-5">
                <h4 className="3xl:text-[30px] text-xl  font-black text-primary uppercase md:mb-10 mb-5">Agile Execution</h4>
                <p className="3xl:text-[22px] md:text-base text-sm font-medium 3xl:leading-[33px] md:leading-6  leading-5  text-white">We work in iterative cycles, keeping you involved throughout the process. This approach allows for flexibility, faster delivery, and better end results.</p>
                <div className="absolute group-hover:opacity-100 md:-top-20 -top-10 md:-right-[60px] -right-6 md:opacity-0 -z-10">
                  <img src="images/execution.png" className="md:h-auto h-20" alt="" />
                </div>
              </div>
            </div>
          </div>
          <ul className="flex itmes-center md:mt-[100px] mt-[50px] justify-center gap-3">
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-primary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-tertiary"></li>
            <li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5  rounded-full block bg-secondary"></li>
          </ul>
        </div>
      </section>
      <Company></Company>
      <Contact
        bgImage="/images/contact-bg.png"
        leftText="Let's go!"
        rightText="We’re ready"
        heading="Ready to <br> Work<br> Together?"
        description="Let's create something gud together.<br>
Get in touch and let's discuss how we can help your brand reach new heights."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </div>
  )
}

export default AboutUs