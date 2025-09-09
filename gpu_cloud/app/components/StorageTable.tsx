'use client'
import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import TableDropdwon from "../ui/TableDropdwon";

type Row = {
     id: number;
     app: { name: string; img: string };
     gpu: string;
     cost: string;
};

function StorageTable() {
     // ✅ checkedItems maps number → boolean
     const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

     const data: Row[] = [
          {
               id: 1,
               app: { name: "models", img: "images/Folder.svg" },
               gpu: "",
               cost: "",
          },
          {
               id: 2,
               app: { name: "outputs", img: "images/Folder.svg" },
               gpu: "",
               cost: "",
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
          <div>
               <div className="w-full my-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="w-[356px] border-collapse">
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
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Name</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Size</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Date</th>
                                   <th className=" bg-gray-1000 dark:bg-black-1200  sticky right-0 top-0 dark:border-white/[10%] border-b border-gray-1100 font-medium">
                                        <div className="px-2 py-3  border-l h-11 dark:border-white/[10%] border-gray-1100"></div>
                                   </th>
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
                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-1">
                                                  <img src={item.app.img} alt="" className="" />
                                                  {item.app.name}
                                             </div>
                                        </td>
                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             {item.gpu}
                                        </td>
                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">{item.cost}</td>
                                        <td className="  bg-white sticky right-0 top-0 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="border-l py-[14px] dark:bg-black-1000 border-gray-200 dark:border-white/[10%] px-2">
                                                  <TableDropdwon></TableDropdwon>
                                             </div>
                                        </td>

                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     )
}

export default StorageTable
