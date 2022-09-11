import React from 'react'
import Settings from './Settings'
import MyDevices from './MyDevices'
import Users from './Users'
import PowerGraph from './PowerGraph'


export default function Devices() {
  return (
    <div className=' hidden lg:block'>
      <div>
         <Settings/>
      </div>
     
      <div>
          <MyDevices />
      </div>

      <div>
        <Users />
      </div>

      <div>
        <PowerGraph />
      </div>
    </div>
  )
}
