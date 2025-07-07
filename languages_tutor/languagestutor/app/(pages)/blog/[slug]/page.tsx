'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { PrimaryLinkGradient } from '@/app/components/common/PrimaryLinkGradient'
import NewsLetterSection from '@/app/components/NewsLetterSection'
import { urlFor } from '@/app/lib/sanityImage'
import RichText from '@/app/components/common/RichText'
import { formattedDate } from '@/app/lib/fornatDate'
import { ShareList } from '../../blog/_component/ShareList'
import { HomeBlogSwiper } from '@/app/components/HomeBlogSwiper'
import { allBlogQuery, getSingleBlogQuery } from '@/app/lib/queries'
import { sanityClient } from '@/app/lib/sanity'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'

interface Blog {
  _id: string
  title: string
  slug: string
  mainImage: any
  body: any
  blogCategory: Array<{
    title: string
  }>
  duration: string
  createdAt: string
  writer: {
    name: string
    position: string
    bio: any
    image: any
    twitter?: string
    youtube?: string
    linkedIn?: string
    instagram?: string
    dribbble?: string
  }
  topBlog?: boolean
  description?: string
}

export default function BlogDetails () {
  const params = useParams()
  const slug = params.slug as string
  
  const { query } = getSingleBlogQuery()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [topBlogs, setTopBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogData, topBlogData] = await Promise.all([
          sanityClient.fetch<Blog>(query, { slug }),
          sanityClient.fetch<Blog[]>(allBlogQuery)
        ])
        
        if (!blogData) {
          notFound()
        }
        
        setBlog(blogData)
        setTopBlogs(topBlogData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug, query])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div className="text-3xl animate-pulse">Loading...</div>
      </div>
    )
  }

  if (!blog) {
    notFound()
  }

  return (
    <main className="bg-neutral1">
    <section className='py-14 lg bg-black1 bg-cover bg-center bg-no-repeat' >
          <div className="w-full max-w-[1340px] px-5 mx-auto">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 justify-between">
            <div className="w-full">
            <ul className='flex items-center gap-2 mb-5'>
            
                <li>
                    <Link href="/blog" className='text-primary flex items-center gap-2 text-sm font-medium' >
                    <svg className='rotate-180'
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        >
                        <path d="M6 3.5L11 8.5L6 13.5" stroke="#3A3A41" strokeWidth="1.5" />
                        </svg>

                      {blog?.blogCategory[0].title}
                    </Link>
                </li>
            </ul>
            <div className="w-full">
              <h1 className='lg:text-56 text-32 font-semibold text-neutral1 md:mb-6'>{blog?.title}</h1>
              <ul className='md:flex items-center flex-wrap md:gap-6 gap-2 hidden'>
                <li className='flex items-center gap-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6.16667C2 5.79848 2.29848 5.5 2.66667 5.5H17.3333C17.7015 5.5 18 5.79848 18 6.16667C18 6.53486 17.7015 6.83333 17.3333 6.83333H2.66667C2.29848 6.83333 2 6.53486 2 6.16667ZM2 10.8333C2 10.4651 2.29848 10.1667 2.66667 10.1667H17.3333C17.7015 10.1667 18 10.4651 18 10.8333C18 11.2015 17.7015 11.5 17.3333 11.5H2.66667C2.29848 11.5 2 11.2015 2 10.8333ZM2 15.5C2 15.1318 2.29848 14.8333 2.66667 14.8333H17.3333C17.7015 14.8333 18 15.1318 18 15.5C18 15.8682 17.7015 16.1667 17.3333 16.1667H2.66667C2.29848 16.1667 2 15.8682 2 15.5Z"
                    fill="#7F8090"
                  />
                </svg>
                  <p className='text-sm text-gray5'>{blog?.blogCategory[0].title}</p>
                </li>
                <li className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00002 13.6C11.0928 13.6 13.6 11.0928 13.6 8.00002C13.6 4.90723 11.0928 2.40002 8.00002 2.40002C4.90723 2.40002 2.40002 4.90723 2.40002 8.00002C2.40002 11.0928 4.90723 13.6 8.00002 13.6ZM9.00002 5.20002C9.00002 4.64774 8.55231 4.20002 8.00002 4.20002C7.44774 4.20002 7.00002 4.64774 7.00002 5.20002V8.00002C7.00002 8.26524 7.10538 8.51959 7.29292 8.70713L9.27282 10.687C9.66334 11.0776 10.2965 11.0776 10.687 10.687C11.0776 10.2965 11.0776 9.66334 10.687 9.27282L9.00002 7.58581V5.20002Z"
                      fill="#7F8090"
                    />
                  </svg>
                  <p className='text-sm text-gray5'>{blog?.duration}</p>
                </li>

                <li className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.875 16.625C3.875 16.1418 4.26675 15.75 4.75 15.75H15.25C15.7333 15.75 16.125 16.1418 16.125 16.625C16.125 17.1082 15.7333 17.5 15.25 17.5H4.75C4.26675 17.5 3.875 17.1082 3.875 16.625ZM6.75628 7.61872C6.41457 7.27701 6.41457 6.72299 6.75628 6.38128L9.38128 3.75628C9.54538 3.59219 9.76794 3.5 10 3.5C10.2321 3.5 10.4546 3.59219 10.6187 3.75628L13.2437 6.38128C13.5854 6.72299 13.5854 7.27701 13.2437 7.61872C12.902 7.96043 12.348 7.96043 12.0063 7.61872L10.875 6.48744L10.875 13.125C10.875 13.6082 10.4832 14 10 14C9.51675 14 9.125 13.6082 9.125 13.125L9.125 6.48744L7.99372 7.61872C7.65201 7.96043 7.09799 7.96043 6.75628 7.61872Z"
                      fill="#7F8090"
                    />
                  </svg>
                  <p className='text-sm text-gray5'>{formattedDate(blog?.createdAt)}</p>
                </li>
              </ul>
            </div>
            </div>

            <div className="w-full flex items-center justify-center">
                <Image src={urlFor(blog?.mainImage).width(600).url()} width={600} height={290} alt='img' className='w-full h-auto object-cover'/>
            </div>
            <ul className='flex items-center flex-wrap md:gap-6 gap-2 md:hidden'>
                <li className='flex items-center gap-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6.16667C2 5.79848 2.29848 5.5 2.66667 5.5H17.3333C17.7015 5.5 18 5.79848 18 6.16667C18 6.53486 17.7015 6.83333 17.3333 6.83333H2.66667C2.29848 6.83333 2 6.53486 2 6.16667ZM2 10.8333C2 10.4651 2.29848 10.1667 2.66667 10.1667H17.3333C17.7015 10.1667 18 10.4651 18 10.8333C18 11.2015 17.7015 11.5 17.3333 11.5H2.66667C2.29848 11.5 2 11.2015 2 10.8333ZM2 15.5C2 15.1318 2.29848 14.8333 2.66667 14.8333H17.3333C17.7015 14.8333 18 15.1318 18 15.5C18 15.8682 17.7015 16.1667 17.3333 16.1667H2.66667C2.29848 16.1667 2 15.8682 2 15.5Z"
                    fill="#7F8090"
                  />
                </svg>
                  <p className='text-sm text-gray5'>{blog?.blogCategory[0].title}</p>
                </li>
                <li className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00002 13.6C11.0928 13.6 13.6 11.0928 13.6 8.00002C13.6 4.90723 11.0928 2.40002 8.00002 2.40002C4.90723 2.40002 2.40002 4.90723 2.40002 8.00002C2.40002 11.0928 4.90723 13.6 8.00002 13.6ZM9.00002 5.20002C9.00002 4.64774 8.55231 4.20002 8.00002 4.20002C7.44774 4.20002 7.00002 4.64774 7.00002 5.20002V8.00002C7.00002 8.26524 7.10538 8.51959 7.29292 8.70713L9.27282 10.687C9.66334 11.0776 10.2965 11.0776 10.687 10.687C11.0776 10.2965 11.0776 9.66334 10.687 9.27282L9.00002 7.58581V5.20002Z"
                      fill="#7F8090"
                    />
                  </svg>
                  <p className='text-sm text-gray5'>{blog?.duration}</p>
                </li>

                <li className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.875 16.625C3.875 16.1418 4.26675 15.75 4.75 15.75H15.25C15.7333 15.75 16.125 16.1418 16.125 16.625C16.125 17.1082 15.7333 17.5 15.25 17.5H4.75C4.26675 17.5 3.875 17.1082 3.875 16.625ZM6.75628 7.61872C6.41457 7.27701 6.41457 6.72299 6.75628 6.38128L9.38128 3.75628C9.54538 3.59219 9.76794 3.5 10 3.5C10.2321 3.5 10.4546 3.59219 10.6187 3.75628L13.2437 6.38128C13.5854 6.72299 13.5854 7.27701 13.2437 7.61872C12.902 7.96043 12.348 7.96043 12.0063 7.61872L10.875 6.48744L10.875 13.125C10.875 13.6082 10.4832 14 10 14C9.51675 14 9.125 13.6082 9.125 13.125L9.125 6.48744L7.99372 7.61872C7.65201 7.96043 7.09799 7.96043 6.75628 7.61872Z"
                      fill="#7F8090"
                    />
                  </svg>
                  <p className='text-sm text-gray5'>{formattedDate(blog?.createdAt)}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      <section className='md:pb-20 pb-10'>
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
      <div className="w-full flex gap-16 pt-16">
        <div className="lg:w-[calc(100%_-_360px)]">
          <div className="w-full md:p-4 rounded-lg mb-6">
            <div className="w-full">
              <div className="rich-text">
              <RichText content={blog?.body} />
              </div>
            </div>
          </div>

          <div className="w-full lg:p-6 p-3 border border-gray1 rounded-lg">
          <div className="w-full flex md:flex-row flex-col gap-6">
            <Image src={urlFor(blog?.writer?.image).width(286).url()} alt="Image" width={220} height={268} className='max-w-[220px] rounded-lg w-full h-auto object-cover' />
            <div className="">
              <h4 className='text-base text-black font-medium'>{blog.writer?.name}</h4>
              <p className='text-base text-gray5'>{blog.writer?.position}
              </p>
              <div className="rich-text-bio">
              <RichText content={blog.writer?.bio}/>
              </div>
              <h4 className='text-sm text-gray5 my-4'>You can learn more about me on: </h4>
                <ul className='flex items-center gap-3 -mt-2'>
                  <li>
                    <Link href={blog.writer?.twitter || '#' } >
                    <Image src={'/twitter.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href={blog.writer?.youtube || '#'}  >
                    <Image src={'/youtube-icon.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href={blog.writer?.linkedIn || '#'}  >
                    <Image src={'/linked-icon.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href={blog.writer?.instagram || '#'} >
                    <Image src={'/instagram-icon.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </Link>
                  </li>
                  <li>
                    <Link href={blog.writer?.dribbble || '#'} >
                    <Image src={'/social-icon-4.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </Link>
                  </li>
                </ul>
            </div>

          </div>
          </div>

        {/* <ShareList/> */}

        </div>

        <div className="w-full max-w-[360px] h-auto hidden lg:block">
        <div className="w-full  rounded-xl p-4 lg:block hidden sticky top-20">
            <h3 className='text-xl text-black1 font-semibold'>Top Blog</h3>
            <div className="w-full mt-6">
              {topBlogs.length >= 0 ? 
              <>
              <ul className='w-full space-y-2'>
               {topBlogs
              .filter((blog:any)=> blog.topBlog)
              .slice(0,5)
               .map((blog:any) => (
                  <li key={blog?._id}>
                  <Link className="flex gap-3 py-2 px-2 bg-white border border-gray5/10 rounded-lg" 
                    href={`/blog/${blog.slug}`}>
                    <Image src={urlFor(blog?.mainImage).width(400).url()} width={100} height={60} className='rounded-lg object-cover' alt='no-img' />
                    <div>
                      <h4 className="text-sm leading-tight line-clamp-2 text-black1 font-medium">{blog?.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {blog?.description}
                      </p>
                    </div>
                    </Link>
                  </li>
                ))}

              </ul>
              <Link href={'/blog'} className='text-center w-full block my-4 text-sm text-primary1'>See more</Link>
              </>
              : 
              ""
              }
            </div>
        </div>
        </div>

      </div>
      </div>
      </section>

     
         <section className="lg:pb-20 pb-10 pt-10 bg-white w-full">
         <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
           <div className="w-full">
           <span className="text-base text-primary2">Blogs</span>
             <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:items-center justify-between mb-9">
             <div className="">
             <h2 className="lg:text-5xl text-28 text-neutral2 font-semibold md:mt-5 mt-3 md:mb-5 mb-3">Explore Our Language Learning</h2>
             <p className="md:text-lg text-base text-gray3">Tips, Guides, and Success Stories</p>
             </div>
                 <PrimaryLinkGradient href="/blog" className="py-3 text-base">
                   <span>View posts</span>
                 </PrimaryLinkGradient>
             </div>
           </div>
           <div className="w-full">
             <HomeBlogSwiper/>
           </div>
     
         </div>
         </section>

      <NewsLetterSection/>
    </main>
  )
}
