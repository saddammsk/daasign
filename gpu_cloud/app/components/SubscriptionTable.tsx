'use client'

type Row = {
     id: number;
     date: string;
     app: { name: string; };
     gpu: string;
     size: string;
     month: string;
     cardnumber: string;
     status: { text: string; img: string };
};



function SubscriptionTable() {
     const data: Row[] = [
          {
               id: 1,
               app: { name: "Aug 1, 2025" },
               date: "Pro",
               size: "Visa",
               gpu: "$29.00",
               cardnumber: "•••• 4421",
               month: "Monthly",
               status: { text: "Paid", img: "images/Check-red.svg" },
          },
          {
               id: 2,
               app: { name: "Jul 1, 2025" },
               date: "Pro",
               size: "Visa",
               gpu: "$29.00",
               cardnumber: "•••• 4421",
               month: "Monthly",
               status: { text: "Paid", img: "images/Check-red.svg" },
          },
          {
               id: 3,
               app: { name: "Jun 1, 2025" },
               date: "Pro",
               size: "Visa",
               gpu: "$29.00",
               cardnumber: "•••• 4421",
               month: "Monthly",
               status: { text: "Failed", img: "images/close-icon-red.svg" },
          },
          {
               id: 4,
               app: { name: "May 1, 2025" },
               date: "Pro",
               size: "Visa",
               gpu: "$29.00",
               cardnumber: "•••• 4421",
               month: "Monthly",
               status: { text: "Paid", img: "images/Check-red.svg" },
          },
          {
               id: 5,
               app: { name: "Apr 1, 2025" },
               date: "Pro",
               size: "Visa",
               gpu: "$29.00",
               cardnumber: "•••• 4421",
               month: "Monthly",
               status: { text: "Paid", img: "images/Check-red.svg" },
          },
     ];
     return (
          <div>
               <div className="w-full my-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="lg:w-full w-[991px] border-collapse  overflow-hidden">
                         <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1500 text-left text-gray-1200 text-sm font-medium">
                              <tr>
                                   <th className="px-2 pl-6 py-3 font-medium dark:border-white/[10%] border-b border-gray-1100">
                                        File Name
                                   </th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Version</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Size</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Date Uploaded</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Status</th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.map((item) => (
                                   <tr key={item.id} className="">
                                        <td className="py-[14px]  pl-6 px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-2.5">
                                                  {item.app.name}
                                             </div>
                                        </td>
                                        <td className="py-[14px] px-2 dark:border-white/[10%] font-medium border-b border-gray-200">
                                             {item.date}
                                             <span className="text-gray-1200 block font-normal dark:text-gray-1500">{item.month}</span>
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b font-medium border-gray-200">{item.size}
                                             <span className="text-gray-1200 block font-normal dark:text-gray-1500">{item.cardnumber}</span>

                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             {item.gpu}
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
                                                  <img src={item.status.img} alt="" className="w-3 h-3" />
                                                  <span
                                                       className={
                                                            item.status.text === "Failed"
                                                                 ? "text-red-600 font-medium"
                                                                 : "text-gray-700 dark:text-gray-1400"
                                                       }
                                                  >
                                                       {item.status.text}
                                                  </span>
                                             </div>
                                        </td>


                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
               <div className="flex items-center justify-end">
                    <div className="flex items-center justify-end gap-8 md:w-auto w-full">
                         <div className="lg:flex hidden items-center gap-2">
                              <h6 className="text-sm dark:text-gray-1400 font-normal leading-5 text-gray-1200">Rows per page</h6>
                              <select name="" id="" className="inline-flex dark:text-gray-1400 dark:bg-white/[0.05] dark:border-white/[15%] min-w-20 bg-position-[right_20px_center] bg-[url(/../images/drop-arrow.svg)] bg-no-repeat appearance-none cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm font-medium leading-4 text-black-1000 border border-gray-1100 shadow-3xl">
                                   <option value="10"> 10</option>
                                   <option value="8"> 8</option>
                              </select>
                         </div>
                         <div className="flex items-center md:justify-start justify-between md:w-auto w-full gap-8">
                              <h6 className="text-sm  dark:text-gray-1400 font-normal leading-5 text-gray-1200">Page 1 of 7</h6>
                              <ul className="flex items-center gap-2">
                                   <li>
                                        <button type="button" className="w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer opacity-50 rounded-lg md:flex hidden items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                             <img src="images/double-arrow-left.svg" className="dark:invert-[1]" alt="" />
                                        </button>
                                   </li>
                                   <li>
                                        <button type="button" className="w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer opacity-50 rounded-lg flex items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                             <img src="images/arrow-left.svg" className="dark:invert-[1]" alt="" />
                                        </button>
                                   </li>
                                   <li>
                                        <button type="button" className="w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer rounded-lg flex items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                             <img src="images/arrow-right.svg" className="dark:invert-[1]" alt="" />
                                        </button>
                                   </li>
                                   <li>
                                        <button type="button" className="w-9 h-9 dark:bg-white/[0.05] dark:border-white/[15%] cursor-pointer rounded-lg md:flex hidden items-center justify-center bg-white border border-gray-1100 shadow-3xl">
                                             <img src="images/double-arrow-right.svg" className="dark:invert-[1]" alt="" />
                                        </button>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default SubscriptionTable
