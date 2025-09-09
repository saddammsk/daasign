import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="w-full bg-black-1 bg-[url(/images/footer-bg.png)] bg-cover bg-no-repeat md:pt-[120px] md:pb-[70px] py-16">
      <div className='3xl:max-w-[1760px] max-w-[1262px]  px-5 mx-auto'>
        <div className='flex lg:flex-nowrap flex-wrap md:mb-[100px] md:gap-5 gap-[90px]'>
          <div className='lg:w-3/12 md:w-[48%] w-full md:text-start text-center'>
            <img src="images/logo.svg" className='inline-block' alt="" />
          </div>
          <div className='lg:w-2/12 md:w-[48%] w-full'>
            <h4 className='3xl:text-[30px] xl:text-xl md:text-lg text-sm font-bold 3xl:leading-[47px] leading-2.5 capitalize text-primary mb-[30px]'>Quick Links</h4>
            <ul>
              <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block3xl:mb-[30px] md:mb-2  mb-6'>Services</Link></li>
              <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block3xl:mb-[30px] md:mb-2  mb-6'>Case Studies</Link></li>
              <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block3xl:mb-[30px] md:mb-2  mb-6'>About</Link></li>
              <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block3xl:mb-[30px] md:mb-2  mb-6'>Contact</Link></li>
            </ul>
          </div>
          <div className='lg:w-3/12 md:w-[48%] w-full'>
            <div className='w-fit lg:mx-auto'>
              <h4 className='3xl:text-[30px] md:text-xl text-sm font-bold 3xl:leading-[47px] leading-2.5 capitalize text-secondary mb-[30px]'>Legal</h4>
              <ul>
                <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block3xl:mb-[30px] md:mb-2  mb-6'>Privacy Policy</Link></li>
                <li><Link href="/" className='3xl:text-[30px] md:text-xl hover:text-primary text-sm font-bold md:leading-[47px] leading-2.5 capitalize text-white block'>Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className='lg:w-4/12 md:w-[48%] w-full'>
            <div className='3xl:max-w-[495px] max-w-[361px] ml-auto'>
              <h4 className='3xl:text-[30px] md:text-xl text-sm font-bold 3xl:leading-[47px] leading-2.5 capitalize text-tertiary mb-[30px]'>Get the Gud Stuff</h4>
              <p className='3xl:text-[30px] md:text-xl text-sm  font-medium md:leading-9 leading-6 text-white'>Sign up for news, case studies, and creative inspiration.</p>
              <form action="" className='flex items-center 3xl:my-8 md:my-5 my-[30px]'>
                <input type="text" className='text-white 33xl:text-xl md:text-base text-xs font-medium w-full flex-1 leading-9 px-4 bg-white/[11%] rounded-tl-[100px] rounded-bl-[100px] 3xl:h-[70px] md:h-[50px] h-[42px] placeholder:text-white' placeholder='Your email address' />
                <button type='button' className='3xl:text-xl md:text-base text-xs text-white font-medium leading-9 3xl:h-[70px] md:h-[50px] h-[42px] 3xl:w-[136px] md:w-[102px] w-[91px] flex items-center justify-center bg-tertiary rounded-tr-[100px] rounded-br-[100px] hover:bg-tertiary/[70%]'>Subscribe</button>
              </form>
              <ul className='flex items-center md:gap-5 gap-3'>
                <li><Link href="#"><img src="images/instagram.svg" className='3xl:w-auto md:w-7  hover:opacity-70 w-[22px]' alt="" /></Link></li>
                <li><Link href="#"><img src="images/fb-icon.svg" className='3xl:w-auto md:w-7  hover:opacity-70 w-[22px]' alt="" /></Link></li>
                <li><Link href="#"><img src="images/youtube-icon.svg" className='3xl:w-auto md:w-7  hover:opacity-70 w-[22px]' alt="" /></Link></li>
                <li><Link href="#"><img src="images/twiter.svg" className='3xl:w-auto md:w-7  hover:opacity-70 w-[22px]' alt="" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center md:block hidden">
          <h6 className='3xl:text-xl text-base font-bold 3xl:leading-12 leading-9 text-white'>God is gud</h6>
          <p className='3xl:text-lg text-sm font-medium 3xl:leading-12 leading-9 text-white'>© 2025 The Gud Agency • All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer