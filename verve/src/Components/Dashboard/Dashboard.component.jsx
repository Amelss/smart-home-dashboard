import React from 'react'
import Navigation from '../Navigation/Navigation.component'
import TemperatureDashboard from '../TemperaturePanel/TemperatureDashboard.component'
import Devices from '../DevicesPanel/Devices.component'


export default function Dashboard() {
  return (
    <div className='grid grid-cols-3 place-items-center'>
      <Navigation />
      <TemperatureDashboard />
      <Devices />
    </div>
    
  )
}
