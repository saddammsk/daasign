'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { allCoursesQuery } from '@/app/lib/queries';
import { sanityClient } from '@/app/lib/sanity';
import { useGlobalContext } from '@/app/context/GlobalContext';
import { useTranslation } from 'react-i18next';

const Asidebar = () => {
    const [toggleFilterBar, settoggleFilterBar] = useState(false);
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const {setFilteredCourses} = useGlobalContext();
    const { i18n } = useTranslation();


  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedLevels(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      const allCourses = await sanityClient.fetch(allCoursesQuery);
      const filtered = allCourses.filter((course: any) => {
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(course.courseCategory[0].title.toLowerCase());
        const matchLevel = selectedLevels.length === 0 || selectedLevels.includes((course.level?.[i18n.language] || course.level?.en || '').toLowerCase());
        return matchCategory && matchLevel;
      });
      
      setFilteredCourses(filtered);
    };
  
    fetchFilteredCourses();
  }, [selectedCategories,selectedLevels]);
  

  return (
    <div>
         <button onClick={()=>settoggleFilterBar(pre=> !pre)} 
          className="w-full border lg:hidden font-medium flex items-center justify-between shadow-md p-3 rounded-md"> 
                    All Courses
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#000"
                        aria-hidden="true"
                        data-slot="icon"
                        className='w-6'
                        >
                        
                        <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                        </svg>

        </button>
        <div className={clsx(!toggleFilterBar && 'hidden' ,"lg:w-[212px] w-full lg:flex flex-col lg:static fixed lg:h-auto h-full lg:px-0 px-4 lg:py-0 py-20 lg:left-auto left-0 lg:bg-transparent bg-neutral1 lg:top-auto top-0 lg:z-auto z-[99]")}>
        <div className="w-full">
   
        <button onClick={()=> settoggleFilterBar(!toggleFilterBar)} className='absolute block lg:hidden bottom-6 left-1/2  -translate-x-1/2 z-50'>
        <svg    
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={48}
            viewBox="0 0 49 48"
            fill="none"
            >
            <rect
                x={1}
                y="0.5"
                width={47}
                height={47}
                rx="23.5"
                fill="url(#paint0_linear_6503_39794)"
            />
            <rect x={1} y="0.5" width={47} height={47} rx="23.5" stroke="#BEBEC6" />
            <path
                d="M18.5 30L30.5 18M18.5 18L30.5 30"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                id="paint0_linear_6503_39794"
                x1="24.5"
                y1={0}
                x2="24.5"
                y2={48}
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#FCFCFD" />
                <stop offset={1} stopColor="#F4F4F5" />
                </linearGradient>
            </defs>
            </svg>

        </button>
        </div>
        <div className="w-full pt-14">
      
        <div className="flex items-center gap-2.5 mb-2">
            <Image src={'/categories-icon.svg'} width={20} height={21} alt='courses logo' />
            <h4 className='text-neutral2 text-lg font-semibold'>Categories</h4>
        </div>
 
        <ul className='w-full pb-6 border-b border-neutral3'>
        <li>
            <label htmlFor="all-categories" className='flex relative items-center gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            defaultChecked
            type="checkbox" 
            name="all-categories" 
            id="all-categories" 
            
            className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'>All Categories</span>
            </label>
        </li>
        <li>
            <label htmlFor="pashto-courses" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="pashto" 
            value="pashto" 
            onChange={handleCategoryChange}
            id="pashto-courses" 
            className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>

            <span className='peer-checked:text-primary1'>
            Pashto</span>
            </label>
        </li>
        <li>
            <label htmlFor="arabic-courses" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="arabic" 
            value="arabic" 
            id="arabic-courses" 
            onChange={handleCategoryChange}
            className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'>
            Arabic</span>
            </label>
        </li>
        <li>
            <label htmlFor="urdu-courses" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="urdu" 
            value="urdu" 
            id="urdu-courses" 
            onChange={handleCategoryChange}
            className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'>
            Urdu</span>
            </label>
        </li>
        <li>
            <label htmlFor="english-courses" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="english" 
            value="english" 
            id="english-courses" 
            onChange={handleCategoryChange}
            className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'>
            English</span>
            </label>
        </li>
        </ul>
        </div>

        <div className="w-full pt-5">
        <div className="flex items-center gap-2.5 mb-2">
            <Image src={'/categories-icon.svg'} width={20} height={21} alt='courses logo' />
            <h4 className='text-neutral2 text-lg font-semibold'>Level</h4>
        </div>
        <ul className='w-full pb-6 border-b border-neutral3'>
            <li>
                <label htmlFor="level-beginner" className='flex relative items-center gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
                <input 
                type="checkbox" 
                name="beginner" 
                value="beginner" 
                onChange={handleLevelChange}
                id="level-beginner" 
                className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
                />
                <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
                <span className='peer-checked:text-primary1'>Beginner</span>
                </label>
            </li>
            <li>
                <label htmlFor="level-intermediate" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
                <input 
                type="checkbox" 
                name="intermediate" 
                value="intermediate" 
                onChange={handleLevelChange}
                id="level-intermediate" 
                className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
                />
                <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>

                <span className='peer-checked:text-primary1'>
                Intermediate</span>
                </label>
            </li>
            <li>
                <label htmlFor="level-advance" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
                <input 
                type="checkbox" 
                name="advance" 
                value="advance" 
                onChange={handleLevelChange}
                id="level-advance" 
                className="appearance-none peer w-5 h-5 bg-neutral1 checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
                />
                <span className='absolute left-2'><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
                <span className='peer-checked:text-primary1'>
                Advance</span>
                </label>
            </li>
            
        </ul>
        </div>

        <div className="w-full lg:flex flex-col items-center hidden justify-center gap-1 border border-neutral3 p-3 rounded-lg mt-8">
            <h4 className='text-lg  text-neutral2 font-semibold text-center'>Suggest a course</h4>
            <p className='text-gray5 text-center text-sm'>What would you like
            to learn next?</p>
            <Link href={'/'} className='text-sm text-primary1 text-center font-medium hover:underline -mt-1' >
            Submit your suggestion.
            </Link>
        </div>

        </div>
    </div>
  )
}

export default Asidebar