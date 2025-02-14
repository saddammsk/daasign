"use client";

import { useState, useEffect } from "react";

const SpotsLeft = () => {
  const [spotsLeft, setSpotsLeft] = useState(2);
  const [currentMonth, setCurrentMonth] = useState<string>("");

  useEffect(() => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date();
    setCurrentMonth(monthNames[today.getMonth()]);

    const updateSpots = () => {
      setSpotsLeft((prev) => {
        const change = Math.floor(Math.random() * 3) + 1; 
        return Math.max(0, prev - change);
      });
    };

    const intervalTime = 1.2 * 7 * 24 * 60 * 60 * 1000;

    const interval = setInterval(updateSpots, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center w-fit mx-auto gap-2 mt-[14px] px-3">
    <div className="w-[14px] h-[14px] bg-green-1000/[24%] rounded-full p-[3px] block">
      <div className="w-full h-full drop-shadow-3xl rounded-full bg-green-1000"></div>
    </div>
    <h6 className="text-base font-semibold md:leading-7 leading-normal text-gray-1000">
    {spotsLeft} spots left in {currentMonth}
    </h6>
  </div>
 
  );
};

export default SpotsLeft;
