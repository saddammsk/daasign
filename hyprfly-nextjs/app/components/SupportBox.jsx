'use client'
import Image from 'next/image';
import React,{useState} from 'react'

const SupportBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? 'rounded-[30px]': 'rounded-[17px]'}` +' bg-white shadow-lg overflow-hidden relative w-full max-w-[277px]'}>
 
    <div
      className={`relative bg-white rounded-[17px] overflow-hidden ${
        isOpen ? "h-auto" : "h-auto"
      }`}
    >
      {isOpen && (
        <div className="">
          <div className="flex pl-6 pt-8 items-center">
            <div className="card-title">
              <h2 className="text-2xl text-black font-normal mb-2">
                Dylan Grace
              </h2>
              <p className="text-gray-400 text-base whitespace-nowrap">Music Expert</p>
            </div>
            <Image
            width={214}
            height={193}
              src="/images/avatar.png"
              alt="Profile Picture"
              className="w-[214px] -mb-5 -ml-4"
            />
          </div>

          <div className="bg-[#E0F53E] px-6 pt-8 pb-4 rounded-[30px] relative">
            <p className="text-base text-left text-black font-avenir mb-20 font-normal">
              Speak with a Music
              <br /> Expert today
            </p>
            <div >
          <button className="w-full py-3 px-4 bg-white text-black rounded-full text-xs">
            Schedule Call
          </button>
        </div>
          </div>
        </div>
      )}
      {/* Minimized state */}
      {!isOpen && (
        <div className="flex items-center px-3 py-1.5 bg-[#E0F53E] rounded-[17px]">
          <img
            src="/images/avatar.png"
            className="rounded-full mr-2 w-14 h-14 bg-white object-cover"
            alt="Profile Picture"
          />
          <p className="text-sm text-left text-black font-normal">Speak with a Music<br/> Expert today</p>
        </div>
      )}
      <button
        className="absolute top-2.5 right-2.5 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        onClick={()=>setIsOpen(!isOpen)} 
      >
        {isOpen ? (
          <img src="/images/share-gray.svg" alt="Close" className="" /> 
        ) : (
          <img src="/images/share-black.svg" alt="Open" className="" /> 
        )}
      </button>
    </div>
  </div>
  )
}

export default SupportBox