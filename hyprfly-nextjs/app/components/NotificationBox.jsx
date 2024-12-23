'use client'
import {useState, useEffect} from 'react'

const NotificationBox = () => {
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    message: `Dashboard Notifications will appear in this box.`,
    timeAgo: `${index + 1} day${index + 1 > 1 ? 's' : ''} ago`,
  }));

  const [notifications, setNotifications] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNotifications(dummyData.slice(0, visibleCount));
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setNotifications(dummyData.slice(0, visibleCount));
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading, visibleCount]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 1 && visibleCount < dummyData.length && !loading) {
      setLoading(true);
      setVisibleCount((prevCount) => prevCount + 6);
    }
  };


  return (
    <div className="relative">
        <div className="bg-white shadow-lg mt-5 border relative border-[#DADADA] w-full md:w-[419px] rounded-lg">
            <span className="absolute right-4 -top-3.5 z-10">
            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.04044 13L14.5 0.873884L22.9596 13H6.04044Z" fill="white" stroke="#DADADA"/>
            <path d="M2.9011 19.5L14.5 2.87388L26.0989 19.5H2.9011Z" fill="white" stroke="white"/>
            </svg>
            </span>
            <div className="border-b border-[#DADADA] text-center pt-3 pb-2.5">
                <span className='text-center text-base text-black font-extrabold font-avenir_black'>
                Your Notifications
                </span>
              </div>
              <ul
                  className="hide-scroll-y overflow-y-auto max-h-[447px] mt-2"
                  onScroll={handleScroll}
                >
                  {notifications.map((notification) => (
                    <li
                      key={notification.id}
                      className="pl-7 pr-4 py-4 mx-2 my-3 bg-[#F0FAFD] odd:bg-[#F1F1F142]"
                    >
                      <p className="text-sm text-black mb-1">{notification.message}</p>
                      <span className="text-xs font-light text-gray-600">{notification.timeAgo}</span>
                    </li>
                  ))}
                </ul>
              
                    <div className="flex items-center justify-center h-9 pb-3">
                    {loading && (
                     <img src="/images/loader.gif" alt="Load more icon" className='w-28' />
                    )}
                  </div>
             
        </div>
    </div>
  )
}

export default NotificationBox