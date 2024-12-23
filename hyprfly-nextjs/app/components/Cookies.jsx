'use client'
import { useState } from "react";
import CookiesModel from "./CookiesModel";


const Cookies = () => {

  const [showCustomizeModel, setShowCustomizeModel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleCookies(){
    setIsOpen(true)
  }

  return (
    <div className='w-full'>

      <div className={`${isOpen ? 'hidden': 'flex'}` +" w-full md:flex-row flex-col gap-6 items-center max-w-[1152px] mx-auto bg-white shadow-md rounded-2xl p-6"}>
        <div className="lg:w-2/3 w-full">
        <h2 className='font-bold text-lg text-black'>Cookies</h2>
        <p className='text-black'>We use cookies to improve website functionality and services. Cookie preferences can be changed anytime via the
        cookie button, which appears after selection on this banner.</p>
        </div>
          <div className="flex items-center md:flex-row flex-col lg:w-fit w-full gap-3">
            <button onClick={handleCookies} className='bg-[#3E43EE] w-full font-medium text-white px-6 py-1.5 text-sm transition-all duration-200 hover:bg-blue-700  rounded-full '>
              Accept
            </button>
            <button onClick={()=>setIsOpen(true)} className='bg-[#F2F2F2] w-full font-medium text-black px-6 py-1.5 text-sm transition-all duration-200 hover:bg-blue-700 hover:text-white  rounded-full '>
              Decline
            </button>
            <button onClick={()=>setShowCustomizeModel(true)} className='bg-[#F2F2F2] w-full font-medium text-black px-6 py-1.5 text-sm transition-all duration-200 hover:bg-blue-700 hover:text-white  rounded-full '>
              Cumtomize
            </button>
          </div>
      </div>

      <CookiesModel 
      isOpen={showCustomizeModel}
      setIsOpen={setShowCustomizeModel}
      />
    </div>
  )
}

export default Cookies