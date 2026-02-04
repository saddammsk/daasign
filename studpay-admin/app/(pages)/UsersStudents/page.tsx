import Link from "next/link"


const UsersStudentsPage = () => {
      return (
            <div>
                  <div>
                        <h4 className="text-black12 font-bold text-[30px] leading-9 mb-2">User Management</h4>
                        <p className="text-gray-1100 font-normal text-base leading-6">Manage student accounts and their verification status</p>
                  </div>
                  <div className="bg-white p-6.25 rounded-xl border border-solid border-gray-1600 shadow-4xl">
                        <form className="flex items-center">
                              <div className="relative">
                                    <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full' placeholder='Search students, transactions...' />
                                    <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                          <img src="/images/search-icon.svg" alt="" />
                                    </div>
                              </div>
                              <div className="flex items-center gap-4">
                                    <div className="relative w-48">
                                          <select className='appearance-none text-sm font-normal leading-5 font-neulis-sans text-black13 pr-11 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0'>
                                                <option>All Countries</option>
                                          </select>
                                          <div className='w-4 h-4 opacity-50 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3'>
                                                <img src="/images/down-arrow.svg" alt="" />
                                          </div>
                                    </div>
                                    <div className="relative w-48">
                                          <select className='appearance-none text-sm font-normal leading-5 font-neulis-sans text-black13 pr-11 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0'>
                                                <option>All Status</option>
                                          </select>
                                          <div className='w-4 h-4 opacity-50 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3'>
                                                <img src="/images/down-arrow.svg" alt="" />
                                          </div>
                                    </div>
                                    <Link href={"#"} className="inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10"><img src="../images/filter.svg" alt="" /> Clear</Link>
                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default UsersStudentsPage