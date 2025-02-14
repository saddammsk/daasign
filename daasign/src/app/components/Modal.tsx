'use client'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function MyModal() {
     let [isOpen, setIsOpen] = useState(false)

     function open() {
          setIsOpen(true)
     }

     function close() {
          setIsOpen(false)
     }

     return (
          <>
               <Button
                    onClick={open}
                    className="bg-black-1200 z-20 w-[54px] h-[54px] p-3 border border-gray-1100 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
               >
                    <img src="images/play.svg" alt=""></img>
               </Button>

               <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-center justify-center p-4">
                              <DialogPanel
                                   transition
                                   className="w-full max-w-xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                              >
                                   <div className='text-end mb-5'>
                                        <Button
                                             className="inline-flex ml-auto items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                             onClick={close}
                                        >
                                             Close
                                        </Button></div>
                                   <video width="100%" className="rounded-lg  object-cover object-center" autoPlay controls>
                                        <source src="/videos/video.mp4" type="video/mp4" />
                                   </video>
                                   <div className="mt-4">

                                   </div>
                              </DialogPanel>
                         </div>
                    </div>
               </Dialog>
          </>
     )
}