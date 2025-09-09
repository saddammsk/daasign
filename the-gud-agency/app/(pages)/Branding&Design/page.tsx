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
          title: "Brand Identity",
          color: "text-primary",
          icon: "images/check.svg",
          items: [
               "Custom logo design with multiple concepts",
               "Complete brand kit and style guide",
               "Color palette and typography selection",
               "Brand voice and messaging framework",
               "Logo variations and applications",
               "Brand usage guidelines and standards",
               "Business card and stationery design",
               "Brand identity mood board",
               "Final files in multiple formats",
               "Brand implementation strategy",
          ]
     },
     {
          title: "Digital & Print Design",
          color: "text-secondary",
          icon: "images/check-purple.svg",
          items: [
               "Website design mockups and wireframes",
               "Mobile app interface design",
               "Social media templates and assets",
               "Marketing brochure and flyer design",
               "Presentation template design",
               "Product packaging design",
               "Trade show and exhibition materials",
               "Email template design",
               "Print-ready file preparation",
               "Digital asset optimization"
          ]
     },
     {
          title: "Creative Strategy",
          color: "text-tertiary",
          icon: "images/check-yellow.svg",
          items: [
               "Brand positioning and strategy",
               "Competitive analysis and research",
               "Target audience persona development",
               "Creative concept development",
               "Visual storytelling framework",
               "Brand architecture planning",
               "Marketing campaign creative direction",
               "Brand refresh and evolution planning",
               "Creative asset library creation",
               "Ongoing design consultation"
          ]
     }
];
const page1Faqs = [
     {
          id: '01',
          question: "How many logo concepts do you provide?",
          answer: "We offer web development, UI/UX design, and SEO services.",
          colorClass: 'text-primary'
     },
     {
          id: '02',
          question: " What file formats will I receive?",
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-secondary'
     },
     {
          id: '03',
          question: ' Can you work with our existing brand elements?',
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-tertiary'
     },
     {
          id: '04',
          question: "How long does the branding process take?",
          answer: "Typically, 4-8 weeks depending on complexity.",
          colorClass: 'text-primary'
     },
     {
          id: '05',
          question: 'Do you provide brand guidelines?',
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
                              <h1 className="3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] uppercase md:leading-none leading-[49px] text-center text-white font-medium">Branding and<br></br> Des<span className="relative after:absolute lg:after:w-5 md:after:w-[14px] after:w-2 lg:after:h-5 md:after:h-[14px] after:h-2 after:rounded-full after:bg-tertiary after:left-1/2 after:-translate-x-1/2 3xl:after:mt-2 lowercase">i</span>gn</h1>
                              <p className="3xl:text-size-30 md:text-xl text-base font-light md:pt-[30px] pt-5 md:pb-[50px] max-w-[942px] mx-auto pb-[30px] text-white">Create memorable brand experiences that connect with your audience and drive business growth through strategic design.</p>
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
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Brand <br></br> Identity</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Complete brand identity development including logo design, color palettes, typography, and brand guidelines that define your unique presence.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[6.158deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/mobile-icon.svg"
                                                  className="md:h-auto h-8"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Digital<br></br> Design</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Modern web design, mobile app interfaces, and digital assets that provide exceptional user experiences across all platforms.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-8.894deg]">
                                        <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/file-icon.svg"
                                                  className="md:h-auto h-[28px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Print Design</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Professional print materials including brochures, business cards, packaging, and marketing collateral that make lasting impressions.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[4.569deg] ">
                                        <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/target-white.svg"
                                                  className="md:h-auto h-[30px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Brand<br></br> Strategy</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Strategic brand positioning, messaging, and market analysis to ensure your brand resonates with your target audience.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-8.894deg]">
                                        <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/star-icon2.svg"
                                                  className="md:h-auto h-[28px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Creative<br></br> Direction</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Art direction and creative consulting to maintain brand consistency across all touchpoints and marketing channels.</p>
                                   </div>
                                   <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[4.569deg] ">
                                        <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                                             <img
                                                  alt="ppc"
                                                  src="../images/package-icon.svg"
                                                  className="md:h-auto h-[30px]"
                                             />
                                        </span>
                                        <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Package<br></br> Design</h4>
                                        <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Innovative packaging solutions that stand out on shelves and create memorable unboxing experiences for your customers.</p>
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
                    description="Our creative design approach has helped businesses of all sizes achieve remarkable growth through compelling brand identities and memorable visual experiences.."
                    bulletPoints={[
                         "Average +250% Brand Recognition Increase",
                         "Average +180% Customer Engagement Growth",
                         "Average +200% Brand Recall Improvement"
                    ]}
                    quote='"The gud agency completely transformed our brand presence. From strategy to execution, everything was seamless. We saw a 3x increase in engagement after launch."'
                    stats={[
                         { number: "99%", label: "CLIENT SATISFACTION RATE" },
                         { number: "48hrs", label: "AVERAGE DESIGN TURNAROUND" }
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
                    heading="Ready to Build a<Br> Memorable Brand?"
                    description="Let's create high-converting paid advertising campaigns that<br> drive qualified traffic and maximize your return on investment."
                    buttonText="Start Your Project"
                    buttonHref="/contact"
               />
          </div>
     )
}

export default page
