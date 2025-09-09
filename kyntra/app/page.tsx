import Image from "next/image";
import Link from "next/link";
import LearnMoreCTA from "./components/LearnMoreCTA";
import { StarIcon, ListIcon, ListIconPlus } from "@/public/icons";
import WorksSwiper from "./components/WorksSwiper";
import PricingSwiper from "./components/PricingSwiper";

export default function Home() {
  return (
    <main className="w-full bg-black text-white relative">
      <section className="w-full pt-20 lg:pb-40 pb-10 overflow-hidden relative">
        <Image
          className="w-full max-h-[1600px] absolute -top-[250px] left-0 z-0"
          src={"/images/hero-bg-1.png"}
          width={1633}
          height={1628}
          alt="no-img"
        />
        <Image
          className="w-[840px] h-[843px] absolute -top-0 left-0 z-0"
          src={"/images/hero-bg-2.png"}
          width={1633}
          height={1628}
          alt="no-img"
        />
        <Image
          className="w-auto absolute blur-[100px] -right-0 z-0"
          src={"/images/hero-bg-3.png"}
          width={1633}
          height={1628}
          alt="no-img"
        />
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6 pt-20 relative z-10">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="w-full">
              <div className="pt-0.5 w-fit bg-gradient-to-l to-white/10 from-transparent rounded-xl lg:mb-8 mb-5">
                <span className="inline-block font-manrope text-orange-1 bg-white/5 lg:py-3.5 py-2 px-5 lg:px-6 rounded-xl lg:text-lg text-sm ">
                  #1 Security Global
                </span>
              </div>

              <h1 className="font-clash-display lg:tracking-tight leading-none bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1 lg:text-size-80 text-5xl font-semibold">
                Secure Your Digital Perimeter with Kyntra
              </h1>
              <p className="lg:text-lg text-base text-orange-1 lg:pt-6 pt-4 lg:pb-10 pb-6">
                Unlock the power of AI to drive innovation, improve efficiency,
                enhance decision-making, and deliver smarter, faster business
                solutions.
              </p>
              <div className="relative inline-flex group">
                <Link
                  href={"/"}
                  className="transition-colors duration-500 hover:from-primary hover:to-secondary font-medium font-manrope py-4 px-6 text-white rounded-xl bg-gradient-to-l to-primary from-secondary md:h-16 inline-flex items-center justify-center relative z-10"
                >
                  Get Started Now
                </Link>
                <span
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{
                    boxShadow:
                      "0 0 34px 1px rgba(255, 60, 28,0.6), 0 0 1px 1px #FF3C1C55",
                    filter: "blur(2px)",
                  }}
                />
              </div>

              <div className="w-full lg:pt-[133px] pt-10">
                <h4 className="lg:text-lg text-sm text-orange-1">
                  Trusted by Industry Leaders
                </h4>
                <div
                  className="w-full overflow-hidden md:pt-8 pt-4 pb-10 max-w-[649px] relative
            after:absolute after:-left-3 after:w-12 after:z-10 after:h-[200px] after:bg-black after:opacity-60 after:blur-md after:top-0
             before:absolute before:-right-2 before:w-20 before:z-10 before:h-[200px] before:bg-black before:opacity-80 before:blur before:top-0
            "
                >
                  <div className="w-full flex">
                    <ul className="flex min-w-fit lg:gap-[50px] gap-4 opacity-15">
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-1.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-2.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-3.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-4.svg"}
                          alt="logo"
                        />
                      </li>
                    </ul>
                    <ul className="flex min-w-fit lg:gap-[50px] gap-4 opacity-15">
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-1.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-2.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-3.svg"}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          className="max-h-12 w-auto"
                          src={"/images/company-logo-4.svg"}
                          alt="logo"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="lg:ml-16 lg:min-w-[964px]"
                src={"/images/heor-img-1.png"}
                width={964}
                height={839}
                alt="no-img"
              />
            </div>

            {/* Choose Container */}
          </div>
          <div className="w-full lg:pt-40 pt-20">
            <div className="flex flex-col items-center justify-center text-center max-w-[1000px] lg:px-14 mx-auto lg:pb-12 pb-8">
              <h4 className="text-brown-2 text-xl font-semibold text-center uppercase ">
                WHY CHOOSE US
              </h4>
              <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                All-in-One Vulnerability & Surface Management Platform
              </h2>
              <p className="lg:text-lg text-base text-orange-1 max-w-[600px]">
                Everything your security team needs—centralized, simplified, and
                actionable—in one powerful, intuitive dashboard.
              </p>
            </div>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center relative">
              <div className="flex items-center justify-center w-full h-full -z-10 absolute">
                <img
                  src={"/images/surface-bg-1.svg"}
                  className="-ml-0 hidden lg:block"
                  alt="no-bg"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center lg:px-20 p-6 lg:py-12">
                <img src={"/images/surface-icon-1.svg"} alt="no-img" />
                <h3 className="md:text-size-32 text-xl text-center md:pb-4 pb-2 pt-6">
                  Advanced Protection
                </h3>
                <p className="lg:text-lg text-base text-brown-2 text-center leading-loose">
                  Stay ahead of threats with cutting-edge, continuously evolving
                  security technology.
                </p>
              </div>

              <div className="w-full flex flex-col items-center justify-center lg:px-20 p-6 lg:py-12">
                <img src={"/images/surface-icon-2.svg"} alt="no-img" />
                <h3 className="md:text-size-32 text-xl text-center md:pb-4 pb-2 pt-6">
                  Fast Deployment
                </h3>
                <p className="lg:text-lg text-base text-brown-2 text-center leading-loose">
                  Get up and running quickly without disrupting your existing
                  infrastructure setup.
                </p>
              </div>

              <div className="w-full flex flex-col items-center justify-center lg:px-20 p-6 lg:py-12">
                <img src={"/images/surface-icon-3.svg"} alt="no-img" />
                <h3 className="md:text-size-32 text-xl text-center md:pb-4 pb-2 pt-6">
                  Scalable Solution
                </h3>
                <p className="lg:text-lg text-base text-brown-2 text-center leading-loose">
                  Easily adapts to your growing business and evolving
                  cybersecurity requirements.
                </p>
              </div>

              <div className="w-full flex flex-col items-center justify-center lg:px-20 p-6 lg:py-12">
                <img src={"/images/surface-icon-4.svg"} alt="no-img" />
                <h3 className="md:text-size-32 text-xl text-center md:pb-4 pb-2 pt-6">
                  Trusted Support
                </h3>
                <p className="lg:text-lg text-base text-brown-2 text-center leading-loose">
                  Rely on expert assistance whenever you need guidance, insight,
                  or troubleshooting help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:py-20 py-10">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
          <div className="flex lg:flex-row flex-col items-center pb-12 lg:gap-20 gap-10">
            <div className="">
              <h4 className="text-brown-1 text-xl font-semibold uppercase ">
                top featured
              </h4>
              <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                Identify Weaknesses Before They Become Threats
              </h2>
              <p className="text-lg text-orange-1 max-w-[820px]">
                Continuously scan your infrastructure for known vulnerabilities,
                misconfigurations, and exposure points. Prioritized by
                severity—from critical to informative—so your team can act fast
                and smart.
              </p>
            </div>
            <div className="lg:w-1/6  w-full flex lg:justify-end">
              <LearnMoreCTA href={"/learn-more"} />
            </div>
          </div>

          <div className="w-full rounded-[40px] bg-white/5 border border-white/10 lg:p-10 p-5 overflow-hidden">
            <div className="w-full flex lg:flex-row flex-col items-center lg:gap-[102px] gap-20 relative">
              <div className="bg-primary/30 w-[600px] blur-[100px] -right-[500px] opacity-50 h-[200px] absolute"></div>
              <div className="md:w-2/3 md:pr-28">
                <img src={"/images/Identify-icon-1.svg"} alt="no-img" />
                <h3 className="md:text-size-32 text-xl pb-4 lg:pr-32 lg:pt-12 pt-6 font-medium font-clash-display bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                  Identify Weaknesses Before They Become Threats
                </h3>
                <p className="lg:text-lg text-base text-brown-2 leading-loose md:pb-20 pb-6">
                  Continuously scan your infrastructure for known
                  vulnerabilities, misconfigurations, and exposure points.
                  Prioritized by severity—from critical to informative—so your
                  team can act fast and smart.
                </p>
                <LearnMoreCTA href="/" />
              </div>
              <div className="md:w-1/3 md:pr-4">
                <Image
                  width={460}
                  height={460}
                  src={"/images/total-scan-diagram.svg"}
                  alt="no-img"
                />
              </div>
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 pt-6">
            <div className="w-full rounded-[40px] bg-white/5 border border-white/10 lg:p-10 p-5 overflow-hidden">
              <div className="w-full flex flex-col relative">
                <div className="bg-primary/30 w-[600px] blur-[100px] -right-[500px] opacity-50 h-[200px] absolute"></div>
                <div className="w-full">
                  <img src={"/images/Proactive-icon-1.svg"} alt="no-img" />
                  <h3 className="md:text-size-32 text-xl leading-snug lg:pb-4 pb-2  pt-6 font-medium font-clash-display bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                    Proactive Vulnerability Scanning for Stronger Security
                  </h3>
                  <p className="text-lg text-brown-2 leading-loose pb-8">
                    Continuously detect and address security weaknesses across
                    systems before they become critical threats.
                  </p>
                </div>
                <div className="w-fit bg-white/5 p-5 rounded-[32px]">
                  <Image
                    width={460}
                    height={460}
                    src={"/images/Proactive-img.svg"}
                    alt="no-img"
                  />
                </div>
              </div>
            </div>

            <div className="w-full rounded-[40px] bg-white/5 border border-white/10 lg:p-10 p-5 overflow-hidden">
              <div className="w-full flex flex-col relative">
                <div className="bg-primary/30 w-[600px] blur-[100px] -right-[500px] opacity-50 h-[200px] absolute"></div>
                <div className="w-full">
                  <img src={"/images/Comprehensive-icon-1.svg"} alt="no-img" />
                  <h3 className="md:text-size-32 text-xl leading-snug lg:pb-4 pb-2 pt-6 font-medium font-clash-display bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                    Comprehensive Attack Surface Risk Analysis
                  </h3>
                  <p className="text-lg text-brown-2 leading-loose pb-8">
                    Understand your external exposure to identify, assess, and
                    reduce potential cyberattack entry points.
                  </p>
                </div>
                <div className="w-fit bg-white/5 p-5 rounded-[32px]">
                  <Image
                    width={460}
                    height={460}
                    src={"/images/Comprehensive-img.svg"}
                    className="-mb-4"
                    alt="no-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:py-20 py-10 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
          <div className="flex pb-12">
            <div className="md:w-3/4 w-full">
              <h4 className="text-brown-1  text-xl font-semibold uppercase ">
                HOW IT WORKS
              </h4>
              <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                Comprehensive Vulnerability & Surface Management in One Platform
              </h2>
              <p className="lg:text-lg text-base text-orange-1 max-w-[820px]">
                Centralized, simplified, and actionable security insights in one
                intuitive dashboard, providing everything your team needs for
                proactive defense.
              </p>
            </div>
          </div>
          <WorksSwiper/>
        </div>
      </section>

      <section className="w-full lg:py-20 py-10 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6 relative z-10">
          <div className="w-full">
            <div className="flex flex-col max-w-[550px] mx-auto items-center justify-center text-center">
              <h4 className="text-brown-1  text-xl font-semibold uppercase ">
                DASHBOARD
              </h4>
              <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                See Everything in One Unified View
              </h2>
              <p className="text-lg text-orange-1 max-w-[820px]">
                Everything your security team needs—centralized, simplified, and
                actionable—in one powerful, intuitive dashboard.
              </p>
            </div>
            <div className="w-full lg:-mt-20 relative">
              <Image
                className=" absolute lg:-right-[250px] -right-20 -top-14 lg:-top-[300px] opacity-80 z-0"
                src={"/images/every-bg-1.png"}
                alt="no-img"
                width={1300}
                height={1300}
              />

              <Image
                className="w-full max-w-[1190px] h-auto relative z-10"
                src={"/images/Macbook-Pro.svg"}
                alt="img"
                width={1189}
                height={946}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:py-20 py-10">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
          <div className="flex flex-wrap justify-between items-center lg:pb-12 pb-8 md:gap-20 gap-10">
            <div className="">
              <h4 className="text-brown-1 text-xl font-semibold uppercase ">
                PRICING
              </h4>
              <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
                Simple, Transparent Plans for <br />
                Every Enterprise
              </h2>
              <p className="text-lg text-orange-1 max-w-[820px]">
                Select the perfect plan for your business size—clear, upfront
                pricing with scalable protection designed to evolve with you.
              </p>
            </div>
            <div className="lg:w-1/6 flex justify-end">
              <LearnMoreCTA href={"/learn-more"} />
            </div>
          </div>

          <PricingSwiper/>
        </div>
      </section>

        <section className="w-full lg:py-20 py-10 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6 relative z-10">
          <div className="flex pb-2 flex-col max-w-[720px] mx-auto items-center justify-center text-center">
            <h4 className="text-brown-1 text-xl font-semibold uppercase ">
              TESTIMONIAL
            </h4>
            <h2 className="md:text-size-56 text-4xl tracking-tight leading-none font-clash-display font-medium md:py-6 py-4 bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1">
              Trusted by Enterprises to 
            Strengthen Their Security
            </h2>
            <p className="text-lg text-orange-1 max-w-[820px]">
              Kyntra's platform helped us uncover hidden vulnerabilities, prioritize threats, and automate response—transforming our security operations seamlessly.
            </p>
          </div>
        </div>
        <div className="w-full">
        <div className="w-full flex gap-6 animate-marquee-left lg:py-10 py-5">
            <ul className="flex gap-6">
              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>
              

            </ul>
            <ul className="flex gap-6">
              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

            </ul>
        </div>
        <div className="w-full flex justify-end gap-6 animate-marquee-right lg:py-5">
            <ul className="flex gap-6">
              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>
              

            </ul>
            <ul className="flex gap-6">
              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>

              <li className="md:min-w-[628px] min-w-[340px] transition-all overflow-hidden group duration-500 hover:-rotate-2 rounded-[40px] bg-white/5 border border-white/10">
              <div className="md:min-w-[628px] min-w-[340px] transition-colors bg-gradient-to-b from-transparent to-transparent group-hover:from-primary group-hover:to-secondary md:p-8 p-5">
              <div className="flex items-center md:pb-20 pb-6 flex-wrap justify-between md:gap-10 gap-6">
                <div className="flex items-center gap-4">
                  <Image
                   className="w-[72px] h-[72px] rounded-full object-cover"
                  width={72}
                  height={72}
                  src={"/images/testimonial-card-user-1.png"} alt="no-img" />
                  <div className="">
                    <h4 className="md:text-size-32 text-xl mb-1 leading-none text-white font-clash-display font-medium">Farhan A</h4>
                    <p className="text-xl text-gray-5">IT Manager</p>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white/10 gap-1.5 py-1 px-2 rounded-[32px] inline-flex items-center justify-center">
                  <StarIcon/>
                  <span className="text-xl font-medium text-white">4.9</span>
                  </div>
                </div>

              </div>
              <p className="lg:text-2xl text-lg text-orange-1 font-medium leading-normal">Before Kyntra, identifying vulnerabilities across our infrastructure was a nightmare. Now, everything is automated, clearly visualized, and actionable. It's like having a second security team.</p>
              </div>
              </li>
              
            </ul>
        </div>
        </div>
        
      </section>

      <section className="w-full lg:py-20 py-10">
        <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
          <div className="w-full max-w-[1280px] overflow-hidden relative bg-white/5 rounded-[40px] border border-white/10">
          <Image
                className="w-full absolute -right-[150px] -top-[500px] opacity-80 z-0"
                src={"/images/every-bg-1.png"}
                alt="no-img"
                width={1300}
                height={1300}
              />
          <div className="w-full relative z-10 overflow-hidden gap-10 items-center grid lg:grid-cols-2 grid-cols-1 ">
            <div className="lg:py-16 py-10 lg:pl-16 px-5">
              <h2 className=" md:text-size-64 text-4xl pb-6 leading-none font-clash-display font-medium bg-gradient-to-l text-transparent bg-clip-text to-white from-orange-1 ">Secure Your Business with Proactive Threat Intelligence</h2>
              <p className="text-lg lg:pb-16 pb-8 text-orange-1">Identify vulnerabilities, automate response actions, and fortify your systems across cloud, network, and endpoint environments—instantly and continuously.</p>
              <div className="relative inline-flex group transition-all duration-500 hover:scale-105">
                <Link href={"/"}
                    className="transition-colors duration-500 hover:from-primary hover:to-secondary font-medium font-manrope py-3 px-8 text-white rounded-xl bg-gradient-to-l to-primary from-secondary inline-flex items-center justify-center relative z-10"
                  >
                 Request a Live Demo
                  </Link>
                    <span
                      className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                      style={{
                        boxShadow:
                          "0 0 34px 1px rgba(255, 60, 28,0.6), 0 0 1px 1px #FF3C1C55",
                        filter: "blur(2px)",
                      }}
                    />
                  </div>  
             </div>
             <div className="lg:pb-6 pb-10 px-6">
              <Image className="lg:ml-32" src={"/images/Macbook-Pro-2.png"} width={860} height={861} alt="no-img" />
             </div>
          </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
