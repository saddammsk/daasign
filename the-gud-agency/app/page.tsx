
import { Metadata } from "next";

import PrimaryLink from "./components/PrimaryLink";
import MainHeading from "./components/MainHeading";
import Contact from "@/app/components/Contact";
import Link from "next/link";
import GudEffect2 from "./components/GudEffect2";
import Faq from "./components/Faq";
import HomeCompany from "./components/HomeCompany";
import PageScroll from "./components/PageScroll";
export const metadata: Metadata = {
  title: "Home | The Gud Agency",
  description: "Home | The Gud Agency",
};
const page1Faqs = [
  {
    id: '01',
    question: 'What services do you offer?',
    answer: "We offer web development, UI/UX design, and SEO services.",
    colorClass: 'text-primary'
  },
  {
    id: '02',
    question: 'How long does a typical project take?',
    answer: "Typically, 4-8 weeks depending on complexity.",
    colorClass: 'text-secondary'
  },
  {
    id: '03',
    question: 'What industries do you work with?',
    answer: "Typically, 4-8 weeks depending on complexity.",
    colorClass: 'text-tertiary'
  },
  {
    id: '04',
    question: 'Do you offer ongoing support or retainers?',
    answer: "Typically, 4-8 weeks depending on complexity.",
    colorClass: 'text-primary'
  },
  {
    id: '05',
    question: 'How do we get started?',
    answer: "Typically, 4-8 weeks depending on complexity.",
    colorClass: 'text-secondary'
  },
]
export default function Home() {

  return (
    <>
      <section className="w-full overflow-hidden 3xl:pt-[344px] lg:pt-[210px] pt-[150px] pb-20 bg-[url('/images/banner-bg.png')] bg-cover bg-center">
        <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full px-5">
          <div className="flex flex-col items-center justify-center">
            <div className="relative 3xl:max-w-none 3xl:w-auto lg:max-w-[810px] max-w-[650px] mx-auto w-full">
              <div className="absolute md:left-0 left-2 3xl:-top-8 md:-top-3 -top-7 flex items-center">
                <span className="font-annie font-normal 3xl:text-size-50 md:text-4xl text-xl text-tertiary flex items-center rotate-[-9.43deg]">Go Gud.</span>
                <span className="absolute md:-right-14 -right-5 md:-top-8 -top-5" >
                  <img
                    alt="Your Company"
                    src="../images/go-arrow.svg"
                    className="3xl:h-auto md:h-[26px] h-3.5"
                  />
                </span>
              </div>
              <div className="absolute 3xl:right-[-104px] md:-right-12 right-10 3xl:top-10 md:top-5 top-auto md:bottom-auto bottom-5 flex items-start md:flex-row flex-row-reverse 3xl:gap-4 md:gap-2.5">
                <span className="flex items-center 3xl:mt-0 md:-mt-3 -mt-2 md:ml-0 -ml-1.5" >
                  <img
                    alt="Your Company"
                    src="../images/wins-arrow.svg"
                    className="3xl:h-auto md:h-[60px] h-9 md:rotate-0 rotate-[110deg]"
                  />
                </span>
                <span className="font-annie font-normal 3xl:text-size-50 md:text-4xl text-xl text-secondary flex items-center rotate-[9.61deg]">Gud Wins.</span>
              </div>
              <h1 className="text-white 3xl:mb-9 md:mb-5 mb-14 font-medium 3xl:text-size-120 lg:text-[80px] md:text-[60px] text-[40px] 3xl:leading-[146px] md:leading-[100px] leading-[52px] text-center max-w-[1190px] w-full mx-auto">GUD WORK
                DELIVERS RESULTS
              </h1>
            </div>
            <p className="text-white 3xl:text-size-30 md:text-xl text-base leading-normal text-center">We craft brands that <span className="text-tertiary font-medium italic">connect</span> and deliver campaigns that <span className="text-primary italic font-medium">convert.</span></p>
          </div>
        </div>
        <div className="3xl:mt-[134px] md:mt-[60px] mt-4">
          <div className="marquee md:w-[1990px] w-[950px] z-10 md:top-[90px] top-[70px] left-1/2 -translate-x-1/2 overflow-hidden bg-tertiary relative 2xl:rotate-[6.69deg] lg:rotate-[13deg] md:rotate-[20deg] rotate-[9.14deg]">
            <div className="flex items-center md:gap-7 gap-2.5 relative overflow-hidden md:py-3 py-2">
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-body-bg font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
            </div>
          </div>
          <div className="marquee marquee2 md:w-[1990px] w-[950px] left-1/2 -translate-x-1/2 overflow-hidden border border-solid border-tertiary relative lg:rotate-[-2.55deg] md:rotate-[-6.55deg] rotate-[-4.12deg]">
            <div className="flex items-center md:gap-7 gap-2.5 relative overflow-hidden md:py-3 py-2">
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
              <span className="text-tertiary font-medium font-montserrat md:text-[19px] text-[10px] leading-none">Good Isn’t Enough. Make It Gud.</span>
            </div>
          </div>
        </div>
      </section>
      <PageScroll></PageScroll>
      <div className="bg-[url('/images/glitch-effect-bg.png')] bg-cover bg-center overflow-hidden">
        <section className="3xl:pt-[215px] md:pt-[100px] pt-12 3xl:pb-16 md:pb-12 pb-[30px]">
          <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full px-5">
            <div className="text-center mx-auto 3xl:max-w-[1129px] max-w-[780px] w-full">
              <div className="inline-flex items-center justify-center flex-col 3xl:mb-[52px] md:mb-10 mb-4">
                <MainHeading>What WE DO</MainHeading>
                <span className="w-full md:mt-3.5 flex items-center justify-end"><img src='../images/shape-line.svg' alt="" className="md:h-auto h-1 3xl:w-auto md:w-[250px]" /></span>
              </div>
              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal">We craft bold brands, build high-performing websites, and launch marketing campaigns that drive real results.</p>
              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal md:mt-2">Design, strategy, and execution — <span className="font-annie text-secondary 3xl:text-[40px] 2xl:text-[26px] text-xl md:inline-block block"> all done the gud way. </span></p>
            </div>
            <div className="3xl:pt-[210px] xl:pt-[150px] md:pt-20 pt-[65px]">
              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 3xl:max-w-[1470px] 2xl:max-w-[1147px] xl:max-w-[1080px] max-w-[580px] w-full mx-auto 2xl:gap-16 md:gap-14 gap-3">
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] border xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-14.81deg] rotate-[5.96deg]">
                    <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="Your Company"
                        src="../images/globle-icon.svg"
                        className="md:h-auto h-[29px]"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Website Development</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Custom websites that convert visitors into customers with cutting-edge technology</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7  text-secondary hidden items-center">Read More</Link>

                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 left-0 -z-20">
                    <img src="images/card-circle1.png" alt="" />
                  </div>
                </div>
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[2.77deg] rotate-[-4.93deg]">
                    <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/ppc-icon.svg"
                        className="md:h-auto h-8"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">PPC <br />Advertising</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Maximize ROI with strategic paid advertising campaigns</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 right-0 -z-20">
                    <img src="images/card-circle2.png" alt="" />
                  </div>
                </div>
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[-10.98deg] rotate-[5.96deg]">
                    <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/design-icon.svg"
                        className="md:h-auto h-[28px]"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">Branding &
                      Design</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Create memorable brand identities that resonate with your audience</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 left-0 -z-20">
                    <img src="images/card-circle3.png" alt="" />
                  </div>
                </div>
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:rotate-[14.39deg] rotate-[-4.93deg]">
                    <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/setting-icon.svg"
                        className="md:h-auto h-[30px]"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">AI <br />Automation</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Streamline operations with intelligent automation solutions</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 left-0 -z-20">
                    <img src="images/card-circle1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 3xl:max-w-[1130px] lg:max-w-[830px] max-w-[590px] w-full mx-auto justify-between 3xl:mb-[170px] 2xl:mb-[100px] mb-[70px] xl:mt-0 mt-8 lg:gap-16 md:gap-6 gap-3">
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[236px] max-w-[293px] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:order-1 order-2 md:rotate-[-15.26deg] rotate-[-4.93deg]">
                    <span className="flex items-center justify-center bg-tertiary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/seo-icon.svg"
                        className="md:h-auto h-6"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">SEO <br /> Optimization</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Dominate search results and drive organic traffic to your business</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 left-0 -z-20">
                    <img src="images/card-circle3.png" alt="" />
                  </div>
                </div>
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] rounded-[20px] md:order-2 order-3 md:rotate-[14.39deg] rotate-[5.96deg]">
                    <span className="flex items-center justify-center bg-primary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/mobile-icon.svg"
                        className="md:h-auto h-[38px]"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">social media marketing</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Engage your audience across all social platforms effectively</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 left-0 -z-20">
                    <img src="images/card-circle1.png" alt="" />
                  </div>
                </div>
                <div className=" relative z-20 group">
                  <div className="md:min-h-auto bubble-on-hover min-h-[317px] xl:max-w-[311px] md:max-w-[250px] max-w-[293px] bg-black-1200/[58%] md:mx-0 mx-auto lg:ml-0 ml-auto w-full border border-solid border-white/[0.41] 3xl:px-6 2xl:px-4 3xl:pt-6 2xl:pt-4 3xl:pb-11 2xl:pb-7 md:p-3.5 p-[30px] md:order-3 order-1 rounded-[20px] md:rotate-[-9.26deg] rotate-[5.96deg]">
                    <span className="flex items-center justify-center bg-secondary 3xl:w-[79px] 3xl:h-[79px] w-[61px] h-[61px] 3xl:p-0 p-3  rounded-[10px]">
                      <img
                        alt="ppc"
                        src="../images/Ai-icon.svg"
                        className="md:h-auto h-[39px]"
                      />
                    </span>
                    <h4 className="mt-[30px] mb-2.5 text-white font-black 3xl:text-size-30 text-xl 3xl:leading-9 leading-7 uppercase">AI <br />Automation</h4>
                    <p className="text-white font-medium 3xl:text-xl md:text-base text-sm 3xl:leading-7 leading-5">Streamline operations with intelligent automation solutions</p>
                    <Link href={'/'} className="text-base font-bold mt-[22px] leading-7 text-white hidden items-center">Read More</Link>
                  </div>
                  <div className="absolute -top-20 opacity-0 group-hover:opacity-100 right-0 -z-20">
                    <img src="images/card-circle2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <PrimaryLink className="bg-primary hover:bg-primary/[70%] capitalize text-center">book a free consult</PrimaryLink>
              </div>
              <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
            </div>
          </div>
        </section>
        <section className="xl:py-16 md:py-12 py-[30px]">
          <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full md:px-5 px-[30px]">
            <div className="text-center mx-auto max-w-[1129px] w-full">
              <div className="inline-flex items-center justify-center flex-col 3xl:mb-[52px] md:mb-10 mb-5">
                <MainHeading>Real Results</MainHeading>
                <span className="w-full md:mt-3.5 flex items-center justify-start"><img src='../images/shape-line2.svg' alt="" className="md:h-aut0 h-1" /></span>
              </div>
              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal 3xl:max-w-[850px] max-w-[550px] w-full mx-auto">We create bold, strategic work that drives real growth — <span className="font-annie text-tertiary 3xl:text-[40px] 2xl:text-[26px] text-xl md:inline-block block"> and the results speak for themselves. </span></p>
            </div>
            <GudEffect2></GudEffect2>
            <div className="mt-11 md:hidden block">
              <Link href={'/'} className="flex items-center justify-center gap-2.5 uppercase font-bold text-sm text-white">View More <img src="../images/down-round.svg" alt="" /></Link>
            </div>
            <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
          </div>
        </section>
        <section className="xl:py-16 md:py-12 py-[30px]">
          <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full px-5">
            <div className="text-center">
              <div className="inline-flex items-center justify-center flex-col xl:mb-[105px] mb-12">
                <MainHeading>Why Brands Choose Us</MainHeading>
                <span className="w-full flex items-center md:justify-end justify-start md:ml-0 ml-[110px]">
                  <img src="../images/green-wave.svg" alt="" className="3xl:h-auto md:h-[40px] h-[21px]" />
                </span>
                <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal 3xl:max-w-[1130px] max-w-[750px] 3xl:mt-12 md:mt-8 mt-5 w-full mx-auto">We do more than what’s expected. From real strategy to tangible results   — <span className="font-annie text-primary 3xl:text-[40px] 2xl:text-[26px] text-xl"> here’s what we bring to the table that most don’t. </span></p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-[30px]">
              <div className="overflow-hidden border-2 border-solid border-white/[0.21] 3xl:rounded-[94] xl:rounded-[60px] lg:rounded-[30px] md:rounded-3xl rounded-[20px] relative bg-[url('/images/agency-bg.png')] bg-cover bg-center 3xl:px-[53px] 3xl:pt-[64px] 3xl:pb-[60px] xl:p-11 lg:p-7 md:p-5 px-5 py-[30px]">
                <span className="flex items-center -z-10 bg-primary xl:w-[325px] lg:w-[230px] md:w-[180px] w-[126px] xl:h-[325px] lg:h-[230px] md:h-[180px] h-[126px] rounded-full blur-[50px] absolute md:top-7 top-1.5 md:right-7 right-1.5"></span>
                <h4 className="3xl:text-[40px] xl:text-[30px] md:text-[28px] text-xl font-bold leading-normal text-primary 3xl:mb-[68px] lg:mb-10 mb-5">The Gud Agency</h4>
                <ul>
                  <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> Real business goals, not just pretty design</li>
                  <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> Tailored to your voice, audience, and vibe</li>
                  <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> We connect design, ads, SEO, and automation</li>
                  <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> Transparent metrics, regular updates</li>
                  <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> We act as a partner, not just a vendor</li>
                  <li className="text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-primary"> ✓ </span> Looks great and performs</li>
                </ul>
              </div>
              <div className="overflow-hidden border-2 border-solid border-white/[0.21] 3xl:rounded-[94] xl:rounded-[60px] lg:rounded-[30px] md:rounded-3xl rounded-[20px] relative bg-[url('/images/agency-bg.png')] bg-cover bg-center 3xl:px-[53px] 3xl:pt-[64px] 3xl:pb-[60px] xl:p-11 lg:p-7 md:p-5 px-5 py-[30px]">
                <span className="flex items-center -z-10 bg-red-1200 xl:w-[325px] lg:w-[230px] md:w-[180px] w-[126px] xl:h-[325px] lg:h-[230px] md:h-[180px] h-[126px] rounded-full blur-[50px] absolute md:bottom-3.5 bottom-2.5 right-2.5"></span>
                <div className="max-w-[542px] w-full mx-auto">
                  <h4 className="3xl:text-[40px] xl:text-[30px] md:text-[28px] text-xl font-bold leading-normal text-red-1200 3xl:mb-[68px] lg:mb-10 mb-5">Other Agencies</h4>
                  <ul>
                    <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> No real strategy, just deliverables</li>
                    <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> Templated, off-brand solutions</li>
                    <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> Each service done in isolation</li>
                    <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> Buzzwords and fluff</li>
                    <li className="3xl:mb-[60px] xl:mb-10 lg:mb-7 md:mb-[22px] mb-[28px] text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> One-and-done delivery model</li>
                    <li className="text-white font-medium 3xl:text-[30px] xl:text-xl lg:text-[17px] text-sm leading-normal flex items-center gap-2.5"><span className="flex items-center justify-center text-red-1200"> ✘ </span> Aesthetic but no conversions</li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
          </div>
        </section>
        <HomeCompany></HomeCompany>
        <section className="xl:py-16 py-12">
          <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full px-5">
            <div className="text-center">
              <div className="inline-flex items-center justify-center flex-col 3xl:mb-[105px] md:mb-[70px] mb-10">
                <MainHeading className="md:max-w-full w-full max-w-[240px]">About The Gud Agency</MainHeading>
                <span className="flex items-center md:mt-[18px] mt-2.5 justify-end md:max-w-full w-full max-w-[240px]"><img src="../images/shape-line.svg" alt="" className="md:h-auto h-1 3xl:w-auto md:w-[250px]" /></span>
                <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal 3xl:max-w-[920px] max-w-[600px] md:mt-12 mt-[26px] w-full mx-auto">At Gud, we combine creativity with performance to help brands<span className="font-annie text-secondary 3xl:text-[40px] 2xl:text-[26px] text-xl md:inline-block block"> launch, grow, and win.</span></p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col md:gap-6 gap-12">
              <div className="lg:w-5/12 w-full">
                <h4 className="text-secondary xl:mb-8 mb-3.5 font-medium 3xl:text-[40px] xl:text-[28px] md:text-2xl text-xl">We're The Gud Agency</h4>
                <p className="font-medium 3xl:text-size-30 xl:text-xl md:text-base text-sm 3xl:leading-[41px] xl:leading-8 md:leading-[26px] leading-5 text-white xl:mb-11 md:mb-8 mb-5 max-w-[696px] w-full">George and Daniel launched gud agency after years of envisioning a better way to serve businesses. With over 15 years of proven marketing success, they saw a troubling trend: agencies more focused on collecting retainers than delivering real results. That’s not us!</p>
                <p className="font-medium 3xl:text-size-30 xl:text-xl md:text-base text-sm 3xl:leading-[41px] xl:leading-8 md:leading-[26px] leading-5 text-white max-w-[690px] w-full">We built gud agency on integrity, expertise, and outcomes. We’re gud people - honest, relentless, and deeply committed to our clients' success. If our clients aren’t winning, we’re not sleeping. Every project we take on is treated with the highest priority, because behind every business is a dream we’re here to help fulfill.</p>
                <h4 className="text-secondary font-medium 3xl:text-[40px] xl:text-[28px] md:text-2xl text-lg xl:mt-9 xl:mb-6 md:my-5 mt-10 mb-4">Ready to grow your brand?</h4>
                <PrimaryLink className="bg-secondary hover:bg-secondary/[70%] max-w-[418px] w-full flex items-center justify-center">Meet the team</PrimaryLink>
              </div>
              <div className="lg:w-7/12 w-full">
                <div className="3xl:max-w-[890px]   group transition-all ease-in-out duration-500 hover:scale-110 lg:max-w-[660px] max-w-full w-full mx-auto relative">
                  <img
                    src="images/video-img.jpg"
                    alt=""
                    width={900}
                    height={889}
                    className="rounded-[20px] w-full h-full"
                  />
                  <Link href={'./'} className="flex items-center justify-center absolute left-1/2 z-20 -translate-x-1/2 top-1/2 -translate-y-1/2"><img src="/images/play-icon.svg" alt="" className="3xl:h-auto md:h-[100px] h-20" /></Link>
                  <img src="images/noise-img.png" className="absolute top-0 left-0 w-full h-full z-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100" alt="" />
                </div>
              </div>
            </div>
            <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
          </div>
        </section>
        <section className="xl:pt-16 pt-12 overflow-hidden">
          <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px]  w-full px-5">
            <div className="text-center">
              <div className="inline-flex items-center justify-center flex-col md:max-w-full md:w-auto max-w-[200px] w-full">
                <MainHeading>Who We Work With</MainHeading>
                <span className="w-full flex items-center md:mt-[18px] mt-1 justify-end">
                  <img src="../images/shape-line-green.svg" alt="" className="3xl:h-auto md:h-1.5 h-1 md:block hidden" />
                  <img src="../images/shape-line-green-mobile.svg" alt="" className="md:hidden block" />
                </span>
              </div>
              <p className="text-white font-medium font-montserrat 3xl:text-size-30 md:text-xl text-sm leading-normal max-w-[1130px] md:mt-12 mt-5 w-full mx-auto">From tech to fashion to wellness — we team up with brands that <span className="font-annie text-primary md:block 3xl:text-[40px] 2xl:text-[26px] text-xl"> are ready to go gud.</span></p>
            </div>
          </div>
          <div className="marquee marquee3 3xl:mt-[124px] mt-14 z-10 left-1/2 -translate-x-1/2 overflow-hidden relative">
            <div className="flex items-center xl:gap-[30px] md:gap-2.5 gap-4 relative overflow-hidden md:py-1.5">
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Technology</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Healthcare</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Finance</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">E-commerce</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Fashion</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Real Estate</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Manufacturing</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Legal Tech</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Energy</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 flex items-center"></span>
              <span className="text-white/[0.53] font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap flex items-center">Food & Beverage</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6  md:flex hidden items-center"></span>
              <span className="text-white/[0.53] md:flex items-center hidden font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap">Media & Entertainment</span>
              <span className="bg-white/[0.53] w-px xl:h-9 lg:h-[26px] md:h-4 h-6 md:flex hidden items-center"></span>
              <span className="text-white/[0.53] md:flex items-center hidden font-bold font-montserrat 3xl:text-[40px] xl:text-[30px] lg:text-[22px] md:text-base text-xl leading-none uppercase md:whitespace-nowrap">beauty</span>
            </div>
          </div>
          <ul className="flex itmes-center 3xl:mt-[100px] mt-14 justify-center gap-3"><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-primary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-tertiary"></li><li className="3xl:w-[17px] w-2.5 3xl:h-[17px] h-2.5 rounded-full block bg-secondary"></li></ul>
        </section>
      </div>
      <section className="md:pt-[100px] pt-[50px] md:pb-[120px] pb-[50px]">
        <div className="mx-auto 3xl:max-w-[1640px] max-w-[1184px] w-full md:px-5 px-[25px]">
          <div className="w-fit mx-auto  mb-5">
            <h2 className="3xl:text-[90px] md:leading-normal leading-[37px] text-center md:text-[66px] text-[30px] font-medium text-white uppercase font-montserrat">Frequently Asked Questions</h2>
            <div className="text-end">
              <img src="images/wave-yellow.svg" className="inline-block 3xl:w-auto md:w-[160px] w-[116px] ml-auto" alt="" />
            </div>
          </div>
          <p className="3xl:text-[30px] md:text-xl text-sm  font-normal text-center  text-white">Got questions?<br></br>  <span className="text-tertiary 3xl:text-[30px] text-xl font-annie"> We’ve got gud answers </span>— straight up, no fluff. </p>

          <Faq items={page1Faqs} />
        </div>
      </section>
      <Contact
        bgImage="/images/contact-bg.png"
        leftText="gud Mojo."
        rightText="Feelin' gud"
        heading="Let’s <br> Make <br> It Gud"
        description="Ready to build something bold, strategic, and unforgettable?<br>
 We’re here to create work that actually works."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />

    </>
  );
}
