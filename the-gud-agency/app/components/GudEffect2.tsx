import React from 'react'
import Card from './cards';
const cards = [
     {
          id: 1,
          image: "/images/real-img1.jpg",
          title: "Anna Kara Loans",
          subtitle: "Bold rebrand and ad strategy for a financial leader.",
          description: "We reimagined Anna Kara’s online presence and boosted qualified leads through a targeted ad funnel and a confident visual identity.",
          href: "/"
     },
     {
          id: 2,
          image: "/images/real-img2.jpg",
          title: "Elevate Health Group",
          subtitle: "Website redesign and UX for a leading wellness provider.",
          description: "With a clean interface and clear navigation, we brought Elevate’s care-first philosophy online—improving both aesthetics and usability.",
          href: "/"
     },
     {
          id: 3,
          image: "/images/real-img3.jpg",
          title: "Beverly Hills Florist",
          subtitle: "Elegant landing page and ad campaign for a luxury floral brand.",
          description: "We combined upscale visuals with targeted ads to help Beverly Hills Florist bloom in a competitive online space.",
          href: "/"
     },
     {
          id: 4,
          image: "/images/real-img4.jpg",
          title: "Growell Capital",
          subtitle: "Full-funnel strategy for a capital firm on the rise.",
          description: "We built a sleek, high-converting website, boosted visibility through SEO and PPC, and drove brand credibility with targeted influencer campaigns.",
          href: "/"
     },
     {
          id: 5,
          image: "/images/real-img5.jpg",
          title: "Guided 4 Excellence",
          subtitle: "LP design for a coaching platform built to inspire transformation.",
          description: "We created a clean, focused landing page to reflect the brand’s commitment to clarity and personal growth. The design supports conversion while maintaining a professional and empowering tone.",
          href: "/"
     },
     {
          id: 6,
          image: "/images/real-img6.jpg",
          title: "Native Doors",
          subtitle: "From workshop to web — full redesign and SEO-backed growth.",
          description: "We redesigned their website to reflect premium quality, optimized it for search, and launched high-intent PPC campaigns to drive sales.",
          href: "/"
     }
];
function GudEffect2() {
     return (
          <div>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 3xl:gap-[62px] md:gap-8 gap-14 3xl:mt-[126px] mt-[60px]">
                    {cards.map((card) => (
                         <Card key={card.id} {...card} />
                    ))}
               </div>
          </div>
     )
}

export default GudEffect2
