import React from 'react';
import PrimaryLink from './PrimaryLink';

function Contact2({
     bgImage = '/images/contact-bg.png',
     leftText = 'gud Mojo.',
     rightText = "Feelin' gud",
     heading = 'Ready to<br> Work <br>Together?',
     description = `Let's create something gud together.<br>Get in touch and let's discuss how we can help your brand reach new heights.`,
     buttonText = 'Start Your Project',
     buttonHref = '/',
     leftArrow = 'images/curve-arrow.svg',
     rightArrow = 'images/curve-arrow2.svg'
}) {
     return (
          <div
               className={`text-center md:py-[122px] py-10 contact-sec bg-cover bg-no-repeat xl:rounded-t-[170px] rounded-t-[70px]`}
               style={{ backgroundImage: `url(${bgImage})` }}
          >
               <div className='w-fit mx-auto md:flex 3xl:gap-0 gap-4 relative text-center'>
                    <div className='3xl:text-[50px] w-fit md:text-[32px] text-xl mr-8 md:-mt-15 font-annie text-white'>
                         <div className="text-end md:-mr-12 -mr-4">
                              <img src={leftArrow} className='inline-block  xl:w-auto w-10' alt="" />
                         </div>
                         <span className='block rotate-[-9deg] md:ml-0 -ml-10 md:-mt-5' dangerouslySetInnerHTML={{ __html: leftText }} />
                    </div>
                    <h2 className='3xl:text-[120px] md:text-[74px] text-[40px] md:max-w-max max-w-[273px] mx-auto uppercase font-medium 3xl:leading-[157px] md:leading-[102px] leading-[49px] text-black-1' dangerouslySetInnerHTML={{ __html: heading }} />
                    <div className='3xl:text-[50px] relative -left-10 -mr-5 -mb-5 ml-auto w-fit lg:text-[32px] text-xl md:flex gap-2 justify-end items-end  font-annie text-white'>
                         <div className="text-end md:mr-0 -mr-8">
                              <img src={rightArrow} className='inline-block md:rotate-0 rotate-[135deg] xl:w-auto w-10' alt="" />
                         </div>
                         <span className='block rotate-[9deg] md:-mt-5 -mt-7' dangerouslySetInnerHTML={{ __html: rightText }} />
                    </div>
               </div>
               <p className='3xl:text-[30px] md:text-xl text-base mb-5 md:mt-5 mt-10 font-medium text-black-1' dangerouslySetInnerHTML={{ __html: description }} />
               <PrimaryLink href={buttonHref} className="bg-black-1 hover:bg-primary/70">
                    <span>{buttonText}</span>
               </PrimaryLink>
          </div>
     );
}

export default Contact2;
