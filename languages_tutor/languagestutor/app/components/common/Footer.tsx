import Image from 'next/image'
import React from 'react'
import facebook from '../../../public/Facebook.svg'
import instagram from '../../../public/Instagram.svg'
import twitter from '../../../public/_X.svg'
import linkedin from '../../../public/LinkedIn.svg'
import youtube from '../../../public/Youtube.svg'
import Link from 'next/link'
import { allCoursesQuery } from '../../lib/queries'
import { sanityClient } from '../../lib/sanity'
import { urlFor } from '../../lib/sanityImage'
import { getTranslations } from 'next-intl/server'


export default async function Footer() {
  const t = await getTranslations()
     const courses = await sanityClient.fetch(allCoursesQuery)


  return (
    <footer className='lg:py-20 pt-10 pb-20 w-full bg-black1 text-white'>
    <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
    <div className="w-full flex md:flex-row flex-col gap-5">
        <div className="md:w-1/4">
        <Image src={'/lang-logo.svg'} width={185} height={34} className='h-9 w-fit mb-2' alt='footer logo' />
        <p className='text-sm text-gray5 mb-3'>   <span>{t('footer-para_1')}</span> Language Tutor – <span>{t('footer-para_2')}</span> </p>
        <p className='text-sm text-gray5'><span>{t('footer-para_3')}</span>
        </p>
        </div>
        <div className="md:w-1/3">
            <h3 className='text-base text-neutral1'><span>{t('footer-top-courses')}</span></h3>
            {
                courses
                .filter((course:any)=> course.topCourse)
                .slice(0,4)
                .map((course:any) => (
                    <Link href={`/courses/${course.slug}`} key={course._id} className='flex items-center gap-3 py-3 px-2 hover:bg-neutral5/5 rounded-lg'>
                        <Image src={urlFor(course?.mainImage).width(400).url()} alt={course.title} width={120} height={64} className='w-32 h-16 object-cover rounded-lg' />
                        <div>
                        <h4 className='text-sm text-gray1 font-medium'><span>{course.title}</span></h4>
                        <p className='text-xs text-gray5'><span>{course.description}</span></p>
                        </div>
                    </Link>
                ))
            }

        </div>
        <div className="md:w-1/6">
        <div className="w-full mb-10">
        <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-other-courses')}</span></h3>
        <ul className='space-y-2'>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-adv-pashto')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-children')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-conv-pashto')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-writing')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-reading')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-culture')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-history')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-custom-pashto')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-urdu-grammar')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-arabic-course')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-english-grammar')}</span></Link>
            </li>

        </ul>
        </div>
   
        </div>
        <div className="md:w-1/5">
        <div className="w-full mb-10">
        <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-languages')}</span></h3>
        <ul className='space-y-1'>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><span>{t('footer-pashto-language')}</span></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><span>{t('footer-urdu-language')}</span></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><span>{t('footer-arabic-language')}</span></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><span>{t('footer-english-language')}</span></Link>
            </li>
           
        </ul>
        </div>
        <div className="w-full">
        <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-company')}</span></h3>
        <ul className='space-y-1'>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-mission')}</span></Link>
            </li>
            <li>
                <Link href='/testimonials' className='text-sm text-gray5 hover:text-white'><span>{t('footer-testimonials')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-success-stories')}</span></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><span>{t('footer-contact-us')}</span></Link>
            </li>
        </ul>
        </div>

        </div>
    </div>
    <div className="w-full lg:mt-20 mt-10 flex md:flex-row flex-col items-start gap-4 md:items-center justify-between">
        <p className='text-sm text-gray5 max-w-[425px]'>© 2025 <span>{t('footer-all-rights')}</span>
          </p>
           <div className="flex items-center gap-2">
            <Link href="#" className='text-sm text-gray5 hover:text-white'><span>{t('footer-privacy-policy')}</span></Link>
            <Link href="#" className='text-sm text-gray5 hover:text-white'><span>{t('footer-terms-service')}</span></Link>
           </div>
           <ul className='flex items-center gap-3'>
            <li>
                <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={facebook} alt='logo' />
                </Link>
            </li>
            <li>
                <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={instagram} alt='logo' />
                </Link>
            </li>
            <li>
                <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={twitter} alt='logo' />
                </Link>
            </li>
            <li>
                <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={linkedin} alt='logo' />
                </Link>
            </li>
            <li>
                <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={youtube} alt='logo' />
                </Link>
            </li>
           </ul>

    </div>
    </div>        
    </footer>
  )
}