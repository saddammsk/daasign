import { EventFooter } from "../molecules/EventFooter";
import { EventMeta } from "../molecules/EventMeta";
import { EventTags } from "../molecules/EventTags";


type Props = {
     title: string;
     location: string;
     date: string;
     category: string;
     background: string;
     featured?: boolean;
     buttonVariant?: "dark" | "yellow";
};

export const EventCard = ({
     title,
     location,
     date,
     category,
     background,
     featured,
     buttonVariant,
}: Props) => {
     return (
          <div style={{ backgroundImage: `url(${background})` }}
               className={` bg-no-repeat bg-cover ${featured ? "pt-4" : "pt-11"
                    } px-5 pb-5`}
          >
               {featured && (
                    <span className="text-base font-Rajdhani font-bold text-yellow-1000">
                         FEATURED
                    </span>
               )}

               <h2 className="font-Sporty mb-1 text-gray-1300 leading-6 text-lg font-medium">
                    {title}
               </h2>

               <EventMeta location={location} />

               <EventTags tags={["INDOOR", "UPCOMING", "FIFA RULES"]} />

               <div className="flex items-center gap-2 border-b border-gray-1600 pb-5">
                    <img src="/images/arrow.svg" alt="" />
                    <h6 className="text-xl font-semibold font-Rajdhani text-gray-1300">
                         {category}
                    </h6>
               </div>

               <EventFooter date={date} buttonVariant={buttonVariant} />
          </div>
     );
};
