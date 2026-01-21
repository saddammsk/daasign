import { ViewDetailsButton } from "../atoms/ViewDetailsButton";


type Props = {
     date: string;
     buttonVariant?: "dark" | "yellow";
};

export const EventFooter = ({ date, buttonVariant }: Props) => (
     <ul className="flex items-center mt-5 4xl:gap-[22px] 2xl:gap-[9px] gap-[22px]">
          <li>
               <h6 className="4xl:text-base 2xl:text-sm text-base font-semibold font-Rajdhani text-gray-1300">
                    {date}
               </h6>
          </li>
          <li>
               <ViewDetailsButton href="/" variant={buttonVariant} />
          </li>
     </ul>
);
