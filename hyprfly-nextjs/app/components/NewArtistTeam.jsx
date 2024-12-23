'use client'
import SearchArtistInput from './SearchArtistInput'
import ViewerOption from './ViewerOption'

export default function NewArtistTeam() {


  return (
    <>
      <div className="relative z-50 flex lg:m-8">
        <div className="mx-auto w-full max-w-[400px]">
          <div className=" w-full mb-auto overflow-y-auto h-screen ml-auto border bg-white">
            <div className="w-full flex flex-col h-full px-6">
                <div className="w-full">
                    <h2 className='text-2xl text-center text-black mt-16  font-light '>New Artist Team</h2>
                    <div className="w-[124px] cursor-pointer h-[124px] rounded-[50px] border border-[#D1C0F2] text-[#D1C0F2] flex items-center justify-center text-[44px] mx-auto my-7">
                    <span className='-mt-2'>+</span>
                    </div>
                    <div className="mt-11 flex items-center flex-col gap-4">
                    <input name='artist-name' id='artist-name' type="text" placeholder='Artist Name' className='border text-lg text-black placeholder:text-black border-[#DBDBDB] w-full rounded-3xl h-12 px-5' />
                    <SearchArtistInput/>
                    </div>
                    <hr className='w-full border-b border-[#DEDEDE] my-8' />

                    <h4 className='text-xs text-black font-medium tracking-widest mb-3'>INVITE TEAM MEMBERS</h4>

                    <div className="border md:px-5 px-3 py-2 border-[#DBDBDB] flex items-center justify-between rounded-3xl w-full ">
                        <p className='md:text-lg text-sm text-black'>Zayn@gmail.com</p>
                        <ViewerOption/>
                    </div>

                    <div className="w-full my-5">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>(You)</p>
                            </div> 
                            <p className='text-base text-[#50A2E5] font-medium'>Owner</p>
                        </div>
                        <div className="max-h-[206px] team-member-overflow overflow-y-auto my-1">
                        <ul className='flex items-center flex-col gap-2.5 mt-2.5'>
                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>
                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>
                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>
                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>

                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>
                            <li className='w-full'>
                            <div className="flex items-center gap-4">
                            <img src="/images/default-user.png" alt="user img" className='w-9 h-9 rounded-full' />
                            <p className='text-lg text-black font-medium'>0 people invited</p>
                            </div>  
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
        
            <div className="flex items-center justify-center gap-4 mb-9 mt-auto pb-6">
              <button className=' outline-none bg-black rounded-lg text-white w-[269px] h-11 border-none ring-0'>Create Team </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}