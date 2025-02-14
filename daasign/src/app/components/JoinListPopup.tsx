'use client'
import { Button, Dialog, DialogPanel } from '@headlessui/react'

interface Props{
    isOpen : boolean
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}


export const JoinListPopup = ({isOpen, setIsOpen}: Props) => {

     function close() {
          setIsOpen(false)
     }
    
  return (
    <div>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-center justify-center p-4">
                              <DialogPanel transition className="w-full relative max-w-xl rounded-xl bg-white p-8 pr-16 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                               
                                        <Button
                                             className="inline-flex absolute right-8 top-8 ml-auto items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                             onClick={close}
                                        >
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    d="M20.8219 3.15046L20.8219 3.15045C20.3866 2.71515 19.6808 2.71515 19.2455 3.15045L12.001 10.395L4.75644 3.15045C4.32114 2.71515 3.61536 2.71515 3.18006 3.15045L3.15168 3.17884C2.71637 3.61414 2.71637 4.31992 3.15168 4.75522L10.3962 11.9998L3.15168 19.2443C2.71637 19.6796 2.71637 20.3854 3.15167 20.8207L3.15168 20.8207L3.18006 20.8491C3.18006 20.8491 3.18006 20.8491 3.18006 20.8491C3.61537 21.2844 4.32114 21.2844 4.75644 20.8491L12.001 13.6045L19.2455 20.8491C19.6808 21.2844 20.3866 21.2844 20.8219 20.8491L20.8503 20.8207C21.2856 20.3854 21.2856 19.6796 20.8503 19.2443L13.6057 11.9998L20.8503 4.75522C21.2856 4.31992 21.2856 3.61415 20.8503 3.17884C20.8503 3.17884 20.8503 3.17884 20.8503 3.17884L20.8219 3.15046Z"
                                                    fill="black"
                                                    stroke="black"
                                                    strokeWidth="0.351562"
                                                />
                                                </svg>

                                        </Button>

                                    <div className="w-full mb-6">
                                        <h3 className='text-[42px] text-black-1200 font-semibold font-gilroy'>Join the MVP waitlist</h3>
                                        <p className='text-lg text-black-1200'>We’ll notify you when a 5-day MVP week or sold-out design slots become available due to cancellations.</p>
                                    </div>
                                    <form>
                                        <div className="flex flex-col gap-4">
                                            <div className="w-full">
                                                <label htmlFor="name" className='text-lg text-black-1200 mb-1 font-semibold'>
                                                First name*
                                                </label>
                                                 <input id='name'
                                                  className="w-full px-6 py-3 text-sm/6 font-semibold text-black-1200 placeholder-black-1200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                                                  type="text"
                                                  placeholder="Enter your name"
                                                 />
                                            </div>
                                            <div className="w-full">
                                            <label htmlFor="email" className='text-lg text-black-1200 mb-1 font-semibold'>
                                                     Email*
                                                </label>
                                             <input id='email'
                                                  className="w-full px-6 py-3 text-sm/6 font-semibold text-black-1200 placeholder-black-1200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                                                  type="email"
                                                  placeholder="Your email address"
                                                 />
                                                 </div>
                                             <button
                                                  className="flex w-full mt-4 bg-black-1200 text-center items-center justify-center gap-2 rounded-md py-2 px-3 text-lg font-semibold text-white  focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                                 >
                                                  Notify me
                                             </button>
                                        </div>
                                    </form>
                               
                              </DialogPanel>
                         </div>
                    </div>
               </Dialog>
    </div>
  )
}
