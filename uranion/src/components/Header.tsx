import { Link } from "react-router-dom"
import { useState } from "react";

function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     return (
          <header className="py-[18px] bg-gray-1100">
               <div className="max-w-[1180px] px-5 mx-auto">
                    <div className="flex items-center justify-between">
                         <img src="images/logo_black.svg" alt="" />
                         <ul
                              className={`md:flex items-center justify-center w-full md:text-start text-center gap-[26px] md:static absolute left-0 top-20 z-[999] 
        md:bg-transparent bg-gray-1100 md:p-0 p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"
                                   }`}
                         >
                              <li className="md:py-0 p-2">
                                   <a
                                        href="#home"
                                        className="text-base font-semibold font-geist text-black-1000"
                                   >
                                        Home
                                   </a>
                              </li>
                              <li className="md:py-0 p-2">
                                   <a
                                        href="/#experties"
                                        className="text-base font-semibold font-geist text-gray-1000 hover:text-black-1000"
                                   >
                                        Our Experties
                                   </a>
                              </li>
                              <li className="md:py-0 p-2">
                                   <a
                                        href="#technology"
                                        className="text-base font-semibold font-geist text-gray-1000 hover:text-black-1000"
                                   >
                                        Our Technology
                                   </a>
                              </li>
                         </ul>
                         <div className="flex items-center gap-4">
                              <a href="#contact" className="md:text-base gradient-1 text-sm relative cursor-pointer group font-bold z-10 leading-[135%] text-white md:w-[165px] w-[124px] md:h-[50px] h-10 flex items-center justify-center">Contact Us
                                   <span className="w-full h-full absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 block top-0 bg-blue-1200"></span>
                              </a>
                              <Link
                                   to="#"
                                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                                   className="md:hidden block w-5 h-5"
                              >
                                   <img src="images/bars-solid.svg" alt="Menu" />
                              </Link>   </div>
                    </div>
               </div>
          </header>
     )
}

export default Header
