'use client'

type Row = {
     id: number;
     date: string;
     app: { name: string; img: string };
     gpu: string;
     duration: string;
     cost: string;
     status: { text: string; img: string };
};

function GPUSessionTable() {

     const data: Row[] = [
          {
               id: 1,
               date: "Aug 6, 2025",
               app: { name: "diffusion-pipe", img: "images/avatar-1.png" },
               gpu: "RTX 4090",
               duration: "Aug 12, 2025 10:15",
               cost: "$0.40",
               status: { text: "Running", img: "images/Loader.svg" },
          },
          {
               id: 2,
               date: "Aug 6, 2025",
               app: { name: "ComfyUI", img: "images/avatar-2.png" },
               gpu: "A100",
               duration: "Aug 12, 2025 10:15",
               cost: "$0.40",
               status: { text: "Running", img: "images/Loader.svg" },
          },
          {
               id: 3,
               date: "Aug 6, 2025",
               app: { name: "Auto1111 WebUI Forge", img: "images/avatar-3.png" },
               gpu: "V100",
               duration: "Aug 12, 2025 10:15",
               cost: "$0.40",
               status: { text: "Completed", img: "images/CircleCheck.svg" },
          },
     ];


     return (
          <>
               <div className="w-full my-4 overflow-x-auto dark:border-white/[10%] border border-gray-1100  rounded-lg">
                    <table className="lg:w-full w-[991px] border-collapse  overflow-hidden">
                         <thead className="bg-gray-1000 dark:bg-black-1200 dark:text-gray-1400 text-left text-black-1000 text-sm font-medium">
                              <tr>
                                   <th className="px-2 py-3 pl-6 dark:border-white/[10%] border-b border-gray-1100 font-medium">GPU</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">AI Model</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Region</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Start Time</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Cost</th>
                                   <th className="px-2 py-3 dark:border-white/[10%] border-b border-gray-1100 font-medium">Status</th>
                              </tr>
                         </thead>
                         <tbody className="text-sm text-black-1000 dark:text-gray-1400">
                              {data.length > 0 ? (
                                   data.map((item) => (
                                        <tr key={item.id}>
                                             <td className="py-[14px] pl-6 px-2 dark:border-white/[10%] border-b border-gray-200">
                                                  <div className="text-xs font-semibold py-0.5 dark:border-white/[10%] px-2 rounded-lg border border-gray-1100 w-fit">
                                                       {item.gpu}
                                                  </div>
                                             </td>

                                             <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                  <div className="flex items-center gap-2.5">
                                                       <img src={item.app.img} alt="" className="w-6 h-6 rounded-full" />
                                                       {item.app.name}
                                                  </div>
                                             </td>

                                             <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                  {item.date}
                                             </td>

                                             <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                  {item.duration}
                                             </td>

                                             <td className="py-[14px] px-2 dark:border-white/[10%] border-b border-gray-200">
                                                  {item.cost}
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
                                   ))
                              ) : (
                                   <tr>
                                        <td colSpan={6}>
                                             <div className="text-center max-w-[400px] mx-auto py-10">
                                                  <img
                                                       src="images/no-found.svg"
                                                       className="inline-block dark:invert-[1]"
                                                       alt=""
                                                  />
                                                  <h4 className="text-base font-semibold mt-6 mb-1 leading-6 text-black-1000 dark:text-gray-1400">
                                                       No active or past GPU sessions yet
                                                  </h4>
                                                  <p className="text-sm font-normal leading-5 text-gray-1200 dark:text-gray-1500">
                                                       When you launch an AI app, your GPU usage will appear here with
                                                       details like model, region, cost, and status.
                                                  </p>
                                             </div>
                                        </td>
                                   </tr>
                              )}
                         </tbody>

                    </table>
               </div>
          </>
     )
}

export default GPUSessionTable
