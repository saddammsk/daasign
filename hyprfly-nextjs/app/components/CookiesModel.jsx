import { Dialog, DialogPanel } from '@headlessui/react'
import SwitchBox from './SwitchBox'


export default function CookiesModel({isOpen, setIsOpen}) {


  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-[#0000007d]">
          <DialogPanel className="max-w-[665px] w-full p-6 rounded-2xl  bg-white">
            <h2 className='text-2xl font-medium mb-5 text-black'>Necessary Cookies</h2>
            <div className="flex gap-3 mb-10">
                <div className="mt-1">
                <SwitchBox id={"google-checkbox"} checked={true}/>
                </div>
                <div className="">
                <h4 className='font-medium text-black text-lg'>Google Analytics 4</h4>
                <p className='text-base text-black '>- Basic analytics for internal traffic reporting only.</p>
                <a href="" className='text-blue-600 font-medium '>Privacy Policy</a>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="mt-1">
                <SwitchBox id={"hubspot-checkbox"} checked={true}/>
                </div>
                <div className="">
                <h4 className='font-medium text-black text-lg'>Hubspot</h4>
                <p className='text-base text-black '>- Basic analytics for internal traffic reporting only.</p>
                <a href="" className='text-blue-600 font-medium '>Privacy Policy</a>
                </div>
            </div>

            <button onClick={()=>setIsOpen(false)} className='bg-blue-700 mt-8 w-fit font-medium text-white px-6 py-1.5 text-base transition-all duration-200 hover:bg-blue-700  rounded-full '>
              Save
            </button>
            
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}