// components/Card.tsx
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export default function Card({ image, title, subtitle, description, href }: CardProps) {
  return (
    <div className="">
      <div className="relative text-start group flex flex-col transition-transform origin-top-left hover:scale-[1.06]">
        <div>
          <img
            src={image}
            alt={title}
            className="rounded-[20px] w-full h-full"
          />
        </div>
        <div className="bg-black/[0.69] !text-start rounded-[20px] flex flex-col justify-end 3xl:px-6 md:px-4 px-3.5 xl:py-10 md:py-7 py-5 absolute left-0 top-0 w-full h-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
          <h4 className="text-white w-full font-bold 3xl:text-size-30 text-xl leading-none">{title}</h4>
          <span className="text-tertiary mt-3.5 xl:mb-6 mb-2.5 font-normal 3xl:text-xl md:text-sm text-base xl:leading-7 md:leading-[22px] leading-5 uppercase block">{subtitle}</span>
          <p className="text-white font-medium 3xl:text-lg text-sm 3xl:leading-7 md:leading-[22px] leading-5">{description}</p>
          <Link href="/" className="3xl:text-lg text-xs font-bold w-fit text-white inline-block py-2.5 px-5 mt-5 rounded-full bg-tertiary hover:bg-tertiary/[70%]">View Case Study</Link>

        </div>
      </div>
    </div>
  );
}
