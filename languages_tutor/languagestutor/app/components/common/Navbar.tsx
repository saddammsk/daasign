'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import CoursesDropdown from '../CoursesDropdown'
import clsx from 'clsx'
import { useGlobalContext } from '@/app/context/GlobalContext'
import LanguageSwitcher from '../LanguageSwitcher'
import Translate from './Translate'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const {setIsOpenForm} = useGlobalContext()


return (
<header className='bg-black1 text-white py-4 sticky top-0 z-50'>
    <div className="w-full max-w-[1340px] px-5 mx-auto">
        <nav className='w-full flex items-center justify-between'>
        <div className="flex items-center gap-4">
            <Link href="/" className='flex items-center justify-center relative z-50'>
            <Image width={185} height={36} className="w-[185px] object-contain h-9" src={"/lang-logo.svg"} alt="Logo" />
            </Link> 

            <ul className={clsx('lg:flex items-center transition-all lg:overflow-hidden overflow-auto duration-300 lg:static absolute lg:left-auto z-40 lg:bg-transparent bg-black1 lg:w-auto w-full lg:top-auto top-0 lg:px-0 px-6 lg:space-y-0 space-y-4 lg:py-0 py-20 lg:h-auto h-screen', toggleMenu ? 'left-0': '-left-full')}>
            <li>
                <CoursesDropdown/>
            </li>
            <li>
            <Link onClick={()=> setToggleMenu(false)} href="/books" className='text-gray5 text-sm font-medium transition-all duration-200 hover:text-primary py-2 px-2'>
            <Translate tKey="books" Tag="span" />
            </Link>
            </li>
            <li>
            <Link onClick={()=> setToggleMenu(false)} href="/about" className='text-gray5 text-sm font-medium transition-all duration-200 hover:text-primary py-2 px-2'>
            <Translate tKey="about" Tag="span" />
                </Link>
            </li>
            <li>
                <Link onClick={()=> setToggleMenu(false)} href="/blog" className='text-gray5 text-sm font-medium transition-all duration-200 hover:text-primary py-2 px-2'>
                <Translate tKey="blog" Tag="span" />
                </Link>
            </li>
            <li>
                <Link onClick={()=> setToggleMenu(false)} href="/contact" className='text-gray5 text-sm font-medium transition-all duration-200 hover:text-primary py-2 px-2'>
                <Translate tKey="contact" Tag="span" />
                </Link>
            </li>
            </ul>
            </div>

            <div className="flex items-center gap-4 relative z-50">
            <button onClick={()=>setIsOpenForm(true)}  className='text-sm hidden lg:flex text-primary1 bg-primary border border-[#fff3] font-medium transition-all duration-200 py-2.5 px-5 rounded-lg'>
            <span><Translate tKey="demo_class" Tag="span" /></span>
            </button>
            <LanguageSwitcher/>
            <button onClick={()=> setToggleMenu(pre=> !pre)} className='text-sm lg:hidden flex flex-col gap-1.5'>
            {!toggleMenu ?
            <div className="flex flex-col gap-1.5">
            <span className="bg-gray-300 h-0.5 block w-7"></span>
            <span className="bg-gray-300 h-0.5 block w-7"></span>
            <span className="bg-gray-300 h-0.5 block w-7"></span>
            </div>
            :
            <div className="flex flex-col gap-1.5">
            <span className="bg-gray-300 h-0.5 block w-7 rotate-45 -translate-y-0"></span>
            <span className="bg-gray-300 h-0.5 block w-7 -rotate-45 -translate-y-2"></span>
            </div>
                }
        
            </button>
            </div>

        </nav>
    </div>
</header>
)
}
