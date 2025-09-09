import Dropdown from "../components/Dropdown"
import { Link } from "react-router-dom"
import { useRef, useEffect } from "react";
import Switchbtn from "../components/Switchbtn";
import SpotlightCard from "../components/DropCard";
import GunCard from "../components/GunCard";

const Home = () => {
     const scrollRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const slider = scrollRef.current;
          if (!slider) return;

          let isDown = false;
          let startX: number;
          let scrollLeft: number;

          const mouseDownHandler = (e: MouseEvent) => {
               isDown = true;
               slider.classList.add("cursor-grabbing");
               startX = e.pageX - slider.offsetLeft;
               scrollLeft = slider.scrollLeft;
          };

          const mouseLeaveHandler = () => {
               isDown = false;
               slider.classList.remove("cursor-grabbing");
          };

          const mouseUpHandler = () => {
               isDown = false;
               slider.classList.remove("cursor-grabbing");
          };

          const mouseMoveHandler = (e: MouseEvent) => {
               if (!isDown) return;
               e.preventDefault();
               const x = e.pageX - slider.offsetLeft;
               const walk = (x - startX) * 1.5;
               slider.scrollLeft = scrollLeft - walk;
          };

          slider.addEventListener("mousedown", mouseDownHandler);
          slider.addEventListener("mouseleave", mouseLeaveHandler);
          slider.addEventListener("mouseup", mouseUpHandler);
          slider.addEventListener("mousemove", mouseMoveHandler);

          return () => {
               slider.removeEventListener("mousedown", mouseDownHandler);
               slider.removeEventListener("mouseleave", mouseLeaveHandler);
               slider.removeEventListener("mouseup", mouseUpHandler);
               slider.removeEventListener("mousemove", mouseMoveHandler);
          };
     }, []);

     return (
          <>
           
               <section>
                    <div className="max-w-[1200px] px-5 mx-auto">
                         <div className="bg-blue-1300 overflow-hidden rounded-md p-4 pb-10">
                              <div className="">
                                   <div className="overflow-x-auto">
                                        <div className="flex xl:w-auto w-[1199px] items-center justify-between gap-4 mb-6">
                                             <div className="flex items-center gap-8">
                                                  <a href="#"><img src="images/logo.png" alt=""></img></a>
                                                  <ul className="flex ">
                                                       <li><Link to="/" className="text-[10px] text-white font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center border-b border-yellow-1000 py-2 px-3"><img src="images/cube-icon.png" alt=""></img>Cases</Link></li>
                                                       <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium  rounded-lg flex items-center justify-center py-2 px-3 gap-2"><img src="images/card-icon.png" alt=""></img>Magic Cards</Link></li>
                                                       <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium  rounded-lg flex items-center justify-center py-2 px-3 gap-2"><img src="images/contracts-icon.png" alt=""></img>Contracts</Link></li>
                                                       <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium  rounded-lg flex items-center justify-center py-2 px-3 gap-2"><img src="images/upgrade-icon.png" alt=""></img>Upgrade</Link></li>
                                                       <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium  rounded-lg flex items-center justify-center py-2 px-3 gap-2"><img src="images/trade-icon.png" alt=""></img>Live trades</Link></li>
                                                       <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium  rounded-lg flex items-center justify-center py-2 px-3 gap-2"><img src="images/battle-icon.png" alt=""></img>Battles</Link></li>
                                                  </ul>
                                             </div>
                                             <ul className="flex items-center gap-2">
                                                  <li><Dropdown></Dropdown></li>
                                                  <li><Link to="/" className="text-xs font-medium font-gotham flex gap-1 py-1.5 px-3 border border-pink-1000 rounded-sm text-white/[40%] items-center gradient-1"><img src="images/diamond-icon.png" alt=""></img>370</Link></li>
                                                  <li><Link to="/" className="w-10 h-8 bg-yellow-1000 flex items-center rounded-sm justify-center relative"><img src="images/wallet-icon.png" alt=""></img><span className="text-white font-bold  flex items-center justify-center rounded-full w-4 h-4 text-sm backdrop-blur-2xl absolute -right-2 ">+</span> </Link></li>
                                                  <li>
                                                       <Link to="/" className="flex items-center gap-2">
                                                            <div>
                                                                 <h6 className="text-xs text-white/[40%] mb-2 font-medium font-gotham">Aleksandr</h6>
                                                                 <span className="text-[10px] text-white font-medium flex items-center gap-2 font-gotham">1.740<img src="images/dollarsign.png" alt=""></img> </span>
                                                            </div>
                                                            <img src="images/user-avatar.png" className="w-10" alt=""></img>
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-4">
                                        <div className="flex gap-4">
                                             <div className="gradient-2 relative overflow-hidden link-after-effect-2 py-3 w-[102px] rounded-lg text-center">
                                                  <img src="images/user-icon.png" alt="" className="inline-block"></img>
                                                  <h6 className="text-white font-gotham font-bold text-xl">1.740</h6>
                                                  <span className="text-white/[20%] text-xs font-gotham font-medium">Online</span>
                                             </div>
                                             <div className="">
                                                  <Link to="/" className="w-11 h-11 mb-2 rounded-sm flex items-center justify-center gradeint-3">
                                                       <img src="images/crown-icon.png" alt=""></img>
                                                  </Link>
                                                  <Link to="/" className="w-11 h-11 rounded-sm flex items-center justify-center gradeint-3">
                                                       <img src="images/thunder-icon.png" alt=""></img>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div ref={scrollRef} className="overflow-auto cursor-grab flex-1 scroll-hide">
                                             <div className="flex w-[1003px] gap-2 items-center">
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(19, 19, 31,1)"
                                             borderColorStart="#3c3c3c"
                                             spotlightColorbg="rgba(60, 60, 60,0.5)"
                                             />
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(175, 30, 56,1)"
                                             borderColorStart="#af1e38"
                                             spotlightColorbg="rgba(175, 30, 56,0.3)"
                                             />
                                               <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(175, 30, 56,1)"
                                             borderColorStart="#af1e38"
                                             spotlightColorbg="rgba(175, 30, 56,0.3)"
                                             />
                                        
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(30, 34, 109,1)"
                                             borderColorStart="#2e36c4"
                                             spotlightColorbg="rgba(30, 34, 109,0.3)"
                                             />
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(30, 34, 109,1)"
                                             borderColorStart="#2e36c4"
                                             spotlightColorbg="rgba(30, 34, 109,0.3)"
                                             />
                                               <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(19, 19, 31,1)"
                                             borderColorStart="#3c3c3c"
                                             spotlightColorbg="rgba(60, 60, 60,0.5)"
                                             />
                                        
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(80, 33, 199,1)"
                                             borderColorStart="#5021c7"
                                             spotlightColorbg="rgba(80, 33, 199,0.2)"
                                             />
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(19, 19, 31,1)"
                                             borderColorStart="#3c3c3c"
                                             spotlightColorbg="rgba(60, 60, 60,0.5)"
                                             />
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(177, 30, 188,1)"
                                             borderColorStart="#b11ebc"
                                             spotlightColorbg="rgba(177, 30, 188,0.2)"
                                             />
                              
                                             <GunCard 
                                             imageSrc="images/gun-1.png" 
                                             title="Caramel" 
                                             subtitle="UMP-45" 
                                             spotlightColor="rgba(80, 33, 199,1)"
                                             borderColorStart="#5021c7"
                                             spotlightColorbg="rgba(80, 33, 199,0.2)"
                                             />
                                                
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-blue-1400 mt-4 p-2 lg:flex-nowrap flex-wrap lg:gap-0 gap-4 rounded-sm flex items-center justify-between">
                                        <div className="flex items-center gap-2 md:flex-nowrap flex-wrap relative z-10">
                                             <div className="flex items-center  bg-gray-1000 gap-1 py-2 px-3 rounded-lg">
                                                  <img src="images/star-icon.png" className="w-8" alt=""></img>
                                                  <div className="text-center">
                                                       <h6 className="text-sm font-medium font-gotham text-yellow-1000">Bonus</h6>
                                                       <span className="text-white text-xs block font-medium font-gotham ">Promo code</span>
                                                  </div>
                                             </div>
                                             <div className="flex items-center bg-gray-1000 gap-1 py-2 px-3 rounded-lg">
                                                  <img src="images/wheel-icon.png" className="w-8" alt=""></img>
                                                  <div className="text-center">
                                                       <h6 className="text-sm font-medium font-gotham text-white uppercase">Wheel</h6>
                                                       <span className="text-white/[30%] text-xs block font-medium font-gotham ">Promo code</span>
                                                  </div>
                                             </div>
                                             <div className="flex items-center bg-gray-1000 gap-1 py-2 px-3 rounded-lg">
                                                  <img src="images/sheild-icon.png" className="w-8" alt=""></img>
                                                  <div className="text-center">
                                                       <h6 className="text-sm font-medium font-gotham text-white uppercase">Raffles</h6>
                                                       <span className="text-white/[30%] text-xs block font-medium font-gotham ">Promo code</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-4 md:flex-nowrap flex-wrap relative z-10">
                                             <ul className="flex items-center gap-4">
                                                  <li><Link to="/"><img src="images/youtube.svg" className="w-5 h-5" alt=""></img></Link></li>
                                                  <li><Link to="/"><img src="images/tiktok.svg" className="w-5 h-5" alt=""></img></Link></li>
                                                  <li><Link to="/"><img src="images/twiter.svg" className="w-5 h-5" alt=""></img></Link></li>
                                                  <li><Link to="/"><img src="images/instagram.svg" className="w-5 h-5" alt=""></img></Link></li>
                                             </ul>
                                             <Link to="/" className=" bg-gray-1000 w-10 h-10 rounded-lg flex items-center justify-center"><img src="images/bell-icon.svg" className="w-4" alt=""></img></Link>
                                             <Link to="/" className="relative overflow-hidden link-after-effect bg-gray-1000 px-4 gap-2 text-white font-gotham text-sm font-bold h-10 rounded-lg flex items-center justify-center"><img src="images/msg-icon.svg" className="w-4" alt=""></img>Support</Link>
                                             <Link to="/" className=" bg-gray-1000 w-10 h-10 rounded-lg flex items-center justify-center"><img src="images/speaker-icon.svg" className="w-4" alt=""></img></Link>

                                        </div>
                                   </div>
                                   <div className="xl:-mt-16 sm:mx-0 -mx-20">
                                        <img src="images/image-2.png" className="w-full"></img>
                                   </div>
                                   <div className="flex items-center md:flex-nowrap flex-wrap -mt-4 gap-5 justify-center">
                                        <ul className="flex gap-2">
                                             <li><Link to="/" className="text-[10px] text-white font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center border-b border-yellow-1000 w-10 h-10">X1</Link></li>
                                             <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center w-10 h-10 gap-2">X2</Link></li>
                                             <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center w-10 h-10 gap-2">X3</Link></li>
                                             <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center w-10 h-10 gap-2">X4</Link></li>
                                             <li><Link to="/" className="text-[10px] text-white/[50%] font-gotham font-medium bg-blue-1400 rounded-lg flex items-center justify-center w-10 h-10 gap-2">X5</Link></li>
                                        </ul>
                                        <div className="flex relative overflow-hidden link-after-effect items-center gradeint-3 rounded-md text-center px-6 py-4">
                                             <h6 className="uppercase text-sm font-gotham font-medium text-white mr-2">OPen for</h6>
                                             <span className="text-yellow-1000 font-medium font-gotham text-sm">10.50</span>
                                             <img src="images/dollar-sign.svg" className="w-4" alt=""></img>
                                        </div>
                                        <div className="flex relative overflow-hidden link-after-effect items-center gradeint-3 rounded-md text-center px-4 py-3">
                                             <h6 className="uppercase text-sm font-gotham font-medium text-white mr-2">Fast</h6>
                                             <Switchbtn></Switchbtn>
                                        </div>
                                        <div className="flex relative overflow-hidden link-after-effect items-center gradient-2 gap-2 rounded-md text-center px-4 py-3">
                                             <img src="images/key-icon.svg" className="w-4" alt=""></img>
                                             <h6 className="uppercase text-sm font-gotham font-medium text-white mr-2">Code</h6>
                                        </div>
                                   </div>
                                   <div className="flex items-center justify-center gap-2 mt-10">
                                        <img src="images/crown-2.svg" className="w-5" alt=""></img>
                                        <h6 className="text-xs font-gotham font-bold uppercase text-gray-1100">Last top drop</h6>
                                   </div>
                                   <div className="flex mt-10 items-center xl:flex-nowrap flex-wrap justify-center gap-4">
                                   <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(63, 86, 53,1)"
                                        borderColorStart="#3f5635"
                                        spotlightColorbg="rgba(43, 58, 37,0.4)"
                                        />
                                        <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(175, 30, 56,1)"
                                        borderColorStart="#ff0000"
                                        spotlightColorbg="rgba(79, 17, 28,0.4)"
                                        />
                                    
                                     <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(150, 22, 159,1)"
                                        borderColorStart="#b11ebc"
                                        spotlightColorbg="rgba(104, 13, 110,0.4)"
                                        />
                                        <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(150, 22, 159,1)"
                                        borderColorStart="#b11ebc"
                                        spotlightColorbg="rgba(104, 13, 110,0.4)"
                                        />

                                        <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(60, 18, 167,1)"
                                        borderColorStart="#5021c7"
                                        spotlightColorbg="rgba(42, 18, 104,0.4)"
                                        />
                                         <SpotlightCard 
                                        imageSrc="images/gun-1.png" 
                                        title="1.740" 
                                        subtitle="Online" 
                                        spotlightColor="rgba(60, 18, 167,1)"
                                        borderColorStart="#5021c7"
                                        spotlightColorbg="rgba(42, 18, 104,0.4)"
                                        />
                                       
                                   </div>

                              </div>
                         </div>
                    </div>
               </section>
         
          </>
     )
}

export default Home   
