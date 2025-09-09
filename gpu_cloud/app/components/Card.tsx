// Card.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
     children: ReactNode;
}

const Card = ({ children }: CardProps) => {
     return (
          <div className="bg-gray-1000 dark:border-white/[10%] flex flex-col justify-between dark:bg-black-1200 border border-gray-1100 rounded-[10px] p-1.5 pb-2">
               {children}
               <div className="flex items-center justify-between">
                    <img src="images/BookMinus.svg" className="dark:invert-[1]" alt="" />
                    <Link href="/AddedApp"
                         type="button"
                         className="text-sm dark:bg-gray-1100 dark:text-black-1000 cursor-pointer font-medium leading-5 py-2 px-4 inline-block rounded-lg bg-black-1100 transition-all  ease-in-out duration-500 dark:hover:bg-gray-2300 shadow-3xl text-gray-1400"
                    >
                         Start App
                    </Link>
               </div>
          </div>
     );
};

export default Card;
