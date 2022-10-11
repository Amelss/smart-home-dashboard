import React, { useState } from 'react'
import { CircleSlider } from "react-circle-slider";
import './controlPanel.css'

export default function Thermostat() {

  const [sliderValue, setSliderValue] = useState("25")

  const handleValue = (q) => {
    if (q === sliderValue) return;
    console.log(q);

    setSliderValue(q);
  };
  

  return (
    <div className='font-mulish  bg-white border border-2-barelyGray rounded-2xl pt-2 pr-3 pl-4 pb-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src="/assets/verve-images/livingroom.png" alt="" className='w-8'/>
          <div><h4 className='text-xs pl-3'>Living Room Temperature</h4></div>
        </div>
        
        <div>
          <div className="flex justify-between mt-5 ">
            <span className="text-[10px] font-medium text-gray-900 dark:text-gray-300 mt-[1px] pr-1" id="btn-text"> ON </span>
            <label htmlFor="living-room-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" id="living-room-toggle" className="sr-only peer"/>
                <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-navPurple">
                </div>
            </label>
          </div>
        </div>
        
      </div>
      <div className='circle'>
        <img src="/assets/verve-images/oval.png" alt="" className='mx-auto w-52' />
        <div className='textContainer'>
          {/* <p className='text-3xl'>{sliderValue}<span className='text-3xl font-mulish'>℃</span></p> */}
          <CircleSlider value={sliderValue}
            stepSize={1}
            onChange={(sliderValue) => handleValue(sliderValue)}
            size={225}
            max={100}
            gradientColorFrom="#ec008c"
            gradientColorTo="#fc6767"
            knobRadius={5}
            circleWidth={5}
            progressWidth={5}
            showTooltip={true}
            
            />
        
        </div>
        </div>
        

    </div>
  )
}
