import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/lotties/boxes-moving.json";

gsap.registerPlugin(ScrollTrigger);

export const LottieScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const container = containerRef.current;
    const lottie = lottieRef.current;
    if (!container || !lottie) return;

    const totalFrames = lottie.getDuration(true) ?? 0;

    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "150 top",
        end: "bottom bottom",
        scrub: 2,
        onUpdate: (self) => {
          const speed = 1.2; 
          const frame = Math.min(self.progress * totalFrames * speed, totalFrames - 1);
          lottie.goToAndStop(frame, true);
        },
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "100 top",
      end: "bottom-=25% center",
      onUpdate: (self) => {
        const getTopPosition = () => {
          if (window.innerWidth >= 1600) return -410;
          if (window.innerWidth >= 1200) return -300;
          if (window.innerWidth >= 768) return -300;
          return -200;
        };
        const getFixedTop = () => {
          if (window.innerWidth >= 1600) return 100;
          if (window.innerWidth >= 1200) return 80;
          if (window.innerWidth >= 768) return 60;
          return 30;
        };

        if (self.progress >= 1) {
          container!.style.position = "absolute";
          container!.style.top = `${getTopPosition()}px`;
        } else {
          container!.style.position = "fixed";
          container!.style.top = `${getFixedTop()}px`;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        position: "fixed",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "0%",
        zIndex: 1,
        right:
          typeof window !== "undefined"
            ? window.innerWidth >= 1600
              ? "25%"
              : window.innerWidth >= 1200
              ? "19%"
              : "0%"
            : "25%",
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
        className="!w-[360px] lottie-box"
      />
    </div>
  );
};
