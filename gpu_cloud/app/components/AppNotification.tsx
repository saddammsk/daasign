import { useEffect, useState } from "react";

const AppNotification = () => {
     const [show, setShow] = useState(true);

     useEffect(() => {
          const timer = setTimeout(() => {
               setShow(false);
          }, 2000);

          return () => clearTimeout(timer);
     }, []);

     if (!show) return null;

     return (
          <>
               <div className="border absolute top-3 left-0 right-0 z-[999] mx-auto max-w-[356px] dark:text-gray-1400 p-4 flex items-center gap-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-lg bg-white">
                    <img src="images/tick-circle.svg" className="dark:invert-[1]" alt="" />
                    <div>
                         <h4 className="text-sm font-semibold mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                              App Successfully Added
                         </h4>
                         <p className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">
                              The app has been added to your Apps list
                         </p>
                    </div>
               </div>
               <div className="border absolute top-3 left-0 right-0 z-[999] mx-auto max-w-[356px] dark:text-gray-1400 p-4 hidden items-center gap-2.5 dark:border-white/[10%] dark:bg-black-1100 border-gray-1100 rounded-lg bg-white">
                    <img src="images/sonner.svg" className="dark:invert-[1]" alt="" />
                    <div>
                         <h4 className="text-sm font-semibold mb-1 leading-6 text-red-1000">
                              Failed to Add App
                         </h4>
                         <p className="text-sm font-normal leading-5 text-red-1000 ">
                              Couldn’t add the app. Please try again later
                         </p>
                    </div>
               </div>
          </>
     );
};

export default AppNotification;
