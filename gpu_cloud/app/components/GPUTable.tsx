'use client'
import { useState } from "react";
import { Checkbox } from "@headlessui/react";

type Row = {
     id: number;
     date: string;
     app: { name: string; img: string };
     gpu: string;
     duration: string;
     cost: string;
     status: { text: string; img: string };
};

function GPUTable() {
     // ✅ checkedItems maps number → boolean
     const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

     const data: Row[] = [
          {
               id: 1,
               date: "Aug 6, 2025",
               app: { name: "diffusion-pipe", img: "images/avatar-1.png" },
               gpu: "RTX 4090",
               duration: "30 min",
               cost: "$0.40",
               status: { text: "Running", img: "images/Loader.svg" },
          },
          {
               id: 2,
               date: "Aug 7, 2025",
               app: { name: "ComfyUI", img: "images/avatar-2.png" },
               gpu: "A100",
               duration: "20 min",
               cost: "$0.28",
               status: { text: "Completed", img: "images/CircleCheck.svg" },
          },
          {
               id: 3,
               date: "Aug 8, 2025",
               app: { name: "Auto111 WebUI", img: "images/avatar-3.png" },
               gpu: "V100",
               duration: "45 min",
               cost: "$0.55",
               status: { text: "Queued", img: "images/LoaderCircle.svg" },
          },
          {
               id: 4,
               date: "Aug 9, 2025",
               app: { name: "Auto111 WebUI", img: "images/avatar-4.png" },
               gpu: "GTX 1080",
               duration: "45 min",
               cost: "$0.55",
               status: { text: "Completed", img: "images/CircleCheck.svg" },
          },
          {
               id: 5,
               date: "Aug 6, 2025",
               app: { name: "diffusion-pipe", img: "images/avatar-1.png" },
               gpu: "RTX 4090",
               duration: "30 min",
               cost: "$0.40",
               status: { text: "Completed", img: "images/CircleCheck.svg" },
          },
          {
               id: 6,
               date: "Aug 7, 2025",
               app: { name: "ComfyUI", img: "images/avatar-2.png" },
               gpu: "A100",
               duration: "20 min",
               cost: "$0.28",
               status: { text: "Completed", img: "images/CircleCheck.svg" },
          },
          {
               id: 7,
               date: "Aug 8, 2025",
               app: { name: "Auto111 WebUI", img: "images/avatar-3.png" },
               gpu: "V100",
               duration: "45 min",
               cost: "$0.55",
               status: { text: "Paused", img: "images/Pause.svg" },
          },
          {
               id: 8,
               date: "Aug 9, 2025",
               app: { name: "Auto111 WebUI", img: "images/avatar-4.png" },
               gpu: "GTX 1080",
               duration: "45 min",
               cost: "$0.55",
               status: { text: "Cancelled", img: "images/X.svg" },
          },
          {
               id: 9,
               date: "Aug 9, 2025",
               app: { name: "Auto111 WebUI", img: "images/avatar-4.png" },
               gpu: "GTX 1080",
               duration: "45 min",
               cost: "$0.55",
               status: { text: "Failed", img: "images/CircleCheck.svg" },
          },
     ];

     // ✅ id explicitly typed as number
     const handleChange = (id: number) => {
          setCheckedItems((prev) => ({
               ...prev,
               [id]: !prev[id],
          }));
     };

     return (
          <>
               <div className="w-full my-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="lg:w-full w-[991px] border-collapse  overflow-hidden">
                         <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1400 text-left text-black-1000 text-sm font-medium">
                              <tr>
                                   <th className="px-2 pl-6 py-3 dark:border-white/[10%] border-b border-gray-1100">
                                        <Checkbox
                                             checked={Object.values(checkedItems).every(Boolean)}
                                             onChange={() => {
                                                  const allChecked = Object.values(checkedItems).every(Boolean);
                                                  const newState: Record<number, boolean> = {};
                                                  data.forEach((item) => (newState[item.id] = !allChecked));
                                                  setCheckedItems(newState);
                                             }}
                                             className="group size-4 dark:bg-white/[0.05] dark:border-white/[15%] flex items-center justify-center rounded bg-white border-2 
                  data-checked:bg-black-1100 data-checked:border-black-1100 border-gray-1100"
                                        >
                                             <div className="hidden size-4 group-data-checked:flex items-center justify-center">
                                                  <img src="images/tick-icon.svg" className="w-[9px]" alt="" />
                                             </div>
                                        </Checkbox>
                                   </th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Date</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">App</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">GPU</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Duration</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Cost</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Status</th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.map((item) => (
                                   <tr key={item.id} className="">

                                        <td className="py-[14px] pl-6 px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <Checkbox
                                                  checked={!!checkedItems[item.id]}
                                                  onChange={() => handleChange(item.id)}
                                                  className="group size-4 flex items-center dark:bg-white/[0.05] dark:border-white/[15%] justify-center rounded bg-white border-2 
                    data-checked:bg-black-1100 data-checked:border-black-1100 border-gray-1100"
                                             >
                                                  <div className="hidden size-4 group-data-checked:flex items-center justify-center">
                                                       <img src="images/tick-icon.svg" className="w-[9px]" alt="" />
                                                  </div>
                                             </Checkbox>
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">{item.date}</td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-2.5">
                                                  <img src={item.app.img} alt="" className="w-6 h-6 rounded-full" />
                                                  {item.app.name}
                                             </div>
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="text-xs font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg border border-gray-1100 w-fit">    {item.gpu}</div>
                                        </td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">{item.duration}</td>


                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">{item.cost}</td>


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
               <div className="flex items-center justify-between">
                    <h6 className="text-sm dark:text-gray-1500 md:block hidden font-normal leading-5 text-gray-1200">0 of 68 row(s) selected.</h6>
                    <div className="flex items-center gap-8 md:w-auto w-full">
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
     );
}

export default GPUTable;
