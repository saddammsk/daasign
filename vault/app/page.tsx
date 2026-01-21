import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link';
import { EventsTabs } from './components/organisms/EventsTabs';


export default function Home() {
  return (
    <div className="bg-black-1000 py-20">
      <div className='max-w-[1600px] mx-auto lg:px-10 px-5'>
        <EventsTabs></EventsTabs>
      </div>
    </div>
  );
}
