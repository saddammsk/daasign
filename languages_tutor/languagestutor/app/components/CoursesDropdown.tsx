'use client'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {clsx} from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient } from '../lib/sanity'
import { featuredCoursesQuery } from '../lib/queries'
import { urlFor } from '../lib/sanityImage'
import { useTranslations } from 'next-intl';



  export default function CoursesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [courses, setCourses] = useState<any[]>([]);
  const t = useTranslations();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await sanityClient.fetch(featuredCoursesQuery);
        
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } 
    };

    fetchCourses();
  }, []);

  return (
    <Menu as="div" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {() => (
        <>
          <MenuButton as="button" className={clsx(isOpen && 'text-primary',"p-2 py-2.5 lg:w-fit w-full text-sm font-medium px-4 data-[hover]:text-primary transition-all duration-200 text-gray5 flex items-center gap-1.5 border border-neutral2 rounded-lg")}>
          <Link href="/courses" >
           <span>{t('courses')}</span>
           </Link>
          <CaretDown weight='bold' className={isOpen ? 'rotate-180 transition-rotate duration-200' :'rotate-0 transition-rotate duration-200'} size={14} />
          </MenuButton>
          <AnimatePresence>
            {isOpen && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
                className="absolute w-full lg:max-w-[700px] bg-black2 max-w-[87%] shadow-lg rounded-md overflow-hidden border origin-top mt-1 border-black3 z-10"
              >
                <div className="w-full flex md:flex-row flex-col">
                    <div className="bg-black2 md:w-3/5 border-r border-black3 pt-5 pb-8 px-3">
                    <div className="w-full flex flex-col gap-2">
                    <div className="w-full">
                    <h4 className='text-xs text-gray5 my-1'> <span>{t('courses')}</span></h4>
                    {courses
                        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 3)
                        .map((course: any) => (
                          <Link 
                          key={course.title}
                          href={`/courses/${course.slug}`}
                          className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'>
                          <div className="">
                          <div className="flex items-center gap-2">
                                <h3 className='font-medium text-sm mb-1'>{course?.title}</h3>
                                {(() => {
                                  const createdAtDate = new Date(course?.createdAt);
                                  const now = new Date();
                                  const diffInDays = (now.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60 * 24);
                                  if (diffInDays <= 30) {
                                    return (
                                      <span className='text-primary1 text-xs bg-primary px-2.5 rounded-full'>{t('new')}</span>
                                    );
                                  }
                                  return null;
                                })()}
                              </div>
                              <ul className='flex items-center gap-3'>
                                  <li className='flex items-center gap-1'>
                                  <img src="/user-group.svg" alt="user group"/>
                                  <h5 className='text-xs text-gray5'>{course?.purchasedCount}</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                  <img src="/star.svg" alt="user group"/>
                                  <h5 className='text-xs text-gray5'>{course?.review}</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                  <img src="/chart-bar.svg" alt="user group"/>
                                  <h5 className='text-xs text-gray5'>{course?.level}</h5>
                                  </li>
                              </ul>
                          </div>
                          </Link>
                        ))}
                    </div>
                    <div className="w-full">
                      <h4 className='text-xs text-gray5 my-1'>{t('bundles')}</h4>
                    <ul>
                        <li>
                            <Link href="/courses" className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'>
                            <div className="">
                                <h3 className='font-medium text-sm mb-1'>{t('pashto_urdu_languages')}</h3>
                                <ul className='flex items-center gap-3'>
                                    <li className='flex items-center gap-1'>
                                    <img src="/user-group.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>400 +</h5>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                    <img src="/star.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>4.9</h5>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                    <img src="/chart-bar.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>{t('intermediate')}</h5>
                                    </li>
                                </ul>
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses" className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'>
                            <div className="">
                                <h3 className='font-medium text-sm mb-1'>{t('pashto_arabic_languages')}</h3>
                                <ul className='flex items-center gap-3'>
                                    <li className='flex items-center gap-1'>
                                    <img src="/user-group.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>140 +</h5>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                    <img src="/star.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>4.86</h5>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                    <img src="/chart-bar.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>{t('intermediate')}</h5>
                                    </li>
                                </ul>
                            </div>
                            </Link>
                        </li>
                   
                    </ul>
                    </div>
                    </div>
                    </div>
                    <div className="bg-black1 md:w-2/5 pt-5 pb-8 px-3 flex flex-col items-center justify-center">
                      <h4 className='text-xs text-gray5 mb-2 text-start mr-auto'>{t('latest_news')}</h4>
                    {courses
                        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 1)
                        .map((course: any) => (
                              <Link 
                              key={course.title}
                              href={`/courses/${course.slug}`}
                              className="hover:bg-hover-nav-link p-3 w-full transition-all flex flex-col duration-200 rounded-lg gap-3">
                              <Image src={urlFor(course?.mainImage).width(400).url()} width={100} height={130}  alt='no-img' className='w-full h-[130px] rounded-lg bg-cover object-cover' />
                              <h3 className='text-sm font-medium text-neutral1'>{course?.title}</h3>
                              <p className='text-gray5 text-sm'>{course?.description}</p>
                              <div className="flex items-center ">
                              <ul className='flex items-center gap-3'>
                                  <li className='flex items-center gap-1'>
                                  <img src="/Calendar-icon.svg" alt="user group"/>
                                  <h5 className='text-xs text-gray5'>{course?.createdAt ? new Date(course.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                  <img src="/Time-icon.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>{t('7_min_read')}</h5>
                                  </li>
                              </ul>
                              </div>

                            </Link>

                        ))}          
                    </div>
                </div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}
