import React from 'react'
import { useState } from 'react';
import { current } from 'tailwindcss/colors';
import './controlPanel.css'

export default function ControlPanel() {

  const [toggleButton, setToggleButton] = useState(false)
  const [on, setOn] = useState('')
  const [toggleLights, setToggleLights] = useState(false)
  const [lightsOn, setLightsOn] = useState('')

  
//   const toggleStyles = {
//     background: '#7A40F2',
//     color: '#FFFFFF',
//     boxShadow: '1px 2px 9px #7A40F2',
//     border: '1px solid #E6E5F2'

    
// }

  const setStyle = () => {
    
    setToggleButton(current => !current)
    setOn(current => !current)
  }

  const setLights = () => {
    setToggleLights((current) => !current);
    setLightsOn((current) => !current);
  };

  
  
  
  // const setStyle = () => {
  //   console.log('i am clicked')

  //   setToggleButton('toggleOnStyle')
  // }

 

  return (
    <div className="font-mulish">
      <div className="flex items-center justify-between">
        <h2 className='font-bold text-lg tracking-wide'>Scarlett's Home</h2>
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="/assets/verve-images/waterdrop.png"
              alt="waterdrop"
              className="w-3"
            />
            <p className="ml-1 font-lato text-xs font-bold">35%</p>
          </div>

          <div className="flex items-center ml-4">
            <img
              src="/assets/verve-images/tiny-thermometer.png"
              alt="thermometer"
              className="w-3"
            />
            <p className="ml-1 font-lato text-xs font-bold ">
              15<span className="font-lato text-xs">&#8451;</span>
            </p>
          </div>

          <div>
            <select name="rooms" id="rooms" className='ml-4 bg-search rounded-lg pt-1 pl-1 pb-1 pr-7 text-xs border-none'>
              <option value="living-room">Living Room</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
              <option value="reception">Reception</option>
            </select>
          </div>
        </div>
      </div>


      <div className="mt-5 mb-3 flex items-center">

        <div className='w-32 bg-white p-3 rounded-xl h-24 border border-2-barelyGray'>
          <div className='flex justify-between'>
            <span className="text-[10px] font-medium text-gray-900 dark:text-gray-300 mt-[1px]" id='btn-text'>ON</span>
              <label htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" id="small-toggle" className="sr-only peer"/>
                  <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500">
                  </div> 
              </label>
          </div>
          <img src="/assets/verve-images/fridge.png" alt="fridge" className='w-4 -mt-3' />
          <p className='text-xs text-navPurple font-bold pt-2'>Refrigerator</p>
        </div>
        
        <div className='w-32 bg-navPurple p-3 rounded-xl h-24 border border-2-barelyGray ml-3'>
          <div className='flex justify-between'>
            <span className="text-[10px] font-medium text-gray-900 dark:text-gray-300 mt-[1px]" id='btn-text'>ON</span>
              <label htmlFor="small-toggle-1" className="inline-flex relative items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" id="small-toggle-1" className="sr-only peer" />
                  <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-navPurple after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-navPurple after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-white">
                  </div> 
              </label>
          </div>
          <img src="/assets/verve-images/lightning.png" alt="lightning" className='w-3 -mt-3' />
          <p className='text-xs text-white font-bold pt-2'>Temperature</p>
        </div>

        <div style={{backgroundColor: toggleButton ? '#7A40F2 ': '#FFFFFF', color: toggleButton ? '#9897AD' : '#FF0000', transition: toggleButton ? '' : 'ease-in-out', boxShadow: toggleButton ? '1px 2px 9px #7A40F2' : '', border: toggleButton ? 'none' : '1px solid #E6E5F2' 
}}
 className='w-32 p-3 rounded-xl h-24 border border-2-barelyGray ml-3'>
          <div className='flex justify-between'>
            <span className="text-[10px] font-medium text-gray-900 dark:text-gray-300 mt-[1px]" id='btn-text'>{on ? 'ON': 'OFF'}</span>
              <label htmlFor="small-toggle-2" className="inline-flex relative items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" id="small-toggle-2" className="sr-only peer"   />
                  <div onClick={setStyle} className="w-7 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-navPurple">
                  </div> 
              </label>
          </div>
          <img src="/assets/verve-images/aircon.png" alt="aircon" className='w-6 -mt-3 mb-2' />
          <p className=' text-[10px] xl:text-xs text-lightGrey font-bold pt-2'>Air Conditioner</p>
        </div>

        <div style={{backgroundColor: toggleLights ? '#7A40F2 ': '#FFFFFF', color: toggleLights ? '#9897AD' : '#FF0000', transition: toggleLights ? '' : 'ease-in-out', boxShadow: toggleLights ? '1px 2px 9px #7A40F2' : '', border: toggleLights ? 'none' : '1px solid #E6E5F2' 
}} className='w-32 p-3 rounded-xl h-24 border border-2-barelyGray ml-3'>
          <div className='flex justify-between'>
            <span className="text-[10px] font-medium text-gray-900 dark:text-gray-300 mt-[1px]" id='btn-text'> {lightsOn ? 'ON' : 'OFF'}</span>
              <label htmlFor="small-toggle-3" className="inline-flex relative items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" id="small-toggle-3" className="sr-only peer" />
                  <div onClick={setLights}  className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-navPurple">
                  </div>  
              </label>
          </div>
          <img src="/assets/verve-images/bulb.png" alt="bulb" className='w-5 -mt-3' />
          <p className='text-xs text-lightGrey font-bold pt-2'>Lights</p>
        </div>

      </div>
      


     
    </div>
  );
}
