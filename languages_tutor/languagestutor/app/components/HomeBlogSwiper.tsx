'use client'
import React, { useState, useEffect } from 'react'
import Swiper from './common/Swiper'
import Image from 'next/image'
import { allBlogQuery } from '../lib/queries'
import { sanityClient } from '../lib/sanity'
import { urlFor } from '../lib/sanityImage'
import { useTranslations } from 'next-intl'
interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  description: string
  mainImage: any
  createdAt: string
  readTime: string
  writer: {
    name: string
    image: any
    position: string
  }
}

export default function HomeBlogSwiper() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const t = useTranslations()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await sanityClient.fetch<BlogPost[]>(allBlogQuery)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <div>{t('loading')}</div>

  const Slides = posts.map((post) => (
    <div
      key={post._id}
      className="w-full flex flex-col h-full transition-all duration-300 hover:shadow-xl bg-white p-4 rounded-[10px] border border-neutral3 cursor-pointer"
    >
      <div className="inline-flex items-center justify-center relative overflow-hidden h-auto w-full">
        <Image
          src={urlFor(post?.mainImage).width(274).url()}
          alt={post.title}
          width={274}
          height={224}
          className="w-full rounded-xl h-[224px] object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <span className='text-sm text-gray5'>{post?.category}</span>
        <h3 className='text-xl font-semibold text-black'>{post?.title}</h3>
        <p className='text-sm text-gray3 mb-6'>{post?.description}</p>
      </div>
      <div className="w-full flex items-center gap-4 mt-auto">
        <div className="inline-flex items-center justify-center relative">
          <Image 
            src={urlFor(post.writer?.image).width(48).url()} 
            width={48} 
            height={48} 
            className="w-12 h-12 rounded-full" 
            alt={post.writer?.name} 
          />
        </div>
        <div>
          <h4 className="text-sm text-neutral2 leading-tight font-semibold mb-1">
            {post.writer?.name}
          </h4>
          <p className="text-sm text-gray5 leading-tight">
            {new Date(post.createdAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })} · {post.readTime}
          </p>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <Swiper 
        swiperClass="success-swiper !pb-8 !flex"
        slidesPerView={3}
        spaceBetween={20}
        slides={Slides}
        hasScrollbar={true}
        slideClass='!h-auto'
        slidesDesktop={3}
      />
    </div>
  )
  }