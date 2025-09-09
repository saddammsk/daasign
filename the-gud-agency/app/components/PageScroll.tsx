'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MainHeading from './HeadingFirst';
import PrimaryLink from './PrimaryLink';

gsap.registerPlugin(ScrollTrigger);

function PageScroll() {
     const sectionRef = useRef<HTMLDivElement>(null);
     const wordsRef = useRef<HTMLSpanElement[]>([]);

     const paragraph = `Our approach is simple: understand your goals, craft strategic solutions, and execute with creativity that cuts through the noise. Whether you're launching something new or transforming something established, we bring the same passion to every project.`;
     const words = paragraph.split(' ');

     useLayoutEffect(() => {
          const section = sectionRef.current;
          const wordSpans = wordsRef.current;

          if (!section || !wordSpans.length) return;

          // Clear existing styles just in case
          wordSpans.forEach((el) => el.classList.remove('text-white'));

          const ctx = gsap.context(() => {
               ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: '+=150%',
                    pin: true,
                    scrub: true,
                    onUpdate: (self) => {
                         const progress = self.progress;
                         const wordCount = Math.floor(progress * words.length);
                         wordSpans.forEach((el, index) => {
                              el.classList.toggle('text-white', index < wordCount);
                              el.classList.toggle('text-white/30', index >= wordCount);
                         });
                    },
               });
          }, section);

          return () => {
               ctx.revert(); // this safely kills GSAP animations and triggers
          };
     }, [words.length]);

     return (
          <section
               ref={sectionRef}
               className="bg-primary bg-[url('/images/agency-bg.jpg')] bg-cover bg-center w-full min-h-screen flex items-center justify-center relative z-10"
          >
               <div className="mx-auto 3xl:max-w-[1760px] max-w-[1262px] w-full md:px-5 px-[25px] text-center">
                    <div className="inline-flex items-center justify-center flex-col 3xl:mb-24 mb-9">
                         <MainHeading className="!text-black md:max-w-fit max-w-[210px] md:w-auto w-full">
                              We're The Gud Agency
                         </MainHeading>
                         <span className="w-full flex items-center justify-end">
                              <img
                                   src="../images/agency-wave.svg"
                                   alt=""
                                   className="lg:h-auto md:h-12 h-5"
                              />
                         </span>
                    </div>

                    <p className="font-normal 3xl:mb-[102px] md:mb-14 mb-[30px] 3xl:text-[35px] lg:text-[28px] md:text-2xl text-lg 3xl:leading-[76px] lg:leading-14 md:leading-10 leading-[34px] text-white/30 3xl:max-w-[1192px] max-w-[950px] w-full mx-auto flex flex-wrap justify-center gap-x-1 gap-y-1">
                         {words.map((word, i) => (
                              <span
                                   key={i}
                                   ref={(el) => {
                                        if (el) wordsRef.current[i] = el;
                                   }}
                                   className="transition-all duration-300 text-white/30"
                              >
                                   {word}
                              </span>
                         ))}
                    </p>

                    <h4 className="text-body-bg font-bold lg:text-size-30 md:text-xl text-base text-center uppercase lg:mb-[38px] md:mb-5 mb-2">
                         Ready to grow your brand?
                    </h4>
                    <PrimaryLink className="bg-body-bg hover:bg-body-bg/[70%] md:py-3 py-[5px] px-0 md:max-w-[418px] max-w-[209px] w-full">
                         Book A Call
                    </PrimaryLink>
               </div>
          </section>
     );
}

export default PageScroll;
