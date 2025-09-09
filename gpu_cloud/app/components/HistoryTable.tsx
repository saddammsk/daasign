'use client'

type Row = {
     id: number;
     date: string;
     app: { name: string; };
     status: { text: string; };
};



function HistoryTable() {
     const data: Row[] = [
          {
               id: 1,
               status: { text: "v1.4.2" },
               app: { name: "Aug 10, 2025" },
               date: "Improved GPU launch speed, fixed storage bug",
          },
          {
               id: 2,
               status: { text: "v1.4.1" },
               app: { name: "Jul 28, 2025" },
               date: "Added Llama 2 model support, minor UI fixes",
          },
          {
               id: 3,
               status: { text: "v1.4.0" },
               app: { name: "Jul 15, 2025" },
               date: "Introduced GPU marketplace filter by VRAM",
          },
     ];
     return (
          <div>
               <div className="w-full my-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="lg:w-full w-[991px] border-collapse  overflow-hidden">
                         <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1500 text-left text-gray-1200 text-sm font-medium">
                              <tr>
                                   <th className="px-2 pl-6 py-3 font-medium dark:border-white/[10%] border-b border-gray-1100">
                                        Version
                                   </th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Release Date</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Changes Summary</th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.map((item) => (
                                   <tr key={item.id} className="">
                                        <td className="py-[14px] pl-6 px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center dark:bg-black-1000 dark:border-white/[10%] gap-1 text-xs font-semibold py-0.5 px-2 rounded-lg border border-gray-1100 w-fit">
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
                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-2.5">
                                                  {item.app.name}
                                             </div>
                                        </td>
                                        <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                             <div className="flex items-center gap-2.5">
                                                  {item.date}
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

export default HistoryTable
