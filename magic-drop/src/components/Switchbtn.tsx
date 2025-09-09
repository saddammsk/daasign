import { Switch } from '@headlessui/react'
import { useState } from 'react'
function Switchbtn() {
     const [enabled, setEnabled] = useState(false)

     return (
          <Switch
               checked={enabled}
               onChange={setEnabled}
               className="group inline-flex h-6 w-11 items-center rounded-md bg-blue-1300 transition data-checked:bg-blue-1300"
          >
               <span className="size-4 translate-x-1 rounded-md bg-yellow-1000 transition group-data-checked:translate-x-6" />
          </Switch>
     )
}

export default Switchbtn
