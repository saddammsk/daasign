'use client'

import TableDropdwon from "../ui/TableDropdwon";


type Row = {
     id: number;
     date: string;
     app: { name: string; img: string };
     gpu: string;
     size: string;
};


function AppsTable() {
     const data: Row[] = [
          {
               id: 1,
               app: { name: "diffusion-pipe", img: "images/avatar-1.png" },
               date: "v1.5.2",
               size: "850 MB",
               gpu: "Aug 10, 2025"
          },
          {
               id: 2,
               app: { name: "ComfyUI", img: "images/avatar-2.png" },
               date: "v1.5.2",
               size: "850 MB",
               gpu: "Aug 10, 2025"
          },
          {
               id: 3,
               app: { name: "Auto111 WebUI", img: "images/avatar-3.png" },
               date: "v1.5.2",
               size: "850 MB",
               gpu: "Aug 10, 2025"
          },
          {
               id: 4,
               app: { name: "Auto111 WebUI", img: "images/avatar-4.png" },
               date: "v1.5.2",
               size: "850 MB",
               gpu: "Aug 10, 2025"
          },
          {
               id: 5,
               app: { name: "diffusion-pipe", img: "images/avatar-1.png" },
               date: "v1.5.2",
               size: "850 MB",
               gpu: "Aug 10, 2025"
          },
     ];

     return (
          <>
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
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium"></th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.map((item) => (
                                   <tr key={item.id} className="">
                                        <td className="py-[14px]  pl-6 px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-2.5">
                                                  <img src={item.app.img} alt="" className="w-6 h-6 rounded-full" />
                                                  {item.app.name}
                                             </div>
                                        </td>
                                        <td className="py-[14px] px-2 dark:border-white/[10%] font-medium border-b border-gray-200">
                                             {item.date}
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b font-medium border-gray-200">{item.size}</td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             {item.gpu}
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <TableDropdwon></TableDropdwon>
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
          </>
     )
}

export default AppsTable
