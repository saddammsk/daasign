'use client'
import React, { useEffect } from 'react'
import Asidebar from './Asidebar'
import SortBy from '@/app/components/SortBy'
import { CourseCard } from '@/app/components/CourseCard'
import { urlFor } from '@/app/lib/sanityImage'
import { useGlobalContext } from '@/app/context/GlobalContext'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'


const AllCourses = () => {
    const {filteredCourses} = useGlobalContext();
    const [loading, setLoading] = React.useState(true)
    const { i18n } = useTranslation();
    
  const getTotalLectures = (curriculum: any[] = []): number => {
    return curriculum.reduce((total: number, module: any) => {
      return total + (module.lectures?.length || 0);
    }, 0);
  };

  useEffect(()=>{
    if(filteredCourses){
        setLoading(false)
    }else{
        setLoading(true)
    }

  },[filteredCourses])

  return (
      <section className='lg:py-20 py-10'>
               <div className="w-full max-w-[1340px] px-5 mx-auto">
                   <div className="w-full flex lg:flex-row flex-col gap-8">
                      <Asidebar/>
                       <div className="lg:w-[calc(100%_-_212px)] w-full">
                           <div className="w-full flex items-center justify-between gap-5 mb-6">
                               <h3 className='text-lg lg:block hidden text-neutral2 font-semibold'>All Courses</h3>
                               <SortBy/>
                           </div>
                           {loading &&
                              <div className="w-full h-auto flex items-center justify-center">
                                <Image width={200} height={200} src="/Loading_icon.gif" className=' mix-blend-darken' alt='No' />
                              </div>
                           }
                     
                           <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
                          {filteredCourses
                           .map((course:any) => (
                           <CourseCard key={course.title?.[i18n.language] || course.title?.en}
                           href={`/courses/${course.slug}`}
                           img={urlFor(course?.mainImage).width(400).url()} 
                           title={course?.title} 
                           users={course?.purchasedCount} 
                           rating={course?.review}
                           level={course?.level} 
                           description={course?.description} 
                           lessons={getTotalLectures(course?.curriculum)}
                           duration={course?.duration} 
                           />
                           ))}
                           </div>
                           {!loading && filteredCourses.length <= 0 &&
                            <div className="w-full">
                            No Item Found!
                          </div>
                           }
                     
                           <div className="w-ful flex items-center justify-center mt-6">
                           {/* <CustomPagination/> */}
                           </div>
                       </div>
                   </div>
                   
               </div>
           </section>
  )
}

export default AllCourses