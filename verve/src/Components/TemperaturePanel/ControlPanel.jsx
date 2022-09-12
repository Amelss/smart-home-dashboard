import React from 'react'

export default function ControlPanel() {
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
            <select name="rooms" id="rooms" className='ml-4 bg-search rounded-lg pt-1 pl-1 pb-1 pr-5 text-xs'>
              <option value="living-room">Living Room</option>
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
              <option value="reception">Reception</option>
            </select>
          </div>
        </div>
      </div>
      ControlPanel
    </div>
  );
}
