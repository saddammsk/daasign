import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import AppsTable from './AppsTable'
function FileTab() {
     return (
          <div>
               <TabGroup>
                    <div className='flex  lg:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center justify-between w-full mb-4'>
                         <div className='overflow-auto md:mr-0 -mr-4'>
                              <TabList className="bg-gray-1000 dark:bg-black-1200 rounded-[10px] p-1 flex items-center">
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Apps</Tab>
                                   <Tab className="text-sm font-medium leading-5 dark:text-gray-1400 text-black-1000 lg:min-w-[73px] min-w-[78px] h-7 flex  items-center justify-center rounded-lg bg-transparent dark:data-selected:bg-white/[0.05] dark:data-selected:border-white/[0.15] cursor-pointer data-selected:bg-white data-selected:shadow-4xl">Template</Tab>
                              </TabList>
                         </div>
                    </div>
                    <TabPanels>
                         <TabPanel>
                              <AppsTable></AppsTable>

                         </TabPanel>

                         <TabPanel>Content 2</TabPanel>
                         <TabPanel>Content 3</TabPanel>
                    </TabPanels>
               </TabGroup>
          </div>
     )
}

export default FileTab
