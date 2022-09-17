import React from 'react'
import Navigation from '../Navigation/Navigation.component'
import TemperatureDashboard from '../TemperaturePanel/TemperatureDashboard.component'
import Devices from '../DevicesPanel/Devices.component'



export default function Dashboard() {
  return (
    <div className="hidden lg:flex pl-3 pr-3 bg-dashboardBackground xl:rounded-3xl xl:pb-3 xl:pt-3">
      
         <Navigation /> 
          <div className="pl-10 grid grid-cols-2 w-full pt-3 pb-3">
             <div>
              <TemperatureDashboard />
               </div>
                 <div className="pl-10 xl:pl-28">
                     <Devices />
                    </div>
                  </div>
      
       
      </div>
   
  );
}
