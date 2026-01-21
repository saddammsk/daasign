"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { EventCard } from "./EventCard";

export const EventsTabs = () => (
     <TabGroup>
          <TabList className="flex items-center gap-[60px] border-b-[3px] border-gray-1100">
               {["Upcoming Events", "My Events"].map((tab) => (
                    <Tab
                         key={tab}
                         className="text-lg font-semibold font-Rajdhani data-selected:text-gray-1200 cursor-pointer -mb-[3px] data-selected:border-yellow-1000 border-b-[3px] border-transparent capitalize text-gray-1000 leading-3 pb-5"
                    >
                         {tab}
                    </Tab>
               ))}
          </TabList>

          <TabPanels>
               <TabPanel>
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-10 gap-5">
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />

                         <EventCard
                              title="World Futsal  Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg2.png"
                              featured
                              buttonVariant="yellow"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                         <EventCard
                              title="World Futsal Championships 2025"
                              location="Virginia Beach, VA"
                              date="Dec 17–22, 2025"
                              category="Boys U14 / Girls U16"
                              background="/images/card-bg1.png"
                         />
                    </div>
               </TabPanel>

               <TabPanel>Content 2</TabPanel>
          </TabPanels>
     </TabGroup>
);
