import React from 'react'
import Welcome from './Welcome.component'
import SearchBar from './SearchBar'
import ControlPanel from './ControlPanel'
import Thermostat from './Thermostat'

export default function TemperatureDashboard() {
  return (
    <div className='hidden lg:block'>
      <SearchBar />
      <div>
        <Welcome /> 
      </div>
      <div>
      <ControlPanel />
      </div>
      <div>
      <Thermostat />
      </div>
    </div>
  )
}
