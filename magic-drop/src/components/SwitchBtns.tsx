import { Switch } from '@headlessui/react'
import { useState } from 'react'

function SwitchBtns() {
     const [enabledSwitches, setEnabledSwitches] = useState([false, false, false, false])

     const switches = [
          { bg: 'bg-yellow-1000/20', border: 'border-yellow-1000', knob: 'bg-yellow-1000', label: '#DDC916 - FFE500' },
          { bg: 'bg-blue-1000/20', border: 'border-blue-1000', knob: 'bg-blue-1000', label: '#074ACB - 1161FA' },
          { bg: 'bg-green-1000/20', border: 'border-green-1000', knob: 'bg-green-1000', label: '#85DD16 - 8FFF00' },
          { bg: 'bg-gray-1000/20', border: 'border-gray-1000', knob: 'bg-gray-1000', label: '#323243 - 3D3D52' },
     ]

     const handleSwitchChange = (index) => {
          const updated = [...enabledSwitches]
          updated[index] = !updated[index]
          setEnabledSwitches(updated)
     }

     return (
          <div className='flex md:flex-nowrap flex-wrap gap-5'>
               {switches.map((sw, index) => (
                    <div key={index}>
                         <Switch
                              checked={enabledSwitches[index]}
                              onChange={() => handleSwitchChange(index)}
                              className={`group relative border flex h-12 w-24 cursor-pointer rounded-xl p-1 ease-in-out focus:outline-none ${sw.bg} ${sw.border}`}
                         >
                              <span
                                   aria-hidden="true"
                                   className={`pointer-events-none inline-block size-9.5 translate-x-0 rounded-lg border shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-11 ${sw.border} ${sw.knob}`}
                              />
                         </Switch>
                         <p className="text-[10px] mt-3 font-gotham font-medium text-white/[10%]">{sw.label}</p>
                    </div>
               ))}
          </div>
     )
}

export default SwitchBtns
