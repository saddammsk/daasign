
import Card from './cards';
const cards = [
     {
          id: 1,
          image: "/images/gud-effect1.png",
          title: "Guided 4 Excellence",
          subtitle: "LP design for a coaching platform built to inspire transformation.",
          description: "We created a clean, focused landing page to reflect the brand’s commitment to clarity and personal growth. The design supports conversion while maintaining a professional and empowering tone.",
          href: "/"
     },
     {
          id: 2,
          image: "/images/gud-effect2.png",
          title: "Elevate Health Group",
          subtitle: "Website redesign and UX for a leading wellness provider.",
          description: "With a clean interface and clear navigation, we brought Elevate’s care-first philosophy online—improving both aesthetics and usability.",
          href: "/"
     },
];
function GudEffect() {
     return (
          <div>
               <div className="grid md:grid-cols-2 lg:gap-[134px] gap-10">
                    {cards.map((card) => (
                         <Card key={card.id} {...card} />
                    ))}
               </div>
          </div>
     )
}

export default GudEffect
