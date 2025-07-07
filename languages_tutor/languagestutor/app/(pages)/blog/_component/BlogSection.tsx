'use client'
import React, { useEffect } from 'react'
import Asidebar from './Asidebar'
import SortBy from '@/app/components/SortBy'
import { urlFor } from '@/app/lib/sanityImage'
import { useGlobalContext } from '@/app/context/GlobalContext'
import Image from 'next/image'
import { BlogCard } from '@/app/components/BlogCard'
import SortByBlog from '@/app/components/SortByBlog'


const BlogSection = () => {
    const {filteredBlog} = useGlobalContext();
    const [loading, setLoading] = React.useState(true)
    

  useEffect(()=>{
    if(filteredBlog){
        setLoading(false)
    }else{
        setLoading(true)
    }

  },[filteredBlog])

  return (
      <section className='lg:py-20 py-10'>
               <div className="w-full max-w-[1340px] px-5 mx-auto">
                   <div className="w-full flex lg:flex-row flex-col gap-8">
                      <Asidebar/>
                       <div className="lg:w-[calc(100%_-_212px)] w-full">
                           <div className="w-full flex items-center justify-between gap-5 mb-6">
                               <h3 className='text-lg lg:block hidden text-neutral2 font-semibold'>All Blogs</h3>
                               <SortByBlog/>
                           </div>
                           {loading &&
                              <div className="w-full h-auto flex items-center justify-center">
                                <Image width={200} height={200} src="/Loading_icon.gif" className=' mix-blend-darken' alt='No' />
                              </div>
                           }
                     
                           <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
                          {filteredBlog
                           .map((blog:any) => (
                           <BlogCard key={blog.title}
                           href={`/blog/${blog.slug}`}
                           img={urlFor(blog?.mainImage).width(400).url()} 
                           authorImage={urlFor(blog?.writer?.image).width(400).url()} 
                           title={blog?.title} 
                           authorName={blog?.name} 
                           blogCategory={blog?.blogCategory[0].title} 
                           createdAt={blog?.createdAt} 
                           description={blog?.description} 
                           />
                           ))}
                           </div>
                           {!loading && filteredBlog.length === 0 &&
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

export default BlogSection