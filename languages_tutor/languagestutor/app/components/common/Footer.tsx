import Image from 'next/image'
import React from 'react'
import facebook from '../../../public/Facebook.svg'
import instagram from '../../../public/Instagram.svg'
import twitter from '../../../public/_X.svg'
import linkedin from '../../../public/LinkedIn.svg'
import youtube from '../../../public/Youtube.svg'
import Link from 'next/link'
import { allCoursesQuery } from '@/app/lib/queries'
import { sanityClient } from '@/app/lib/sanity'
import { urlFor } from '@/app/lib/sanityImage'
import Translate from './Translate'


const Footer = async () => {
     const courses = await sanityClient.fetch(allCoursesQuery)


  return (
    <footer className='lg:py-20 pt-10 pb-20 w-full bg-black1 text-white'>
    <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
    <div className="w-full flex md:flex-row flex-col gap-5">
        <div className="md:w-1/4">
        <Image src={'/lang-logo.svg'} width={185} height={34} className='h-9 w-fit mb-2' alt='footer logo' />
        <p className='text-sm text-gray5 mb-3'>   <Translate tKey="footer-para_1" Tag="span" /> Language Tutor – <Translate tKey="footer-para_2" Tag="span" /> </p>
        <p className='text-sm text-gray5'><Translate tKey="footer-para_3" Tag="span" />
        </p>
        </div>
        <div className="md:w-1/3">
            <h3 className='text-base text-neutral1'><Translate tKey="footer-top-courses" Tag="span" /></h3>
            {
                courses
                .filter((course:any)=> course.topCourse)
                .slice(0,4)
                .map((course:any) => (
                    <Link href={`/courses/${course.slug}`} key={course._id} className='flex items-center gap-3 py-3 px-2 hover:bg-neutral5/5 rounded-lg'>
                        <Image src={urlFor(course?.mainImage).width(400).url()} alt={course.title} width={120} height={64} className='w-32 h-16 object-cover rounded-lg' />
                        <div>
                        <h4 className='text-sm text-gray1 font-medium'><Translate tKey={`footer-course-title-${course.slug}`} Tag="span" fallback={course?.title} /></h4>
                        <p className='text-xs text-gray5'><Translate tKey={`footer-course-desc-${course.slug}`} Tag="span" fallback={course?.description} /></p>
                        </div>
                    </Link>
                ))
            }

        </div>
        <div className="md:w-1/6">
        <div className="w-full mb-10">
        <h3 className='text-base text-neutral1 mb-3'><Translate tKey="footer-other-courses" Tag="span" /></h3>
        <ul className='space-y-2'>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-adv-pashto" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-children" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-conv-pashto" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-writing" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-reading" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-culture" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-history" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-custom-pashto" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-urdu-grammar" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-arabic-course" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-english-grammar" Tag="span" /></Link>
            </li>

        </ul>
        </div>
   
        </div>
        <div className="md:w-1/5">
        <div className="w-full mb-10">
        <h3 className='text-base text-neutral1 mb-3'><Translate tKey="footer-languages" Tag="span" /></h3>
        <ul className='space-y-1'>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-pashto-language" Tag="span" /></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-urdu-language" Tag="span" /></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-arabic-language" Tag="span" /></Link>
            </li>
            <li>
                <Link href='/courses' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-english-language" Tag="span" /></Link>
            </li>
           
        </ul>
        </div>
        <div className="w-full">
        <h3 className='text-base text-neutral1 mb-3'><Translate tKey="footer-company" Tag="span" /></h3>
        <ul className='space-y-1'>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-mission" Tag="span" /></Link>
            </li>
            <li>
                <Link href='/testimonials' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-testimonials" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-success-stories" Tag="span" /></Link>
            </li>
            <li>
                <Link href='#' className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-contact-us" Tag="span" /></Link>
            </li>
        </ul>
        </div>

        </div>
    </div>
    <div className="w-full lg:mt-20 mt-10 flex md:flex-row flex-col items-start gap-4 md:items-center justify-between">
        <p className='text-sm text-gray5 max-w-[425px]'>© 2025 <Translate tKey="footer-all-rights" Tag="span" />
          </p>
           <div className="flex items-center gap-2">
            <Link href="#" className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-privacy-policy" Tag="span" /></Link>
            <Link href="#" className='text-sm text-gray5 hover:text-white'><Translate tKey="footer-terms-service" Tag="span" /></Link>
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

export default Footer