'use client'
import {  Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import SearchArtistInput from './SearchArtistInput'
import ViewerOption from './ViewerOption'
import CommentSearchInput from './CommentSearchInput'
import CommentsSelectOption from './CommentsSelectOption'
import UserCommentOption from './UserCommentOption'

export default function CommentsSidebar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="flex justify-between items-center px-4 py-6 border-b border-[#DEDEDE]">
      <button onClick={() => setIsOpen(true)} className='bg-black px-6 py-2 text-white'>Comments</button>
    </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-[#000000cc]">
          <DialogPanel as='aside' className="max-w-[400px] w-full mb-auto overflow-y-auto h-screen ml-auto border bg-white">
            <div className="w-full flex flex-col h-full">
                <div className="w-full">
                    <h2 className='text-lg px-6 text-black mt-10 pb-3 border-b border-[#97979733] font-medium'>Comments</h2>
                    
                    <div className="my-5 px-6 flex items-center gap-3">
                    <CommentSearchInput/>
                        <CommentsSelectOption/>
                      </div>
                    <hr className='w-full h-[1px] bg-[#DEDEDE] my-5' />

                    <div className="w-full">
                      <ul>
                        <li className='flex items-start justify-center relative flex-col border-b border-[#97979733] px-6 pb-5'>
                          <div className="flex items-center gap-3">
                            <img src="/images/young-woman.png" className='min-w-10 h-10 rounded-full bg-cover' alt=""/>  
                            <div className="">
                          <h3 className='text-lg font-semibold text-black'>Aubrey McMillan</h3>
                          <p className='text-[#00000080] text-sm'>1 hour ago</p>
                          </div>
                          </div>
                         
                          <p className='text-sm text-black mt-2'>Looking forward to the next phase!</p>
                          <div className="absolute right-4  top-0">
                          <UserCommentOption/>
                          </div>
                        </li>
                        <li className='flex items-start justify-center relative flex-col border-b border-[#97979733] px-6 pb-5'>
                          <div className="flex items-center gap-3">
                            <img src="/images/young-woman.png" className='min-w-10 h-10 rounded-full bg-cover' alt=""/>  
                            <div className="">
                          <h3 className='text-lg font-semibold text-black'>Leroy Strickland</h3>
                          <p className='text-[#00000080] text-sm'>30 mins ago</p>
                          </div>
                          </div>
                         
                          <p className='text-sm text-black mt-2'>Looking forward to the next phase!</p>
                          <button className='text-[#1E90FF] text-base mt-1'>reply</button>
                          <div className="absolute right-4  top-0">
                          <UserCommentOption/>
                          </div>
                        </li>

                        <li className='flex items-start justify-center relative flex-col border-b border-[#97979733] px-6 pb-5'>
                         <div className="">
                          <div className="flex items-center gap-1">
                            <img src="/images/young-woman.png" className='min-w-10 h-10 rounded-full bg-cover' alt=""/>  
                            <img src="/images/young-woman.png" className='min-w-10 h-10 rounded-full bg-cover' alt=""/>  
                            <div className="ml-2">
                          <h3 className='text-lg font-semibold text-black'>Cassandra Vickers</h3>
                          <p className='text-[#00000080] text-sm'>10 mins ago</p>
                          </div>
                          </div>
                          <p className='text-sm text-black mt-2'>Looking forward to the next phase!</p>
                          <button className='text-[#1E90FF] text-base mt-1'>reply</button>
                          </div>
                          <div className="mt-1">
                            <hr className='h-[30px] w-[1px] border-r border-[#CBCBCB] ml-4 -mb-2' />
                          <div className="flex items-center gap-3">
                            <img src="/images/young-woman.png" className='min-w-10 h-10 rounded-full bg-cover' alt=""/>  
                            <div className="">
                          <h3 className='text-lg font-semibold text-black'>Cassandra Vickers</h3>
                          <p className='text-[#00000080] text-sm'>8 mins ago</p>
                          </div>
                          </div>
                          <p className='text-sm text-black mt-2'>Very lovely looking forward to that!</p>
                          </div>
                          <div className="absolute right-4  top-0">
                          <UserCommentOption/>
                          </div>
                        </li>
                      </ul>
                    </div>
                  
                </div>
        
            <div className="flex items-center justify-center gap-4 mt-auto px-6 pb-6 pt-24">
              <form className='w-full'>
                <div className="relative">
              <textarea name='message' id="message" className='h-[118px] p-2 text-sm w-full border border-[#C8C8C8] rounded-lg'/>
              <button type='submit' className='bg-black absolute text-sm bottom-3 right-2 px-6 py-1 text-white rounded-lg'>
              Send
              </button>
              </div>
              </form>
            </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}