import React from 'react'

export default function MyDevices() {
  return (
    <div className="">
      <div className="flex items-center justify-between p-5">
        <h1 className="tracking-wide">My Devices</h1>
        <div className="flex items-center justify-between">
          <select
            name="device-switch"
            id="device-switch"
            className="border-none rounded-lg h-7 w-16 text-xs pr-0 pt-0 pb-0 bg-search"
          >
            <option value="on">ON</option>
            <option value="off">OFF</option>
          </select>
          <img
            src="/assets/verve-images/arrow.png"
            alt="arrow"
            className="ml-5 bg-search  rounded-lg pb-2 pt-2 pl-[10px] pr-[10px] "
          />
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto pl-2 pr-2 ">
        <div className="device-purple-yellow-padding">
          <div className="bg-navPurple h-[90px] p-2  rounded-2xl ">
            <div className="device-controls">
              <div>
                <img
                  src="/assets/verve-images/white-fridge.png"
                  alt="fridge"
                  className="w-4 -mt-3"
                />
              </div>
              <div className="flex">
                <span
                  class="text-[10px] h-0 font-medium text-white dark:text-gray-300 pr-1 mt-[1px]"
                  id="btn-text"
                >
                  ON
                </span>
                <label
                  for="toggle-fridge-2"
                  class="inline-flex relative items-center mb-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="toggle-fridge-2"
                    class="sr-only peer"
                  />
                  <div class="w-7 h-4  bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-navPurple after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-navPurple after:border-na after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
            <p className="text-white text-xs tracking-wider font-bold mt-4 pl-1">
              Refrigerator
            </p>
          </div>
        </div>

        <div className="device-purple-yellow-padding">
          <div className="bg-hotYellow h-[90px]  p-2  rounded-2xl">
            <div className="device-controls">
              <div>
                <img
                  src="/assets/verve-images/wifi.png"
                  alt="wifi"
                  className="w-5 -mt-4"
                />
              </div>
              <div className="flex">
                <span
                  class="text-[10px] h-0 font-medium text-white dark:text-gray-300 pr-1 mt-[1px]"
                  id="btn-text"
                >
                  ON
                </span>
                <label
                  for="toggle-router"
                  class="inline-flex relative items-center mb-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="toggle-router"
                    class="sr-only peer"
                  />
                  <div class="w-7 h-4  bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-hotYellow after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-hotYellow after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
            <p className="text-white text-xs tracking-wider font-bold mt-4">
              Router
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto pl-2 pr-2 ">
        <div className="device-yellow-blue-padding">
          <div className="bg-lightOrange h-[90px] p-2  rounded-2xl ">
            <div className="device-controls">
              <div>
                <img
                  src="/assets/verve-images/music.png"
                  alt="music"
                  className="w-5 -mt-4"
                />
              </div>
              <div className="flex">
                <span
                  class="text-[10px] h-0 font-medium text-white dark:text-gray-300 pr-1 mt-[1px]"
                  id="btn-text"
                >
                  ON
                </span>
                <label
                  for="toggle-music"
                  class="inline-flex relative items-center mb-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="toggle-music"
                    class="sr-only peer"
                  />
                  <div class="w-7 h-4  bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-lightOrange after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-lightOrange after:border-na after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
            <p className="text-white text-xs tracking-wider font-bold mt-4 pl-1">
              Music System
            </p>
          </div>
        </div>

        <div className="device-yellow-blue-padding">
          <div className="bg-lightBlue h-[90px] p-2  rounded-2xl">
            <div className="device-controls">
              <div>
                <img
                  src="/assets/verve-images/lamp.png"
                  alt="lamp"
                  className="w-5 -mt-3"
                />
              </div>
              <div className="flex">
                <span
                  class="text-[10px] h-0 font-medium text-white dark:text-gray-300 pr-1 mt-[1px]"
                  id="btn-text"
                >
                  ON
                </span>
                <label
                  for="toggle-lamp"
                  class="inline-flex relative items-center mb-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="toggle-lamp"
                    class="sr-only peer"
                  />
                  <div class="w-7 h-4  bg-gray-200 peer-focus:outline-none peer-focus:ring-none rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-lightBlue after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-lightBlue after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
            <p className="text-white text-xs tracking-wider font-bold mt-4 pl-1">
              Lamps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
