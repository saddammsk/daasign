import React from 'react';

type ServiceCardProps = {
     title: string;
     colorClass: string;
     checkIcon: string;
     items: string[];
};

const ServiceCards = ({ title, colorClass, checkIcon, items }: ServiceCardProps) => {
     return (
          <div className={`bg-black-1000 border-l-4 ${colorClass} rounded-[30px] bubble-on-hover xl:py-[70px] xl:pb-[55px] md:py-14 py-[50px] 3xl:px-12 xl:px-8 md:px-6 px-5`}>
               <h4 className={`3xl:text-[30px] md:text-[23px] max-w-[380px] text-xl font-black md:mb-[50px] mb-[30px] ${colorClass.replace("border-", "text-")} md:leading-[37px] leading-6`}>
                    {title}
               </h4>
               <ul>
                    {items.map((item: string, i: number) => (
                         <li
                              key={i}
                              className={`flex ${i === 0
                                   ? 'xl:pb-[28px] pb-3'
                                   : i === items.length - 1
                                        ? 'xl:pt-[15px] pt-3'
                                        : 'xl:py-[15px] py-3'
                                   } border-b ${i === items.length - 1 ? 'border-none' : 'border-white/[27%]'
                                   } items-center 3xl:text-[22px]  md:text-base text-sm font-medium 3xl:leading-[30px] leading-5 text-white md:gap-[13px] gap-1.5`}
                         >
                              <img src={checkIcon} alt="" />
                              {item}
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default ServiceCards;
