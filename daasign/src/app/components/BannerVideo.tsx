"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BannerVideo = () => {
  const videoContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!videoContainer.current) return;

    gsap.fromTo(
      videoContainer.current,
      { scale: 0.80 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoContainer.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="max-w-[1280px] lg:-mt-[348px] -mt-[100px] mx-auto lg:px-5">
     <div
      ref={videoContainer}
      className="relative z-10 transition-scale duration-300"
    >
      <video
        width="100%"
        muted
        autoPlay
        loop
        className="lg:rounded-lg h-auto lg:h-[742px] object-cover object-center"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="bg-black/[16%] w-full h-full rounded-lg absolute top-0 left-0"></div>
    </div>
  </section>
  )
}
