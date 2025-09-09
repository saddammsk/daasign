import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full lg:py-20 py-10 bg-black">
      <div className="w-full max-w-[1440px] mx-auto xl:px-16 px-6">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[120px] justify-between">
            <div className="w-full max-w-[312px]">
              <Image
                className="mb-8"
                src={"/images/kyntra-logo.svg"}
                width={164}
                height={30}
                alt="no-img"
              />
              <p className="text-xl text-gray-5">
                Enterprise-grade cybersecurity designed to prevent breaches
                before they even begin.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            <ul className='space-y-3 mb-4 md:mb-0'>
                <li>
                    <h4 className='text-xl font-medium font-clash-display text-white mb-4'>Company</h4>
                </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/about-use"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/careers"}
                >
                 Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/Press"}
                >
                 Careers
                </Link>
              </li>
            </ul>
            <ul className='space-y-3 mb-4 md:mb-0'>
                <li>
                    <h4 className='text-xl font-medium font-clash-display text-white mb-4'>Solutions</h4>
                </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/"}
                >
                  Vulnerability Management
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/"}
                >
                 Attack Surface Analysis
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-gray-6 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/"}
                >
                 Risk Reporting
                </Link>
              </li>
            </ul>
            <div className="m4-8 md:mb-0">
            <h4 className='text-xl font-medium font-clash-display text-white mb-4'>Solutions</h4>
            <p className='text-gray-6 text-xl mb-4'>Empowering Your Business with Smart Automation — streamline processes.</p>
                <form className='w-full pt-4'>
                    <div className="w-full flex items-center justify-end relative gap-2">
                        <input required type="email" placeholder='Your email' className='w-full placeholder:text-white h-[53px] pl-4 pr-28 text-white  border border-white/20 rounded-xl' />
                        <button type='submit' className='text-lg cursor-pointer text-white right-2 uppercase bg-gradient-to-b from-primary to-secondary rounded-xl px-3 py-1.5 absolute'>Submit</button>
                    </div>
                </form>
            </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 md:pt-[120px] gap-6 md:gap-0">
            <p className='text-xl text-gray-7 text-center md:text-left'>© 2025 Kyntra Technologies, Inc. All rights reserved.</p>
            <div className="flex items-center gap-8 md:gap-12">
            <Link
                  className="text-lg text-gray-7 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/about-use"}
                >
                  Terms
                </Link>
                <Link
                  className="text-lg text-gray-7 transition-all duration-300 hover:text-primary hover:underline"
                  href={"/about-use"}
                >
                  Policy
                </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer