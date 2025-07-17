import { Link } from "react-router-dom"

function Footer() {
     return (
          <footer id="footer" className='bg-black-1100 pt-[60px] pb-9 relative z-10'>
               <div className="max-w-[1200px] border-b border-white/[20%] pb-[50px] mb-6 px-5 mx-auto">
                    <div className='flex lg:flex-nowrap flex-wrap gap-5'>
                         <div className="lg:w-5/12 md:w-[48%] w-full">
                              <div className='max-w-[417px]'>
                                   <img src="images/footer-logo.png" className='mb-[30px]' alt="" />
                                   <p className='text-sm font-geist font-semibold leading-6 text-white/[80%]'>At Uranion.ai, we combine multiple technologies to create bespoke solutions that address your most pressing business challenges. Our expertise spans across AI, data analytics, and IoT, allowing us to deliver comprehensive, integrated systems.</p>
                              </div>
                         </div>
                         <div className="lg:w-3/12 md:w-[48%] w-full">
                              <div className="w-fit md:mx-auto">
                                   <h5 className='text-2xl text-white font-semibold italic mb-[30px]'>Services</h5>
                                   <ul>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">Legacy System Modernization</a></li>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">Unified Design-to-Production</a></li>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">AI-Powered Media Workflows</a></li>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">Infrastructure Health Intelligence</a></li>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">Environmental Monitoring Systems</a></li>
                                        <li><a href="/#experties" className="text-sm font-geist font-semibold block mb-5 leading-[10px] text-white/[80%] hover:text-red-1000">Enterprise AI Solutions</a></li>

                                   </ul>
                              </div>
                         </div>
                         <div className="lg:w-4/12 md:w-[48%] w-full">
                              <div className="max-w-[282px] lg:ml-auto">
                                   <h5 className='text-2xl text-white font-semibold italic mb-[30px]'>Contact</h5>
                                   <p className="text-lg font-medium leading-[120%] text-white mb-4">Address</p>
                                   <p className="text-sm font-semibold font-geist mb-[30px] leading-6 text-white/[80%]">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                                   <p className="text-lg font-medium leading-[120%] text-white mb-4">Email</p>
                                   <p className="text-sm font-semibold font-geist leading-2.5 text-white/[80%]">info@uranion.ai</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="text-center md:px-0 px-4">
                    <h6 className="text-base font-semibold font-geist text-white mb-6">© 2025 URANION EMEA LTD. All rights reserved.</h6>
                    <p className="text-sm font-geist text-white/[80%] font-normal">Company number: 16356955 | Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
               </div>
          </footer>
     )
}

export default Footer
