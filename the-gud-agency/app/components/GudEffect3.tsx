
import Card from './cards2';
const cards2 = [
     {
          id: 1,
          image: "/images/effect-img.png",
          title: "Anna Kara Loans",
          subtitle: "Social-first strategy that drove awareness, leads, and lasting trust.",
          description: "We crafted a bold visual identity and content strategy, ran targeted Meta Ads, and built a social funnel that positioned Anna Kara Loans as a go-to in competitive lending.",
          href: "/"
     },
];
function GudEffect3() {
     return (
          <div>
               <div className=" lg:gap-[134px] gap-10">
                    {cards2.map((card) => (
                         <Card key={card.id} {...card} />
                    ))}
               </div>
          </div>
     )
}

export default GudEffect3
