import Link from "next/link";

type Props = {
     href: string;
     variant?: "dark" | "yellow";
};

export const ViewDetailsButton = ({ href, variant = "dark" }: Props) => {
     const base =
          "flex items-center gap-2.5 transition-all ease-in-out duration-500 4xl:text-xl 2xl:text-base md:text-xl text-base font-Rajdhani font-bold leading-[13px] py-1.5 px-2.5 relative";

     const styles =
          variant === "yellow"
               ? "bg-yellow-1000 hover:bg-gray-1300 text-black"
               : "bg-gray-1300 hover:bg-yellow-1000 text-black";

     return (
          <Link href={href} className={`${base} ${styles}`}>
               VIEW MORE DETAILS
               <img src="/images/right-arrow.svg" alt="" />
               <div className="absolute top-0 right-[-1px]">
                    <img src="/images/shape.svg" alt="" />
               </div>
          </Link>
     );
};
