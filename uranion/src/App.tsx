import ContactForm from "./components/ContactForm"
import DesignCard from "./components/DesignCard"
import EnterpriseCard from "./components/EnterpriseCard"
import AnimatedCard from "./components/ExpertiseCard"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InfraHealthCard from "./components/InfraHealthCard"
import LottiePlayer from "./components/LottiePlayer"
import { LottieScroll } from "./components/LottieScroll"
import MediaWorkflowCard from "./components/MediaWorkflowCard"
import MonitoringCard from "./components/MonitoringCard"
function App() {

  return (
    <main className="relative">
      <Header></Header>
   
      <section id="home" className="section min-h-screen md:py-[140px] overflow-hidden py-14 relative bg-gray-1100">
        <div className="max-w-[1160px] px-5 mx-auto relative z-10 4xl:pt-20">
          <div className="flex md:gap-5 gap-10 lg:flex-nowrap flex-wrap">
            <div className="lg:w-7/12 w-full">
              <h1 className="xl:text-[52px] lg:text-[46px] sm:text-[36px] md:pr-20 pr-0 text-[28px] font-extrabold font-inter text-black-1000 leading-[120%]">Fuelling Business Transformation with<br></br>
                <span className="text-gradient">Intelligent Technology </span>
              </h1>
              <p className="text-base lg:my-10 my-5 font-semibold leading-6 text-black-1000">AI is reshaping business—are you ready?<br></br>We empower organizations across the UK and EMEA to modernize operations,
                solve complex challenges, and stay ahead in a rapidly evolving landscape.</p>
              
              <a href="#challenges" className="text-base group gradient-1 relative cursor-pointer group font-bold z-10 leading-[135%] text-white w-[190px] h-[50px] flex items-center justify-center">Explore Services
                <span className="w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all duration-500 left-0 -z-10 block top-0 bg-blue-1200"></span>
              </a>
            </div>
            <div className="lg:w-5/12 w-full">
              <LottiePlayer></LottiePlayer>
            </div>
          </div>
        </div>
    
      </section>
      <section id="experties" className="section md:pt-20 relative overflow-hidden py-14 md:pb-[156px]">
        <div className="max-w-[1205px] px-5 mx-auto relative z-10">
          <div className="text-center max-w-[527px] mx-auto">
            <h2 className="lg:text-[36px] text-2xl font-extrabold mb-5 leading-[120%] font-inter text-black-1000">Our Expertise</h2>
            <p className="text-base font-semibold leading-6 font-geist text-black-1000">Harnessing Generative AI, Deep Learning, and IoT to transform business operations across multiple sectors.</p>
          </div>
          <div className="items-center justify-center grid xl:grid-cols-3 md:grid-cols-2 xl:max-w-full md:max-w-[775px] max-w-[375px] mx-auto gap-0 md:mt-[50px] mt-6">
            {/* Here */}

            <AnimatedCard/>

            <DesignCard/>

            <MediaWorkflowCard/>
        
            <InfraHealthCard/>

            <MonitoringCard/>

            <EnterpriseCard/>
          
          </div>
        </div>
    
      </section>
      <section id="technology" className="section md:py-[70px] py-14 bg-gray-1100 relative">
      
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="text-center max-w-[527px] mx-auto mb-14">
            <h2 className="lg:text-[36px] text-2xl font-extrabold mb-5 leading-[120%] font-inter text-black-1000">Our Technology</h2>
            <p className="text-base font-semibold leading-6 font-geist text-black-1000">We leverage cutting-edge technologies to deliver innovative solutions tailored to your business needs.</p>
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20 md:p-0 p-3 flex items-center justify-center bg-red-1000"><img src="images/bulb-icon.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Generative AI & Deep Learning</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Utilizing state-of-the-art Large Language Models (LLMs) and deep neural networks to solve complex business challenges.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] bg-blue-1000"></div>
              <div className="h-[63px] w-[63px] bg-red-1000"></div>
              <div className="h-[63px] w-[63px] bg-yellow-1000"></div>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20 md:p-0 p-3 flex items-center rounded-full justify-center bg-blue-1000"><img src="images/chat-ai.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Retrieval Augmented Generation</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Enhancing AI capabilities by combining generative models with precise information retrieval systems for accurate, contextual responses.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] rounded-full bg-red-1000"></div>
              <div className="h-[63px] w-[63px] rounded-full bg-yellow-1000"></div>
              <div className="h-[63px] w-[63px] rounded-full bg-blue-1000"></div>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20  flex items-center justify-center "><img src="images/chart-icon.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Advanced Data Analytics</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Transforming raw data into actionable insights through sophisticated statistical models and visualization techniques.</p>
              </div>
            </div>
            {/* <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#FFDE9F" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#00F" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#E50037" />
              </svg>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 h-20 md:p-0 p-3 flex items-center justify-center bg-blue-1000"><img src="images/iot-icon.png" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Internet of Things (IoT)</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Connecting physical devices with digital systems to monitor, collect, and exchange data for smarter decision making.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] bg-blue-1000"></div>
              <div className="h-[63px] w-[63px] bg-red-1000"></div>
              <div className="h-[63px] w-[63px] bg-yellow-1000"></div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="challenges" className="section bg-gray-1100 lg:py-20 md:py-10 py-8 pt-0">
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-10">
            <div className="md:w-7/12 w-full">
              <h4 className="md:text-[36px] text-2xl font-bold leading-[120%] text-black-1000">Innovative Solutions for Complex Challenges</h4>
              <p className="text-sm font-geist leading-6 max-w-[516px] mt-3 mb-5 text-black-1000">At Uranion.ai, we combine multiple technologies to create bespoke solutions that address your most pressing business challenges. Our expertise spans across AI, data analytics, and IoT, allowing us to deliver comprehensive, integrated systems.</p>
              <ul>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Specialized Large Language Models (LLMs)</li>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Deep Learning Neural Networks</li>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Advanced Data Processing Pipelines</li>
                <li className="flex items-center gap-2 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Secure Cloud Infrastructure</li>
              </ul>
            </div>
   
          </div>
        </div>
      </section>

      <section id="contact" className="section relative bg-gray-1100 lg:py-20 lg:pt-44 py-10">
      <LottieScroll />
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
            <div className="md:w-5/12 w-full">
              <h4 className="md:text-[36px] text-2xl font-inter font-extrabold leading-[120%] mb-4 text-black-1000">Get in Touch</h4>
              <p className="text-sm font-geist font-semibold leading-6 max-w-[516px] md:mb-10 mb-5 text-black-1000">Ready to transform your business with intelligent technology? Contact us today to discuss your needs.</p>
              <h6 className="md:text-2xl text-xl font-semibold md:mb-6 mb-4 font-inter text-black-1000">Contact Information</h6>
              <div className="md:mb-6 mb-3">
                <span className="text-xl font-geist font-semibold mb-4 block leading-[120%] text-red-1000">Address</span>
                <p className="text-sm max-w-[394px] font-semibold font-geist leading-6 text-black-1000">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
              </div>
              <div>
                <span className="text-xl font-geist font-semibold mb-4 block leading-[120%] text-red-1000">Email</span>
                <p className="text-sm max-w-[394px] font-semibold font-geist leading-6 text-black-1000">info@uranion.ai</p>
              </div>
            </div>
            <div className="md:w-7/12 w-full">
              <div className="bg-black-1000 max-w-[643px] ml-auto p-[30px]">
                <div className="text-center">
                  <h4 className="text-2xl font-extrabold italic font-inter text-white">Send Us a Message</h4>
                </div>
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}

export default App
