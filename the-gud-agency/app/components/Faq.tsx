import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type FaqItem = {
     id: string;
     question: string;
     answer: string;
     colorClass?: string;
}

interface FaqProps {
     items: FaqItem[];
}
function Faq({ items }: FaqProps) {
     return (
          <div className="w-full pt-24">
               <div className="mx-auto w-full divide-y divide-white/52">
                    {items.map((item, index: number) => (
                         <Disclosure key={item.id} as="div" className={`pb-5 ${index !== 0 ? '3xl:pt-[70px] pt-12' : ''}`} defaultOpen={false}>
                              <DisclosureButton className="group flex w-full items-center justify-between">
                                   <span className="3xl:text-[30px] 2xl:text-xl text-sn font-semibold text-white text-start md:leading-[34px] leading-[22px]">
                                        <span className={item.colorClass}>{item.id}</span> {item.question}
                                   </span>
                                   <ChevronDownIcon className="size-10 fill-white group-data-open:rotate-180" />
                              </DisclosureButton>
                              <DisclosurePanel className="mt-5 text-sm/5 text-white/50">
                                   <p className='3xl:text-[30px] md:text-xl text-sm font-normal text-white'>
                                        {item.answer}
                                   </p>
                              </DisclosurePanel>
                         </Disclosure>
                    ))}
               </div>
          </div>
     );
}

export default Faq;